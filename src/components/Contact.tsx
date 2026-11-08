import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Have an app in mind? I&apos;d be glad to hear about it.</h2>
        <div className="contact-links">
          <a className="button" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="button button-outline" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="button button-outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="button button-outline" href={profile.upwork} target="_blank" rel="noopener noreferrer">
            Upwork
          </a>
        </div>
      </div>
      <footer className="container footer">
        <span>© 2026 {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
