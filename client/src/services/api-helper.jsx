const axios = require('axios');

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

//==================================== Sneakers =====================================
export const getAllSneakers = async () => {
  const resp = await api.get('/sneakers')
  return resp.data
}

export const postSneaker = async (user_id, postData) => {
  const resp = await api.post(`/users/${user_id}/sneakers`, postData)
  return resp.data
}

export const destroySneaker = async (id) => {
  const resp = await api.delete(`/sneakers/${id}`)
  return resp.data
}

export const updateSneaker = async (item, id) => {
  const resp = await api.put(`sneakers/${id}`, { sneakers: item })
  return resp.data
}

//================================== Accessories =====================================
export const getAllAccessories = async () => {
  const resp = await api.get('/accessories')
  return resp.data
}

export const postAccessory = async (user_id, postData) => {
  const resp = await api.post(`/users/${user_id}/accessories`, postData)
  return resp.data
}

export const destroyAccessory = async (id) => {
  const resp = await api.delete(`/accessories/${id}`)
  return resp.data
}

export const updateAccessory = async (item, id) => {
  const resp = await api.put(`accessories/${id}`, { accessories: item })
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