// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   const handleQuizSelection = (quizType: string) => {
//     navigate("/lesson", { state: { quizType } });
//   };

//   return (
//     <div>
//       <h1>Learning Path</h1>
//       <ul>
//         <li onClick={() => handleQuizSelection("AwsCloudPractitionerFoundational")}>
//           <span>AwsCloudPractitionerFoundational</span>
//         </li>
//         <li onClick={() => handleQuizSelection("AwsDeveloperAssociate")}>
//           <span>AwsDeveloperAssociate</span>
//         </li>
//         <li onClick={() => handleQuizSelection("AzureAIFundamentalsBeginner")}>
//           <span>AzureAIFundamentalsBeginner</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Home;

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleQuizSelection = (quizType: string) => {
    navigate("/lesson", { state: { quizType } });
  };

  return (
    <div className='container'>
      <h1>Learning Path</h1>
      <div className='step-container'>
        <div className='step' onClick={() => handleQuizSelection("AwsCloudPractitionerFoundational")}>
          <span>AWS</span>
        </div>
        <div className='step' onClick={() => handleQuizSelection("AwsDeveloperAssociate")}>
          <span>DevOps</span>
        </div>
        <div className='step' onClick={() => handleQuizSelection("AzureAIFundamentalsBeginner")}>
          <span>AI</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
