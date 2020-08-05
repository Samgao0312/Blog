# 学习帮助
 - ES 6教程：http://es6.ruanyifeng.com/
 - Babel： https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015,react,stage-2&targets=&browsers=&builtIns=false&debug=false&code=



# Default Parameters（默认参数）

ES5：
```javascript
var link = function (height, color, url) {  
    var height = height || 50;  
    var color = color || 'red';  
    var url = url || 'http://azat.co';  
    ...  
} 
```

ES6: 直接写在参数里
```javascript
var link = function(height = 50, color = 'red', url = 'http://azat.co') {  
  ...  
}
```



# Template Literals（模板对象）

在字符串里面输出变量

ES5：
```javascript
var name = 'Your name is ' + first + ' ' + last + '.';  
var url = 'http://localhost:3000/api/messages/' + id;  
```

ES6：，使用新的语法 $ {NAME}，并把它放在反引号里：
```javascript
var name = 'Your name is ${first} ${last}.';
var url = 'http://loalhost:3000/api/messages/${id}';
```
**好处：** 这里的$ {NAME}直接当做字符串用，无需写加号


## 模板字符串

 - 就是这种形式`${varible}`, 在以往的时候我们在连接字符串和变量的时候需要使用这种方式`'string' + varible + 'string'`（即字符串拼接）， 但是有了模版语言后，我们可以使用`string${varible}string`这种进行连接。基本用途有如下:

 1. 基本的字符串格式化，将表达式嵌入字符串中进行拼接，用`${}`来界定。

```javascript
//es5 
var name = 'lux';
console.log('hello' + name);

//es6
const name = 'lux';
console.log(`hello ${name}`);  //hello lux
```


2. 在ES5时我们通过`反斜杠(\)`来做多行字符串或者字符串一行行拼接，`ES6反引号(``)`直接搞定。

```javascript
//ES5
var template = "hello \
world";
console.log( template );  // hello world

//ES6
const template = `hello
world`;
console.log( template ); 
// hello
// world
```

## 拓展：字符串的其他方法

```javascript
// 1.includes：判断是否包含然后直接返回布尔值
let str = 'hahay'
console.log(str.includes('y')) // true

// 2.repeat: 获取字符串重复n次
let s = 'he'
console.log(s.repeat(3)) // 'hehehe'
```

#  spread (扩展运算符）
```js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

```




# Multi-line Strings （多行字符串）

ES5：
```javascript
var roadPoem = 'Then took the other, as just as fair,nt'  
    + 'And having perhaps the better claimnt'  
    + 'Because it was grassy and wanted wear,nt'  
    + 'Though as for that the passing therent'  
    + 'Had worn them really about the same,nt';  
var fourAgreements = 'You have the right to be you.n  
    You can only be you when you do your best.'; 
```

ES6: 反引号就可以啦！
```javascript
var roadPoem = `Then took the other, as just as fair, 
    And having perhaps the better claim 
    Because it was grassy and wanted wear  
    Though as for that the passing theren 
    Had worn them really about the same,`;  
var fourAgreements = `You have the right to be you.n  
    You can only be you when you do your best.`; 
```

**好处：**直接一个反引号，将所有的字符串放进去即可，中介随意换行，好清爽！



# Destructuring Assignment （解构赋值）

下边例子中，house 和 mouse是 key，同时 house 和 mouse 也是一个变量。

ES5：
```javascript
var data = $('body').data(), // data has properties house and mouse  
    house = data.house,  
    mouse = data.mouse;  
```

以及在node.js中用ES5是这样：
```javascript
var jsonMiddleware = require('body-parser').jsonMiddleware ;  
var body = req.body, // body has username and password  
username = body.username,  
password = body.password;
```

ES6：
```javascript
var {house,mouse} = $('body').data(); //we'll get house and mouse variables 
var {jsonMiddleware} = require('body-parser');
var {username,password} = req.body;
```

在数组中是这样的：
```javascript
var [col1,col2] = $('.column'),
    [line1,line2,line3, ,line5] = file.split('n');
```

**好处：**使用{}省去了写对象的属性的步骤，当然这个{}中的变量是与对象的属性名字保持一致的情况下。


# Enhanced Object Literals （增强的对象字面量）

使用对象文本可以做许多让人意想不到的事情！通过ES6，我们可以把ES5中的JSON变得更加接近于一个类。

