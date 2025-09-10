// console.log("Nilesh");

// /*BINARY SEARCH
// -> when apply binary search
// -> how to apply binary seach


// find the sqaure root of N in O(logN) time complexity

//  if right range is getting eleminated  then high will become (Mid-1) otherwise if left range is getting eleminated them low = (Mid+1)
//  */

//  let N = 36;

//  function squareRoot(N){
//     let low = 0;
//     let high = N;
//     while(low <= high){
//         let mid = Math.floor(low + (high - low) / 2);

//         if(mid * mid == N){
//             return mid;
//         } 
//         else if(mid * mid > N){
//             high = mid-1;
//         }
//         else{
//             low = mid+1;
//         }

//     }
//     return -1;
//  }
//  console.log(squareRoot(N));

// //using array 

// let arr = [1, 2, 3, 6, 7, 9, 11, 15];
// let target = 11;

// function findElement(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (arr[mid] === target) {
//             return mid; 
//         } 
//         else if (arr[mid] < target) {
//             low = mid + 1;
//         } 
//         else {
//             high = mid - 1;
//         }
//     }
//     return -1; 
// }

// console.log( "The index of target :",findElement(arr, target));

// // return first occurance of target element
// let arr1=[1,2,6,6,11,11,11,15]
// let target1=6;

// function firstOccuranceElement(arr1, target1) {
//     let low = 0;
//     let high = arr1.length - 1;
//     let result = -1;

//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (arr1[mid] === target1) {
//               result = mid;
//              high = mid-1; 
           
//         }
//         else if (arr1[mid] < target1) {
//             low = mid + 1;
//         } 
//         else {
//             high = mid - 1;
//         }
//     }
//     return result; 
// }

// console.log( "The first occurance :",firstOccuranceElement(arr1, target1));



// // return last occurance index
// let arr2=[1,2,6,6,11,11,11,15]
// let target2=11;

// function lastOccuranceElement(arr2, target2) {
//     let low = 0;
//     let high = arr2.length - 1;
//     let result = -1;

//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (arr2[mid] === target2) {
//               result = mid;
//              low = mid+1; 
             
//         }
//         else if (arr2[mid] < target2) {
//             low = mid + 1;
//         } 
//         else {
//             high = mid - 1;
//         }
//     }
//     return result; 
// }

// console.log( "The last occurance :",lastOccuranceElement(arr2, target2));

// // return Lower Bound
// arr2=[1,2,6,6,11,11,11,15]
//  target2=6;

// function lowerBound(arr2,target2){
       
//     let low = 0;
//     let high = arr2.length - 1;
//     let index = arr2.length;

//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (arr2[mid] >= target2) {
//               index = mid;
//              high = mid-1; 
             
//         }
//         else  
//             low = mid + 1;
        
        
//     }
//     return index; 

// }
// console.log("Lower bound of target: ",lowerBound(arr2,target2))



// /* SET in Javascript
//    -> only unique data is present

//    [1,1,2,4,1,2] -> {1,2,4}


// /* MAP in javascript
//    map-> contains key value pairs
//     -> key must be diffrent across all pairs
//     ->key can be anything */

   
//     let set = new Set ([1,2,4,4,5,6]);

//    // add element in set
//     set.add(200);
//     set.add(7);
//     console.log({set});
    

//     //method to check if a number is in set or not
//     console.log("Chceking of  30 in set ",set.has(30));
//     console.log("Chceking of  200  in set ",set.has(200));

//     // check size of the set
//     console.log("Size of set:" + set.size);



// // remove duplicates from arr4
// //     let arr4 = [2,3,4,1,0,1,2,3,4,5,10];
   
// //     let set1 = new Set(arr4);
// //     let array = [...set1];
// //     let arra11 = arr4.from(set1);
// //     let set2 = new Set([...arr4]);
// //     let arr3 = [...set2];
// //    console.log(array);


// // MAP in js

// let map = new Map([
//     ["name1","Mohite"],
//     ["name2","Abhi"]
// ]);

// map.set("name1","Nilesh");
// map.set("name2","Pratik");

// // cheking if key is present or not

// console.log("checking if name1 is presnt or not ",map.has("name1"));

// // getting the value of specific key 
// console.log("value of name2 key:",map.get("name2"));

// // deleting a key in map
// console.log("value of name2 key:",map.delete("name22"));

// const mapArr = [...map];
// console.log(mapArr);



// // find frequency of each element in arr

// let arr5 = [2,3,4,1,0,1,2,3,4,5,10];


// // find intersection and union of array

let arr = [1,2,5,6], arr1 = [2,5,6,3,1,3];

//intersection : 1,2,5,6
//union : 1,2,3,4,5,6

//const unionArr = [...new Set([...arr,...arr1])];

const unionSet = new Set([...arr, ...arr1]);
const unionArr = [...unionSet];
console.log({unionArr});