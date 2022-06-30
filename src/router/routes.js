// //引入一级路由组件
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess';
// import Center from '@/pages/Center'

// //引入二级路由
// import MyOrder from '@/pages/Center/myOrder'
// import GroupOrder from '@/pages/Center/groupOrder'

//路由懒加载全写形式
const foo = () => {
    return import('@/pages/Search')
}

const car = () => {
    return import('@/pages/ShopCart')
}

//路由配置信息
export default
    [
        {
            path: "/home",
            component: () => import("@/pages/Home"),
            meta: { show: true }
        },
        {
            path: "/search/:keyword?",
            component: foo,
            meta: { show: true },
            name: 'search'
        },
        {
            path: "/login",
            component: () => import("@/pages/Login"),
            meta: { show: false }
        },
        {
            path: "/register",
            component: () => import("@/pages/Register"),
            meta: { show: false }
        },
        {
            path: '/detail/:skuid',
            component: () => import("@/pages/Detail"),
            meta: { show: true }
        },
        {
            name: 'addcartsuccess',
            path: '/addcartsuccess',
            component: () => import("@/pages/AddCartSuccess"),
            meta: { show: true }
        },
        {
            path: '/shopcart',
            component: car,
            meta: { show: true }
        },
        {
            path: '/trade',
            component: () => import("@/pages/Trade"),
            meta: { show: true },
            //路由独享守卫
            beforeEnter: (to, from, next) => {
                //去交易页面，必须是从购物车而来
                if (from.path == '/shopcart') {
                    next()
                } else {
                    //其他的路由组件而来，停留在当前
                    next(false)
                }
            }
        },
        {
            path: '/pay',
            component: () => import("@/pages/Pay"),
            meta: { show: true },
            beforeEnter: (to, from, next) => {
                if (from.path == '/trade') {
                    next()
                } else {
                    next(false)
                }
            }
        },
        {
            path: '/paysuccess',
            component: () => import("@/pages/PaySuccess"),
            meta: { show: true }
        },
        {
            path: '/center',
            component: () => import("@/pages/Center"),
            meta: { show: true },
            //二级路由组件
            children: [
                {
                    path: 'myorder',
                    component: () => import("@/pages/Center/myOrder"),
                },
                {
                    path: 'grouporder',
                    component: () => import("@/pages/Center/groupOrder"),
                },
                {
                    path: '/center',
                    redirect: '/center/myorder'
                }
            ]
        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path: '/',
            redirect: "/home"
        }
    ]
