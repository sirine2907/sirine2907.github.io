type Props = {
  name: string;
  color: string;
  darkLetter?: boolean;
  size?: "small" | "large";
};

export default function ProjectLogo({ name, color, darkLetter, size = "small" }: Props) {
  const letter = name.replace(/[^A-Za-z]/g, "").charAt(0).toUpperCase();

  return (
    <span
      className={`logo logo-${size}`}
      style={{ background: color, color: darkLetter ? "#121212" : "#ffffff" }}
      aria-hidden="true"
    >
      {letter}
    </span>
  );
}
