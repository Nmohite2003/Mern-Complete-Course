// //using pop

// const arr = [1,4,3,7,9];
//     arr.pop();
//     console.log(arr);

// //using slice
// let arr1 = [1,4,3,7,9,8];
// arr1 = arr1.slice(0, arr1.length-1);
// console.log(arr1);


// //delete element from start

// const arr3 = [1,2,3,4];
//   arr3.shift();
//    console.log(arr3);

//    //using loops

//    for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
//    }
//    arr.length=arr.length-1;
//    console.log(arr);
   
   
  const nums = [10,20,30,40,50];
  
  for(let i=0;i<nums.length;i++){
    let temp = nums[i];
    nums[i] = nums[nums.length-1];
    nums[nums.length-1] = temp;
  }
  
  console.log(nums);