下面是一个典型ES5对象文本，里面有一些方法和属性：
```javascript
var serviceBase = {port: 3000, url: 'azat.co'},  
    getAccounts = function(){return [1,2,3]};  
var accountServiceES5 = {  
  port: serviceBase.port,  
  url: serviceBase.url,  
  getAccounts: getAccounts,  
  toString: function() {  
      return JSON.stringify(this.valueOf());  
  },  
  getUrl: function() {return "http://" + this.url + ':' + this.port},  
  valueOf_1_2_3: getAccounts()  
}  
```

如果我们想让它更有意思，我们可以用Object.create从serviceBase继承原型的方法：
```javascript
var accountServiceES5ObjectCreate = Object.create(serviceBase)  
// Object.create() 方法创建一个拥有指定原型和若干个指定属性的对象。
var accountServiceES5ObjectCreate = {  
  getAccounts: getAccounts,  
  toString: function() {  
    return JSON.stringify(this.valueOf());  
  },  
  getUrl: function() {return "http://" + this.url + ':' + this.port},  
  valueOf_1_2_3: getAccounts()  
} 
```

ES6的对象文本中：既可以直接分配getAccounts: getAccounts,也可以只需用一个getAccounts

```javascript
var serviceBase = {port: 3000, url: 'azat.co'},
getAccount = function(){return [1,2,3]};
var accountService = {
    __proto__: serviceBase, //通过proto设置属性
    getAccount, // 既可以直接分配getAccounts: getAccounts,也可以只需用一个getAccounts
    toString() { //这里将json形式改为函数形式 
        return JSON.stringify(super.valueOf()); 
        //调用super防范
    },  
    getUrl() {return "http://" + this.url + ':' + this.port},  
    [ 'valueOf_' + getAccounts().join('_') ]: getAccounts()  //使用动态key值(valueOf_1_2_3)此处将getAccounts()方法得到的数组[1,2,3]转化为字符串1_2_3
};
console.log(accountService);
```

**好处：相当于直接将结果写进去，而不再必须 key：value**

 - 将toString: function(){}这种json形式转变为 toString() {}这样的函数(类)的形式
 - 既可以直接分配getAccounts: getAccounts这样的json形式，也可以只需用一个getAccounts表达相同的意思





# Arrow Functions in（箭头函数）

参考阅读: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## 基本语法


## 和普通函数的区别

和普通函数相比，箭头函数主要就是以下两个方面的特点：
 - 不绑定this，arguments
 - 更简化的代码语法

### 不绑定this 

什么叫不绑定this，我个人的理解为 **箭头函数的this其实在定义的时候就已经确定好了的，以后不管怎么调用这个箭头函数，箭头函数的this始终为定义时的this**。

```javascript
function Person () {
  this.name = 'little bear',
  this.age = 18
  setInterval(() => {
    console.log('我叫' + this.name + '我今年' + this.age + '岁')
},1000)
}
let p = new Person()
```

### 不绑定argumens

 - 箭头函数不绑定arguments
 - 所以，在箭头函数中，你不能直接使用arguments，这样会报undefined错误。

```javascript
let arrowfunc = () => console.log(arguments.length)

arrowfunc()  // arguments is not defined
```

那么，如果我想要像ES 5中一样在函数中有一个arguments参数怎么办。这个时候，你可以使用[剩余参数详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)

```javascript
let arrowfunc = (...theArgs) => {
  console.log(theArgs.length)
  console.log(theArgs);
  console.log(theArgs[1]);
}
arrowfunc(1,2)
// 2
// [1, 2]
// 2
```

## 什么时候不能用箭头函数
 - **作为对象的方法**。此时this指向的是调用它的对象。即此时不绑定特性没起作用。
 - **不要在构造函数中使用**。以为此时不绑定特性启用。
 - **定义原型方法时**。此时this指向的是调用它的对象。即此时不绑定特性没起作用。

```javascript
function Person(name) {
    this.name = name
}

Person.prototype.sayHello = () => {
    console.log(this)
}

var p1 = new Person()
p1.sayHello()  // window对象
```

## 总结
 - 箭头函数由于其代码的简洁性和不绑定调用者this的特点，在非方法函数中使用是最合适的。
 - 而在方法函数中使用，需要特别注意它的this绑定问题，如果需要动态的修改this，最好还是不要使用箭头函数了。
 - 所以永远没有一个解决方案能解决所有事情，只有合适的应用场景。

