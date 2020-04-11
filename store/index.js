export const state = () => ({
  postList: [],
  tags: [],
  category: [],
  currPost: {}
})

export const mutations = {
  setPostList (state, payload) {
    state.postList = payload
  },
  setTags (state, payload) {
    state.tags = payload
  },
  setCategory (state, payload) {
    state.category = payload
  },
  setCurrPost (state, payload) {
    state.currPost = payload
  }
}
