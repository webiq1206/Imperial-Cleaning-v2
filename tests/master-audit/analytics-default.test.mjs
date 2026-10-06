import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
/* Owner decision of 2026-10-06: optional analytics default to on (opt-out). These guards keep the
   default and the opt-out, GPC and privacy-policy wording in step. */
const component = readFileSync('components/analytics-consent.tsx', 'utf8');
const policy = readFileSync('app/privacy-policy/page.tsx', 'utf8');
test('a visitor with no saved choice gets analytics on, and a cross-tab reset also returns to on', () => {
  assert.match(component, /runtime\.setConsent\(saved \|\| 'granted'\)/);
  assert.match(component, /runtime\?\.setConsent\(choice \|\| 'granted'\)/);
  assert.doesNotMatch(component, /setConsent\((?:saved|choice) \|\| 'denied'\)/);
});
test('the notice offers a one-click opt-out and still respects Global Privacy Control', () => {
  assert.match(component, /choose\('denied'\)\}>Turn analytics off</);
  assert.match(component, /disabled=\{privacySignal\}>Keep analytics on</);
  assert.match(component, /setPrivacySignal\(runtime\.globalPrivacy\(\)\)/);
});
test('the privacy policy describes the opt-out model and carries the change date', () => {
  assert.match(policy, /unless you turn them off/);
  assert.match(policy, /dateModified: '2026-10-06'/);
  assert.match(policy, /Last updated: October 6, 2026/);
  assert.doesNotMatch(policy, /only after you allow optional analytics/);
});
