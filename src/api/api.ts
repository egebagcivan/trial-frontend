import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';
// Login
export const Login = (data: any) => {
  return axios.post(`${API_BASE_URL}/login`, data);
};

// Fetch all books
export const getBooks = () => {
  return axios.get(`${API_BASE_URL}/books`);
};

// Create a new book
export const createBook = (data: any) => {
  return axios.post(`${API_BASE_URL}/books`, data);
};

// Update a book
export const updateBook = (id: number, data: any) => {
  return axios.put(`${API_BASE_URL}/books/${id}`, data);
};

// Delete a book
export const deleteBook = (id: number) => {
  return axios.delete(`${API_BASE_URL}/books/${id}`);
};
