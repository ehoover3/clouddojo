import AwsCloudPractitionerFoundational from "../../data/questions/aws-cloud-practitioner-foundational.json";
import AwsDeveloperAssociate from "../../data/questions/aws-developer-associate.json";
import AzureAIFundamentalsBeginner from "../../data/questions/azure-ai-fundamentals-beginner.json";

const getQuiz = (quizParameter: string | null) => {
  if (quizParameter === "AwsCloudPractitionerFoundational") return AwsCloudPractitionerFoundational;
  if (quizParameter === "AwsDeveloperAssociate") return AwsDeveloperAssociate;
  if (quizParameter === "AzureAIFundamentalsBeginner") return AzureAIFundamentalsBeginner;
  return null;
};

export default getQuiz;
