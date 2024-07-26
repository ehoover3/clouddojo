import certifications from "./certifications.json";
import { Link } from "react-router-dom";

interface LearnProps {
  cert?: string | null;
}

const Learn = ({ cert }: LearnProps) => {
  const certificationPlatform = certifications.find((c) => cert === c.parameter);

  return (
    <div>
      <h2>{cert} Certifications</h2>
      <ul>
        {certificationPlatform?.certifications.map((cert, index) => (
          <li>
            <Link to={`/lesson?cert=${cert.parameter}&title=${cert.title}&level=${cert.level}`} key={index} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: "bold" }}>{cert.title}</span>
              <span style={{ color: "black", fontWeight: "normal", textDecoration: "none" }}>{cert.level}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
