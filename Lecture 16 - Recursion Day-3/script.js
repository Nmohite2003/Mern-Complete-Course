// function isAnagram(a, b) {
//     // const map = new Map();
//     if (a.length != b.length) return false;
  
//     let freqObj = {};
  
//     for (let i = 0; i < a.length; i++) {
//       freqObj[a[i]] = (freqObj[a[i]] || 0) + 1;
//     }
  
//     for (let i = 0; i < b.length; i++) {
//       if (!freqObj[b[i]]) return false;
//       freqObj[b[i]] = freqObj[b[i]] - 1;
//     }
  
//     for (let value of Object.values(freqObj)) if (value) return false;
  
//     return true;
//   }
  
//   console.log(isAnagram("cat", "ac"));
  
  

 







function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let map = new Map();

    for (let i = 0; i < str1.length; i++) {
        map.set(str1[i], (map.get(str1[i]) || 0) + 1);
    }
    for (let i = 0; i < str2.length; i++) {
        map.set(str2[i], (map.get(str2[i]) || 0) - 1);
    }

    for (let value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }
    return true;
}

let inputs = ["cat", "tea", "pet", "tac", "act", "eat"];
let word = ["cat", "tca", "eee", "tea"];

function findAnagram(words, inputs) {
    
    for (let i = 0; i < words.length; i++) {
        let result = ""

        for (let j = 0; j < inputs.length; j++) {
            if (isAnagram(words[i], inputs[j])) {
                result+=inputs[j]+" "
            }
        }
        // return -1;
        console.log (result);
    }
}
findAnagram(word, inputs);







  