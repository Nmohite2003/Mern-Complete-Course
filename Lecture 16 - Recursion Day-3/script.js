// // // // function isAnagram(a, b) {
// // // //     // const map = new Map();
// // // //     if (a.length != b.length) return false;
  
// // // //     let freqObj = {};
  
// // // //     for (let i = 0; i < a.length; i++) {
// // // //       freqObj[a[i]] = (freqObj[a[i]] || 0) + 1;
// // // //     }
  
// // // //     for (let i = 0; i < b.length; i++) {
// // // //       if (!freqObj[b[i]]) return false;
// // // //       freqObj[b[i]] = freqObj[b[i]] - 1;
// // // //     }
  
// // // //     for (let value of Object.values(freqObj)) if (value) return false;
  
// // // //     return true;
// // // //   }
  
// // // //   console.log(isAnagram("cat", "ac"));
  
  

 







// // // function isAnagram(str1, str2) {
// // //     if (str1.length !== str2.length) return false;

// // //     let map = new Map();

// // //     for (let i = 0; i < str1.length; i++) {
// // //         map.set(str1[i], (map.get(str1[i]) || 0) + 1);
// // //     }
// // //     for (let i = 0; i < str2.length; i++) {
// // //         map.set(str2[i], (map.get(str2[i]) || 0) - 1);
// // //     }

// // //     for (let value of map.values()) {
// // //         if (value !== 0) {
// // //             return false;
// // //         }
// // //     }
// // //     return true;
// // // }

// // // let inputs = ["cat", "tea", "pet", "tac", "act", "eat"];
// // // let word = ["cat", "tca", "eee", "tea"];

// // // function findAnagram(words, inputs) {
    
// // //     for (let i = 0; i < words.length; i++) {
// // //         let result = ""

// // //         for (let j = 0; j < inputs.length; j++) {
// // //             if (isAnagram(words[i], inputs[j])) {
// // //                 result+=inputs[j]+" "
// // //             }
// // //         }
// // //         // return -1;
// // //         console.log (result);
// // //     }
// // // }
// // // findAnagram(word, inputs);



// // /* print pattern

// //  A
// //  AB
// //  BCD
// //  CDEF */

// //  let n = 5;

// //  function printPattern(n) {
// //     console.log("A");
// //     for (let i = 1; i<n; i++) {
// //     let result = "";
// //     for (let j = 0; j <= i; j++) {
// //     result += String.fromCharCode(64+j+i);
// //       }
      
// //       console.log(result);
// //     }
// //   }
  
// //   printPattern(5);


// //   function printHolloDiamond(n){
// //     for(let i=0;i<=n;i++){
// //         let space = " ";
// //         let row = " ";
// //     for(let j=1;j<=n-i;j++){
// //         space += " ";
// //        }
// //     for(let k=1;k<=2*i-1;k++){
// //         if(k==1 || k==2*i-1){
// //          row+="*";
// //         }
// //         else{
// //             row+=" ";
// //         }
// //        }
// //        console.log(space+row);
// //     }
// //     for(let i=n-1;i>=1;i--){
// //         let space = " ";
// //         let row = " ";
// //     for(let j=1;j<=n-i;j++){
// //         space += " ";
// //        }
// //     for(let k=1;k<=2*i-1;k++){
// //         if(k==1 || k==2*i-1){
// //          row+="*";
// //         }
// //         else{
// //             row+=" ";
// //         }
// //        }
// //        console.log(space+row);
// //     }
// //   }
// //   printHolloDiamond(n);


// //   /* print longest subarray length first non repaeating */
// //   let str = "abbcda";

// //   function firstNonRepeating(str) {
// //     let max = 0;
  
// //     for (let i = 0; i < str.length; i++) {
// //       let map = new Map();
  
// //       for (let j = i; j < str.length; j++) {
// //         if (map.has(str[j])) {
// //           break; 
// //         }
// //         map.set(str[j], true);
// //         max = Math.max(max, j - i + 1);
// //       }
// //     }
  
// //     return max;
// //   }
  
// //   console.log(firstNonRepeating(str));
  
 
// let str = "))))((((";
// function isParenthesis(str) {
//   let stack = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '(') {
//       stack.push('(');
//     } else {
//       if (stack.length === 0) {
//         console.log("Not valid");
//         return;
//       }
//       stack.pop();
//     }
//   }

//   if (stack.length === 0) {
//     console.log("Is valid");
//   } else {
//     console.log("Not valid");
//   }
// }

// isParenthesis(str);

 


// function isParenthesiss (str){

//       let n = str.length;
//       if(n%2) return false;
     
//       let open = 0;

//       for(let i=0;i<n;i++){
//         if(str[i] === '(') open++;
//         else{
//           if(open > 0) open--;
//           else return false;
//         }
//       }
//       if(open != 0) return false;

//       return true;
     

// }
// console.log(isParenthesiss(str));


// /* generate all parenthesis  */

// //

// let validParenthesis = [];

// function generateParenthesis (n, strr = "", ind =0, open =0,close=0){
//      if(open<close){
//       return;
//      }
//    if(ind == n){
//     if(open === close){
//       validParenthesis.push(strr);
//     }
//       return;
//      }
     

//      generateParenthesis(n, strr +'(', ind + 1, open + 1, close);
//      generateParenthesis(n, strr +')', ind + 1, open, close + 1);
// }
// generateParenthesis(4);

// console.log({validParenthesis});



let str = "abc";
let arr = str.split("");

function stringPermutation(arr, i, j) {
    if (i === j) {
        console.log(arr.join(""));
        return;
    }

    for (let k = i; k <= j; k++) {
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;

        stringPermutation(arr, i + 1, j);

        temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
}

stringPermutation(arr, 0, arr.length - 1);









 



  

      



  