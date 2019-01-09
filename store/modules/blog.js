export default {
  namespaced: true,
  state: {
    blogs: ''
  },
  mutations: {
    setBlogs(state, blogs) {
      blogs.forEach((item) => {
        item.tags = item.tags.map(tag => {
          return {
            title: tag,
            url: tag
          }
        })
      })
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
