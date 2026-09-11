import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  phone: z.string().trim().refine(value => { const digits = value.replace(/\D/g, ""); return digits.length === 10 || (digits.length === 11 && digits.startsWith("1")); }, "Please enter a 10-digit phone number."),
  service: z.enum(["commercial", "construction", "both"], { errorMap: () => ({ message: "Please choose a cleaning service." }) }),
  location: z.string().trim().min(2, "Please enter the city and state.").max(180),
  message: z.string().trim().max(5000, "Please keep your notes under 5,000 characters.").optional().default(""),
  website: z.string().max(0).optional().default(""),
});
export type ContactData = z.infer<typeof contactSchema>;
