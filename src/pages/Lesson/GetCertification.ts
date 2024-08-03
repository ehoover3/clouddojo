import AwsCloudPractitionerFoundational from "../../data/questions/aws-cloud-practitioner-foundational.json";
import AwsDeveloperAssociate from "../../data/questions/aws-developer-associate.json";
import AzureAIFundamentalsBeginner from "../../data/questions/azure-ai-fundamentals-beginner.json";

const getCertification = (certParameter: string | null, certTitle: string | null, certLevel: string | null) => {
  if (certParameter === "aws") {
    if (certTitle === "Cloud Practitioner" && certLevel === "Foundational") return AwsCloudPractitionerFoundational;
    if (certTitle === "Developer" && certLevel === "Associate") return AwsDeveloperAssociate;
  }
  if (certParameter === "azure") {
    if (certTitle === "Azure AI Fundamentals" && certLevel === "Beginner") return AzureAIFundamentalsBeginner;
  }
  return null;
};

export default getCertification;
