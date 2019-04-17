import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [],
        columns: [            
            { icon: 'coffee', name: 'Title', selected: true, field: 'name.title' },
            { icon: 'coffee', name: 'First Name', selected: true, field: 'name.first' },
            { icon: 'coffee', name: 'Last Name', selected: true, field: 'name.last' },            
            { icon: 'coffee', name: 'Gender', selected: true, field: 'gender' },           
            { icon: 'coffee', name: 'Email', selected: true, field: 'email' },
            { icon: 'coffee', name: 'Cell', selected: true, field: 'cell' },
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
        getUsers: async (context) => { 
            let { data } = await Axios.get('https://randomuser.me/api/?results=10')        
            context.commit('setUsers', data.results)
        }
    }  
})