import type { AWS } from '@serverless/typescript';
import providerConfig from 'src/serverless/seedData/provider';
import { functions } from 'src/serverless/seedData/functions';
import { customConfig } from 'src/serverless/seedData/esbuild';
import { DynamoResources } from 'src/serverless/seedData/dynamodb';

const serverlessConfiguration: AWS = {
  service: 'backend',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: providerConfig,
  functions: functions,
  custom: customConfig,
  package: { individually: true },
  resources: DynamoResources,
};

module.exports = serverlessConfiguration;
