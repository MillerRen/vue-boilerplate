import {toggle} from 'src/utils/dom-classes'

const DROPDOWN_HANDLER = '__dropdown_handler'

export default {
  bind (el, binding, vnode) {
    el[DROPDOWN_HANDLER] = () => {
      toggle(el, 'open')
    }
    el.addEventListener('click', el[DROPDOWN_HANDLER])
  },
  unbind (el, binding, vnode) {
    el.removeEventListener('click', el[DROPDOWN_HANDLER])
  }
}
