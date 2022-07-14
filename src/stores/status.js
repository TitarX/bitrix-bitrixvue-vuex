export const statusStore = {
    namespaced: true,
    state() {
        return {
            lastAction: 'None'
        }
    },
    actions: {
        setAction(store, payload) {
            const action = payload.toString();
            store.commit('setAction', action);
        },
    },
    mutations: {
        setAction(state, action) {
            state.lastAction = action;
        }
    }
};