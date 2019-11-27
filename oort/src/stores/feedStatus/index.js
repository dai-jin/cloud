const state = {
    feedStatus: true
}

const actions = {

}

const mutations = {
    // eslint-disable-next-line space-before-function-paren
    FEED_STATUS(state, payload) {
        state.feedStatus = payload.feedStatus
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
