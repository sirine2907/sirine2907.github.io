"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { categories, type Category, type Project } from "@/data/projects";

type Filter = Category | "All";

const filters: Filter[] = ["All", ...categories];

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  function countFor(name: Filter) {
    if (name === "All") return projects.length;
    return projects.filter((project) => project.categories.includes(name)).length;
  }

  const visible = filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter));

  return (
    <section className="container works" id="works">
      <div className="works-head">
        <h2>My works</h2>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              className="filter"
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
              <span>{countFor(name)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
