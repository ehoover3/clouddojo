// images
import API_Gateway_Img from "../../assets/api-gateway.png";
// import DynamoDB_Img from "../assets/dynamodb.png";
// import Lambda_Img from "../assets/lambda.png";
import Question_Img from "../assets/Question.png";
// import S3_Img from "../assets/simple-storage-service.png";
import CloudFormation_Img from "../assets/CloudFormation.png";

// quizzes
import { quiz_dummy_test } from "./Quizzes";
// import { API_Gateway_Quiz } from "../data/quizzes/AWS_CloudPractitioner/API_Gateway";
// import { DynamoDB_Quiz } from "../data/quizzes/AWS_CloudPractitioner/DynamoDB";
// import { Lambda_Quiz } from "../data/quizzes/AWS_CloudPractitioner/Lambda";
// import { S3_Quiz } from "../data/quizzes/AWS_CloudPractitioner/S3";

// constants
import { X } from "./constants";

export const path_aws_cloudpractitioner: any = [
  { url: "./quiz/1", isCompleted: false, position: X[2], quiz: quiz_dummy_test, img: Question_Img, text: "Economies of Scale" },
  { url: "./quiz/2", isCompleted: true, position: X[3], quiz: quiz_dummy_test, img: Question_Img, text: "Cloud Cost Savings" },
  { url: "./quiz/3", isCompleted: false, position: X[4], quiz: quiz_dummy_test, img: Question_Img, text: "Global Infrastructure" },
  {
    url: "./quiz/4",
    isCompleted: false,
    position: X[3],
    quiz: quiz_dummy_test,
    img: Question_Img,
    text: "High Availability, Elasticity, and Agility",
  },
  { url: "./quiz/5", isCompleted: false, position: X[2], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Well-Architected Framework" },
  { url: "./quiz/6", isCompleted: false, position: X[1], quiz: quiz_dummy_test, img: Question_Img, text: "Cloud Migration" },
  { url: "./quiz/7", isCompleted: false, position: X[0], quiz: quiz_dummy_test, img: CloudFormation_Img, text: "AWS CloudFormation" },
  { url: "./quiz/8", isCompleted: false, position: X[1], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Managed Services" },
  { url: "./quiz/9", isCompleted: false, position: X[2], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Shared Responsibility Model" },
  { url: "./quiz/10", isCompleted: false, position: X[3], quiz: quiz_dummy_test, img: Question_Img, text: "Encryption" },
  { url: "./quiz/11", isCompleted: false, position: X[4], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Artifact" },
  { url: "./quiz/12", isCompleted: false, position: X[3], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Compliance" },
  { url: "./quiz/13", isCompleted: false, position: X[2], quiz: quiz_dummy_test, img: Question_Img, text: "Amazon Inspector" },
  { url: "./quiz/14", isCompleted: false, position: X[1], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Security Hub" },
  { url: "./quiz/15", isCompleted: false, position: X[0], quiz: quiz_dummy_test, img: Question_Img, text: "Amazon GuardDuty" },
  { url: "./quiz/16", isCompleted: false, position: X[1], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Shield" },
  { url: "./quiz/17", isCompleted: false, position: X[2], quiz: quiz_dummy_test, img: Question_Img, text: "AWS CloudWatch" },
  { url: "./quiz/18", isCompleted: false, position: X[3], quiz: quiz_dummy_test, img: Question_Img, text: "AWS CloudTrail" },
  { url: "./quiz/19", isCompleted: false, position: X[4], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Audit Manager" },
  { url: "./quiz/20", isCompleted: false, position: X[3], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Config" },
  {
    url: "./quiz/21",
    isCompleted: false,
    position: X[2],
    quiz: quiz_dummy_test,
    img: Question_Img,
    text: "AWS Identity and Access Management (IAM)",
  },
  { url: "./quiz/22", isCompleted: false, position: X[1], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Root User Account" },
  { url: "./quiz/23", isCompleted: false, position: X[0], quiz: quiz_dummy_test, img: Question_Img, text: "Least Privilege Principle" },
  {
    url: "./quiz/24",
    isCompleted: false,
    position: X[1],
    quiz: quiz_dummy_test,
    img: Question_Img,
    text: "AWS IAM Identity Center (Single Sign-On)",
  },
  { url: "./quiz/25", isCompleted: false, position: X[2], quiz: quiz_dummy_test, img: Question_Img, text: "Access Keys and Password Policies" },
  { url: "./quiz/26", isCompleted: false, position: X[3], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Secrets Manager" },
  { url: "./quiz/27", isCompleted: false, position: X[4], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Systems Manager" },
  { url: "./quiz/28", isCompleted: false, position: X[3], quiz: quiz_dummy_test, img: Question_Img, text: "Authentication Methods" },
  { url: "./quiz/29", isCompleted: false, position: X[2], quiz: quiz_dummy_test, img: Question_Img, text: "Identity Management" },
  { url: "./quiz/30", isCompleted: false, position: X[1], quiz: quiz_dummy_test, img: Question_Img, text: "Security Groups" },
  { url: "./quiz/31", isCompleted: false, position: X[0], quiz: quiz_dummy_test, img: Question_Img, text: "Network ACLs" },
  { url: "./quiz/32", isCompleted: false, position: X[1], quiz: quiz_dummy_test, img: Question_Img, text: "AWS WAF" },
  { url: "./quiz/33", isCompleted: false, position: X[2], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Marketplace" },
  { url: "./quiz/34", isCompleted: false, position: X[3], quiz: quiz_dummy_test, img: Question_Img, text: "Security Information" },
  { url: "./quiz/35", isCompleted: false, position: X[4], quiz: quiz_dummy_test, img: Question_Img, text: "AWS Trusted Advisor" },
];
