export default {
  namespaced: true,
  state: {
    title: '',
    data: '',
    subtitle: '',
    backgroundUrl: '',
    labels: '',
    menus: [
      {
        url: '/',
        title: '首页'
      },
      {
        url: '/about',
        title: '关于'
      },
      {
        url: '',
        title: '归档'
      }
    ]
  },
  mutations: {
    setHeader(state, { title, data, subtitle, labels, backgroundUrl }) {
      state.title = title
      state.data = data
      state.subtitle = subtitle
      state.labels = labels
      state.backgroundUrl = backgroundUrl
    }
  }
}
