//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import axios from "axios";
//应用Vuex插件
Vue.use(Vuex)

const actions = {
    // 获取总数据
    getTotalData(context) {
        console.log(context)
        axios.get(
            // http://localhost:5800
            "http://395149j70j.zicp.vip:22581", {
                headers: {
                    'content-type': 'application/json;charset=utf-8',
                }
            })
            .then(res => {
                console.log(res)
                context.commit("GET_TOTAL_DATA", res)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    // 更改页数
    changeTheNumberOfPages(context, value) {
        context.commit('CHANGE_THE_NUMBER_OF_PAGES', value)
    }
}
const mutations = {
    GET_TOTAL_DATA(state, value) {
        state.totalData = value.data.results
        state.subData = value.data.results.slice(0, 5)
    },
    CHANGE_THE_NUMBER_OF_PAGES(state, value) {
        state.subData = state.totalData.slice(value * 5 - 5, value * 5)
    }
}
const state = {
    // 总数据
    totalData: [],
    // 子数据
    subData: []
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})

