const providerConfig = {
  name: "aws",
  runtime: "nodejs18.x",
  profile: process.env.AWS_PROFILE,
  region: "eu-north-1",
  iam: {
    role: process.env.AWS_IAM_ROLE,
  },
  environment: {
    YUM_YUM_TABLE: process.env.YUM_YUM_TABLE,
  },
} as const;

export default providerConfig;
