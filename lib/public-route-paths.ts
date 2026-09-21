/** Public routes from the September 21 inventory. Reconcile this allowlist whenever routes change. */
import generatedPaths from '../data/public-routes.generated.json';
export const publicRoutePaths: string[] = generatedPaths;
const paths = new Set(publicRoutePaths);
export function safeAnalyticsPath(value: string): string | null {
  try { const url = new URL(value, 'https://imperialcleaninginc.com'); if (url.hostname !== 'imperialcleaninginc.com' && url.hostname !== 'www.imperialcleaninginc.com') return null; const path = url.pathname.replace(/\/$/, '') || '/'; return paths.has(path) ? path : null; } catch { return null; }
}
