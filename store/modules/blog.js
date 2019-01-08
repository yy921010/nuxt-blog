export default {
  namespaced: true,
  state: {
    blogs: ''
  },
  mutations: {
    setBlogs(state, blogs) {
      state.blogs = blogs
    }
  },
  actions: {
    async getBlog({ commit }, { $axios }) {
      const { data: { data } } = await $axios.request({
        url: '/blog',
        method: 'get'
      })
      commit('setBlogs', data.blogs)
    }
  }
}
