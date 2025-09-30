import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
 name: string;
 href?: string;
}

interface BreadcrumbsProps {
 items: BreadcrumbItem[];
 className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
 return (
  <nav 
   aria-label="Breadcrumb navigation" 
   className={`flex items-center text-sm text-muted-foreground ${className}`}
   data-testid="breadcrumbs"
  >
   <ol className="flex items-center space-x-2">
    {/* Home link */}
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
      <li key={index} className="flex items-center">
       <ChevronRight className="w-4 h-4 mx-3 text-muted-foreground/50" />
       {isLast ? (
        <span 
         className=" text-foreground" 
         aria-current="page"
         data-testid={`breadcrumb-current`}
        >
         {item.name}
        </span>
       ) : (
        <Link 
         href={item.href || "#"}
         className="hover:text-foreground transition-colors duration-200"
         data-testid={`breadcrumb-${index}`}
        >
         {item.name}
        </Link>
       )}
      </li>
     );
    })}
   </ol>
  </nav>
 );
}