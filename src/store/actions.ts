import api from '@/api'

export default {
  fetch (_context: any, args: any) {
    return api(args)
  }
}
