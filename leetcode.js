/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    if(n === 1) return nums[0];
    if(n%2 ===1 ) n-=1; // case it is od number
    
    let sortedNums = nums.sort((a,b)=>a-b);
    // console.log("the array: "+ sortedNums)
    return sortedNums[n/2];
};

// Normal cases
const nums1 = [3, 2, 3]; // Majority element is 3
const nums2 = [2, 2, 1, 1, 1, 2, 2]; // Majority element is 2
const nums3 = [1, 2, 2, 3, 2, 4, 2]; // Majority element is 2

// Edge cases
const nums4 = [1]; // Single element array, majority element is 1
const nums5 = [1, 1, 1, 1, 1, 1, 2, 2, 2]; // Majority element is 1
const nums6 = [3, 3, 4, 2, 4, 4, 2, 4, 4]; // Majority element is 4

// Large array with majority element
const nums7 = Array.from({ length: 10000 }, (_, index) => index % 3 === 0 ? 42 : index % 3 === 1 ? 7 : 15);

console.log(majorityElement(nums1)); // Expected output: 3 V
console.log(majorityElement(nums3)); // Expected output: 2 V
console.log(majorityElement(nums5)); // Expected output: 1 V
console.log(majorityElement(nums6)); // Expected output: 4 V


console.log(majorityElement(nums2)); // Expected output: 2 X

console.log(majorityElement(nums4)); // Expected output: 1 X

// console.log(majorityElement(nums7)); // Expected output: 42 X
