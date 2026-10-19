import React from "react";
import { getProfile, getFeaturedProjects } from "@/lib/data";
import { Hero } from "@/components/Hero";
import { LatestProjectsSection } from "@/components/LatestProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutTeaserSection } from "@/components/AboutTeaserSection";

export default function HomePage() {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col">
      <Hero profile={profile} featuredProjects={featuredProjects} />
      <LatestProjectsSection projects={featuredProjects} />
      <ServicesSection />
      <AboutTeaserSection />
    </div>
  );
}