<br>

---

# Promises

ES5：
```javascript
setTimeout(function(){  
  console.log('Yay!');  
}, 1000);
```

ES6：我们可以用promise重写
```javascript
var wait1000 = new Promise((resolve,reject)=> {
   setTimeout(resolve,1000);
}).then(()=> {
    console.log('Yay!'); 
});
```

如果我们有更多的嵌套逻辑在setTimeout()回调函数中，好处会明显一点：

ES5：
```javascript
setTimeout(function(){  
  console.log('Yay!');  
  setTimeout(function(){  
    console.log('Wheeyee!');  
  }, 1000)  
}, 1000); 
```

ES6: 我们可以用promise重写
```javascript
var wait1000 = ()=> new Promise((resolve,reject)=>{ setTimeout(resolve,1000);});
wait1000()
    .then(function(){
        console.log('Yay!');  
        return wait1000()
    })
    .then(function(){
         console.log('Wheeyee!');  
    });
```

## promise 的含义（什么是promise）

`promise` 是一种异步解决方案。我们知道传统的异步解决方案是用 `回调函数 + 事件` 的模式，而 `promise` 是比回调函数事件更好 更强大的异步解决方案。

`Promise` 可以看作是一个对象（也可以看作是容器），它里面保存着某个未来才会结束的异步事件结果。从语法上，通过Promise对象可以回去异步操作的消息（状态）。

`Promise` 提供了一套统一的Api，各种异步操作都可以用同样的方式处理。


# async 函数

## 含义

ES2017 标准引入了 `async` 函数，使得异步操作变得更加方便。`async` 函数是什么？一句话，它就是 `Generator` 函数的语法糖。

`async` 函数的返回值是 `Promise` 对象，进一步说，`async` 函数完全可以看作多个异步操作，包装成的一个 `Promise` 对象，而 `await` 命令就是内部 `then` 命令的语法糖。

## 基本用法

http://es6.ruanyifeng.com/#docs/async


# Block-Scoped(块作用域和构造let和const）

let是一种新的变量声明方式，它允许你把变量作用域控制在块级里面。我们用大括号定义代码块，在ES5中，块级作用域起不了任何作用：

```javascript
function calculateTotalAmount (vip) {  
  var amount = 0;  
  if (vip) {  
    var amount = 1;  
  }  
  { // more crazy blocks!  
    var amount = 100;  
    {  
      var amount = 1000;  
    }  
  }    
  return amount;  
}  
console.log(calculateTotalAmount(true));  // 1000
```

ES6: 用let限制块级作用域
```javascript
function calculateTotalAmount(vip){
    var amouont  = 0; // probably should also be let, but you can mix var and let
    if (vip) {  
        let amount = 1; // first amount is still 0  
    }   
    { // more crazy blocks!  
    let amount = 100; // first amount is still 0  
    {  
      let amount = 1000; // first amount is still 0  
    }  
  }    
  return amount;  
} 
console.log(calculateTotalAmount(true));  //0 因为块作用域中有了let。
```

谈到const，就更加容易了；它就是一个不变量，也是块级作用域，就像let一样。

好处 ： 我们用let限制块级作用域。而var是限制函数作用域。
 - let是更完美的var，不是全局变量，具有块级函数作用域, 大多数情况不会发生变量提升。
 - const定义常量值，不能够重新赋值，如果值是一个对象，可以改变对象里边的属性值。


 1. let声明的变量具有块级作用域
 2. let声明的变量不能通过window.变量名进行访问
 3. 形如for(let x..)的循环是每次迭代都为x创建新的绑定 


var带来的不合理场景:
```javascript
var arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = function () {
    console.log(i);
  }
}
arr[0]()  // 10
arr[2]()  // 10
arr[5]()  //10,  a[5]输出f(){console.log(i);},后面加个括号代表执行f()
```

分析： 这是因为 `i` 是全局的，而每次循环创建的i新值都会覆盖原来的旧值。当循环结束时，`i`的值是10。并且，`arr[i]` 函数执行是在循环结束了之后的。所以输出的数据都是10。


使用 `let` 替代 `var` :

 - 对循环使用let语句的情况，那么每次迭代都是为x创建新的绑定代码。

