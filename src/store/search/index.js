import { reqGetSearchInfo } from "@/api"
//search模块的小仓库
const state = {
    //仓库初始状态
    searchList: {}
}
const actions = {
    //获取search模块数据
    async getSearchList({ commit }, params = {}) {
        //params形参：是当用户派发actions的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}