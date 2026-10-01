"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
 name: string;
 href?: string;
 url?: string;
}

interface BreadcrumbsProps {
 items: BreadcrumbItem[];
 className?: string;
 includeStructuredData?: boolean;
}

export default function Breadcrumbs({ items, className = "", includeStructuredData = true }: BreadcrumbsProps) {
 useEffect(() => {
  if (includeStructuredData) {
   const existingBreadcrumbSchema = document.querySelector('script[data-schema-type="BreadcrumbList"]');
   if (existingBreadcrumbSchema) {
    existingBreadcrumbSchema.remove();
   }

   const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
     {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://imperialcleaninginc.com/"
     },
     ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": item.url || item.href || window.location.href
     }))
    ]
   };

   const script = document.createElement('script');
   script.type = 'application/ld+json';
   script.setAttribute('data-schema-type', 'BreadcrumbList');
   script.textContent = JSON.stringify(breadcrumbSchema);
   document.head.appendChild(script);

   return () => {
    const schemaToRemove = document.querySelector('script[data-schema-type="BreadcrumbList"]');
    if (schemaToRemove) {
     schemaToRemove.remove();
    }
   };
  }
 }, [items, includeStructuredData]);

 return (
  <nav 
   aria-label="Breadcrumb navigation" 
   className={`flex items-center text-sm text-muted-foreground ${className}`}
   data-testid="breadcrumbs"
  >
   <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
    <li>
     <Link 
      href="/" 
      className="flex items-center hover:text-foreground transition-colors duration-200 group"
      data-testid="breadcrumb-home"
      aria-label="Go to homepage"
     >
      <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
      <span className="sr-only">Home</span>
     </Link>
    </li>
    
    {items.map((item, index) => {
     const isLast = index === items.length - 1;
     
     return (
      <li key={index} className="flex items-center whitespace-nowrap">
       <ChevronRight className="w-4 h-4 mx-3 text-muted-foreground/50" />
       {isLast ? (
        <span 
         className=" text-foreground" 
         aria-current="page"
         data-testid={`breadcrumb-current`}
        >
         {item.name}
        </span>
       ) : item.href ? (
        <Link 
         href={item.href}
         className="hover:text-foreground transition-colors duration-200"
         data-testid={`breadcrumb-${index}`}
        >
         {item.name}
        </Link>
       ) : (
        <span 
         className="text-muted-foreground"
         data-testid={`breadcrumb-${index}`}
        >
         {item.name}
        </span>
       )}
      </li>
     );
    })}
   </ol>
  </nav>
 );
}
