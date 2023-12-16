/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    if (nums.length === 1 && nums[0] === 0 ) {
        return false;
    }
    let isZero = nums.includes(0);
    if(isZero === false) return true;

    let maxReachIndex= nums[0];
    for(let i=0; i< nums.length-1; i++){
        maxReachIndex = Math.max(maxReachIndex, i+nums[i])
        if(nums[i] === 0 && maxReachIndex <= i){
            return false;
        }
    }
    return true;
    
};


// Test Case 1
const nums1 = [2, 0,0];
// Can jump 1 step from index 0 to 1, then 3 steps to the last index.
const expected1 = true;

// Test Case 2
const nums2 = [3, 2, 1, 0, 4];
// Cannot reach the last index because the maximum jump length is 0 at index 3.
const expected2 = false;

// Test Case 3 (Edge Case: Single Element)
const nums3 = [5];
// Only one element, and it can directly reach the last index.
const expected3 = true;

// Test Case 4 (Edge Case: All Zeros Except Last Element)
const nums4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5];
// The last element has a jump length of 5, so it can reach the last index.
const expected4 = true;

// Test Case 5 (Edge Case: All Zeros Except Last Two Elements)
const nums5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2];
// The second-to-last element has a jump length of 0, so it cannot reach the last index.
const expected5 = false;

// Test Case 6 (Edge Case: All Ones)
const nums6 = [1, 1, 1, 1, 1, 1];
// Can jump 1 step from each position, and it can reach the last index.
const expected6 = true;

console.log("Test Case 1:", canJump(nums1) === expected1);
console.log("Test Case 2:", canJump(nums2) === expected2);
console.log("Test Case 3:", canJump(nums3) === expected3);
console.log("Test Case 4:", canJump(nums4) === expected4);
console.log("Test Case 5:", canJump(nums5) === expected5);
console.log("Test Case 6:", canJump(nums6) === expected6);
