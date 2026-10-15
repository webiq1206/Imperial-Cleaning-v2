import type { ContactData } from './contact-schema';

// Unsent drafts stay in this tab, expire after 30 minutes, and never enter analytics.
export const QUOTE_DRAFT_KEY = 'imperial:quote-draft:v1';
export const QUOTE_DRAFT_TTL = 30 * 60 * 1000;
const limits = { name: 120, email: 254, phone: 32, location: 180, company: 160, message: 5000 } as const;
export function readQuoteDraft(storage: Storage, now = Date.now()) {
  try {
    const draft = JSON.parse(storage.getItem(QUOTE_DRAFT_KEY) || 'null');
    if (!draft || !Number.isFinite(draft.updated) || now - draft.updated > QUOTE_DRAFT_TTL || draft.updated > now || ![1, 2].includes(draft.step)) {
      storage.removeItem(QUOTE_DRAFT_KEY); return null;
    }
    const values: Partial<ContactData> = {};
    for (const [key, limit] of Object.entries(limits)) {
      const value = draft.values?.[key];
      if (typeof value !== 'string' || value.length > limit) return null;
      values[key as keyof typeof limits] = value;
    }
    if (['commercial', 'construction', 'both'].includes(draft.values.service)) values.service = draft.values.service;
    return { values, step: draft.step as number };
  } catch { return null; }
}
export function saveQuoteDraft(storage: Storage, values: Partial<ContactData>, step: number) {
  try {
    const safe = Object.fromEntries(Object.keys(limits).map(key => [key, values[key as keyof ContactData] || '']));
    storage.setItem(QUOTE_DRAFT_KEY, JSON.stringify({ updated: Date.now(), step, values: { ...safe, service: values.service } }));
  } catch { /* Blocked storage must not interrupt the form. */ }
}
export function clearQuoteDraft(storage: Storage) {
  try { storage.removeItem(QUOTE_DRAFT_KEY); } catch { /* Storage is optional. */ }
}
