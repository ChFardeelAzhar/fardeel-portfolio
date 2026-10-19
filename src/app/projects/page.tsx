import React from "react";
import type { Metadata } from "next";
import { getAllProjects, getCategories } from "@/lib/data";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Systems | Fardeel Azhar",
  description:
    "Explore 16 engineering projects spanning production Android applications, Jetpack Compose libraries, Agentic AI developer systems, and desktop POS software.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getCategories();

  return <ProjectsClient initialProjects={projects} categories={categories} />;
}
