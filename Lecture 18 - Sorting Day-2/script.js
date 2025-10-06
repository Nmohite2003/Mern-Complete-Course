console.log("Nilesh");
/* ====== MERG SORT ==== */

// given two sorted array  A&b merge both them

let arr1 = [1,3,4,7,10];
let arr2 = [2,9,12]

function mergeTwoArrays(arr1,arr2){
    let n = arr1.length;
    let m = arr2.length;
    let i = 0;
    let j = 0;

    let ans = [];

    while(i<n && j<m){
        if(arr1[i] < arr2[j]){
            ans.push(arr1[i]);
            i++;
        }
        else{
            ans.push(arr2[j])
            j++
        }
    }
    while(i<n){
        ans.push(arr1[i]);
        i++;
    }
    while(j<m){
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}
console.log(mergeTwoArrays(arr1,arr2));



// merge sort

// O(N logN)

let arr = [3,7,1,5,8,2,4];

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return mergeTwoArrays(left, right);
}

function mergArrays(left, right){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(arr));     


// insertion sort 

let a = [1,2,7,9,6];
let n =  a.length; 

function insertionSort(a, n) {
     let j = a[n - 1];
     let i = n - 2;
 
     while (i >= 0 && a[i] > j) {
         a[i + 1] = a[i];
         i--;
     }
 
     a[i + 1] = j;
    return a;
    
 
 }
 console.log(insertionSort(a,n))




















