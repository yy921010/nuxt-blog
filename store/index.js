import Vuex from 'vuex'
import title from './modules/title'

const createdStore = () => {
  return new Vuex.Store({
    modules: {
      title
    }
  })
}

export default createdStore
