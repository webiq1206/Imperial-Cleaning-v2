import Header from "./header";
import Footer from "./footer";
import StickyQuoteButton from "@/components/sticky-quote-button";

interface PageLayoutProps {
 children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
 return (
  <div className="min-h-screen bg-background">
   <Header />
   <StickyQuoteButton />
   {children}
   <Footer />
  </div>
 );
}