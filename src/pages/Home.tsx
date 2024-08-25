import NavLink from "../components/NavLink";

function Home() {
  return (
    <div>
      <h1>Certifications</h1>
      <ul>
        <NavLink to={`/learn?cert=aws`} text='AWS' />
        <NavLink to={`/learn?cert=azure`} text='Azure' />
        <NavLink to={`/learn?cert=gcp`} text='Google Cloud Platform' />
      </ul>
    </div>
  );
}

export default Home;
