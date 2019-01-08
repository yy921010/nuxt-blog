import Vuex from 'vuex'
import title from './modules/title'
import blog from './modules/blog'

const createdStore = () => {
  return new Vuex.Store({
    modules: {
      title,
      blog
    }
  })
}

export default createdStore
