export const state = () => ({
  toggleStatus: ''
})


export const mutations = {
  toggleStatusChange: (state, {status}) => {

    state.toggleStatus = status

  },
}

export const actions = {

  actionToggle({commit}, {status}) {

    commit('toggleStatusChange', {status});

  }

}
