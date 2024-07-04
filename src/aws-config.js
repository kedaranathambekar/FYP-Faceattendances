// src/aws-config.js
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_gwbepXjDr', // e.g., 'us-west-2_XXXXXXXXX'
  ClientId: '1tcrtmqp9r6jao70nbb9tj8ejc', // e.g., 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
};

const userPool = new CognitoUserPool(poolData);

export default userPool;
