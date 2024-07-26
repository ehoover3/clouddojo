import AwsCertifications from "../data/certifications/aws-certifications.json";
import AzureCertifications from "../data/certifications/azure-certifications.json";
import GCPCertifications from "../data/certifications/gcp-certifications.json";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface Certification {
  parameter: string;
  title: string;
  level: string;
}

const Learn = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const certParameter = queryParams.get("cert");

  const [certification, setCertification] = useState<Certification[] | null>(null);

  useEffect(() => {
    if (certParameter === "aws") setCertification(AwsCertifications);
    if (certParameter === "azure") setCertification(AzureCertifications);
    if (certParameter === "gcp") setCertification(GCPCertifications);
  }, [certParameter]);

  if (!certification) return <div>Loading...</div>;

  return (
    <div>
      <h2>{certParameter?.toUpperCase()} Certifications</h2>
      <ul>
        {certification.map((cert: Certification, index: number) => (
          <li key={index}>
            <Link to={`/lesson?cert=${cert.parameter}&title=${cert.title}&level=${cert.level}`} style={{ display: "flex", flexDirection: "column" }}>
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
