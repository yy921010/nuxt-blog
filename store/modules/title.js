export default {
  namespaced: true,
  state: {
    title: '',
    data: '',
    subtitle: '',
    backgroundUrl: ''
  },
  mutations: {
    setHeader(state, { title, data, subtitle }) {
      state.title = title
      state.data = data
      state.subtitle = subtitle
    }
  }
}
