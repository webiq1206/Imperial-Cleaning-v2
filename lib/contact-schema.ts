import { z } from 'zod';
export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(120, 'Please use 120 characters or fewer.'),
  company: z.string().trim().max(160, 'Please use 160 characters or fewer.').optional().default(''),
  email: z.string().trim().email('Please enter a valid email address.').max(254),
  phone: z.string().trim().max(32, 'Please enter a 10-digit phone number.').refine(value => { const digits = value.replace(/\D/g, ''); return /^[+\d\s().-]+$/.test(value) && (digits.length === 10 || (digits.length === 11 && digits.startsWith('1'))); }, 'Please enter a 10-digit phone number.'),
  service: z.enum(['commercial', 'construction', 'both'], { errorMap: () => ({ message: 'Please choose a cleaning service.' }) }),
  location: z.string().trim().min(2, 'Please enter the city and state.').max(180, 'Please use 180 characters or fewer.'),
  message: z.string().trim().max(5000, 'Please keep your notes under 5,000 characters.').optional().default(''),
  website: z.string().max(0).optional().default(''),
});
export type ContactData = z.infer<typeof contactSchema>;
