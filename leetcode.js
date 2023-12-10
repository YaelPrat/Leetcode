/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums.length;

    let uniqueCounter = 1;
    let slow= 2
    let fast =2;
    while(fast< nums.length){
        if (nums[slow-2] !== nums [fast]) {
            nums[slow] = nums [fast];
            slow ++;
        }
        fast ++;
    }
    return slow;
};

// Example 1
const nums1 = [1, 1, 1, 2, 2, 3];
const expectedNums1 = [1, 1, 2, 2, 3];
const k1 = removeDuplicates(nums1);
const hardCodedK1 = 5;

console.log("Example 1:");
console.log("Output k1:", k1, "Hard-coded k1:", hardCodedK1);
console.log("Output nums1:", nums1.slice(0, k1));
console.log("Expected:", expectedNums1);
console.log("---");

// Example 2
const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const expectedNums2 = [0, 0, 1, 1, 2, 3, 3];
const k2 = removeDuplicates(nums2);
const hardCodedK2 = 7;

console.log("Example 2:");
console.log("Output k2:", k2, "Hard-coded k2:", hardCodedK2);
console.log("Output nums2:", nums2.slice(0, k2));
console.log("Expected:", expectedNums2);
console.log("---");

// Edge Case 1: Empty Array
const numsEmpty = [];
const expectedNumsEmpty = [];
const kEmpty = removeDuplicates(numsEmpty);
const hardCodedEmpty = 0;

console.log("Edge Case 1:");
console.log("Output kEmpty:", kEmpty, "Hard-coded kEmpty:", hardCodedEmpty);
console.log("Output numsEmpty:", numsEmpty.slice(0, kEmpty));
console.log("Expected:", expectedNumsEmpty);
console.log("---");

// Edge Case 2: Single Element
const numsSingle = [42];
const expectedNumsSingle = [42];
const kSingle = removeDuplicates(numsSingle);
const hardCodedSingle = 1;

console.log("Edge Case 2:");
console.log("Output kSingle:", kSingle, "Hard-coded kSingle:", hardCodedSingle);
console.log("Output numsSingle:", numsSingle.slice(0, kSingle));
console.log("Expected:", expectedNumsSingle);
console.log("---");
