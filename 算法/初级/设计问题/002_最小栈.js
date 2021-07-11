/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

 push(x) —— 将元素 x 推入栈中。
 pop() —— 删除栈顶的元素。
 top() —— 获取栈顶元素。
 getMin() —— 检索栈中的最小元素。

 */


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this._arr = [];
    this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this._arr.push(val);
    if(!this.min.length){
        this.min.push(val);
    }else{
        this.min.push(Math.min(this.min[this.min.length - 1], val));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this._arr.length){
        let pop = this._arr.pop();
        this.min.pop();
        return pop;
    }else {
        return null;
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._arr[this._arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */