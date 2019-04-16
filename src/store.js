import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [],
        columns: [
            { icon: '', name: 'Picture', selected: false, field: 'picture' },
            { icon: '', name: 'Name', selected: false, field: 'name.first' },
            { icon: '', name: 'Gender', selected: false, field: 'gender' },
            { icon: '', name: 'Location', selected: false, field: 'location' },
            { icon: '', name: 'Email', selected: false, field: 'email' },
            { icon: '', name: 'Login', selected: false, field: 'login' },
            { icon: '', name: 'Phone', selected: false, field: 'phone' },
        ]
    },
    getters : {
        users : state => {
            return state.users
        },
        columns: state => {
            return state.columns
        },
        suma: state => { 
            return 1000;
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