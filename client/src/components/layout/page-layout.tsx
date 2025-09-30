import Header from "./header";
import Footer from "./footer";
import StickyContacts from "@/components/sticky-contacts";

interface PageLayoutProps {
 children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
 return (
  <div className="min-h-screen bg-background">
   <Header />
   <StickyContacts />
   {children}
   <Footer />
  </div>
 );
}