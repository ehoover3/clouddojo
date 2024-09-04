import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleQuizSelection = (quizType: string) => {
    navigate("/lesson", { state: { quizType } });
  };

  return (
    <div>
      <h1>Certifications</h1>
      <ul>
        <li onClick={() => handleQuizSelection("AwsCloudPractitionerFoundational")}>
          <span>AwsCloudPractitionerFoundational</span>
        </li>
        <li onClick={() => handleQuizSelection("AwsDeveloperAssociate")}>
          <span>AwsDeveloperAssociate</span>
        </li>
        <li onClick={() => handleQuizSelection("AzureAIFundamentalsBeginner")}>
          <span>AzureAIFundamentalsBeginner</span>
        </li>
      </ul>
    </div>
  );
}

export default Home;
