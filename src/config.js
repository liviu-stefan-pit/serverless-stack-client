const dev = {
  STRIPE_KEY: "pk_test_O6iLkGGSnms8vCmlDOgY9K0d008L4raQOl",
  s3: {
    REGION: "us-east-2",
    BUCKET: "tracker-2-api-dev-attachmentsbucket-wfzjqf8dbyfn"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://azyua2q8fk.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_AdZxBLMHQ",
    APP_CLIENT_ID: "633bioglqta256f9ridgk8nlve",
    IDENTITY_POOL_ID: "us-east-2:1d5b0191-9d02-4cf1-985e-35d1721542aa"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_O6iLkGGSnms8vCmlDOgY9K0d008L4raQOl",
  s3: {
    REGION: "us-east-2",
    BUCKET: "tracker-2-api-prod-attachmentsbucket-2ey3sjqvdlqz"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://rjxuza9rza.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_eCUdVoa6Q",
    APP_CLIENT_ID: "ar9cbmlf7kd6ju1sumpnt4a1o",
    IDENTITY_POOL_ID: "us-east-2:83977a78-9f97-4ab4-9a38-394adea391cd"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};