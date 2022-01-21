function delay(time) {
  return new Promise((resolve, reject) => {
    console.log(`wait ${time}s`)
    setTimeout(() => {
      console.log('execute');
      resolve()
    }, time * 1000)
  })
}

const arr = [3, 4, 5];

// 1.reduce
arr.reduce((s, v) => {
  return s.then(() => delay(v))
}, Promise.resolve())

// 2.async + 循环 + await
  (
    async function () {
      for (const v of arr) {
        await delay(v)
      }
    }
  )()

// 3.普通循环
let p = Promise.resolve()
for (const i of arr) {
  p = p.then(() => delay(i))
}

// 4.递归
function dispatch(i, p = Promise.resolve()) {
  if (!arr[i]) return Promise.resolve()
  return p.then(() => dispatch(i + 1, delay(arr[i])))
}
dispatch(0)

// 5. for await of
function createAsyncIterable(arr) {
  return {
    [Symbol.asyncIterator]() {
      return {
        i: 0,
        next() {
          if (this.i < arr.length) {
            return delay(arr[this.i]).then(() => ({ value: this.i++, done: false }));
          }

          return Promise.resolve({ done: true });
        }
      };
    }
  }
}

(async function () {
  for await (let i of createAsyncIterable(arr)) { }
})();

// 6.generator
function* gen() {
  for (const v of arr) {
    yield delay(v)
  }
}

function run(gen) {
  const g = gen()

  function next(data) {
    const result = g.next(data)
    if (result.done) return result.value
    result.value.then(function(data) {
      next(data)
    })
  }

  next()
}

run(gen)

