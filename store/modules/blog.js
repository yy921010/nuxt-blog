import dayjs from 'dayjs'

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
        item.date = dayjs(item.updateTime).format('MM月DD日, YYYY')
        item.thumbnail = 'http://127.0.0.1:7001/public/upload/' + item.thumbnail
      })
      state.blogs = blogs
    },

    setCurrentBlog(state, currentBlog) {
      state.currentBlog = currentBlog
    }
  },
  actions: {
    /**
     * 得到所有的blog数据
     * @param commit
     * @param $axios
     * @returns {Promise<void>}
     */
    async getBlog({ commit }, { $axios }) {
      const { data: { data } } = await $axios.request({
        url: '/blog',
        method: 'get'
      })
      commit('setBlogs', data.blogs)
    },
    /**
     * 根据id得到具体的blog数据
     * @param commit
     * @param $axios
     * @param id
     * @param store
     * @returns {Promise<void>}
     */
    async blogById({ commit }, { $axios, id, store }) {
      const { data: { data } } = await $axios.request({
        url: '/blog?blogId=' + id,
        method: 'get'
      })
      store.commit('title/setHeader', {
        title: data.title,
        subtitle: dayjs(data.updateTime).format('YYYY-MM-DD HH:mm:ss'),
        backgroundUrl: 'http://127.0.0.1:7001/public/upload/' + data.thumbnail
      })
      commit('setCurrentBlog', data)
    },

    async getBlogById({ state, commit, dispatch }, { $axios, id, store }) {
      dispatch('blogById', { $axios, id, store })
    }
  }
}
