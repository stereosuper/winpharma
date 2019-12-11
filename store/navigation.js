export const state = () => ({
    navigationActivated: false
});

export const mutations = {
    toggleBurger(state, navigationActivated) {
        state.navigationActivated = navigationActivated;
    }
};
