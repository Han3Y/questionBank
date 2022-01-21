class SingleObject {
  login() {
    console.log('login...')
  }
}
SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance
  }
})()

// 测试
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2)

class Single{
  static instance = null;
  static getInstance = function (){
    if(this.instance){

    }else{
      this.instance = new Single('hjc');
    }
    return this.instance;
  }
  constructor(name) {
    this.name = name;
  }
}

let a = Single.getInstance();
let b = Single.getInstance();
console.log(a === b);
