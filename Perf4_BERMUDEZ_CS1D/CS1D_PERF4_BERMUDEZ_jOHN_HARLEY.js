//https://www.geeksforgeeks.org/sorting-algorithms-in-javascript/
/*1. Bubble Sort
Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
*/
function bubbleSort(arr) {
    // Get the array length
    const n = arr.length;
    
    // Outer loop for passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparisons
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
/*2. Selection Sort
Divides input into sorted and unsorted regions, repeatedly selects smallest element from unsorted region.*/
function selectionSort(arr) {
    // Get array length
    const n = arr.length;
    
    // Outer loop for passes
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        
        // Find minimum element in unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // Swap found minimum with first element
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}
/*3. Insertion Sort
Builds final sorted array one item at a time, by repeatedly inserting a new element into the sorted portion.*/
function insertionSort(arr) {
    // Get array length
    const n = arr.length;
    
    // Start from second element
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
//https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/index.php
/*Intermediate (Medium) Sorting Algorithms
1. Quick Sort
Uses divide-and-conquer strategy, picks a 'pivot' element and partitions array around it.*/
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Find partition index
        let pi = partition(arr, low, high);
        
        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
/*2. Merge Sort
Description: Divide-and-conquer algorithm that recursively breaks down problem into multiple subproblems until they become simple enough to solve.*/
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;
    
    // Find middle point to divide array
    const mid = Math.floor(arr.length / 2);
    
    // Recursively sort both halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    // Merge sorted halves
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements and merge
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
//https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/index.php
/*Complex (Hard) Sorting Algorithm
1. Tim Sort
Description: Hybrid sorting algorithm derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data.*/
function timSort(arr) {
    const minRun = 32;
    const n = arr.length;
    
    // Do insertion sort on small subarrays
    for (let i = 0; i < n; i += minRun) {
        insertionSort(arr, i, Math.min(i + minRun - 1, n - 1));
    }
    
    // Start merging from size minRun
    for (let size = minRun; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = left + size - 1;
            const right = Math.min(left + 2 * size - 1, n - 1);
            
            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }
    return arr;
}

function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}
function testSort() {
    // Test array with sample numbers
    const arr = [64, 34, 25, 12, 22, 11, 90];
    
 
    console.log("Testing sorting algorithms with array:", arr);
    console.log("----------------------------------------");
    console.log("Bubble Sort:    ", bubbleSort([...arr]));
    console.log("Selection Sort: ", selectionSort([...arr]));
    console.log("Insertion Sort: ", insertionSort([...arr]));
    console.log("Quick Sort:     ", quickSort([...arr]));
    console.log("Merge Sort:     ", mergeSort([...arr]));
    console.log("Tim Sort:       ", timSort([...arr]));
}

testSort();