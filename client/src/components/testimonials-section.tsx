// Continuous smooth scroll - no choppy discrete movements

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
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      content: "We've been using Imperial Cleaning for our office maintenance for over two years. Consistent, reliable, and professional service every time.",
      author: "Sarah Chen",
      position: "Operations Director", 
      company: "Tech Solutions Utah",
      location: "Salt Lake City, UT",
      initials: "SC",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      content: "The team at Imperial Cleaning exceeded our expectations. They handled our large commercial facility with precision and care, delivering exceptional results.",
      author: "Robert Martinez",
      position: "Facilities Manager",
      company: "Logan Manufacturing", 
      location: "Logan, UT",
      initials: "RM",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 4,
      content: "From initial consultation to final cleanup, Imperial Cleaning provided outstanding service. Their expertise in construction cleaning is evident in everything they do.",
      author: "Jennifer Walsh",
      position: "General Contractor",
      company: "Pocatello Builders",
      location: "Pocatello, ID", 
      initials: "JW",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 5,
      content: "Imperial Cleaning delivers exceptional results every time. Their professional approach and attention to detail make them our go-to cleaning service.",
      author: "David Kim",
      position: "Facility Director",
      company: "Boise Medical Center",
      location: "Boise, ID",
      initials: "DK", 
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 6,
      content: "Outstanding service and reliability. Imperial Cleaning has been instrumental in maintaining our commercial properties to the highest standards.",
      author: "Lisa Rodriguez",
      position: "Property Manager",
      company: "Wasatch Commercial Properties",
      location: "Provo, UT",
      initials: "LR",
      avatar: "/api/placeholder/60/60"
    }
  ];

  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 px-6 testimonials-sophisticated-bg noise-overlay vignette-top vignette-bottom">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground">
            Beyond <span className="gradient-text-cyan-purple">expectations</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Imperial Cleaning is driving remarkable client experiences that enable success stories, empower businesses, and fuel growth across Idaho and Utah.
          </p>
        </div>

        {/* Smooth Continuous Testimonials Carousel */}
        <div className="overflow-hidden relative">
          <div className="testimonials-track flex animate-scroll-infinite">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_33.333%] pl-6"
                data-testid={`testimonial-slide-${testimonial.id}-${index}`}
              >
                <div className="glass-card-elevated sophisticated-glow h-full flex flex-col p-8 transition-transform duration-300 ease-out hover:-translate-y-1 rounded-lg">
                  {/* Quote */}
                  <blockquote className="text-foreground text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Elegant inset divider between quote and author */}
                  <div className="glass-divider-top mb-6"></div>

                  {/* Author Information */}
                  <div className="flex items-center mt-auto">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0 mr-4">
                      <div 
                        className="w-12 h-12 rounded-full gradient-bg-br flex items-center justify-center overflow-hidden"
                        data-testid={`avatar-${testimonial.id}-${index}`}
                      >
                        <span className="text-sm font-semibold text-black">
                          {testimonial.initials}
                        </span>
                      </div>
                    </div>

                    {/* Author Details */}
                    <div className="min-w-0 flex-1">
                      <div 
                        className="font-semibold text-foreground text-base mb-1"
                        data-testid={`author-name-${testimonial.id}-${index}`}
                      >
                        {testimonial.author}
                      </div>
                      <div 
                        className="text-muted-foreground text-sm"
                        data-testid={`author-position-${testimonial.id}-${index}`}
                      >
                        {testimonial.position} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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