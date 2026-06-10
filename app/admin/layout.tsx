import type { Metadata } from "next";

// Server layout for everything under /admin: hard noindex via meta robots.
// robots.txt already disallows /admin/, but a disallow alone does not prevent
// indexing of a URL that gets linked externally - the meta tag does.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
