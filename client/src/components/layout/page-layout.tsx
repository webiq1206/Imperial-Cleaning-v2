import Header from "./header";
import Footer from "./footer";
import StickyContacts from "@/components/sticky-contacts";
import StickyQuoteButton from "@/components/sticky-quote-button";

interface PageLayoutProps {
 children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
 return (
  <div className="min-h-screen bg-background">
   <Header />
   <StickyContacts />
   <StickyQuoteButton />
   {children}
   <Footer />
  </div>
 );
}