import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="wordmark">
          sirine<span>.</span>
        </Link>
        <a href="#contact" className="button">
          Get in touch
        </a>
      </div>
    </header>
  );
}
