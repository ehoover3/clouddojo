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
        <Link to='/learn?cert=aws'>AWS</Link>
        <Link to='/learn?cert=azure'>Azure</Link>
        <Link to='/learn?cert=gcp'>GCP</Link>
      </div>
      <div>
        {userName}
        {signOut && <button onClick={signOut}>Sign out</button>}
      </div>
    </nav>
  );
}

export default Nav;
