const Observer =  require('./Observer')


class Observable {

  constructor(publishFn) {

    this.publish = publishFn;

  }

  subscribe(observerOrNext, error, complete) {

    // 封装observer

    let observer;

    if (

      observerOrNext instanceof Observer ||

      observerOrNext instanceof Subject

    ) {

      observer = observerOrNext;

    } else if (typeof observerOrNext === "function") {

      observer = new Observer(observerOrNext, error, complete);

    } else {

      observer = new Observer(

        observerOrNext.next,

        observerOrNext.error,

        observerOrNext.complete

      );

    }

    // 传递unsubscribe回调清理函数

    const unsubscribeCb = this.publish(observer);

    observer.onUnsubscribe(unsubscribeCb);

    return observer;

  }

}

class Subject extends Observable{
  subscribers = [];

  isStopped = false;

  publish(observer) {

    if (this.isStopped) {

      observer.complete();

    }

    // 添加订阅item

    this.subscribers.push(observer);

  }

  next(value) {

    if (this.isStopped) return;

    // 分发数据

    this.subscribers.forEach((observer) => {

      observer.next(value);

    });

  }

  error(error) {

    this.subscribers.forEach((observer) => {

      observer.error(error);

    });

    this.isStopped = true;

    this.subscribers = [];

  }

  complete() {

    this.subscribers.forEach((observer) => {

      observer.complete();

    });

    this.isStopped = true;

    this.subscribers = [];

  }

  onUnsubscribe(unsubscribeCb) {

    this.unsubscribeCb = unsubscribeCb;

  }

}



Observable.fromEvent = function (target, eventName) {

  return new Observable(function (observer) {

    const handler = function (e) {

      observer.next(e);

    };

    target.addEventListener(eventName, handler);

    return () => {

      target.removeEventListener(eventName, handler);

    };

  });

};


Observable.interval = function (delay) {

  return new Observable(function (observer) {

    let index = 0;

    const id = setInterval(() => {

      observer.next(index++);

    }, delay);

    return () => {

      clearInterval(id);

    };

  });

};


// 示例

// let observable = new Observable(function publish(observer) {
//
//   var id = setTimeout(() => {
//
//     observer.next("helloworld");
//
//     observer.complete();
//
//   }, 1000);
//
//   return () => {
//
//     console.log("clear");
//
//     clearInterval(id);
//
//   };
//
// });



// observable单播模式
const observable = Observable.interval(200);

const observerA = new Observer((x) => console.log(`A next ${x}`));

const observerB = new Observer((x) => console.log(`B next ${x}`));

// observable.subscribe(observerA);
//
// setTimeout(() => {
//
//   observable.subscribe(observerB);
//
// }, 500);

// subject 多播模式，500ms后observerB开始接收subject分发的数据，错过了前2个数据

const subject = new Subject();

observable.subscribe(subject);

subject.subscribe(observerA);

setTimeout(() => {

  subject.subscribe(observerB);

}, 500);



