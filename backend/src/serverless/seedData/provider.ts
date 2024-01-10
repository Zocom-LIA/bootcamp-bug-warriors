import dotenv from "dotenv";
dotenv.config();

type AWSRegion = "eu-north-1";

const providerConfig = {
  name: "aws",
  runtime: "nodejs18.x",
  profile: process.env.AWS_PROFILE,
  region: process.env.AWS_REGION as AWSRegion,
  iam: {
    role: process.env.AWS_IAM_ROLE,
  },
  httpApi: {
    cors: true,
  },
  deploymentMethod: "direct",
  environment: {
    YUM_YUM_TABLE: process.env.YUM_YUM_TABLE,
  },
} as const;

export default providerConfig;
