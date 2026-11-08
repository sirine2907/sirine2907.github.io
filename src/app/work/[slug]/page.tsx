import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectLogo from "@/components/ProjectLogo";
import { projects, screenshot } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.tagline };
}

function Screen({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="shot">
      <img src={src} alt={caption} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const [firstScreen, ...otherScreens] = project.screens ?? [];
  const phonesFirst = project.cover.type === "phones";

  const phones = project.phoneScreens && (
    <figure className="shot">
      <div className="phone-row">
        {project.phoneScreens.map((image) => (
          <img key={image} src={screenshot(slug, image)} alt={`${project.name} on a phone`} loading="lazy" />
        ))}
      </div>
      <figcaption>{project.phoneScreens.length > 1 ? "On a phone" : "Phone layout"}</figcaption>
    </figure>
  );

  return (
    <main className="container project">
      <Link href="/#works" className="back">
        ← All works
      </Link>

      <header className="project-head">
        <ProjectLogo name={project.name} color={project.color} darkLetter={project.darkLetter} size="large" />
        <h1>{project.name}</h1>
        <p className="project-tagline">{project.tagline}</p>
      </header>

      <dl className="facts">
        {project.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="about">
        <div className="about-text">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {project.note && <p className="note">{project.note}</p>}
          {project.links && (
            <div className="links">
              {project.links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={i === 0 ? "button" : "button button-outline"}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>

        {project.built && (
          <div className="built">
            <h2>What I built</h2>
            <ul>
              {project.built.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="gallery">
        {phonesFirst && phones}
        {firstScreen && <Screen src={screenshot(slug, firstScreen.image)} caption={firstScreen.caption} />}
        {otherScreens.length > 0 && (
          <div className={otherScreens.length >= 4 ? "screens-grid" : "screens-stack"}>
            {otherScreens.map((screen) => (
              <Screen key={screen.image} src={screenshot(slug, screen.image)} caption={screen.caption} />
            ))}
          </div>
        )}
        {!phonesFirst && phones}
      </div>

      <nav className="more" aria-label="More projects">
        <Link href={`/work/${previous.slug}/`}>
          <span>← Previous</span>
          <strong>{previous.name}</strong>
        </Link>
        <Link href={`/work/${next.slug}/`}>
          <span>Next →</span>
          <strong>{next.name}</strong>
        </Link>
      </nav>
    </main>
  );
}
