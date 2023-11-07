// images
import API_Gateway_Img from "../../assets/api-gateway.png";
import DynamoDB_Img from "../../assets/dynamodb.png";
import Lambda_Img from "../../assets/lambda.png";
import Question_Img from "../../assets/Question.png";
import S3_Img from "../../assets/simple-storage-service.png";
import CloudFormation_Img from "../../assets/CloudFormation.png";

// quizzes
import { Dummy_Test_Quiz } from "../quizzes/AWS_CloudPractitioner/DummyTest";
import { API_Gateway_Quiz } from "../../data/quizzes/AWS_CloudPractitioner/API_Gateway";
import { DynamoDB_Quiz } from "../../data/quizzes/AWS_CloudPractitioner/DynamoDB";
import { Lambda_Quiz } from "../../data/quizzes/AWS_CloudPractitioner/Lambda";
import { S3_Quiz } from "../../data/quizzes/AWS_CloudPractitioner/S3";

// constants
import { X } from "../constants";

export const AWS_CloudPractitioner_Path: any = [
  { isCompleted: false, position: X[2], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Economies of Scale" },
  { isCompleted: true, position: X[3], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Cloud Cost Savings" },
  { isCompleted: false, position: X[4], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Global Infrastructure" },
  { isCompleted: false, position: X[3], quiz: Dummy_Test_Quiz, img: Question_Img, text: "High Availability, Elasticity, and Agility" },
  { isCompleted: false, position: X[2], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Well-Architected Framework" },
  { isCompleted: false, position: X[1], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Cloud Migration" },
  { isCompleted: false, position: X[0], quiz: Dummy_Test_Quiz, img: CloudFormation_Img, text: "AWS CloudFormation" },
  { isCompleted: false, position: X[1], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Managed Services" },
  { isCompleted: false, position: X[2], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Shared Responsibility Model" },
  { isCompleted: false, position: X[3], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Encryption" },
  { isCompleted: false, position: X[4], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Artifact" },
  { isCompleted: false, position: X[3], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Compliance" },
  { isCompleted: false, position: X[2], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Amazon Inspector" },
  { isCompleted: false, position: X[1], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Security Hub" },
  { isCompleted: false, position: X[0], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Amazon GuardDuty" },
  { isCompleted: false, position: X[1], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Shield" },
  { isCompleted: false, position: X[2], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS CloudWatch" },
  { isCompleted: false, position: X[3], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS CloudTrail" },
  { isCompleted: false, position: X[4], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Audit Manager" },
  { isCompleted: false, position: X[3], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Config" },
  { isCompleted: false, position: X[2], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Identity and Access Management (IAM)" },
  { isCompleted: false, position: X[1], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Root User Account" },
  { isCompleted: false, position: X[0], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Least Privilege Principle" },
  { isCompleted: false, position: X[1], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS IAM Identity Center (Single Sign-On)" },
  { isCompleted: false, position: X[2], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Access Keys and Password Policies" },
  { isCompleted: false, position: X[3], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Secrets Manager" },
  { isCompleted: false, position: X[4], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Systems Manager" },
  { isCompleted: false, position: X[3], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Authentication Methods" },
  { isCompleted: false, position: X[2], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Identity Management" },
  { isCompleted: false, position: X[1], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Security Groups" },
  { isCompleted: false, position: X[0], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Network ACLs" },
  { isCompleted: false, position: X[1], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS WAF" },
  { isCompleted: false, position: X[2], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Marketplace" },
  { isCompleted: false, position: X[3], quiz: Dummy_Test_Quiz, img: Question_Img, text: "Security Information" },
  { isCompleted: false, position: X[4], quiz: Dummy_Test_Quiz, img: Question_Img, text: "AWS Trusted Advisor" },
];
