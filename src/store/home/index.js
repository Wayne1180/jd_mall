import { reqCategoryList, reqGetBannerList, reqFloorList, reqGetTallList, reqThreeList, reqNewsList } from "@/api"
//home模块的小仓库
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
    tallList: [],
    threeList: [],
    newsList: []
}
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    },
    async getTallList({ commit }) {
        let result = await reqGetTallList()
        if (result.code == 200) {
            commit('GETTALLLIST', result.data)
        }
    },
    async getThreeList({ commit }) {
        let result = await reqThreeList()
        if (result.code == 200) {
            commit('GETTHREELIST', result.data)
        }
    },
    async getNewsList({ commit }) {
        let result = await reqNewsList()
        if (result.code == 200) {
            commit('GETNEWSLIST', result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
        state.categoryList.length = 16
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    },
    GETTALLLIST(state, tallList) {
        state.tallList = tallList
    },
    GETTHREELIST(state, threeList) {
        state.threeList = threeList
    },
    GETNEWSLIST(state, newsList) {
        state.newsList = newsList
    }
}
export default {
    state,
    actions,
    mutations
}