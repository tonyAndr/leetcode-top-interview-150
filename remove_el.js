let nums = [1,2,3,4]
function productExceptIndex(arr) {
    const n = arr.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    const result = new Array(n).fill(1);

    // Fill the left array with products of all elements to the left of i
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * arr[i - 1];
    }

    // Fill the right array with products of all elements to the right of i
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * arr[i + 1];
    }

    // The product excluding the element at index i is left[i] * right[i]
    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
}

// Example usage:
const result = productExceptIndex(nums);
console.log(result); // Output: [60, 40, 30, 24]