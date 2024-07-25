import certifications from "./certifications.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Certifications</h1>
      <ul>
        {certifications.map((platform, index) => (
          <li key={index}>
            <Link to={`/learn?cert=${platform.parameter}`}>{platform.platform}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
