export const counterStore = {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    getters: {
        double(store) {
            return store.counter * 2;
        },
    },
    actions: {
        increaseCounter(store) {
            store.commit('increaseCounter', { count: 1 });
            this.dispatch('statusStore/setAction', 'Plus');
        },
        decreaseCounter(store) {
            store.commit('increaseCounter', { count: -1 });
            this.dispatch('statusStore/setAction', 'Minus');
        },
        resetCounter(store) {
            store.commit('resetCounter');
            this.dispatch('statusStore/setAction', 'Reset');
        }
    },
    mutations: {
        increaseCounter: (state, payload = {}) => {
            let { count = 1 } = payload;
            state.counter += count;
        },
        resetCounter: (state, payload = {}) => {
            state.counter = 0;
        }
    }
};
