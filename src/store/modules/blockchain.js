import request from 'superagent'
let url = 'http://47.104.155.125:46757'

const state = {
  status: {
    listen_addr: '',
    node_info: {
      latest_block_height: 0
    }
  }
}

const mutations = {
  getStatus (state) {
    request.get(url + '/status').end((err, res) => {
      if (err) { console.log('err', err) }
      state.status = res.body.result
    })
  }
}

export default {
  state,
  mutations
}
