// console.log("Nilesh");


// //   function maxSum(nums){
// //   let sum =0;
// //   let maxSum =0;
// //   for(let i=0;i<nums.length;i++){
// //     sum += nums[i];
// //     if(sum > maxSum){
// //       maxSum = sum;
// //     }
// //   }
// //   console.log(maxSum);
// // }
// // maxSum(nums);





// // print the count of subarray which sum is eqaul to k
// function countSum(nums, k) {
//     let count = 0;
//     let maxSub = [];
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum === k) {
//                 count++;
//             }
//         }
//     }

//      console.log(count);
//     // return count;
// }
// countSum(nums,0)

const nums = [1,2,-3,0,1,-1,1];

// function longestSubarray(nums, k) {
//     let n = nums.length;
//     let max = 0;
//      for (let i = 0; i < n; i++) {
//         let sum = 0;
//         for (let j = i; j < n; j++) {
//             sum += nums[j];
//             if (sum === k) {
//                 max = Math.max(max, j - i + 1);
//             }
//         }
//     }
//     console.log( max);
// }
// longestSubarray(nums, 0);

    

function sizeSubarray(nums, k) {
    let n = nums.length;
     let result = [];

    for (let i = 0; i <= n - k; i++) {   
        let subArray = [];
        for (let j = i; j < i + k; j++) {  
            subArray.push(nums[j]);
        }
        result.push(subArray);
    }

    console.log(result);
}
sizeSubarray(nums,3);



