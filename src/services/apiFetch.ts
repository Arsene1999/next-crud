
import { USERS } from '../constants/users'
import { ResponseProps } from '../types'

const api = {
  users: {
    fetch: async (): Promise<ResponseProps> => USERS()
  },
}

export default api