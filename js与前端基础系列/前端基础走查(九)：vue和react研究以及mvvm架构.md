### vue实现原理
mvvm和数据双向绑定

mvvm，观察者模式

数据双向绑定原理： 数据劫持

依赖收集
实现过程主要包括依赖收集，数据绑定。
- vue2,通过Object.defineProperty劫持对象get set属性，来完成数据的自动更新
- vue3,通过使用es6 proxy方式代理目标对象，监听对象属性的更新

**proxy与reflect**


### 实现一个简易的vue
思路：mvvm和数据双向绑定

### react实现原理
通过diff算法对比新旧两个虚拟DOM，状态的批量更新

class component
react hooks

### 实现一个简易的react


### mvvm架构原理
数据绑定实现方式
1. 发布者-订阅者模式（backbone.js）

2. 脏值检查（angular.js）

3. 数据劫持（vue.js）

### 手写一个mvvm架构

### 问题汇总(FAQ)
* vue如何收集依赖
* new Vue()发生了什么？
* vue nextTick()如何实现的？
* react setState()同步执行还是异步执行
* react shouldComponentUpdate如何使用，业务优化场景
* react和vue的diff算法的异同
* react hoc与minix的差别与优劣



### 参考
- [剖析Vue实现原理 - 如何实现双向绑定mvvm](https://github.com/DMQ/mvvm)
- [react基本原理及性能优化](https://segmentfault.com/a/1190000015648248)
- [ECMAScript 6 入门 Proxy](https://es6.ruanyifeng.com/#docs/proxy)
- [ECMAScript 6 入门 Reflect](https://es6.ruanyifeng.com/#docs/reflect)


