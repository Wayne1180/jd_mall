//先引入mockjs模块
import Mock from 'mockjs'
//把JSON数据格式引入进来
import banner from './banner.json'
import floor from './floor.json'
import tall from './tall.json'
import three from './three.json'
import news from './news.json'
import crosswise from '@/mock/crosswise'

//mock数据：第一个参数请求地址  第二个参数：请求数据
Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })
Mock.mock("/mock/tall", { code: 200, data: tall })
Mock.mock("/mock/three", { code: 200, data: three })
Mock.mock("/mock/news", { code: 200, data: news })
Mock.mock("/mock/crosswise", { code: 200, data: crosswise })