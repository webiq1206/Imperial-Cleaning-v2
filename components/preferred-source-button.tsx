"use client";

import Script from "next/script";

// Google's "Add to Preferred Sources" button.
// https://developers.google.com/search/docs/appearance/preferred-sources
//
// Preferred Sources is a reader-side preference: a person chooses which sites
// they want surfaced more often in Top Stories and AI surfaces. There is no
// application and no approval, and per Google this button is NOT required to
// be eligible - it only saves the reader the trip to the source-preferences
// tool and returns them to where they were on the page.
//
// Two pieces are required: Google's publisher.js, and a div carrying the
// google-add-preferred-source-btn attribute, which that script hydrates.
//
// Deliberately lazyOnload. This is a third-party script on content pages that
// are the site's best-performing organic assets; it must not compete with LCP.
// next/script dedupes by id, so rendering this on several routes still loads
// the script once.
//
// data-theme is pinned dark because the site has no theme switcher - globals.css
// defines a single pure-black palette on :root. If a light theme is ever added,
// this needs to follow it.

export default function PreferredSourceButton({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Script
        id="google-preferred-sources"
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="lazyOnload"
      />
      {/* Google's script replaces this div's contents. It renders nothing until
          the script loads, so it must not be given borders or padding of its
          own - an empty bordered box is worse than no button. */}
      <div google-add-preferred-source-btn="" data-theme="dark" data-lang="en" />
    </div>
  );
}
