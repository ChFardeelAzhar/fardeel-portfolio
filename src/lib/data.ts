import profileData from "@/../data/profile.json";
import projectsData from "@/../data/projects.json";
import experienceData from "@/../data/experience.json";
import categoriesData from "@/../data/categories.json";

export interface Project {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  featured: boolean;
  heroOrder?: number;
  technologies: string[];
  metrics: Record<string, string | number>;
  verifiedDetails: string[];
  image: string;
  aspectRatio: string;
  links: {
    github: string | null;
    liveDemo: string | null;
    playStore: string | null;
    gumroad?: string | null;
  };
  assetStatus: string;
  confidentiality: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  location: {
    city: string;
    region: string;
    country: string;
    workMode: string;
  };
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  summary: string;
  keyAchievements: string[];
  technologies: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Profile {
  personal: {
    name: string;
    headline: string;
    shortBio: string;
    location: {
      city: string;
      region: string;
      country: string;
      workPreference: string;
    };
    contact: {
      email: string;
      github: string;
      linkedin: string;
      gumroad: string;
      phone: string | null;
    };
  };
  positioning: {
    primaryRole: string;
    coreSpecialization: string;
    emergingExpertise: string;
    targetRoles: string[];
  };
  summary: {
    verifiedHighlights: string[];
  };
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    status: string;
    notes: string;
  }>;
  skills: Record<string, string[]>;
}

export function getProfile(): Profile {
  return profileData as unknown as Profile;
}

export function getAllProjects(): Project[] {
  return projectsData as unknown as Project[];
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as unknown as Project[])
    .filter((p) => p.featured)
    .sort((a, b) => (a.heroOrder ?? 99) - (b.heroOrder ?? 99));
}

export function getProjectById(id: string): Project | undefined {
  return (projectsData as unknown as Project[]).find((p) => p.id === id);
}

export function getProjectsByCategory(categorySlug: string): Project[] {
  if (categorySlug === "all") {
    return getAllProjects();
  }
  return (projectsData as unknown as Project[]).filter(
    (p) => p.categorySlug === categorySlug
  );
}

export function getExperience(): ExperienceItem[] {
  return experienceData as unknown as ExperienceItem[];
}

export function getCategories(): Category[] {
  return categoriesData as unknown as Category[];
}
