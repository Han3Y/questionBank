/**
 * 默认小根堆
 */
class Heap{
  constructor(comparator) {
    if(comparator && typeof comparator === 'function'){
      // 传入比较器并且为函数的时候才有效
      this.comparator = comparator;
    }else{
      this.comparator = (a, b) => {
        return a - b;
      }
    }
    this.heap = [];
    this.heapSize  = 0;
  }

  /**
   * 获取堆的长度
   * @returns {number}
   */
  length(){
    return this.heapSize;
  }

  /**
   * 往堆里加入元素
   * @param item
   */
  push(item){
    this.heap.push(item);
    this.heapInsert(this.heap, this.heapSize ++);
  }

  /**
   * 弹出堆顶元素
   */
  pop(){
    let item = this.heap[0];
    this.swap(this.heap, 0, --this.heapSize);
    this.heapify(this.heap, 0 , this.heapSize);
    this.heap.pop(); // 删除被弹出的元素
    return item;
  }

  /**
   * 获取堆顶元素
   */
  peek(){
    return this.heap[0];
  }

  /**
   * 插入元素后重排
   * @param item
   */
  heapInsert(heapArr, index){
    while (this.comparator(heapArr[index], heapArr[parseInt((index - 1) / 2)]) < 0){
      this.swap(heapArr, parseInt((index - 1) / 2),  index);
      index = parseInt((index - 1) / 2)
    }
  }

  /**
   * 弹出元素后重排
   * @param heapArr
   * @param index
   * @param heapSize
   */
  heapify(heapArr, index, heapSize){
    let left = index * 2 + 1;
    while (left < heapSize){
      let min = ((left + 1 < heapSize) && (this.comparator(heapArr[left + 1] , heapArr[left]) < 0)) ? left + 1 : left;
      min = this.comparator(heapArr[min], heapArr[index]) < 0 ? min: index;
      if(min === index){
        break;
      }
      this.swap(heapArr, min, index);
      index = min;
      left = index * 2 + 1;
    }
  }

  /**
   * 交互元素顺序
   * @param arr
   * @param i
   * @param j
   */
  swap(arr, i, j){
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

let testHeap = new Heap();
testHeap.push(9);
testHeap.push(7);
testHeap.push(8);
testHeap.push(4);
testHeap.push(5);

console.log(testHeap.peek());
console.log(testHeap.peek());

console.log(testHeap.pop());
console.log(testHeap.pop());
console.log(testHeap.pop());
console.log(testHeap.pop());
console.log(testHeap.pop());

testHeap.push(11);
testHeap.push(13);
testHeap.push(10);

console.log(testHeap.pop());
console.log(testHeap.pop());
console.log(testHeap.pop());

//
// let testHeap1 = new Heap((a, b) => {
//   return a.age - b.age;
// });
// testHeap1.push({age: 9});
// testHeap1.push({age: 7});
// testHeap1.push({age: 8});
// testHeap1.push({age: 4});
// testHeap1.push({age: 5});
//
// console.log(testHeap1.peek());
// console.log(testHeap1.peek());
// console.log(testHeap1.pop());
// console.log(testHeap1.pop());
// console.log(testHeap1.pop());
// console.log(testHeap1.pop());
// console.log(testHeap1.pop());


