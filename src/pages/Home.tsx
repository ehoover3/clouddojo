import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Certifications</h1>
      <ul>
        <li>
          <Link to={`/learn?cert=aws`}>AWS</Link>
        </li>
        <li>
          <Link to={`/learn?cert=azure`}>Azure</Link>
        </li>
        <li>
          <Link to={`/learn?cert=gcp`}>Google Cloud Platform</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
