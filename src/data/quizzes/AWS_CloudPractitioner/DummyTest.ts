type QuestionType = {
  domain: string;
  questionText: string;
  options: { answer: string; reason: string }[];
  hint: string;
  correctAnswer: string;
};

export const Dummy_Test_Quiz: QuestionType[] = [
  {
    domain: "",
    questionText: "In the AWS Shared Responsibility Model, which is a shared responsibility of both AWS and the customer?",
    options: [
      { answer: "Configuration Management", reason: "Security and Compliance is a shared responsiblity" },
      {
        answer: "Infrastructure maintenance of S3 storage servers",
        reason: "AWS is responsible for AWS Cloud infrastructure",
      },
      {
        answer: "Guarantee data separation among various AWS customers",
        reason: "AWS is responsible for AWS Cloud infrastructure",
      },
      {
        answer: "Availability Zone infrastructure maintenance",
        reason: "AWS is responsible for AWS Cloud infrastructure",
      },
    ],
    hint: "",
    correctAnswer: "Configuration Management",
  },
  {
    domain: "",
    questionText: "A startup wants an EC2 instance for a long-term duration, never interrupted, and at the lowest cost.  What do you recommend?",
    options: [
      { answer: "On-Demand Instance", reason: "An On-Demand Instance cannot be interrupted, but is not the lowest cost" },
      { answer: "Spot Instance", reason: "A Spot instances can be interrupted" },
      { answer: "Dedicated Host", reason: "A Dedicated Host is not the lowest cost" },
      { answer: "Reserved Instance", reason: "A Reserved Instance offers a steep discount in exchange for a 1 or 3 year commitment" },
    ],
    hint: "",
    correctAnswer: "Reserved Instance",
  },
  {
    domain: "",
    questionText: "Which AWS service connects a company's on-premises environment to a VPC without using the public internet?",
    options: [
      {
        answer: "VPC Endpoint",
        reason: "A VPC Endpoint connects your VPC to AWS services, but cannot privately connect an on-premises data center to the AWS Cloud",
      },
      {
        answer: "Internet Gateway",
        reason:
          "An Internet Gateway allows communication between a VPC and the internet, but cannot privately connect an on-premises data center to the AWS Cloud",
      },
      {
        answer: "Direct Connect",
        reason: "Direct Connect establishes a private, physical connection from an on-remise network directly to the AWS Cloud",
      },
      {
        answer: "Site-to-Site VPN",
        reason:
          "A Site-to-Site VPN creates a secure connection between a data center or branch office to a cloud resource, but goes over the public internet",
      },
    ],
    hint: "",
    correctAnswer: "Direct Connect",
  },
];