```javascript
var arr = [];

// for循环中的 var 改成了 let
for (let i = 0; i < 10; i++) {
  arr[i] = function () {
    console.log(i);
  }
}
arr[0]()  //0
arr[2]()  //2
arr[5]()  //5,a[5]输出f(){console.log(i);},后面加个括号代表执行f()
```

下面，来看看传统的、不用let的解决办法：

**使用闭包**

```javascript
// 循环产生的每个showNum函数，所传入的参数都是私有的
function showNum(i) {
  return function () {
    console.log(i)
  }
}

var a = []
for (var i = 0; i < 5; i++) {
  a[i] = showNum(i)();   //循环输出0, 1, 2, 3, 4
}
```

**立即执行函数**

```javascript
var a = []
for (var i = 0; i < 5; i++) {
  // 其实立即执行函数，也是创建了一个闭包
  a[i] = (function (i) {
    return function () {
      console.log(i)
    }
  })(i)
}
a[2](); //2
```


> forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
> 




# Set数据结构

> [文档地址](http://es6.ruanyifeng.com/#docs/set-map)

 - es6方法, Set本身是一个构造函数，它类似于数组，但是成员值都是唯一的。
 - Set()  可以用于数组去重。

```javascript
const set = new Set([1,2,3,4,4])
console.log([...set] ) // [1,2,3,4]
console.log(Array.from(new Set([2,3,3,5,6]))); //[2,3,5,6]
```

知识图谱：
![](../images/33.png)

## 语法概要
```js
// 向set中加入值并不会发生类型转换。
// 多个NaN被视为相等，所以最后只能存在一个；
// 多个空对象，不会被视为相等，故可能存在多个空对象。
```


# Class （类）

 - class语法相对原型、构造函数、继承更接近传统语法，它的写法能够让对象原型的写法更加清晰、面向对象编程的语法更加通俗

这是class的具体用法。
```javascript
class Animal {
  constructor() {
    this.type = 'animal'
  }
  says(say) {
    console.log(this.type + 'says' + say)
  }
}

let animal = new Animal()
animal.says('hello')     // animal says hello

class Cat extends Animal {
  constructor() {
    super()
    this.type = 'cat'
  }
}
let cat = new Cat()
cat.says('hello') // cat says hell
```

 - 可以看出在使用 `extend` 的时候结构输出是 `cat says hello` 而不是 `animal says hello`。说明`contructor`内部定义的方法和属性是实例对象自己的，不能通过 `extends` 进行继承。
 - 在 `class cat` 中出现了`super()`, 这是什么呢？因为在ES6中，子类的构造函数必须含有`super`函数，`super`表示的是调用父类的构造函数，虽然是父类的构造函数，但是`this`指向的却是`cat`。

## Es6 class 和 传统的构造函数+原型继承 的区别

我觉得es6 class是针对传统构造函数+原型继承方式的一种改进升级，实际上我们可以将前者看做是后者的语法糖。

两者实际功能、所要做的事是一样的。

但是，es6 class语法显然要比传统的构造函数 + 原型继承语法更加清晰。更接近面向对象编程语法；


# Modules （模块）
 - export 
 - import 

parent.js:

```javascript
const name = "tom";
const age = "20";

class Parent{
  hw(){
    console.log(`hello world`)
  }
  static obj(){
      console.log('obj')/*表示为静态方法不回呗实例继承，而是直接通过类调用。*/
    }
}  
var parent = new Parent()
parent.hw()//hell world

export{name,age,Parent}
```

child.js:

```javascript
import {name,age,Parent} from './parent'


class Child extends Parent{
    constructor(obj){/*就是new命令自动跳用方法。一个类必须要有constructor，如果没定义，有默认添加一个空的。*/
        super()//调用父类的constructor()
        this._config = obj;
        console.log(obj.name+"年龄"+obj.age)
    }
    hw(){
      console.log("hw")
    }
    set val(value){
      this._config.name = value;
      console.log(`name=${value}`)
    }
    get val(){
      console.log(this._config.name);
    }
}

Child.obj() // obj 继承父类static方法
var model = new Child({name,age}) //tom年龄20
model.hw()  // hw
model.val = "jock"; //name=jock
model.val   // jock
```

## 推荐阅读
 - [ES6 模块化操作](https://www.cnblogs.com/model-zachary/p/7230669.html?utm_source=itdadao&utm_medium=referral)
 - [ES6 Class Module模块化 案例](https://blog.csdn.net/rth362147773/article/details/77151857)





# 重点“人物”：Promise！

概念：Promise是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合合理、强大。所谓Promise，简单来说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promies是一个对象，从它可以获取异步操作的消息。Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。处理过程流程图：

![promise](https://images2017.cnblogs.com/blog/1108615/201801/1108615-20180104150704565-281664950.png)


## 【面试套路1】手写一个promise

```javascript
var promise = new Promise((resolve, reject) => {
  if (操作成功) {
    resolve(value)
  } else {
    reject(error)
  }
})

promise.then(function (value) {
  // success
}, function (value) {
  // failure
})
```

## 【面试套路2】解决请求依赖问题

怎么解决回调函数里面回调另一个函数，另一个函数的参数需要依赖这个回调函数。需要被解决的代码如下：

```javascript
$http.get(url).success(function (res) {
  if (success != undefined) {
    success(res);
  }
}).error(function (res) {
  if (error != undefined) {
    error(res);
  }
});

function success(data) {
  if（ data.id != 0） {
    var url = "getdata/data?id=" + data.id + "";
    
    $http.get(url).success(function (res) {
      showData(res);
    }).error(function (res) {
      if (error != undefined) {
        error(res);
      }
    });
}
```

## 【面试套路3】以下代码依次输出的内容是？

```javascript
setTimeout(function () {
  console.log(1)
}, 0);

new Promise(function executor(resolve) {
  console.log(2);
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function () {
  console.log(4);
});
console.log(5);
```

解析：
 - 首先先碰到一个 setTimeout，于是会先设置一个定时，在定时结束后将传递这个函数放到任务队列里面，因此开始肯定不会输出 1 。 
 - 然后是一个 Promise，里面的函数是直接执行的，因此应该直接输出 2 3 。 
 - 然后，Promise 的 then 应当会放到当前 tick 的最后，但是还是在当前 tick 中。 
 - 因此，应当先输出 5，然后再输出 4 ， 最后在到下一个 tick，就是 1 。


## 【面试套路4】jQuery的ajax返回的是promise对象吗？

jquery的ajax返回的是deferred对象，通过promise的resolve()方法将其转换为promise对象。

```javascript
var jsPromise = Promise.resolve($.ajax('/whatever.json'));
```

## 【面试套路5】 promise只有2个状态，成功和失败，怎么让一个函数无论成功还是失败都能被调用？\

使用promise.all()

Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。

Promise.all方法接受一个数组作为参数，数组里的元素都是Promise对象的实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为Promise实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例。）

示例：
```javascript
var p = Promise.all([p1,p2,p3]);
```
p的状态由p1、p2、p3决定，分为两种情况。
当该数组里的所有Promise实例都进入Fulfilled状态：Promise.all **返回的实例才会变成Fulfilled状态。并将Promise实例数组的所有返回值组成一个数组，传递给Promise.all返回实例的回调函数**。

当该数组里的某个Promise实例都进入Rejected状态：Promise.all返回的实例会立即变成Rejected状态。并将第一个rejected的实例返回值传递给Promise.all返回实例的回调函数。



## 【面试套路6】 分析代码运行结果

一、分析下列程序代码，得出运行结果，解释其原因

```javascript
const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})

promise.then(() => {
  console.log(3)
})

console.log(4)
// 1
// 2
// 4
// 3
```

分析：
`Promise` 构造函数是同步执行的，`promise.then` 中的函数是异步执行的。


二、分析下列程序代码，得出运行结果，解释其原因

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})

console.log('promise1', promise1)
console.log('promise2', promise2)

setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)

// promise1 Promise {<pending>}
// promise2 Promise {<pending>}
// 2399
```

原因：
 - promise 有 3 种状态：pending（进行中）、fulfilled（已完成，又称为Resolved） 或 rejected（已失败）。
 - 状态改变只能是 pending->fulfilled 或者 pending->rejected，状态一旦改变则不能再变。上面 promise2 并不是 promise1，而是返回的一个新的 Promise 实例。


三、分析下列程序代码，得出运行结果，解释其原因

```javascript
const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})

