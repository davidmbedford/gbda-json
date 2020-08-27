export const mutations = {
  updateData(state, album){
    state.albums = album 
  },
  loadingData(state, loading){
    state.loading = loading
  },
  updateNum(state, num){
    console.log(num)
    state.num = num
  }
}