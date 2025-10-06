// /* QUICK SORT */

// // give an array place its last element at a position such that all smaller elements are in the left and all greater elemetns are in right

//let arr = [2, 1, 7, 5, 4];
let arr = [2, 1, 7, 5, 4];
function arraySort(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      
      let temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      
      return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      let pivotIndex = arraySort(arr, low, high);
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
  }
  
  console.log(quickSort(arr));

