import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      content: "Imperial Cleaning transformed our post-construction site into a spotless workspace. Their attention to detail is unmatched, and they completed the job ahead of schedule.",
      author: "Michael Thompson",
      position: "Project Manager",
      company: "Mountain View Construction",
      location: "Idaho Falls, ID",
      initials: "MT",
      rating: 5
    },
    {
      id: 2,
      content: "We've been using Imperial Cleaning for our office maintenance for over two years. Consistent, reliable, and professional service every time.",
      author: "Sarah Chen",
      position: "Operations Director",
      company: "Tech Solutions Utah",
      location: "Salt Lake City, UT",
      initials: "SC",
      rating: 5
    },
    {
      id: 3,
      content: "The team at Imperial Cleaning exceeded our expectations. They handled our large commercial facility with precision and care, delivering exceptional results.",
      author: "Robert Martinez",
      position: "Facilities Manager",
      company: "Logan Manufacturing",
      location: "Logan, UT",
      initials: "RM",
      rating: 5
    },
    {
      id: 4,
      content: "From initial consultation to final cleanup, Imperial Cleaning provided outstanding service. Their expertise in construction cleaning is evident in everything they do.",
      author: "Jennifer Walsh",
      position: "General Contractor",
      company: "Pocatello Builders",
      location: "Pocatello, ID",
      initials: "JW",
      rating: 5
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
            <span className="gradient-text-cyan-purple">Client</span>{' '}
            <span className="text-foreground">Success</span>{' '}
            <span className="gradient-text-cyan-purple">Stories</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by construction companies and commercial businesses across Idaho and Utah for professional cleaning solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="resend-card hover-lift"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              {/* Star Rating */}
              <div className="flex mb-6" data-testid={`rating-${testimonial.id}`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star 
                    key={index}
                    className="w-4 h-4 fill-primary text-primary mr-1"
                    data-testid={`star-${testimonial.id}-${index + 1}`}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-foreground text-base lg:text-lg leading-relaxed mb-8 font-normal">
                "{testimonial.content}"
              </blockquote>

              {/* Author Information */}
              <div className="flex items-center">
                {/* Profile Circle with Initials */}
                <div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4 flex-shrink-0"
                  data-testid={`profile-${testimonial.id}`}
                >
                  <span className="text-sm font-semibold text-black">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Author Details */}
                <div className="min-w-0 flex-1">
                  <div 
                    className="font-semibold text-foreground text-sm"
                    data-testid={`author-name-${testimonial.id}`}
                  >
                    {testimonial.author}
                  </div>
                  <div 
                    className="text-muted-foreground text-sm"
                    data-testid={`author-position-${testimonial.id}`}
                  >
                    {testimonial.position}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span 
                      className="text-muted-foreground text-xs font-medium"
                      data-testid={`company-${testimonial.id}`}
                    >
                      {testimonial.company}
                    </span>
                    <span className="hidden sm:inline text-muted-foreground text-xs">•</span>
                    <span 
                      className="text-muted-foreground text-xs"
                      data-testid={`location-${testimonial.id}`}
                    >
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center" data-testid="stat-projects">
              <div className="text-2xl lg:text-3xl font-bold gradient-text-cyan-purple mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center" data-testid="stat-clients">
              <div className="text-2xl lg:text-3xl font-bold gradient-text-cyan-purple mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center" data-testid="stat-experience">
              <div className="text-2xl lg:text-3xl font-bold gradient-text-cyan-purple mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center" data-testid="stat-coverage">
              <div className="text-2xl lg:text-3xl font-bold gradient-text-cyan-purple mb-2">2</div>
              <div className="text-sm text-muted-foreground">States Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}