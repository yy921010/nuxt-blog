export default {
  namespaced: true,
  state: {
    blogs: '',
    currentBlog: ''
  },
  getters: {},
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
    },

    setCurrentBlog(state, currentBlog) {
      state.currentBlog = currentBlog
    }
  },
  actions: {

    async getBlog({ commit }, { $axios }) {
      const { data: { data } } = await $axios.request({
        url: '/blog',
        method: 'get'
      })
      commit('setBlogs', data.blogs)
    },

    async getBlogById({ state, commit }, { $axios, id, store }) {
      if (state.blogs !== '') {
        let currentBlog = state.blogs.find(item => item._id === id)
        store.commit('title/setHeader', {
          title: currentBlog.title,
          subtitle: currentBlog.updateTime
        })
        commit('setCurrentBlog', currentBlog)
      } else {

      }
    }
  }
}
