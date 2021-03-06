### 前言
作用域和作用域链说白了还是函数和对象之间的关系，作用域即执行环境
浏览器中存在全局执行环境的上下文变量window
node中存在全局执行环境的上下文对象global，模块的全局执行上下文对象module

下面是一道题目，输出打印的结果
```js
console.log('this',this); // node：window,浏览器：Global
console.log('window',window); // 浏览器全局对象：Window
console.log('global',global);// node全局对象：Global
console.log('module',module);// node模块对象：Module
console.log(exports) //node模块变量 空对象 {}
console.log(module.exports) // node模块变量 空对象 {}

```
```js
a=1
console.log(a); //1
console.log(window.a);//1
console.log(global.a);//1
```

### 作用域、作用域链 
作用域即变量当前的执行环境，在同一个作用域里下，所有变量可以随意访问，this指向当前执行环境（即作用域）的上下文对象。作用域分全局作用域和局部作用域，es6增加块级作用域。
- node中局部作用域（即模块作用域和函数作用域），全局作用域即global
- 浏览器中的局部作用域（即函数作用域），全局作用域即window
作用域链是由于局部作用域的嵌套而形成的链式结构
在《Javascript高级程序设计》一书中是这么解释作用域链的用途的。作用域链的用途即保证执行环境有权访问的所有变量和函数的有序访问。 

### 变量提升
变量提升和我们的全局变量(window或global)有关系，var定义变量时会存在变量提升,严格模式下不存在变量提升。  

JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。  
JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。  


以下两个示例是等价的
```js
a = 1
var a;
```
```js
var a;
a = 1;
```

### this绑定
我们知道函数调用有两种方式，第一种是直接调用，第二种是当作构造函数通过new来实例化。
函数也是变量。函数可以挂在全局对象上，也可以当作对象的属性  
例如我们在浏览器的环境中定义一个函数
this指向当前执行环境的上下文对象，浏览器中默认为window，node中默认为global
```js
function a(){
  console.log('a');
}

// 以下两种方式是等价的
a();
window.a();
```

this的绑定有以下几种可能  
1. 默认绑定（函数调用），默认指向全局作用域，例如foo(),this指向全局上下文对象（window或global）。
2. 隐式绑定（方法调用），当作对象的某一个方法，调用时this指向对象，例如obj.foo(),this指向obj。
3. 显式绑定，bind、call、apply，this指向第一个参数。
4. new绑定，this指向new出来的对象，例如const instance = new func(),this指向instance。

### 模拟实现bind、call
- myCall：改变this指向，并且执行函数
```js
/**
 * 
 * @param {*} context 需要绑定的对象
 * @param {*} args 参数数组 
 */
Function.prototype.myCall=function(context, ...args){
  context = context || window;
  // Function.prototype this为当前运行的函数
  // 让fn的上下文为 context
  context.fn = this;

  const ans = context.fn(...args);
  delete context.fn;
  return ans;
}
```
- myBind:改变this指向，不执行函数
```js
Function.prototype.myBind = function(context,...args){
  const fn = this;
  return function(){
    fn.call(...arguments,...args);
  }
}
```

### 问题汇总(FAQ)
- this的4中绑定方式？
- this隐式丢失
- 普通函数和箭头函数区别？
- 闭包
- call、apply和bind实现，如何深克隆一个函数？
- call或bind能改变箭头函数的this指向吗？为什么？
不能，箭头函数没有自己的this
![](https://img2020.cnblogs.com/blog/1347757/202012/1347757-20201224095608717-28916980.png)
- 变量提升
- node中exports和module.exports

### 参考  
- [什么是作用域链，什么是原型链，它们的区别，在js中它们具体指什么？](https://www.cnblogs.com/pssp/p/5204324.html)  
- [JS中的作用域和作用域链](https://www.cnblogs.com/leftJS/p/11067908.html)  
- [JavaScript 开发进阶：理解 JavaScript 作用域和作用域链](https://www.cnblogs.com/lhb25/archive/2011/09/06/javascript-scope-chain.html)  
- [深入理解this机制系列第一篇——this的4种绑定规则](https://www.cnblogs.com/xiaohuochai/p/5735901.html)
- [第 6 题：手写代码，简单实现call](https://github.com/airuikun/Weekly-FE-Interview/issues/6)
- [第 8 题：手写代码，简单实现bind](https://github.com/airuikun/Weekly-FE-Interview/issues/8)
- [MDN文档 箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)