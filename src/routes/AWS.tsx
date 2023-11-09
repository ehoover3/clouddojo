import { Link } from "react-router-dom";

export default function AWS() {
  const cardStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    margin: "20px",
  };
  const linkStyle = {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "4px",
    background: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    marginTop: "10px",
  };

  const renderCard = (title: string, description: string, linkTo: string) => (
    <div className='card' style={cardStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={linkTo} style={linkStyle}>
        Start
      </Link>
    </div>
  );

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>AWS Certifications</h2>

      <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {renderCard("AWS Cloud Practitioner", "Description for AWS Cloud Practitioner", "/aws/cloud-practitioner")}
        {renderCard("Solutions Architect Associate", "Description for Solutions Architect Associate", "/aws/solutions-architect-associate")}
        {renderCard("Developer Associate", "Description for Developer Associate", "/aws/developer-associate")}
        {renderCard("SysOps Administrator Associate", "Description for SysOps Administrator Associate", "/aws/sysops-administrator-associate")}
        {renderCard("Solutions Architect Professional", "Description for Solutions Architect Professional", "/aws/solutions-architect-professional")}
        {renderCard("DevOps Engineer Professional", "Description for DevOps Engineer Professional", "/aws/devops-engineer-professional")}
        {renderCard("Advanced Networking Specialty", "Description for Advanced Networking Specialty", "/aws/advanced-networking-specialty")}
        {renderCard("Data Analytics Specialty", "Description for Data Analytics Specialty", "/aws/data-analytics-specialty")}
        {renderCard("Database Specialty", "Description for Database Specialty", "/aws/database-specialty")}
        {renderCard("Machine Learning Specialty", "Description for Machine Learning Specialty", "/aws/machine-learning-specialty")}
        {renderCard("Security Specialty", "Description for Security Specialty", "/aws/security-specialty")}
        {renderCard("SAP on AWS Specialty", "Description for SAP on AWS Specialty", "/aws/sap-on-aws-specialty")}
      </ul>
    </div>
  );
}
