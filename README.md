# EventEmitter

## 概要
一个发布订阅模式的实现。
欢迎 star 和 pr

## 使用方法
### 1.导入
浏览器端

```
<script type="text/javascript" src="./eventEmitter.js">
</script>
```
node端

var eventEmitter = require("./eventEmitter.js");

### 2.API
#### 订阅事件
eventEmitter.addListener(name, listener)
* name 事件名称
* listener 监听函数

#### 取消订阅
eventEmitter.removeListener(name, listener)
* name 事件名称
* listener 监听函数

#### 发布消息
eventEmitter.emit(name, data)
* name 事件名称
* data 数据

## Example
见本文件夹的 event.html
