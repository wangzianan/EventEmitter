;(function (name, definition) {
  // 检测上下文环境是否为AMD或CMD
  var hasDefine = typeof define === 'function',
    // 检查上下文环境是否为Node
    hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    // AMD环境或CMD环境
    define(definition);
  } else if (hasExports) {
    // 定义为普通Node模块
    module.exports = definition();
  } else {
    // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
    this[name] = definition();
  }
})('EventEmitter', function () {
  function EventEmitter() {
    this.__events = {}
  }

  //订阅消息
  EventEmitter.prototype.addListener = function(name, listener) {
    if(!this.__events[name]){
      this.__events[name]=[listener];
    }else {
      this.__events[name].push(listener);
    }
  }

  //取消订阅
  EventEmitter.prototype.removeListener = function(name, listener) {
    if(!this.__events[name]){
      return;
    }else{
      let index=this.__events[name].indexOf(listener)
      if(index>-1){
        this.__events[name].splice(index,1);
      }
    }
  }

  //派发消息
  EventEmitter.prototype.emit = function(name, data) {
    if(!this.__events[name]){
      return;
    }else {
      this.__events[name].forEach(function(fn){
        fn.call(null, data);
      })
    }
  }
  return EventEmitter;
});
