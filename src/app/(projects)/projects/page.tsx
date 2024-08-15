'use client'
import { useState, useEffect } from "react";

import ProjectCard from "../_components/project-card";
import Sidebar from "../_components/sidebar";
import projectImage from "../../../../public/images/thumnail.png"

const projects = [
  {
    id: 0,
    title: "Wigal Website // _web",
    description:
      "The Best Technology Company with In-depth understanding of State of the art technology",
    imageUrl: projectImage,
    techStacks: ["React", "TailwindCss", "NextJs", "Javascript"],
    content: () => {
      return <p>Description about this project</p>;
    },
  },
  {
    id: 1,
    title: "Project 2 // _tetris-game",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    imageUrl: projectImage,
    techStacks: ["React", "JavaScript", "Flutter"],
    content: () => {
      return <p>Description about this project</p>;
    },
  },
  {
    id: 2,
    title: "Project 3 // _ethereum",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    imageUrl: projectImage,
    techStacks: ["Vue", "JavaScript", "HTML", "Gatsby"],
    content: () => {
      return <p>Description about this project</p>;
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
      <div className="flex flex-1   mx-auto">
        <Sidebar
          selectedStacks={selectedStacks}
          setSelectedStacks={setSelectedStacks}
        />
        <main className="w-full  ">
          <div className="flex justify-between items-center border-b border-gray-700 xl:px-8 py-2">
            <h2 className="text-xs text-[#607B96]">
              {selectedStacks.length === 0
                ? "all-projects"
                : selectedStacks.join("; ")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-4 px-4 xl:px-8 py-4">
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
          {/* <ExpandableCardDemo /> */}
        </main>
      </div>
    </div>
  );
}
