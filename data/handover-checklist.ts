export const handoverGroups = [
  { title: 'Before the cleaning visit', items: [
    'Identify the project phase and the rooms or zones included.',
    'Gather the current drawings or area list, finish schedule and milestone dates.',
    'Take current photos of debris, dust, labels or adhesive, finishes and restricted areas.',
    'Confirm trade release timing, access, parking, keys and the authorized site contact.',
    'Record safety, onboarding and required-document requirements.',
  ] },
  { title: 'Agree on the written scope', items: [
    'List the surfaces and areas included in this visit.',
    'State the glass and window tasks included and excluded.',
    'Separate rough-clean, final-clean and touch-up work.',
    'Record supplied utilities and any site-readiness requirements.',
    'Define how additional work and return visits are approved.',
  ] },
  { title: 'Handover review', items: [
    'Check each scoped area against the written agreement.',
    'Record exceptions and areas not ready for cleaning.',
    'Note any damage already present before work.',
    'Identify the person responsible for final review.',
    'Record agreed follow-up items and owners.',
  ] },
  { title: 'Keep the record useful', items: [
    'Attach only permissioned project photos to the private job record.',
    'Record the review date and the scope version.',
    'Confirm any return-visit arrangements in writing.',
    'Share the scope record with the authorized project team.',
    'Keep private client details out of public marketing and analytics.',
  ] },
] as const;
export const handoverItems = handoverGroups.flatMap((group,g) => group.items.map((label,i) => ({id:`handover-${g+1}-${i+1}`,group:group.title,label})));
export function buildHandoverText(selected: readonly string[]): string {
  const checked = new Set(selected.filter(id => handoverItems.some(item => item.id === id)));
  return ['Construction cleaning handover checklist', 'Imperial Cleaning Inc', '',
    'Planning aid. Not a cleaning procedure, safety plan, inspection certification or contractual scope.',
    `${checked.size} of ${handoverItems.length} items checked.`, '',
    ...handoverGroups.flatMap(group => [group.title, ...handoverItems.filter(item => item.group === group.title).map(item => `[${checked.has(item.id)?'x':' '}] ${item.label}`), '']),
    'Updated October 29, 2026. Confirm the scope and follow-up with your project team.',
    'https://imperialcleaninginc.com/resources/construction-cleanup-process-checklist', ''
  ].join('\n');
}
