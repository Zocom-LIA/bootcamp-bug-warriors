const providerConfig = {
  name: "aws",
  runtime: "nodejs18.x",
  profile: "Main",
  region: "eu-north-1",
  deploymentMethod: "direct",
  environment: {
    YUM_YUM_TABLE: "Yum-Yum-table",
  },
} as const;

export default providerConfig;
