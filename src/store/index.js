import Vue from 'vue'
import Vuex from 'vuex'
import userData from './modules/UserData'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { 
        userData 
    },
})
