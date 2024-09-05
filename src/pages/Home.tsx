import { useNavigate } from "react-router-dom";
import star from "../../public/svg/star.svg";
function Home() {
  const navigate = useNavigate();

  const handleQuizSelection = (quizType: string) => {
    navigate("/lesson", { state: { quizType } });
  };

  return (
    <div>
      <h1>Learning Path</h1>
      <div>
        <div>
          <div className='home-page__step-container home-page__step-container__complete' onClick={() => handleQuizSelection("AwsCloudPractitionerFoundational")}>
            <div className='home-page__step home-page__step__complete'>
              <img src={star} />
            </div>
          </div>
        </div>
        <div>
          <div className='home-page__step-container home-page__step-container__complete' onClick={() => handleQuizSelection("AwsDeveloperAssociate")}>
            <div className='home-page__step home-page__step__complete'>
              <img src={star} />
            </div>
          </div>
        </div>
        <div>
          <div className='home-page__step-container home-page__step-container__incomplete' onClick={() => handleQuizSelection("AzureAIFundamentalsBeginner")}>
            <div className='home-page__step home-page__step__incomplete'>
              <img src={star} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
