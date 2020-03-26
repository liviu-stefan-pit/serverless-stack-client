export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_O6iLkGGSnms8vCmlDOgY9K0d008L4raQOl",
    s3: {
      REGION: "us-east-2",
      BUCKET: "tracker-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://ao44tf9f62.execute-api.us-east-2.amazonaws.com/prod/"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_IuInDmYHU",
      APP_CLIENT_ID: "2qqmfu9bhkrbj1ul6p7u0j02g1",
      IDENTITY_POOL_ID: "us-east-2:4c82fa15-39be-4b46-9d11-afa60ba6e0e4"
    }
  };