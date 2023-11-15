import { Link } from "react-router-dom";
import TestingDeleteLater from "../components/TestingDeleteLater";
import Counter from "../ReduxExampleDeleteLater";
const Home = () => {
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

  return (
    <div>
      <Counter />
      <TestingDeleteLater />
      <h2 style={{ textAlign: "center" }}>Explore Certifications</h2>
      <div className='card-container' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "50px" }}>
        <div className='card' style={cardStyle}>
          <h3>AWS</h3>
          <p>Explore AWS certifications and advance your cloud skills.</p>
          <Link to='/aws' style={linkStyle}>
            Learn More
          </Link>
        </div>

        <div className='card' style={cardStyle}>
          <h3>Azure</h3>
          <p>Discover Azure certifications for a successful career in the cloud.</p>
          <Link to='/azure' style={linkStyle}>
            Learn More
          </Link>
        </div>

        <div className='card' style={cardStyle}>
          <h3>CompTIA</h3>
          <p>Get certified with CompTIA and excel in IT and cybersecurity.</p>
          <Link to='/comptia' style={linkStyle}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
