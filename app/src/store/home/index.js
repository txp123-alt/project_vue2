//home的小仓库
import {reqCategoryList} from "@/api";

const state = {
    //三级联动列表
    categoryList:[],
}
const actions = {
    //加载三级联动数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if (result.code === 200){
            commit('CATEGORYLIST',result.data)
        }
    },
}
const mutations = {
    CATEGORYLIST(state,value){
        state.categoryList = value
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}