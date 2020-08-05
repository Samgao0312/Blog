# vue数据响应原理

---

Vue数据响应依赖于Object.defineProperty, 这也是Vue不支持IE8的原因。Vue通过设定对象属性的setter/getter方法来监听数据的变化。通过getter进行依赖收集，而每个setter方法就是一个观察者，在数据变更的时候通知订阅者更新视图。


**数据响应原理： 看看数据改变是如何驱动数据自动更新的**

假如我们有一份数据a.b，在一个vue对象实例化的过程中，会给a.b这份数据通过es5的 Object.defineProperty() 属性，添加了一个Setter和 Getter，同时vue.js会对模板做编译，解析生成一个指令对象，这里是一个v-text指令，
每个指令对象都会关联一个Watcher，当我们对指令对应的表达式a.b做求值的时候，就会触发了Getter，这里我们就会把依赖收集到这个Watcher里面，当我再次改变了a.b的时候，就会触发它的Setter，会通知到被关联的Watcher，然后Watcher就会再次对a.b求值，计算对比新旧值。当发现值改变了，Watcher又会通知到指令，调用指令的Updata方法，由于指令是对DOM的封装，所以会调用原生DOM的方法，去更新视图，这样我们就完成了数据改变到视图更新的一个自动过程。