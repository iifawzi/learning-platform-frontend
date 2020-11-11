export const state = () => ({
    showAside: true,
    animationClass: "openAnimation"
});

export const mutations = {
  toggleAside(state){
    state.showAside = !state.showAside;
  },
  changeAnimatinClass(state){
      state.animationClass = state.showAside ? 'closeAnimation' : 'openAnimation';
  }
};


export const actions = {
    toggleAside({commit}){
        commit("changeAnimatinClass");
            commit("toggleAside");
    },
};




export const getters = {
    getAsideStatus(state){
        return state.showAside;
    },
    getAnimationClass(state){
        return state.animationClass;
    }
}
