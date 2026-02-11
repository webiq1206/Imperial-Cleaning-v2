"use client";

import Link from "next/link";
import { allServiceLocations, type ServiceLocation } from "@/data/service-locations";
import { locationToSlug } from "@/lib/routing-utils";
import { MapPin, ArrowRight } from "lucide-react";

interface ServiceLocationsGridProps {
  serviceType: "construction-cleaning" | "commercial-cleaning";
  title: string;
  description: string;
}

export default function ServiceLocationsGrid({
  serviceType,
  title,
  description
}: ServiceLocationsGridProps) {
  const idahoLocations = allServiceLocations.filter(loc => loc.state === "Idaho");
  const utahLocations = allServiceLocations.filter(loc => loc.state === "Utah");

  const getServiceUrl = (location: ServiceLocation) => {
    const stateSlug = location.state.toLowerCase();
    const citySlug = locationToSlug(location.name);
    return `/${stateSlug}/${serviceType}/${citySlug}`;
  };

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Idaho Locations */}
          <div>
            <h3 className="text-2xl mb-6 text-foreground flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </span>
              Idaho Service Areas
            </h3>
            <div className="space-y-3">
              {idahoLocations.map((location, index) => (
                <Link
                  key={index}
                  href={getServiceUrl(location)}
                  className="block glass-card-elevated p-4 rounded-lg hover:border-primary/50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {location.name}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {location.state}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Utah Locations */}
          <div>
            <h3 className="text-2xl mb-6 text-foreground flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </span>
              Utah Service Areas
            </h3>
            <div className="space-y-3">
              {utahLocations.map((location, index) => (
                <Link
                  key={index}
                  href={getServiceUrl(location)}
                  className="block glass-card-elevated p-4 rounded-lg hover:border-primary/50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {location.name}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {location.state}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
