import env from 'dotenv';

env.config({ path: process.env.SERVER_ENV_FILE_PATH || '.env' });

export default {
  apiEndpoint: process.env.API_ENDPOINT,
  baseUrl: process.env.BASE_URL,
  port: process.env.PORT,
};
