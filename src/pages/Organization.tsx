import React from "react";
import { Link } from "react-router-dom";

export default function Organization({ title, organization }: any) {
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

  const renderCard = (certification: string, description: string, url: string) => (
    <div className='card' style={cardStyle}>
      <h3>{certification}</h3>
      <p>{description}</p>
      <Link to={url} style={linkStyle}>
        Start
      </Link>
    </div>
  );

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {organization.map((item: any) => renderCard(item.certification, item.description, item.url))}
      </ul>
    </div>
  );
}
