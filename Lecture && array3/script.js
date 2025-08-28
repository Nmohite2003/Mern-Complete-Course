/*
Yesterday's Topics:

- Array inbuilt functions: includes(), indexOf(), concat()
- factorial of a number
- nCr (combinations)
- Average problems
- Some questions from the Array module

*/

/*
Some more problems on Arrays
*/

// Q1: given an array, find its prefix sum

/*
Input
arr = [3, 5, 1, 4, 5, 8];

Output
prefix = [3, 8, 9, 13, 18, 26]
*/

const arr = [3, 5, 1, 4, 5, 8];
const pref = [];
pref[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
    pref[i] = pref[i - 1] + arr[i];
}

