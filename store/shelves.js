import Vue from 'vue'
export const ACTION_INIT = 'init_shelves'

export default {
    state: {
        shelves: []
    },
    mutations: {
        INIT(state, shelves) {
            Vue.set(state, 'shelves', shelves.carouselData.shelf)
        }
    },
    actions: {
        init_shelves({commit}) {
            fetch('/api/getJSON')
                .then(response => response.json())
                .then(jsonData => commit('INIT', jsonData))
        }
    }
}