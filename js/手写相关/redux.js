function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => {
      return (...args) => {
        console.log('a',a.toString())
        console.log('b',b.toString())
        return a(b(...args))
      }
    }
  );
}

function logger() {
  return next => action => {
    console.log('logger receive next', next.toString())
    // 中间件任务
    console.log(action.type + "执⾏了！");
    return next(action);
  };
}

function thunk({ getState }) {
  return next => action => {
    console.log('thunk receive next', next.toString())
    if (typeof action === "function") {
      return action(next, getState);
    } else {
      return next(action);
    }
  };
}

const middlewares = [thunk,logger];

const midApi = {
  getState: () => console.log('getState'),
  dispatch: () => (...args) => {
    console.log('midApi dispatch')

  }
};

const middlewareChain = middlewares.map(middleware => middleware(midApi));

// console.log(middlewareChain.toString())
function storeDispatch (action) {
  console.log('storeDispatch', action);
  return action
}

const dispatch = compose(...middlewareChain)(storeDispatch);

console.log('dispatch', dispatch.toString())

// console.log('result', dispatch({
//   type: 'test'
// }))
console.log('result',
  dispatch((dispatch) => {
    setTimeout(() => {
      dispatch({type: 'add'})
    }, 1000)
  })
)