promise
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })

// then：success1
```

解析：
 - 构造函数中的 `resolve` 或 `reject` 只有第一次执行有效，多次调用没有任何作用。
 - 呼应代码二结论：promise 状态一旦改变则不能再变。


四、分析下列程序代码，得出运行结果，解释其原因

```javascript
Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    return 3
  })
  .then((res) => {
    console.log(res)
  })

// 1
// 2
```

解析：
 - promise 可以链式调用。提起链式调用我们通常会想到通过 `return this` 实现，不过 Promise 并不是这样实现的。`promise` 每次调用 `.then` 或者 `.catch` 都会返回一个新的 `promise`，从而实现了链式调用。


五、分析下列程序代码，得出运行结果，解释其原因

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('once')
    resolve('success')
  }, 1000)
})

const start = Date.now();

promise.then((res) => {
  console.log(res, Date.now() - start)
})

promise.then((res) => {
  console.log(res, Date.now() - start)
})

// once
// success 1001
// success 1001
```

分析：
 - promise 的 .then 或者 .catch 可以被调用多次，但这里 Promise 构造函数只执行一次。或者说 promise 内部状态一经改变，并且有了一个值，那么后续每次调用 .then 或者 .catch 都会直接拿到该值。


六、分析下列程序代码，得出运行结果，解释其原因

