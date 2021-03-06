[原文地址](https://www.sitepoint.com/understanding-es6-modules/)

### 这篇文章探索ES6 modules，在编译器的帮助下展示他们如何被使用到今天

几乎每种语言都有模块的概念- 一种在另一个文件中包含功能性的声明的文件。一般的，开发者创建一个封装好的表示处理相关任务的代码库。这个库可以被其他应用或者其他模块引用。

模块的益处：
1. 代码可以被分割成更小的独立功能文件
2. 同一个模块可以被多个应用共享
3. 理想情况，模块不需要其他开发者检查其可用性，因为他们已经被证实可以运行。
4. 代码里引用一个模块可以理解这是一个依赖。如果这个模块文件修改了或者移动了，问题会立马显现。
5. 模块代码通常帮助我们彻底根除命名冲突。module1中的x()函数不会与modules2中的x()函数发生冲突。使用了类似命名空间的选项，因此调用变成了module1.x()和module2.x().

## javascript的模块在哪里
几年前开始web开发的人会惊奇的发现在JavaScript中没有模块的概念。在另一个js文件中是不可能直接引用或者包含一个JavaScript文件的。因此，开发人员寻找其他选择。

### 多个html\<script\>标签
html可以通过多个html\<script\>标签加载任意个JavaScript文件
```
<script src="lib1.js"></script>
<script src="lib2.js"></script>
<script src="core.js"></script>
<script>
console.log('inline code');
</script>
```
[在2018年，平均每个网页使用了25个分割的scripts](http://httparchive.org/trends.php#bytesJS&reqJS),但这不是一个切实的解决方案：

- 每个脚本会发起一个新的HTTP请求，这会影响页面的性能。[HTTP/2](https://www.sitepoint.com/what-is-http2/)在某种程度上缓解了这个问题，但这对其他域（例如CDN）上引用的脚本无济于事
- 每个脚本在运行时都会阻塞进一步的处理
- 依赖管理是一个人工处理的过程.在代码中，如果lib1.js引用lib2.js的代码，这部分代码可能出错，因为它没有加载。这有可能损害深层次的JavaScript程序。
- 函数可能覆盖其他函数，除非使用合适的[模块模式](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#designpatternsjavascript)。早期的JavaScript库因使用全局函数名称或覆盖原生方法而臭名昭著。

## 脚本级联
解决多个\<script\>标记问题的一种解决方案是将所有JavaScript文件连接为一个大文件。这解决了一些性能和依赖性管理问题，但可能会导致手动构建和测试步骤

## 模块装载机
诸如[RequireJS](http://requirejs.org/)和[SystemJS](https://github.com/systemjs/systemjs)之类的系统提供了一个库，用于在运行时加载和命名其他JavaScript库。 必要时，使用Ajax方法加载模块。该系统可以提供帮助，但是对于较大的代码库或将标准\<script\>标记添加到组合中的站点，可能会变得复杂

## 模块捆绑器，预处理器和编译器
捆绑软件引入了一个编译步骤，以便在构建时生成JavaScript代码。处理代码以包括依赖关系，并生成单个ES5跨浏览器兼容的串联文件。流行的选项包括[Babel](https://babeljs.io/)，[Browserify](http://browserify.org/)，[webpack](https://webpack.github.io/)和更多常规任务像[Grunt](https://gruntjs.com/)和[Gulp](https://gulpjs.com/)之类的跑步者。

JavaScript构建过程需要一些努力，但是有很多好处：

- 处理是自动化的，因此减少了人为错误的可能性。
- 进一步的处理可能会减少代码，删除调试命令，缩小生成的文件等。
- Transpiling允许您使用其他语法，例如[TypeScript](https://www.typescriptlang.org/)或[CoffeeScript](http://coffeescript.org/)。

## ES6模块
上面的选项引入了各种竞争的模块定义格式。广泛采用的语法包括：

- CommonJS — module.exports，并要求在Node.js中使用语法
- 异步模块定义（AMD）
- 通用模块定义（UMD）。

因此，在ES6（ES2015）中提出了一个单一的本地模块标准。

默认情况下，ES6模块中的所有内容都是私有的，并以严格模式运行（无需“严格使用”）。公共变量，函数和类使用export公开。例如：
```js
// lib.js
export const PI = 3.1415926;

export function sum(...args) {
  log('sum', args);
  return args.reduce((num, tot) => tot + num);
}

export function mult(...args) {
  log('mult', args);
  return args.reduce((num, tot) => tot * num);
}

// private function
function log(...msg) {
  console.log(...msg);
}
```
或者，可以使用单个导出语句。例如：
```js
// lib.js
const PI = 3.1415926;

function sum(...args) {
  log('sum', args);
  return args.reduce((num, tot) => tot + num);
}

function mult(...args) {
  log('mult', args);
  return args.reduce((num, tot) => tot * num);
}

// private function
function log(...msg) {
  console.log(...msg);
}

export { PI, sum, mult };
```

然后使用import将项目从一个模块中拉到另一个脚本或模块中：
```js
// main.js
import { sum } from './lib.js';

console.log( sum(1,2,3,4) ); // 10
```
在这种情况下，lib.js与main.js位于同一文件夹中。可以使用绝对文件引用（以/开头），相对文件引用（以./或../开头）或完整URL。

一次可以导入多个项目：
```js
import { sum, mult } from './lib.js';

console.log( sum(1,2,3,4) );  // 10
console.log( mult(1,2,3,4) ); // 24
```
可以为导入使用别名来解决命名冲突：

```js
import { sum as addAll, mult as multiplyAll } from './lib.js';

console.log( addAll(1,2,3,4) );      // 10
console.log( multiplyAll(1,2,3,4) ); // 24
```
最后，可以通过提供名称空间来导入所有公共项目：
```js
import * as lib from './lib.js';

console.log( lib.PI );            // 3.1415926
console.log( lib.add(1,2,3,4) );  // 10
console.log( lib.mult(1,2,3,4) ); // 24
```

## 在浏览器中使用ES6模块
在撰写本文时，在基于Chromium的浏览器（v63 +），Safari 11+和Edge 16+中，[ES6模块受支持](https://caniuse.com/#feat=es6-module)。 Firefox支持将在60版中提供（它位于v58 +中的about：config标志的后面）。

必须通过在\ <script \>标记中设置type =“ module”属性来加载使用模块的脚本。例如：
```js
<script type="module" src="./main.js"></script>
```
或内联：
```js
<script type="module">
  import { something } from './somewhere.js';
  // ...
</script>
```
无论模块在页面或其他模块中被引用多少次，模块都会被解析一次。

## 服务器注意事项
模块必须使用MIME类型application/javascript提供服务。大多数服务器将自动执行此操作，但对动态生成的脚本或.mjs文件保持警惕（[请参阅下面的Node.js部分](https://www.sitepoint.com/understanding-es6-modules/#usinges6modulesinnodejs))。

常规\<script\>标记可以获取其他域上的脚本，但是使用跨域资源共享（CORS）来获取模块。因此，不同域上的模块必须设置适当的HTTP标头，例如Access-Control-Allow-Origin：*。

最后，除非将crossorigin =“ use-credentials”属性添加到\ <script \>标记，并且响应中包含标头Access-Control-Allow-Credentials：true，否则模块将不会发送Cookie或其他标头凭据。

## 模块执行被推迟
\<script defer \>属性将延迟脚本执行，直到文档已加载和解析为止。默认情况下，模块(包括嵌入式脚本)会延迟。例子：
```html
<!-运行第二个->
<script type ="module">
  // do something...
</script>

<!-运行第三个->
<script defer src ="c.js"> </script>

<!-首先运行->
<script src ="a.js"> </script>

<!-运行第四个->
<script type ="module" src ="b.js"> </script>
```

## 模块背后
没有模块支持的浏览器将不会运行type="module"脚本。可以为备用脚本提供nomodule属性，而模块兼容的浏览器会忽略该属性。例如：
```html
<script type="module" src="runs-if-module-supported.js"></script>
<script nomodule src="runs-if-module-not-supported.js"></script>
```
## 您应该在浏览器中使用模块吗？
浏览器支持正在增长，但切换到ES6模块可能还为时过早。目前，最好使用模块捆绑器来创建一个可在任何地方使用的脚本。

## 在Node.js中使用ES6模块
当Node.js在2009年发布时，对于任何运行时不提供模块来说都是不可思议的。 采用CommonJS，这意味着可以开发Node软件包管理器npm。 从那时起，使用量呈指数增长。

CommonJS模块的编码方式类似于ES2015模块。 使用module.exports而不是export：
```js
// lib.js
const PI = 3.1415926;

function sum(...args) {
  log('sum', args);
  return args.reduce((num, tot) => tot + num);
}

function mult(...args) {
  log('mult', args);
  return args.reduce((num, tot) => tot * num);
}

// private function
function log(...msg) {
  console.log(...msg);
}

module.exports = { PI, sum, mult };
```
require（而不是import）用于将此模块拉入另一个脚本或模块：
```js
const { sum, mult } = require('./lib.js');

console.log( sum(1,2,3,4) );  // 10
console.log( mult(1,2,3,4) ); // 24
```

require还可以导入所有项目：
```js
const lib = require('./lib.js');

console.log( lib.PI );            // 3.1415926
console.log( lib.add(1,2,3,4) );  // 10
console.log( lib.mult(1,2,3,4) ); // 24
```
所以ES6模块很容易在Node.js中实现，对吗？ 呃没有。

ES6模块位于[Node.js 9.8.0+中的标志后面](https://nodejs.org/api/esm.html)，直到至少版本10才能完全实现。 语法，它们以根本不同的方式工作：

- 在执行代码之前，已预先解析了ES6模块，以解决进一步的导入问题。
- CommonJS模块在执行代码时按需加载依赖项。
在上面的示例中没有什么区别，但是请考虑以下ES2015模块代码：
```js
// ES2015 modules

// ---------------------------------
// one.js
console.log('running one.js');
import { hello } from './two.js';
console.log(hello);

// ---------------------------------
// two.js
console.log('running two.js');
export const hello = 'Hello from two.js';
```
ES2015输出
```js
running two.js
running one.js
hello from two.js
```
使用CommonJS编写的类似代码：
```js
// CommonJS modules

// ---------------------------------
// one.js
console.log('running one.js');
const hello = require('./two.js');
console.log(hello);

// ---------------------------------
// two.js
console.log('running two.js');
module.exports = 'Hello from two.js';
```

CommonJS输出
```js
running one.js
running two.js
hello from two.js
```

在某些应用程序中，执行顺序可能很关键，如果将ES2015和CommonJS模块混合在同一文件中，会发生什么情况？ 要解决此问题，Node.js将仅允许文件扩展名为.mjs的ES6模块。 扩展名为.js的文件将默认为CommonJS。 这是一个简单的选项，可消除大部分复杂性，并有助于代码编辑器和lint。

## 是否应该在Node.js中使用ES6模块？
ES6模块仅适用于Node.js v10及更高版本（于2018年4月发布）。 转换现有项目不太可能带来任何好处，并且会使应用程序与Node.js的早期版本不兼容。

对于新项目，ES6模块提供了CommonJS的替代方法。 语法与客户端编码相同，并且可以提供更容易的同构JavaScript路由，该JavaScript可在浏览器或服务器上运行。

## 模块竞争
标准化的JavaScript模块系统花了很多年才能实现，甚至花了更长的时间才能实现，但问题已得到纠正。从2018年中期开始，所有主流浏览器和Node.js都支持ES6模块，尽管在每个人升级时都可能会有切换滞后的情况。

立即学习ES6模块，以使您明天的JavaScript开发受益。