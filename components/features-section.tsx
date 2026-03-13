import Link from "next/link";
import FeatureStats from "@/components/shared/stats/feature-stats";
import { Shield, Clock, Award } from "lucide-react";

export default function FeaturesSection() {
 const features = [
  {
   title: "Licensed & Insured",
   description: "Substantial liability insurance and comprehensive bonding provides complete peace of mind for every commercial cleaning project.",
   icon: Shield
  },
  {
   title: "24/7 Service Available", 
   description: "Around-the-clock availability throughout our Idaho and Utah service areas. Flexible scheduling and responsive service for all cleanup needs across both states.",
   icon: Clock
  },
  {
   title: "Certified Quality Standards",
   description: "100% satisfaction guarantee backed by industry certification and multi-state compliance. Professional services that exceed expectations with documented quality assurance protocols.",
   icon: Award
  }
 ];

 return (
  <div>
   <FeatureStats
    features={features}
    columns={3}
    layout="grid"
   />
   <div className="max-w-4xl mx-auto px-6 pb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
    <Link href="/construction-cleaning" className="hover:text-primary transition-colors">Construction Cleaning Services</Link>
    <Link href="/commercial-cleaning" className="hover:text-primary transition-colors">Commercial Cleaning Services</Link>
    <Link href="/service-areas/idaho" className="hover:text-primary transition-colors">Idaho Service Areas</Link>
    <Link href="/service-areas/utah" className="hover:text-primary transition-colors">Utah Service Areas</Link>
   </div>
  </div>
 );
}
