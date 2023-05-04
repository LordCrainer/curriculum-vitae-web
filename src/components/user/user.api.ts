import { User } from './user.interface'
import { api } from 'src/modules/axios'
import { AxiosResponse } from 'axios'

export const userApi = {
  get: async (id: number) => {
    try {
      return api.get(`/api/users/${id}`)
    } catch (error) {
      console.error('userApi.get: ', error)
    }
  },
  login: (obj: any) => api.post('/api/login', obj),
  create: (obj: any) => api.post('/api/users', obj),
  update: (obj: any) => api.put('/api/users', obj),
  remove: (id: number) => api.delete(`/api/users/${id}`),
}
