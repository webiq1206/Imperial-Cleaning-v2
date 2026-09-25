/** Escape HTML delimiters without changing the underlying structured-data values. */
export function serializeStructuredData(value: Record<string, unknown>): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
