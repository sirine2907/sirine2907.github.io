import Link from "next/link";
import ProjectLogo from "./ProjectLogo";
import { screenshot, type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { cover, slug } = project;

  return (
    <Link href={`/work/${slug}/`} className="card">
      <div className={`card-frame ${cover.type}`}>
        {cover.type === "desktop" ? (
          <img src={screenshot(slug, cover.image, true)} alt="" loading="lazy" style={{ width: cover.width }} />
        ) : (
          cover.images.map((image) => <img key={image} src={screenshot(slug, image, true)} alt="" loading="lazy" />)
        )}
      </div>
      <div className="card-info">
        <ProjectLogo name={project.name} color={project.color} darkLetter={project.darkLetter} />
        <span className="card-name">{project.name}</span>
        {project.badge && <span className="badge">{project.badge}</span>}
        <span className="card-kind">{project.kind}</span>
      </div>
    </Link>
  );
}
