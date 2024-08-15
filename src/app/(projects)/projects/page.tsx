'use client'
import { useState, useEffect } from "react";

import ProjectCard from "../_components/project-card";
import Sidebar from "../_components/sidebar";
import projectImage from "../../../../public/images/thumnail.png"

const projects = [
  {
    id: 0,
    title: "Wigal Website //_landing-page",
    ctaText: "_visit",
    ctaLink: "https://wigal.com.gh",
    description: "The Best Technology Company with In-depth understanding.",
    imageUrl:
      "https://res.cloudinary.com/dhpa3wn8r/image/upload/v1723751365/Screenshot_2024-08-15_at_4.28.30_PM_ugusy7.png",
    techStacks: ["React", "TailwindCss", "NextJs", "Javascript"],
    content: () => {
      return (
        <>
          <p>
            As the Lead UI/UX Designer and Frontend Developer, I led the design
            and development of the main website for a Ghana-based technology
            firm. The site effectively markets the company’s SaaS products and
            software solutions, contributing to a significant revenue increase
            over the past three years. My role involved creating a user-friendly
            interface, developing a responsive frontend, and ensuring the site’s
            alignment with the company’s branding and goals.
          </p>
        </>
      );
    },
  },
  {
    id: 1,
    title: "Wigal Website //_landing-page",
    ctaText: "_visit",
    ctaLink: "https://wigal.com.gh",
    description: "The Best Technology Company with In-depth understanding.",
    imageUrl:
      "https://res.cloudinary.com/dhpa3wn8r/image/upload/v1723751365/Screenshot_2024-08-15_at_4.28.30_PM_ugusy7.png",
    techStacks: ["React", "TailwindCss", "NextJs", "Javascript"],
    content: () => {
      return (
        <>
          <p>
            As the Lead UI/UX Designer and Frontend Developer, I led the design
            and development of the main website for a Ghana-based technology
            firm. The site effectively markets the company’s SaaS products and
            software solutions, contributing to a significant revenue increase
            over the past three years. My role involved creating a user-friendly
            interface, developing a responsive frontend, and ensuring the site’s
            alignment with the company’s branding and goals.
          </p>
        </>
      );
    },
  },

  {
    id: 3,
    title: "Wigal Website //_landing-page",
    ctaText: "_visit",
    ctaLink: "https://wigal.com.gh",
    description: "The Best Technology Company with In-depth understanding.",
    imageUrl:
      "https://res.cloudinary.com/dhpa3wn8r/image/upload/v1723751365/Screenshot_2024-08-15_at_4.28.30_PM_ugusy7.png",
    techStacks: ["React", "TailwindCss", "NextJs", "Javascript"],
    content: () => {
      return (
        <>
          <p>
            As the Lead UI/UX Designer and Frontend Developer, I led the design
            and development of the main website for a Ghana-based technology
            firm. The site effectively markets the company’s SaaS products and
            software solutions, contributing to a significant revenue increase
            over the past three years. My role involved creating a user-friendly
            interface, developing a responsive frontend, and ensuring the site’s
            alignment with the company’s branding and goals.
          </p>
        </>
      );
    },
  },
  {
    id: 4,
    title: "Wigal Website //_landing-page",
    ctaText: "_visit",
    ctaLink: "https://wigal.com.gh",
    description: "The Best Technology Company with In-depth understanding.",
    imageUrl:
      "https://res.cloudinary.com/dhpa3wn8r/image/upload/v1723751365/Screenshot_2024-08-15_at_4.28.30_PM_ugusy7.png",
    techStacks: ["React", "TailwindCss", "NextJs", "Javascript"],
    content: () => {
      return (
        <>
          <p>
            As the Lead UI/UX Designer and Frontend Developer, I led the design
            and development of the main website for a Ghana-based technology
            firm. The site effectively markets the company’s SaaS products and
            software solutions, contributing to a significant revenue increase
            over the past three years. My role involved creating a user-friendly
            interface, developing a responsive frontend, and ensuring the site’s
            alignment with the company’s branding and goals.
          </p>
        </>
      );
    },
  },
   {
    id: 5,
    title: "Wigal Website //_landing-page",
    ctaText: "_visit",
    ctaLink: "https://wigal.com.gh",
    description: "The Best Technology Company with In-depth understanding.",
    imageUrl:
      "https://res.cloudinary.com/dhpa3wn8r/image/upload/v1723751365/Screenshot_2024-08-15_at_4.28.30_PM_ugusy7.png",
    techStacks: ["React", "TailwindCss", "NextJs", "Javascript"],
    content: () => {
      return (
        <>
          <p>
            As the Lead UI/UX Designer and Frontend Developer, I led the design
            and development of the main website for a Ghana-based technology
            firm. The site effectively markets the company’s SaaS products and
            software solutions, contributing to a significant revenue increase
            over the past three years. My role involved creating a user-friendly
            interface, developing a responsive frontend, and ensuring the site’s
            alignment with the company’s branding and goals.
          </p>
        </>
      );
    },
  },
  // Add more projects as needed
];
export default function ProjectsPage() {
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  
  useEffect(() => {
    if (selectedStacks.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.techStacks.some((stack) => selectedStacks.includes(stack))
        )
      );
    }
  }, [selectedStacks]);

  return (
    <div className="min-h-screen flex flex-col bg-[#011627] text-white">
      <div className="flex flex-col xl:flex-row xl:flex-1  ">
        <Sidebar
          selectedStacks={selectedStacks}
          setSelectedStacks={setSelectedStacks}
        />
        <main className="w-full  ">
          <div className="flex justify-between items-center border-b border-gray-700 px-4 xl:px-8 py-2">
            <h2 className="text-xs text-[#607B96]">
              {selectedStacks.length === 0
                ? "all-projects"
                : selectedStacks.join("; ")}
            </h2>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-5 3xl:grid-cols-6 gap-x-8 gap-y-4 pr-4 xl:px-8 2xl:gap-x-16 xl:max-w-8xl py-4">
            {filteredProjects.map((project) => (
              <ProjectCard
               projects= {projects}
                project={project}
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                techStacks={project.techStacks}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
