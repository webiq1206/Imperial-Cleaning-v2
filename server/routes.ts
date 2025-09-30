import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { sendEmail, createContactNotificationEmail } from "./email";
import { generateSitemap, getSitemapStats } from "./sitemap";

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.enum(["construction", "commercial", "both"]),
  location: z.string().min(2),
  message: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContact(validatedData);
      
      // Log for monitoring
      console.log("New contact submission:", {
        id: contact.id,
        email: contact.email,
        service: contact.service,
        location: contact.location
      });

      // Send email notification (non-blocking)
      try {
        const emailTemplate = createContactNotificationEmail(contact);
        await sendEmail({
          to: "service@imperialcleaninginc.com", // Business email
          from: "notifications@imperialcleaninginc.com", // From address (will be configured in Resend)
          subject: emailTemplate.subject,
          html: emailTemplate.html,
          text: emailTemplate.text
        });
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error("Failed to send email notification:", emailError);
      }
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts endpoint
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Get specific contact endpoint
  app.get("/api/contact/:id", async (req, res) => {
    try {
      const contact = await storage.getContact(req.params.id);
      if (contact) {
        res.json(contact);
      } else {
        res.status(404).json({ 
          success: false, 
          message: "Contact not found" 
        });
      }
    } catch (error) {
      console.error("Error fetching contact:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Sitemap route
  app.get("/sitemap.xml", (req, res) => {
    try {
      const sitemap = generateSitemap();
      res.setHeader('Content-Type', 'application/xml');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
      res.send(sitemap);
    } catch (error) {
      console.error("Sitemap generation error:", error);
      res.status(500).json({ error: "Failed to generate sitemap" });
    }
  });

  // Sitemap stats route (for monitoring)
  app.get("/api/sitemap-stats", (req, res) => {
    try {
      const stats = getSitemapStats();
      res.json(stats);
    } catch (error) {
      console.error("Sitemap stats error:", error);
      res.status(500).json({ error: "Failed to get sitemap stats" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
