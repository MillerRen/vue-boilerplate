import api from '@/api'
import { AxiosRequestConfig } from 'axios'

export default {
  fetch (_context: any, args: AxiosRequestConfig) {
    return api(args)
  }
}
