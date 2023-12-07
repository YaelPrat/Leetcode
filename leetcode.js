/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length === 0) return;
    k %=nums.length;
    nums.reverse();
    let start =0;
    let end = k-1;
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++; end --;
    }

    start =k;
    end = nums.length-1;
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++; end --;
    }

};

const example1 = [1, 2, 3, 4, 5, 6, 7];
rotate(example1, 3);

const example2 = [0, -1, -2, -3, -4];
rotate(example2, 2);

const emptyArray = [];
rotate(emptyArray, 3);

const singleElementArray = [42];
rotate(singleElementArray, 5);

const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rotate(largeArray, 15);