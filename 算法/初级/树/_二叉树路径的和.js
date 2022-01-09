let node = function (value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
}

let data = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
        },
        right: {
            value: 5
        }
    },
    right: {
        value: 3,
        left: {
            value: 6
        },
        right: {
            value: 7
        }
    }
}

function fn(root, num){
    let stack = [];
    stack.push(root);
    while (stack.length){
        let sum = stack.reduce((a, b) => a + b.value, 0);
        console.log(sum);
        console.log(stack)
        if(sum === num){
            return stack;
        }else{
            let len = stack.length;
            if(stack[len - 1].left && !stack[len - 1].left.active){
                stack.push(stack[len - 1].left);
                stack[len - 1].left.active = true;
            }else if(stack[len - 1].right && !stack[len - 1].right.active){
                stack.push(stack[len - 1].right);
                stack[len - 1].right.active = true;
            }else{
                stack.pop();
            }
        }
    }
    return null;
}

console.log((fn(data, 15)));