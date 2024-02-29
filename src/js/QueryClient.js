import axios from 'axios';
import Swal from 'sweetalert2';

class QueryClient {
  constructor(token = "") {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL, // Replace with your API's base URL
      timeout: 5000, // Adjust timeout as needed
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  }

  async get(url, params = {}) {
    try {
      const response = await this.axiosInstance.get(url, { timeout: 10000, params });
      return response.data;
    } catch (error) {
      if(axios.isCancel(error)){
        console.log('request canceled due to timeout');

        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The request timed out. Please try again.',
        confirmButtonText: 'Refresh',
        showCancelButton: true,
        cancelButtonText: 'Go Back',
        }).then ((result) => {
        if (result.isConfirmed) {
          // Retry button clicked
          window.location.reload(); // Reload the page
        }
        });
      }
      throw error;
    }
  }
  async post(url, data = {}) {
    try {
      const response = await this.axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
    console.log('error posting data');
      throw error;
    }
  }
}

export default QueryClient;