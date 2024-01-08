const providerConfig = {
  name: 'aws',
  runtime: 'nodejs18.x',
  profile: process.env.AWS_PROFILE,
  region: 'eu-north-1',
  iam: {
    role: process.env.AWS_IAM_ROLE,
  },
  httpApi: {
    cors: true,
  },
  deploymentMethod: 'direct',
  environment: {
    YUM_YUM_TABLE: "Yum-Yum-table",
  },
} as const;

export default providerConfig;
