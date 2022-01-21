
// 严格模式下才生效
const sum = (n, prevSum = 0) => {
  if (n <= 1) return n + prevSum;
  return sum(n - 1, n + prevSum)
}

// 优化
const sum0 = (n, prevSum = 0) => {
  if (n <= 1) return n + prevSum;
  return () => sum0(n-1, n + prevSum)
}
const trampoline = f => (...args) => {
  let result = f(...args);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
}
const sum1 = trampoline(sum0);

console.log(sum1(1000000)); // 不会栈溢出
