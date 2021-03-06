### 事件循环与消息队列  
因为js是单线程脚本语言，一般情况下代码是同步执行。也就是说js执行代码是一行一行向下执行的，前面没有执行完成是不会执行后面的代码的。  
+ 同步和异步的区别其实就在于需不需要排队的问题  
  - 同步：所有任务一视同仁，都得排队，先来后到；  
  - 异步：可以按照一定规则（不至于乱套）插队执行；  
+ 事件循环和消息队列怎么理解  
  - 事件循环：单线程脚本语言javascript处理任务的一种执行机制，通过循环来执行任务队列里的任务。这个执行过程形象的称之为事件循环  
  - 消息队列：js为单线程脚本语言，执行任务时需要排队，每当有新的任务来临时就加到这个队列后面。这个队列就叫消息队列或者任务队列

### 浏览器与Node的事件循环有何区别?  
+ 浏览器事件循环过程  
```
  当某个宏任务执行完后,会查看是否有微任务队列。
  如果有，先执行微任务队列中的所有任务，
  如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。
  栈空后，再次读取微任务队列里的任务，依次类推。
```
+ node事件循环过程  
```
1.外部输入数据
2.轮询阶段(poll)
3.检查阶段(check)
3.关闭事件回调阶段(close callback)
4.定时器检测阶段(timer)
5.I/O事件回调阶段(I/O callbacks)
6.闲置阶段(idle, prepare)
7.轮询阶段（按照该顺序反复运行）...

timers 阶段：这个阶段执行timer（setTimeout、setInterval）的回调
I/O callbacks 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调
idle, prepare 阶段：仅node内部使用
poll 阶段：获取新的I/O事件, 适当的条件下node将阻塞在这里
check 阶段：执行 setImmediate() 的回调
close callbacks 阶段：执行 socket 的 close 事件回调

注意：
上面六个阶段都不包括 process.nextTick(),这个函数其实是独立于事件循环之外的，它有一个自己的队列，当每个阶段完成后，
如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他微任务执行
```

### 微任务和宏任务  
在js中，任务可以分为同步任务和异步任务，异步任务又可以细分为微任务和宏任务。有了这些划分，就可以保证所有任务都有条不紊的执行下去，总的来说就是给要执行的异步任务定了执行规则、划分了优先级。
在总结宏任务与微任务时，我们先要知道我们哪些情况下可能会执行异步操作（未来某个时间执行任务）；然后要知道宏任务与微任务是怎么区分的，哪些属于宏任务，哪些属于微任务；最后我们要知道宏任务与微任务是通过什么规则来配合执行的。  

+ 可能存在异步执行的情况  
  1. 回调函数 callback  
  2. Promise/async await  
  3. Generator 函数  
  4. 事件监听  
  5. 发布/订阅  
  6. 计时器  
  7. requestAnimationFrame  
  8. MutationObserver  
  9. process.nextTick  
  10. I/O  

+ 宏任务：
  - 同步任务，例如script里的除了异步的代码  
  - I/O, 比如文件读写、数据库数据读写等等  
  - [window.setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout)  
  - [window.setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)   
  - [window.setImmediate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate)  
  - [window.requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame)   

