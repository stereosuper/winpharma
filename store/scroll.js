export const state = () => ({
    firstScrollTop: 0,
    scrollTop: 0,
    direction: null
});
export const mutations = {
    setFirstScrollTop(state, firstScrollTop) {
        state.firstScrollTop = firstScrollTop;
        state.scrollTop = firstScrollTop;
    },
    setScrollTop(state, scrollTop) {
        state.scrollTop = scrollTop;
    },
    setDirection(state, direction) {
        state.direction = direction;
    }
};

export const actions = {
    changeScroll(store, scrollTop) {
        const direction = scrollTop - store.state.scrollTop > 0 ? 'down' : 'up';
        store.commit('setScrollTop', scrollTop);
        store.commit('setDirection', direction);
    }
};