```javascript
Promise.resolve()
  .then(() => {
    return new Error('error!!!')
  })
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })

// then: Error: error!!!
//     at Promise.resolve.then (...)
//     at ...
```

分析：
 - `.then` 或者 `.catch` 中 `return` 一个 `error 对象`并不会抛出错误，所以不会被后续的`.catch` 捕获，需要改成其中一种：
 `return Promise.reject(new Error('error!!!')) ` 或者 `throw new Error('error!!!')`

 - 因为返回任意一个非 `promise` 的值都会被包裹成`promise` 对象，即 `return new Error('error!!!')` 等价于 `return Promise.resolve(new Error('error!!!'))`。


七、分析下列程序代码，得出运行结果，解释其原因

```javascript
const promise = Promise.resolve()
  .then(() => {
    return promise
  })
promise.catch(console.error)

// TypeError: Chaining cycle detected for promise #<Promise>
//     at <anonymous>
//     at process._tickCallback (internal/process/next_tick.js:188:7)
//     at Function.Module.runMain (module.js:667:11)
//     at startup (bootstrap_node.js:187:16)
//     at bootstrap_node.js:607:3
```

分析：
 - `.then` 或 `.catch` 返回的值不能是 `promise`本身，否则会造成死循环。


八、分析下列程序代码，得出运行结果，解释其原因

```javascript
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```

分析：
 - `.then` 或者 `.catch` 的参数期望是函数，传入非函数则会发生值穿透。


九、分析下列程序代码，得出运行结果，解释其原因

```javascript
Promise.resolve()
  .then(function success (res) {
    throw new Error('error')
  }, function fail1 (e) {
    console.error('fail1: ', e)
  })
  .catch(function fail2 (e) {
    console.error('fail2: ', e)
  })

// fail2: Error: error
//     at success (...)
//     at ...
```

分析：
 - `.then` 可以接收两个参数，第一个是处理成功的函数，第二个是处理错误的函数。
 - `.catch` 是`.then` 第二个参数的简便写法，但是它们用法上有一点需要注意：`.then `的第二个处理错误的函数捕获不了第一个处理成功的函数抛出的错误，而后续的 `.catch`可以捕获之前的错误。


十、分析下列程序代码，得出运行结果，解释其原因

```javascript
process.nextTick(() => {
  console.log('nextTick')
})

Promise.resolve()
  .then(() => {
    console.log('then')
  })

setImmediate(() => {
  console.log('setImmediate')
})
console.log('end')

// end
// nextTick
// then
// setImmediate
```

分析:
 - `process.nextTick` 和 `promise.then` 都属于 `microtask`，而 `setImmediate `属于 `macrotask`，在事件循环的 `check` 阶段执行。事件循环的每个阶段`（macrotask）`之间都会执行 `microtask`，事件循环的开始会先执行一次 `microtask`。




## 推荐阅读

 - [十道es6的Promise面试题，附答案](http://www.bslxx.com/a/mianshiti/tiku/javascript/2017/1213/1505.html)




# 总结
 - [ES6十大常用特性](https://blog.csdn.net/bingtangcsnd/article/details/63684142)




