import NavLink from "../components/NavLink";

function Home() {
  return (
    <div>
      <h1>Certifications</h1>
      <ul>
        <NavLink to={`/lesson?quiz=AwsCloudPractitionerFoundational`} text='AwsCloudPractitionerFoundational' />
        <NavLink to={`/lesson?quiz=AwsDeveloperAssociate`} text='AwsDeveloperAssociate' />
        <NavLink to={`/lesson?quiz=AzureAIFundamentalsBeginner`} text='AzureAIFundamentalsBeginner' />
      </ul>
    </div>
  );
}

export default Home;
