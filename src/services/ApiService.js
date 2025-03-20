import axios from 'axios';

const ApiService = {
  // Login API
login: async ({ username, password }) => {
    try {
      const response = await axios.post(
        'https://localhost:7114/api/Auth/login',
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response.data;  // Assuming backend returns a success flag and token
    } catch (error) {
      console.error('Login error', error);
      return { success: false };
    }
  }
  ,

  // Signup API
  signup: async (userPayload) => {
    try {
      const response = await axios.post('https://localhost:7114/api/Auth/register', userPayload);
      return response.data;
    } catch (error) {
      console.error('Signup failed', error);
      return { success: false, message: error.message };
    }
  }
};

export default ApiService;
