// // x=10;
// // let y=5;
// // console.log(x);

// // function sayHi(){
// // for(let i=0;i<=x;i++)
// //     console.log("Hi",i)

// // }
// // sayHi();

// // function nestedScope (){
// //     let value
// // }

// // //nested arrays

// // const arr = [1, [1,2,3],4,5,[6,95,71],80]
// // console.log(arr[4][3])
// // console.log(arr[0].length)

// // // arr.flat().forEach(num => console.log(num));

// // //  1
// // //  1 2 3

// // //print the nested array
// // //using undefined method
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }


// // for(let i=0;i<arr.length;i++){
// //     if(arr[i] === undefined){
// //         console.log(arr[i])
// //     }
// //     else{
// //         for(let j=0;j<arr[i].length;j++){
// //             console.log(arr[i][j])
// //         }
// //     }
// // }

// // // using typeOf method

// // console.log("printing using type of method")
// // for(let i=0;i<arr.length;i++){
// //     if(arr[i] === "Number"){
// //         console.log(arr[i])
// //     }
// //     else{
// //         for(let j=0;j<arr[i].length;j++){
// //             console.log(arr[i][j])
// //         }
// //     }
// // }

// // //using isArray method

// // console.log("using isArray method")
// // for (let i = 0; i < arr.length; i++) {
// //   if (Array.isArray(arr[i])) {
// //     for (let j = 0; j < arr[i].length; j++) {
// //       console.log(arr[i][j]);
// //     }
// //   } else {
// //     console.log(arr[i]);
// //   }
// // }


// // //write a function 
// // function isMatrix(arr){
// //     if(!Array.isArray(arr)) return false;
// //     if(!Array.isArray(arr[0])) return false;
// //     let colSize = arr[0].length;

// //     for( let array of arr)
// //     if(array.length != colSize){
// //     return false;
// // }
// //     return true;
// // }
// // console.log(isMatrix(arr))


// // // write function of calculate product of sum of each row

// // function sumofProduct(arr){
// //    let ans=1;
// //     for(let i=0;i<arr.length;i++){
// //         let sum =0;
// //         for(let j=0;j<arr[0].length;j++){
// //             sum+=arr[i][j];
// //         }
// //         ans*=sum;
// //     }
// //     return ans;
// // }



// // //SUBARRAY
// // //   print all subarray
// // //   print sum of all subarray


// // let nums = [1,2,3,4];
// // for(let i=0;i<nums.length;i++){
// //     for(let j = i;j<nums.length;j++){
// //         console.log(nums.slice(i, j + 1));

// //     }
// // }
// // const value = 4 + ("34" * " ")/17;
// // console.log({value});


// //primary digonal
// const arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// function diagonalMatrixSum(matrix){
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         sum += matrix[i][i];  
//     }
//     console.log(`The Digonal sum is ${sum}`);
// }

// diagonalMatrixSum(arr);   

// //secondary digonal

// function diagonalMatrixSum(matrix){
//     let n = arr[0].length;
//     let secondarysum = 0;
//    for(let i=0;i<n;i++){
//    secondarysum += matrix[i][n-i-1];
//    }
//    console.log(secondarysum)
// }

// diagonalMatrixSum(arr);   



// // columnwise matrix

// function columnSum(matrix) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;
  
//     for (let j = 0; j < cols; j++) {
//       let sum = 0;
//       for (let i = 0; i < rows; i++) {
//         if (j % 2 !== 0) {
//           sum += matrix[i][j];
//         }
//       }
//       if (j % 2 !== 0) {
//         console.log(sum);
//       }
//     }
//   }
  
  
  
//   columnSum(arr);


//   /*homework
//  given a 2d matrix reverse each odd columns and print it

//  input [
//     [1,2,3,4,5,6],
//     [2,6,12,43,3,5],
//     [8,10,34,23,12,8],
//  ];
//  output
//  [
//     [1,10,3,23,5,8],
//     [2,6,12,43,3,5],
//     [8,2,34,4,12,6],
//  ]



//  2)
//  write a function to find the sum of all subarrays;

//   */

 const arr = [1,4,3,7,9];
    arr.pop();
    console.log(arr);
