import NavLink from "../components/NavLink";

function Home() {
  return (
    <div>
      <h1>Certifications</h1>
      <ul>
        <NavLink to={`/lesson?cert=aws&title=Cloud%20Practitioner&level=Foundational`} text='NEW 1' />
        <NavLink to={`/lesson?cert=aws&title=Cloud%20Practitioner&level=Foundational`} text='NEW 2' />
        <NavLink to={`/lesson?cert=aws&title=Cloud%20Practitioner&level=Foundational`} text='NEW 3' />
      </ul>
    </div>
  );
}

export default Home;
