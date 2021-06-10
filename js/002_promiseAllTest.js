/**
 * 实现Promise.all
 * @param promises
 * @returns {Promise<unknown>}
 */
Promise.myAll = function (promises){
  let results = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach( (item, index) => {
      // 处理传入的值不是promise的问题
      Promise.resolve(item).then(res => {
        results[index] = res;
        count ++;
        if(count == promises.length){
          resolve(results);
        }
      }, err => {
        reject(err);
      })
    });
  });
}

let promise1 = new Promise(((resolve, reject) => {
  setTimeout( () => resolve(1), 2000);
}));

let promise2 = new Promise(((resolve, reject) => {
  setTimeout( () => resolve(2), 5000);
}));

let promise3 = new Promise(((resolve, reject) => {
  setTimeout( () => reject(3), 3000);
}));

Promise.myAll([promise1, promise2, 4, promise3]).then(res => {
  console.log('success:', res);
}, error => {
  console.log('error:', error);
})

// Promise.all([promise1, promise2, 4, promise3]).then(res => {
//   console.log('success:', res);
// }, error => {
//   console.log('error:', error);
// })
