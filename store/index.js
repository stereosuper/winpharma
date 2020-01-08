export const state = () => ({
    loading: true,
    ready: false
});

// export const getters = () => {};

export const mutations = {
    setLoading(state, loading) {
        state.loading = loading;
    },
    setReady(state, ready) {
        state.ready = ready;
    }
};

// export const actions = {};
