import { Link } from "react-router-dom";

interface NavProps {
  signOut?: () => void;
  userName?: string;
}

function NavigationBar({ signOut, userName }: NavProps) {
  return (
    <nav>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        {userName}
        {signOut && <button onClick={signOut}>Sign out</button>}
      </div>
    </nav>
  );
}

export default NavigationBar;
