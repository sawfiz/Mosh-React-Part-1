import axios, { CanceledError } from "axios";

// Export an instance of axios called apiClient
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { CanceledError };
