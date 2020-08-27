export const actions = {
  fetchData({commit}) {
    let num = this.state.num; 
    let callUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=' + num
    fetch(callUrl)
      .then(response => response.json())
      .then(json => {
        // console.log(JSON.stringify(json))
        commit('updateData', json)
        commit('loadingData', false)
      })
    },
  changeNum({commit}) {
    let num = newNum
    commit('updateNum', num)
  }
}