const post = {
  state: {
    keyword: null,
    categoryId: null,
    status: null
  },
  mutations: {
    SET_POST_KEYWORD: (state, keyword) => {
      state.keyword = keyword
    },
    SET_POST_CATEGORYID: (state, categoryId) => {
      state.categoryId = categoryId
    },
    SET_POST_STATUS: (state, status) => {
      state.status = status
    }
  },
  actions: {
    setPostKeyword({ commit }, keyword) {
      commit('SET_POST_KEYWORD', keyword)
    },
    setPostCategoryId({ commit }, categoryId) {
      commit('SET_POST_CATEGORYID', categoryId)
    },
    setPostStatus({ commit }, status) {
      commit('SET_POST_STATUS', status)
    }
  }
}

export default post
