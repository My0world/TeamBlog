
const user = {
    namespaced: true,

    //actions:处理action,可以手写自己的业务逻辑，也可以处理异步
    actions: {

    },

    //mutations:修改state的唯一手段
    mutations: {

    },

    //state:仓库存储数据的地方
    state: {
        userList: [{
            iconUrl: "./asset/2008030855/user/01.jpg",
            name: "林臻宇",
            stuId: "2008030855",
            class: "20软件工程8班",
            publishImage: [
                {
                    id: "001",
                    coverUrl: "./asset/2008030855/image/01.jpg",
                    title: "汽车",
                    imgTotal: "5",
                    time: "2022-12-5",
                    score: 552
                },
                {
                    id: "002",
                    coverUrl: "./asset/2008030855/image/02.jpg",
                    title: "自然风景",
                    imgTotal: "15",
                    time: "2022-12-2",
                    score: 502
                },
                {
                    id: "003",
                    coverUrl: "./asset/2008030855/image/03.jpg",
                    title: "食物",
                    imgTotal: "15",
                    time: "2022-12-3",
                    score: 152
                },
                {
                    id: "004",
                    coverUrl: "./asset/2008030855/image/04.jpg",
                    title: "城市风景",
                    imgTotal: "15",
                    time: "2022-12-3",
                    score: 50
                }

            ],
            publishPage: [
                {
                    id: "001",
                    coverUrl: "./asset/2008030855/page/01.jpg",
                    title: "原型和原型链",
                    text: `一、前言在js中，原型和原型链是一个很重要的知识点，只有理解了它，我们才能更深刻的理解js，在这里，我们将分成几个部分来逐步讲解。二、构造函数构造函数和普通函数本质上没什么区别，只不过使用了new关键字创建对象的函数，被叫做了构造函数。构造函数的首字母一般是大写，用以区分普通函数，当然不大写也不会有什么错误。`,
                    time: "2022-12-3",
                    score: 2
                },
                {
                    id: "002",
                    coverUrl: "./asset/2008030855/page/02.jpg",
                    title: "this的指向",
                    text:`this的概念：1.在js中，this的意思为“这个;当前”，是一个指针型变量，它动态指向当前函数的运行环境。2.在不同的场景中调用同一个函数，this的指向也可能会发生变化，但是它永远指向其所在函数的真实调用者；如果没有调用者，就指向全局对象window。`,
                    time: "2022-12-3",
                    score: 99
                },
                {
                    id: "003",
                    coverUrl: "./asset/2008030855/page/03.jpg",
                    title: "如何像我一样精通C++",
                    text:`一、C/C++入门阶段刚入门的时候我们主要是学习培养编程思维和动手能力，深刻理解面向过程和面向对象的思想方法，这对以后的程序员之路非常重要！所以学习语言更为重要：面向对象编程思想；类的封装，构造和析构、静态成员、对象管理；类的构造(有参构造函数、无参构造、拷贝构造、默认构造函数)和析构；对象动态管理、友元函数、友元类、操作符重载； C++编译器对象管理模型分析；类对象的动态管理(new/delete)；友元函数和友元类；运算符重载(一元运算符、二元运算符、运算符重载难点、项目开发中的运算符重载)；类的继承、多继承及其二义性、虚继承；多态(概念、意义、原理剖析、多态案例)；虚函数、纯虚函数、抽象类(面向抽象类编程思想案例)；函数模板、类模板，模板的继承。`,
                    time: "2022-12-3",
                    score: 26
                }

            ],
        }, {
            iconUrl: "./asset/2008030818/user/01.jpg",
            name: "梁庚大",
            stuId: "2008030818",
            class: "20软件工程8班",
            publishImage: [
                {
                    id: "005",
                    coverUrl: "./asset/2008030818/image/01.png",
                    title: "gaome",
                    imgTotal: "5",
                    time: "2022-12-5",
                    score: 599
                },
                {
                    id: "006",
                    coverUrl: "./asset/2008030818/image/02.jpg",
                    title: "机场风景",
                    imgTotal: "15",
                    time: "2022-12-2",
                    score: 51
                },
                {
                    id: "007",
                    coverUrl: "./asset/2008030818/image/03.jpg",
                    title: "小猫",
                    imgTotal: "15",
                    time: "2022-12-3",
                    score: 532
                },
                {
                    id: "008",
                    coverUrl: "./asset/2008030818/image/04.jpg",
                    title: "星空",
                    imgTotal: "15",
                    time: "2022-12-3",
                    score: 520
                }
            ],
            publishPage: [
                {
                    id: "004",
                    coverUrl: "./asset/2008030818/page/01.jpg",
                    title: "鱿鱼丝教你精通Vue",
                    text:`不管你想不想了解，你只需要大概知道，Vue就是和jQuery一样是一个前端框架，它的中心思想就是数据驱动，像远古时代的老前辈jQuery是结构驱动，什么意思呢，以前我们写代码时常用$('.dom').text('我把值改变了')，这种写法先要获得结构，然后再修改数据更新结构，而Vue的做法直接就是this.msg="我改变了"，然后msg就会同步到某个结构上，视图管理抽象为数据管理，而不是管理dom结构了。还有一点必须要知道的是，Vue是国人写的（尤雨溪），技术文档也妥妥的是中文，想到这我就有学习的动力。`,
                    time: "2022-12-3",
                    score: 232
                },
                {
                    id: "005",
                    coverUrl: "./asset/2008030818/page/02.jpg",
                    title: "作用域与作用域链",
                    text:`JavaScript 中有一个被称为作用域(Scope)的特性。虽然对于许多新手开发者来说，作用域的概念并不是很容易理解，本文我会尽我所能用最简单的方式来解释作用域和作用域链，希望大家有所收获！1. 什么是作用域：作用域是在运行时代码中的某些特定部分中变量，函数和对象的可访问性。换句话说，作用域决定了代码区块中变量和其他资源的可见性。可能这两句话并不好理解，我们先来看个例子：`,
                    time: "2022-12-3",
                    score: 234
                },
                {
                    id: "006",
                    coverUrl: "./asset/2008030818/page/03.jpg",
                    title: "如何精通微信小程序",
                    text:` 微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。本文将从注册，到语法，到应用，深层次剖析小程序的使用。`,
                    time: "2022-12-3",
                    score: 81
                }
            ],
        }, {
            iconUrl: "",
            name: "",
            sex: "",
            stuId: "",
            class: "",
            publishImage: [
                {
                    id: "",
                    coverUrl: "",
                    title: "",
                    imgTotal: "",
                    time: "",
                }
            ],
            publishPage: [
                {
                    id: "",
                    coverUrl: "",
                    title: "",
                    text: "",
                    time: "",
                }
            ],
        }]
    },

    //getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
    getters: {},
}
export default user