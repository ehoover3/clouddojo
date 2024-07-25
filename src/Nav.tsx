import { Link } from "react-router-dom";

interface NavProps {
  signOut?: () => void;
  userName?: string;
}

function Nav({ signOut, userName }: NavProps) {
  return (
    <nav>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/learn?cert=AWS'>AWS</Link>
        <Link to='/learn?cert=Azure'>Azure</Link>
        <Link to='/learn?cert=GCP'>GCP</Link>
      </div>
      <div>
        {userName}
        {signOut && <button onClick={signOut}>Sign out</button>}
      </div>
    </nav>
  );
}

export default Nav;
