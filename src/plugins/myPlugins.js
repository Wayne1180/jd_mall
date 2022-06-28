import { options } from "less";
import Vue from "vue";

//Vue插件一定暴露一个对象
let myPlugins = {}
myPlugins.install = function () {
    console.log('调用');
    Vue.directive(options.name, (element, params) => {
        element.innerHTML = params.value.toUpperCase()
    })
}

export default myPlugins