import { Message } from './resources'
import './mock-data'

export default {
  getMessage(params) {
    return Message.get(params)
  }
}
