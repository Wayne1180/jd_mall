import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api'
//封装游客身份模块uuid--->生成一个随机字符串（不能再变了）
import { getUUID } from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    uuid_token: getUUID()
};
const actions = {
    //获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    //将产品添加到购物车中
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        //加入购物车返回的结果
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code == 200) {
            return "ok"
        } else {
            //代表加入购物车失败
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const getters = {
    //路径导航简化的数据
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    //简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    //产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || {}
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}