+ 微任务：
  - [Promise.then catch finally](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)  
  - [Generator 函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)  
  - [async await](https://es6.ruanyifeng.com/#docs/async) 和promise是一样的，属于微任务     
  - [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)  
+ 注：
  - [process.nextTick](http://nodejs.cn/api/process.html#process_process_nexttick_callback_args)(它指定的任务总是发生在所有异步任务之前)，网上几乎无一例外说这是微任务，可是只要存在这个，process.nextTick就会在所有异步任务执行之前执行  
  - 事件监听, 比如addeventlistener。宏任务待验证  
  - 发布/订阅  宏任务待验证  
  - 有人说同步任务属于宏任务，关于这中说法我觉得不太准确，应该说同步任务的执行优先级是高于异步任务  

+ 任务执行过程  
  1. 所有任务都在主进程上执行，异步任务会经历2个阶段 Event Table和Event Queue    
  2. 同步任务在主进程排队执行，异步任务（包括宏任务和微任务）在事件队列排队等待进入主进程执行  
  3. 遇到宏任务推进宏任务队列，遇到微任务推进微任务队列（宏任务队列的项一般对应一个微任务队列，有点像一个大哥带着一群小马仔，这就组成一组异步任务。如果有嵌套那就会有多个大哥小马仔）  
  4. 执行宏任务，执行完宏任务，检查有没有当前层的微任务（大哥带着小马仔逐步亮相。。。）  
  5. 继续执行下一个宏任务，然后执行对应层次的微任务，直到全部执行完毕（下一个大哥带着他的小马仔亮相。。。）  

+ 盗图两张
  - 同步任务与异步任务执行流程  
  ![同步任务与异步任务执行流程](https://upload-images.jianshu.io/upload_images/23744478-43a2aeb9fe47b636.png)  
  - 微任务与宏任务执行流程  
  ![微任务与宏任务执行流程](https://upload-images.jianshu.io/upload_images/23744478-4d8b4c2aaa09dcdf.png)  

### 举个栗子  
下面举个例子加深印象，例子来自网络。当存在多个不同的异步操作时，看宿主环境（node、浏览器等等）是怎么执行的,可以把下面代码或者练习题的代码拷出来，利用浏览器断点看下执行过程。  

```js
//因为涉及到process 所以应该在node环境下执行  


console.log('1') //主进程 执行 
setTimeout(function() {
   console.log('2')   //因为setTimeout是宏任务，所以加入宏任务队列1，['2']
   process.nextTick(function() {
     console.log('3') //因为 process.nextTick是微任务，所以加入微任务队列2，['4','3']
  })
  new Promise(function(resolve) {
      console.log('4') //因为此处代码执行不属于异步，所以直接推入主程序执行，['4']
      resolve()
  }).then(function() {
    console.log('5') // 因为promise then 是微任务，所以推入微任务队列2,['4','3','5']
  })
},0)
// process.nextTick总是发生在所有异步任务之前
process.nextTick(function() {
  console.log('6')  //因为process.nextTick是微任务，所以推入微任务队列1,['6']
  new Promise(function(resolve) {
    console.log('7')//因为此处代码执行不属于异步，所以直接推入主程序执行，['6','7']
    resolve()
  }).then(function() {
    console.log('8')//因为 promise then 是微任务，所以推入微任务队列1,['6','7','8']
  })
  setTimeout(function() {
    console.log('9')//因为setTimeout是宏任务，所以推入宏任务队列2 ，['9']
    process.nextTick(function() {
      console.log('10')//因为process.nextTick是微任务，所以推入微任务队列3，['9','11','12','10']
    })
    new Promise(function(resolve) {
      console.log('11')//因为此处代码执行不属于异步，所以直接推入主程序执行,['9','11']
      resolve()
      console.log('12')////因为此处代码执行不属于异步，所以直接推入主程序执行,['9','11','12']
    }).then(function() {
      console.log('13')//因为 promise then 是微任务，所以推入微任务队列3,['9','11','12','10','12']
    })
  },0)
})

//打印输出
// 1
// 6
// 7
// 8
// 2
// 4
// 3
// 5
// 9
// 11
// 12
// 10
// 13
```
得出结论：微任务优先级大小：process.nextTick > setTimeout

### 练习题  
字节笔试题
  ```js
  async function async1() {        
    console.log('async1 start');
    await async2();
    console.log('async1 end');
  }
  async function async2() {
    console.log('async2'); 
  }

  console.log('script start'); 
  setTimeout(function() {
      console.log('setTimeout');
  }, 0);  
  async1();
  new Promise(function(resolve) {
      console.log('promise1');
      resolve();
    }).then(function() {
      console.log('promise2');
  });
  console.log('script end');
  ```
### 参考  
* [并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)  
* [Node探秘之事件循环（1）--几个基本要素](https://www.jianshu.com/p/d070e11ffa4d)  
* [Node探秘之事件循环（2）--setTimeout/setImmediate/process.nextTick的差别](https://www.jianshu.com/p/837b584e1bdd)  
* [js 宏任务和微任务](https://www.cnblogs.com/wangziye/p/9566454.html)  
* [微任务、宏任务与Event-Loop](https://www.cnblogs.com/jiasm/p/9482443.html)  
* [JavaScript的宏任务与微任务](https://juejin.im/post/5caac21de51d452b66462649)  
* [这一次，彻底弄懂 JavaScript 执行机制](https://mp.weixin.qq.com/s/9b08_-yMOmVCiIxSKUiXFQ)  
* [JS 事件循环原理与异步机制解析](https://github.com/Jecyu/JS-Event-Loop)  
* [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)  
* [Javascript异步编程的4种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)  
* [浏览器与Node的事件循环(Event Loop)有何区别?](https://juejin.im/post/5c337ae06fb9a049bc4cd218)  
* [浏览器和Node事件循环的区别](https://www.jianshu.com/p/b221e6e36dcb)
