import { Quote } from "lucide-react";
import { CaseStudyTestimonialProps } from "../types";

export default function CaseStudyTestimonial({
 testimonial,
 compact = false,
 showBorder = true,
 animationDelay = 0,
 className = ""
}: CaseStudyTestimonialProps) {
 
 const getContainerClasses = () => {
  const baseClasses = "group transition-all duration-300";
  
  if (compact) {
   return `${baseClasses} p-4 ${showBorder ? 'border-l-4 border-primary/30 bg-primary/5' : ''}`;
  }
  
  return `${baseClasses} glass-card-elevated sophisticated-glow p-6 lg:p-8 rounded-lg hover-lift-gentle ${showBorder ? 'border border-border/30' : ''}`;
 };

 return (
  <div 
   className={`${getContainerClasses()} ${className}`}
   style={{ animationDelay: `${animationDelay}ms` }}
   data-testid="case-study-testimonial"
  >
   {/* Quote Icon */}
   {!compact && (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
     <Quote className="w-5 h-5 text-primary" />
    </div>
   )}

   {/* Quote */}
   <blockquote 
    className={`${compact ? 'text-sm' : 'text-base lg:text-lg'} leading-relaxed text-foreground ${compact ? 'mb-3' : 'mb-6'} ${compact ? 'italic' : ''}`}
    data-testid="case-study-quote"
   >
    {compact ? (
     <span className="text-primary mr-1">"</span>
    ) : (
     '"'
    )}
    {testimonial.quote}
    {compact ? (
     <span className="text-primary ml-1">"</span>
    ) : (
     '"'
    )}
   </blockquote>

   {/* Author Information */}
   <div className={`${compact ? 'text-left' : 'flex items-center justify-between'}`}>
    <div className="flex-1">
     <div 
      className={` text-foreground ${compact ? 'text-sm' : 'text-base'} mb-1`}
      data-testid="case-study-author-name"
     >
      {testimonial.author}
     </div>
     <div 
      className={`text-muted-foreground ${compact ? 'text-xs' : 'text-sm'}`}
      data-testid="case-study-author-position"
     >
      {testimonial.position}
      {testimonial.company && (
       <>
        {compact ? ' • ' : <br />}
        <span className={compact ? '' : ''}>
         {testimonial.company}
        </span>
       </>
      )}
     </div>
    </div>

    {/* Optional decorative element for non-compact version */}
    {!compact && (
     <div className="flex-shrink-0 ml-4">
      <div className="w-12 h-12 rounded-full gradient-bg-br flex items-center justify-center">
       <span className="text-sm text-black">
        {testimonial.author.split(' ').map(n => n[0]).join('')}
       </span>
      </div>
     </div>
    )}
   </div>

   {/* Optional verification badge */}
   {!compact && (
    <div className="mt-4 pt-4 border-t border-border/20">
     <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      <span>Verified Client Review</span>
     </div>
    </div>
   )}
  </div>
 );
}