import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [],
        columns: [
            { icon: 'coffee', name: 'Picture', selected: true, field: 'picture' },
            { icon: 'coffee', name: 'Name', selected: true, field: 'name.first' },
            { icon: 'coffee', name: 'Gender', selected: true, field: 'gender' },
            { icon: 'coffee', name: 'Location', selected: true, field: 'location' },
            { icon: 'coffee', name: 'Email', selected: true, field: 'email' },
            { icon: 'coffee', name: 'Login', selected: true, field: 'login' },
            { icon: 'coffee', name: 'Phone', selected: true, field: 'phone' },
        ]
    },
    getters : {
        users : state => {
            return state.users
        },
        columns: state => {
            return state.columns
        }
    },
    mutations: {
        setUsers : (state,payload) => {
            state.users = payload
        },
        setFilter: (state, payload) => {
            state.columns[payload] = !state.columns[payload];
        }
    },
    actions : {
        getUsers: async (context) => { //payload
            let { data } = await Axios.get('https://randomuser.me/api/?results=10')
            context.commit('setUsers', data.results)
        }
    }  
})