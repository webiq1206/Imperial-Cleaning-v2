import { CONTACT_BODY_LIMIT } from './contact-delivery';
import { contactSchema, shortLeadSchema, type ContactData, type ShortLeadData } from './contact-schema';
import { parseLeadAttachment, type LeadAttachment } from './lead-attachment';

export type PreparedContact =
  | { ok: true; intent: 'short'; data: ShortLeadData; attachment?: LeadAttachment }
  | { ok: true; intent: 'quote'; data: ContactData }
  | { ok: false; status: number; error: string; fieldErrors?: Record<string, string> };

function fieldErrors(issues: { path: PropertyKey[]; message: string }[]): Record<string, string> {
  return Object.fromEntries(issues.filter(issue => issue.path[0] !== 'website').map(issue => [String(issue.path[0]), issue.message]));
}

/**
 * A lead is emailed only when the short form or the full quote is complete.
 * Unfinished visits are not staff emails.
 */
export function prepareContactSubmission(value: unknown, bytes: number): PreparedContact {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return { ok: false, status: 400, error: 'The request was not valid. Please check your details and retry.' };
  }
  const record = value as Record<string, unknown>;
  const short = record.intent === 'short';
  const parsedFile = short ? parseLeadAttachment(record.attachment) : null;
  if (parsedFile && !parsedFile.ok) return { ok: false, status: parsedFile.status, error: parsedFile.error };
  if (!short && record.attachment != null && record.attachment !== '') {
    return { ok: false, status: 400, error: 'File attachments are only accepted on the short request form.' };
  }
  const attachment = parsedFile?.ok ? parsedFile.attachment : undefined;
  if (bytes > CONTACT_BODY_LIMIT && !attachment) {
    return { ok: false, status: 413, error: 'Please shorten your project notes and try again.' };
  }
  const fields = { ...record };
  delete fields.attachment;
  if (short) {
    const parsed = shortLeadSchema.safeParse(fields);
    if (!parsed.success) return { ok: false, status: 400, error: 'Please check your contact details and try again.', fieldErrors: fieldErrors(parsed.error.issues) };
    return { ok: true, intent: 'short', data: parsed.data, attachment };
  }
  const parsed = contactSchema.safeParse(fields);
  if (!parsed.success) return { ok: false, status: 400, error: 'Please check your contact details and try again.', fieldErrors: fieldErrors(parsed.error.issues) };
  return { ok: true, intent: 'quote', data: parsed.data };
}
