/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;

    let uniqueCounter = 1;
    let j = 1;
    for (let i = 0; i < nums.length-1; i++) {
        while(nums[i]===nums[j] ){
            j++;
        }
        if (j === nums.length) {
           return uniqueCounter;
        } 
        nums[i + 1] = nums[j];
        uniqueCounter++;     
    }
    return uniqueCounter;
};

// Test Case 1
// var nums1 = [1, 2];
// var expectedNums1 = [1, 2];
// var k1 = removeDuplicates(nums1);
// console.log("k:" +k1);
// console.log("a: "+ nums1);
// // console.assert(k1 === expectedNums1.length);
// for (var i = 0; i < k1; i++) {
//     console.assert(nums1[i] === expectedNums1[i]);
// }

// // Test Case 2
var nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var expectedNums2 = [0, 1, 2, 3, 4];
var k2 = removeDuplicates(nums2);
console.log("k:" +k2);
console.log("a: "+ nums2);
console.assert(k2 === expectedNums2.length);
for (var j = 0; j < k2; j++) {
    console.assert(nums2[j] === expectedNums2[j]);
}

// // Additional Test Cases
// var nums3 = [];
// var expectedNums3 = [];
// var k3 = removeDuplicates(nums3);
// console.assert(k3 === expectedNums3.length);

// var nums4 = [1];
// var expectedNums4 = [1, _];
// var k4 = removeDuplicates(nums4);
// console.assert(k4 === expectedNums4.length);
// for (var k = 0; k < k4; k++) {
//     console.assert(nums4[k] === expectedNums4[k]);
// }

// var nums5 = [-1, 0, 0, 0, 0, 3, 3];
// var expectedNums5 = [-1, 0, 3, _, _, _, _];
// var k5 = removeDuplicates(nums5);
// console.assert(k5 === expectedNums5.length);
// for (var l = 0; l < k5; l++) {
//     console.assert(nums5[l] === expectedNums5[l]);
// }
