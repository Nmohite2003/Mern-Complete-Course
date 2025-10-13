/* Print The 2d Array / traverse the array */

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function printArray(arr){
    for(let i=0;i<arr.length;i++){
        let row = " ";
        for(let j=0;j<arr[0].length;j++){
           row+=arr[i][j] + " ";
        }
        console.log(row.trim());
    }
}
printArray(arr);

/* print the row and column  sum of the 2d matrix */

function sumOfRowCol(arr){
    let row = [];
    let col = [];

    for(let i=0;i<arr.length;i++){
        row[i]=0;
    }
    for(let j=0;j<arr[0].length;j++){
        col[j] = 0;
    }
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            row[i] += arr[i][j];
            col[j] += arr[i][j];
        }
    }
    return {row, col};
}
console.log(sumOfRowCol(arr));