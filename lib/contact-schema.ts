import { z } from 'zod';

const nameField = z.string().trim().min(2, 'Please enter your name.').max(120, 'Please use 120 characters or fewer.');
const emailField = z.string().trim().email('Please enter a valid email address.').max(254);
const phoneField = z.string().trim().max(32, 'Please enter a 10-digit phone number.').refine(value => {
  const digits = value.replace(/\D/g, '');
  return /^[+\d\s().-]+$/.test(value) && (digits.length === 10 || (digits.length === 11 && digits.startsWith('1')));
}, 'Please enter a 10-digit phone number.');
const websiteField = z.string().max(0).optional().default('');

export const contactSchema = z.object({
  name: nameField,
  company: z.string().trim().max(160, 'Please use 160 characters or fewer.').optional().default(''),
  email: emailField,
  phone: phoneField,
  service: z.enum(['commercial', 'construction', 'both'], { errorMap: () => ({ message: 'Please choose a cleaning service.' }) }),
  location: z.string().trim().min(2, 'Please enter the city and state.').max(180, 'Please use 180 characters or fewer.'),
  message: z.string().trim().max(5000, 'Please keep your notes under 5,000 characters.').optional().default(''),
  website: websiteField,
});
export type ContactData = z.infer<typeof contactSchema>;

/** One-screen request. Service and location stay optional because the page can already know them. */
export const shortLeadSchema = z.object({
  intent: z.literal('short'),
  name: nameField,
  email: emailField,
  phone: phoneField,
  message: z.string().trim().min(2, 'Please tell us what you need.').max(5000, 'Please keep your note under 5,000 characters.'),
  service: z.enum(['commercial', 'construction', 'both']).optional(),
  location: z.string().trim().max(180, 'Please use 180 characters or fewer.').optional().default(''),
  website: websiteField,
});
export type ShortLeadData = z.infer<typeof shortLeadSchema>;
