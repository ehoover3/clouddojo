import certifications from "./certifications.json";

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
          <li key={index} style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold" }}>{cert.title}</span> <span>{cert.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
