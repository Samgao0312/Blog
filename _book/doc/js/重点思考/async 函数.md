# async 函数

**异步操作：**  `回调函数` => `Promise` => `Generator` => `Async`
**异步函数：**  是指通过事件循环异步执行的函数。

## async 函数是什么？
    一句话，async 函数就是 Generator 函数的语法糖。async 函数对 Generator 函数的改进。

## 语法
 - await 只能出现在 async 函数中

## 特性
 - 像写同步代码一样写异步代码（尤其当多个异步相互依赖的情况下）
 - 执行异步函数返回的是一个promise对象。请求成功时返回的是resolved, 请求异常时返回的是rejected
 - async 函数返回一个 Promise 对象
 - 注意到 await 不仅仅用于等 Promise 对象，它可以等任意表达式的结果
 - await 后面实际是可以接普通函数调用或者直接量的(但是  必须是在async函数内)
 - 如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。
 - 如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。

> 看到上面的阻塞一词，心慌了吧……放心，这就是 await 必须用在 async 函数中的原因。async 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。

## async 函数的优势
    （1）内置执行器：async 函数的执行，与普通函数一模一样，只要一行。
    （2）更好的语义： async 和 await，比起星号和 yield，语义更清楚了。async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。
    （3）更广的适用性。 co 函数库约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

> `async/await` 的目的是简化使用多个 promise 时的同步行为，并对一组 Promises执行某些操作。正如Promises类似于结构化回调，async/await类似于组合生成器和 promises。

所以，async函数使用上面，语法和结构更像是普通函数。

## 实例

```js
var resolveAfter2Seconds = function() {
    console.log("starting slow promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow");
        console.log("slow promise is done"); 
      }, 2000);
    });
};
  
var resolveAfter1Second = function() {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function() {
        resolve("fast");
        console.log("fast promise is done");
        }, 1000);
    });
};
  
var sequentialStart = async function() {
    console.log('==SEQUENTIAL START==');

    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds();
    console.log(slow); // 2. this runs 2 seconds after 1.

    const fast = await resolveAfter1Second();
    console.log(fast); // 3. this runs 3 seconds after 1.
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// ==SEQUENTIAL START==
// starting slow promise
// slow promise is done
// slow
// starting fast promise
// fast promise is done
// fast
```

实例2：
```js
var resolveAfter2Seconds = function() {
    console.log("starting slow promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow");
        console.log("slow promise is done"); 
      }, 2000);
    });
};
  
var resolveAfter1Second = function() {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function() {
        resolve("fast");
        console.log("fast promise is done");
        }, 1000);
    });
};

var concurrentStart = async function() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second(); // starts timer immediately

    // 1. Execution gets here almost instantly
    console.log(await slow); // 2. this runs 2 seconds after 1.
    console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// fast promise is done
// slow promise is done
// slow
// fast
```

实例3：



# 参考
 - [async 函数的含义和用法 | 阮一峰](http://www.ruanyifeng.com/blog/2015/05/async.html)
 - [async 函数 | ECMAScript 6 入门 | 阮一峰](http://es6.ruanyifeng.com/#docs/async)
 - [async function | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
 - [异步函数 - 提高 Promise 的易用性](https://developers.google.com/web/fundamentals/primers/async-functions?hl=zh-cn)
 - [理解 JavaScript 的 async/await | segmentfault](https://segmentfault.com/a/1190000007535316)
