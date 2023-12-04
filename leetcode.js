/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let j = nums.length -1;

    while (i <= j) {
        if(nums[i] === val){
            if(nums[j] === val){
                j--;
            }
            else{
                nums[i] = nums[j] 
                i++; j--;
            }
        }
        else{
            i++
        }
    }
    return i;
};

// Helper function to sort the first k elements of nums
var sort = function(nums, start, end) {
    // Your sorting implementation (e.g., nums.sort((a, b) => a - b))
    nums.slice(start, end).sort((a, b) => a - b);

};

// Test Case 1
var nums1 = [3, 2, 2, 3];
var val1 = 3;
var expectedNums1 = [2, 2]; // Sorted array with no values equal to val1

var nums2 = [];
var val2 = 5;
var expectedNums2 = [];


var nums3 = [1, 1, 1, 1, 1];
var val3 = 1;
var expectedNums3 = [];

var nums4 = [5, 2, 8, 7, 2, 4, 2, 6, 8];
var val4 = 9;
var expectedNums4 = [5, 2, 8, 7, 2, 4, 2, 6, 8];

var nums5 = [5, 5, 5, 5, 5];
var val5 = 5;
var expectedNums5 = [];

var k1 = removeElement(nums5, val5);


// Debug information
console.log('Modified nums:', nums5);
console.log('Returned k:', k1);

// console.assert(k1 === expectedNums3.length);
// sort(nums3, 0, k1);
// for (var i = 0; i < k1; i++) {
//     console.assert(nums3[i] === expectedNums3[i]);
// }

