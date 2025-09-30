import { Resend } from 'resend';

// Initialize Resend service with error handling
let resend: Resend | null = null;

try {
  if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
    console.log('Resend email service initialized');
  } else {
    console.log('RESEND_API_KEY not found - email notifications disabled');
  }
} catch (error) {
  console.warn('Failed to initialize Resend:', (error as Error).message);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!resend) {
    console.log('Email service not available - would send:', params.subject);
    return false;
  }

  try {
    await resend.emails.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log(`Email sent successfully to ${params.to}`);
    return true;
  } catch (error) {
    console.error('Resend email error:', error);
    return false;
  }
}

// Email templates for contact form notifications
export function createContactNotificationEmail(contact: any) {
  const subject = `New Contact Form Submission - ${contact.service}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #FF7BBF, #FFB347); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Imperial Cleaning Inc</h1>
        <p style="color: white; margin: 5px 0;">New Contact Form Submission</p>
      </div>
      
      <div style="padding: 30px; background: #f9f9f9;">
        <h2 style="color: #333; margin-bottom: 20px;">Contact Details</h2>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>Name:</strong> ${contact.name}</p>
          ${contact.company ? `<p><strong>Company:</strong> ${contact.company}</p>` : ''}
          <p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>
          <p><strong>Service:</strong> ${contact.service}</p>
          <p><strong>Location:</strong> ${contact.location}</p>
          ${contact.message ? `<p><strong>Message:</strong><br>${contact.message}</p>` : ''}
          <p><strong>Submitted:</strong> ${new Date(contact.createdAt).toLocaleString()}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${contact.email}" style="background: #FF7BBF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to Lead</a>
          <a href="tel:${contact.phone}" style="background: #FFB347; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-left: 10px;">Call Lead</a>
        </div>
      </div>
      
      <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
        <p>Imperial Cleaning Inc - Professional Cleaning Services</p>
        <p>Idaho & Utah | Commercial & Construction Cleaning</p>
      </div>
    </div>
  `;

  const text = `
New Contact Form Submission - Imperial Cleaning Inc

Contact Details:
Name: ${contact.name}
${contact.company ? `Company: ${contact.company}` : ''}
Email: ${contact.email}
Phone: ${contact.phone}
Service: ${contact.service}
Location: ${contact.location}
${contact.message ? `Message: ${contact.message}` : ''}
Submitted: ${new Date(contact.createdAt).toLocaleString()}

Reply to this lead:
Email: ${contact.email}
Phone: ${contact.phone}
  `;

  return { subject, html, text };
}
