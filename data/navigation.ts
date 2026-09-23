import { constructionPhases, constructionResources } from "./service-priorities";

/** Editorial navigation order follows the owner's primary service, not page count. */
export const navigation = [
  { id: "construction", label: "Construction cleanup", links: [
    { label: "Construction cleaning services", href: "/construction-cleaning", detail: "Cleanup for commercial builds and renovations" },
    ...constructionPhases.map(phase => ({ label: phase.label, href: phase.href })),
    ...constructionResources.slice(0, 2).map(resource => ({ label: resource.label, href: resource.href })),
  ] },
  { id: "commercial", label: "Commercial cleaning", links: [
    { label: "Commercial cleaning services", href: "/commercial-cleaning", detail: "Recurring cleaning for offices and business facilities" },
    { label: "Janitorial services", href: "/janitorial-services" },
    { label: "Office cleaning", href: "/office-cleaning" },
    { label: "Day porter services", href: "/day-porter-services" },
    { label: "Office buildings", href: "/office-building-cleaning" },
    { label: "Medical offices", href: "/medical-office-cleaning" },
    { label: "Schools", href: "/school-cleaning-services" },
    { label: "Restaurants", href: "/restaurant-cleaning-services" },
    { label: "Car dealerships", href: "/car-dealership-cleaning" },
    { label: "Warehouses", href: "/warehouse-cleaning" },
    { label: "Industrial cleaning", href: "/industrial-cleaning" },
    { label: "Manufacturing facilities", href: "/manufacturing-facility-cleaning" },
    { label: "Commercial cleaning costs", href: "/commercial-cleaning-cost" },
  ] },
  { id: "areas", label: "Service areas", links: [
    { label: "Idaho", href: "/service-areas/idaho", detail: "View construction and commercial coverage" },
    { label: "Utah", href: "/service-areas/utah", detail: "View construction and commercial coverage" },
    { label: "Find your city", href: "/service-areas" },
  ] },
  { id: "company", label: "Our company", links: [
    { label: "About Imperial", href: "/about" },
    { label: "Customer reviews", href: "/reviews" },
    { label: "Cleaning guides", href: "/resources" },
    { label: "Contact us", href: "/contact" },
  ] },
];
