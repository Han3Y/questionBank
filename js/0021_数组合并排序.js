// 有序数组
let sortArr = (arr1,arr2) =>{
  let i=0,j=0;
  let newArr = [];
  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      newArr.push(arr1[i]);
      i++
    }else if(arr1[i]>arr2[j]){
      newArr.push(arr2[j]);
      j++;
    }else if(arr1[i] === arr2[j]){
      newArr.push(arr1[i]);
      i++,j++;
    }
  }

  // 将指针未移到末尾的部分取出,拼到新数组后面
  if(i<arr1.length){
    return newArr.concat(arr1.splice(i))
  }else if(j<arr2.length){
    return newArr.concat(arr2.splice(j))
  }else {
    return newArr
  }
}

let array1 = [13,11,9,7,5,3,1].reverse();
let array2 = [2,4,6,8,10];

console.log(sortArr(array1, array2));
