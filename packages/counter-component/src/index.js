import { load, Vue, mountComponent, loadById } from 'hypernova-vue'
import Counter from './components/Counter.vue'

const render = (name, { node, data }) => {
  if (name === 'Counter') {
    return mountComponent(Vue.extend(Counter), node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  // no effect
  const { name, id } = detail
  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Counter').forEach(render.bind(null, 'Counter'))
