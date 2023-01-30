/* eslist-disasble */

import axios from 'axios'

export const Http = axios.create({
  baseURL: process.env.API_URL
})

Http.interceptors.request.use(function (config) {
  if (process.client) {
    let token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export const getApi = async (url, payload) => {
  const response = await Http.get(url, payload)
  return response
}

export const deleteApi = async (url, payload) => {
  const response = await Http.delete(url, payload)
  return response
}

export const postApi = async (url, payload) => {
  const response = await Http.post(url, payload)
  return response
}

export const patchApi = async (url, payload) => {
  const response = await Http.patch(url, payload)
  return response
}
