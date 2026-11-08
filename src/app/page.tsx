import WorkGrid from "@/components/WorkGrid";
import { projects } from "@/data/projects";
import { experience, openSource, profile } from "@/data/profile";

export default function Home() {
  return (
    <main>
      <section className="container hero">
        {profile.photo ? (
          <img className="avatar" src={profile.photo} alt={profile.name} />
        ) : (
          <div className="avatar" aria-hidden="true">
            {profile.initials}
          </div>
        )}
        <h1>Hi, I&apos;m {profile.name}</h1>
        <p className="hero-intro">{profile.intro}</p>
        <ul className="hero-facts">
          <li>{profile.location}</li>
          <li>{profile.languages}</li>
          <li className="available">Open to freelance work</li>
        </ul>
      </section>

      <WorkGrid projects={projects} />

      <section className="container resume" id="experience">
        <div>
          <h2>Experience</h2>
          <ul className="rows">
            {experience.map((job) => (
              <li key={job.title}>
                <span className="when">{job.when}</span>
                <div>
                  <strong>{job.title}</strong>
                  <p>{job.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Open source</h2>
          <ul className="rows">
            {openSource.map((pr) => (
              <li key={pr.href}>
                <span className="when">{pr.project}</span>
                <a href={pr.href} target="_blank" rel="noopener noreferrer">
                  {pr.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
