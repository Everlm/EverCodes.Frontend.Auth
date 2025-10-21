
export const API_CONFIG = {
  BASE_URL: 'https://jsonplaceholder.typicode.com', 
  ENDPOINTS: {
    USERS: '/users',
    POSTS: '/posts',
    AUTH: '/auth',
  },
  TIMEOUT: 10000,
  RETRY_COUNT: 3,
} as const;

export const APP_CONFIG = {
  APP_NAME: 'EverCodes Auth',
  VERSION: '1.0.0',
  PRODUCTION: false,
  FEATURES: {
    MOCK_DATA: true,
    LOGS: true,
  },
} as const;
