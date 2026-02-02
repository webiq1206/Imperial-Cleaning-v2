import { FeatureStats } from "@/components/shared";
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
  <FeatureStats
   features={features}
   columns={3}
   layout="grid"
  />
 );
}
