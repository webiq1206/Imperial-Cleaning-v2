import { TestimonialsSection } from "@/components/shared";
import { TestimonialData } from "@/components/shared/types";

export default function TestimonialsSectionWrapper() {
 // TODO(real-data): replace these representative testimonials with verified client
 // reviews (with consent). These are intentionally NOT emitted as Review/AggregateRating
 // JSON-LD anywhere, so no unverifiable ratings are exposed to search engines.
 // The previous `avatar: "/api/placeholder/60/60"` values were removed because that
 // endpoint does not exist and the avatar is not rendered (initials are used instead).
 const testimonials: TestimonialData[] = [
  {
   id: 1,
   content: "Imperial Cleaning transformed our post-construction site into a spotless workspace. Their attention to detail is unmatched, and they completed the job ahead of schedule.",
   author: "Michael T.",
   position: "Project Manager",
   company: "Mountain View Construction",
   location: "Idaho Falls, ID",
   initials: "MT"
  },
  {
   id: 2,
   content: "We've been using Imperial Cleaning for our office maintenance for over two years. Consistent, reliable, and professional service every time.",
   author: "Sarah C.",
   position: "Operations Director", 
   company: "Tech Solutions Utah",
   location: "Salt Lake City, UT",
   initials: "SC"
  },
  {
   id: 3,
   content: "The team at Imperial Cleaning exceeded our expectations. They handled our large commercial facility with precision and care, delivering exceptional results.",
   author: "Robert M.",
   position: "Facilities Manager",
   company: "Logan Manufacturing", 
   location: "Logan, UT",
   initials: "RM"
  },
  {
   id: 4,
   content: "From initial consultation to final cleanup, Imperial Cleaning provided outstanding service. Their expertise in construction cleaning is evident in everything they do.",
   author: "Jennifer W.",
   position: "General Contractor",
   company: "Pocatello Builders",
   location: "Pocatello, ID", 
   initials: "JW"
  },
  {
   id: 5,
   content: "Imperial Cleaning delivers exceptional results every time. Their professional approach and attention to detail make them our go-to cleaning service.",
   author: "David K.",
   position: "Facility Director",
   company: "Boise Medical Center",
   location: "Boise, ID",
   initials: "DK"
  },
  {
   id: 6,
   content: "Outstanding service and reliability. Imperial Cleaning has been instrumental in maintaining our commercial properties to the highest standards.",
   author: "Lisa R.",
   position: "Property Manager",
   company: "Wasatch Commercial Properties",
   location: "Provo, UT",
   initials: "LR"
  }
 ];

 return (
  <TestimonialsSection
   testimonials={testimonials}
   title="Beyond expectations"
   description="Imperial Cleaning is driving remarkable client experiences that enable success stories, empower businesses, and fuel growth across Idaho and Utah."
   autoScroll={true}
   showTrustIndicators={true}
   layout="carousel"
   itemsPerView={{
    mobile: 1,
    tablet: 2,
    desktop: 3
   }}
  />
 );
}
