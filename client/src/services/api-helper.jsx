const axios = require('axios');

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

export const getAllSneakers = async () => {
  const resp = await api.get('/sneakers')
  return resp.data
}

export const getAllAccessories = async () => {
  const resp = await api.get('/accessories')
  return resp.data
}

export const getUserById = async (id) => {
  try {
    const resp = await api.get(`/users/${id}`)
    //console.log('Data:', resp.data)
    return await resp.data.user
  } catch (error) {
    throw error
  }
}
// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}