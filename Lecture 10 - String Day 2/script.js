console.log("Nilesh");

//question

//given a vairable name seprated by space 
//write two functions
  //conevrt this varaible to camel case
  //convert this vairable to snake case

  let str = "student first name";

function camelCase(str) {
  let result = "";
  let bool = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      bool = true; 
    } else {
      if (bool) {
        result += str[i].toUpperCase();
        bool = false;
      } else {
        result += str[i].toLowerCase();
      }
    }
  }

  return result;
}

console.log(camelCase(str)); 

//convert string into snake case

function snakeCase(str) {
    let result = "";
    let bool = false;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        bool = true; 
      } else {
        if (bool) {
          result += "_" ;
          result+=str[i];
          bool = false;
        } else {
          result += str[i];
        }
      }
    }
  
    return result;
  }
  
  console.log(snakeCase(str)); 



// reverse the string without uisng reverse function

let strr = "abccba";
function reverseString(strr){
    let reversed = "";
  for(let i = strr.length-1; i>=0; i--){
        reversed += strr[i];
    }
    return reversed;
}
console.log(reverseString(strr));
  
// chcek palindrome

function palindromeString(strr){
  let reversed = "";
  let n = strr;
for(let i = strr.length-1; i>=0; i--){
      reversed += strr[i];
  }
  if(n == reversed){
    console.log("The given string is paloindrome")
  }
  else{
    console.log("The Given string is not palindrome")
  }
}
palindromeString(strr);

// find the no of words in a string

let str1 = "Nilesh Mohite";

// function noOfWords(str1) {
//   let words = str1.trim().split(/\s+/); 
//   console.log(words.length);
// }

// noOfWords(str1);

function noOfWords(str1) {
  let count = 0;
  let inWord = false;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== " ") {
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }

  console.log(count);
}

noOfWords(str1);

// longest word in a string 

let str2 = "Nilesh Mohite is learning JavaScript";

function longestWord(str2) {
  let longest = "";
  let curr = "";

  for (let i = 0; i <= str2.length; i++) {
    if (i < str2.length && str2[i] !== " ") {
      curr += str2[i];
    } else {
      if (curr.length > longest.length) {
        longest = curr;
      }
      curr = "";
    }
  }

  console.log(longest);
}

longestWord(str2);



// print first non repeating word in a string



let str3 = "abcdcbae";

function firstNonRepeatingCharacter(str3) {
  str3 = str3.split("").sort().join("");
  let char = "";
  
  for (let i = 0; i < str3.length; i++) {
    let count = 0;
    for (let j = i + 1; j < str3.length; j++) {
      if (str3[i] === str3[j]) {
        count++;
      }
    }
    if (count === 0) {
      char = str3[i];
      break;
    }
  }

  console.log(char);
}

firstNonRepeatingCharacter(str3);






