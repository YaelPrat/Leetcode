/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len= m+n;
    for(let i= len; i>= 1 ; i--){
        if(m == 0){
            if(n>0){
                for(let j= n-1; j>1; j--){
                    nums1[i-1] = nums2[j];
                }
            }
        }
        if(n == 0){
            return;
        }
        if(nums1[m-1] > nums2 [n-1]){
            nums1[i-1] = nums1[m-1];
            m--;
        } 
        else{
            nums1[i-1] = nums2[n-1];
            n--;
        } 
    }
    
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;

let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Expected output: [1, 2, 2, 3, 5, 6]

// let nums1 = [];
// let m = 0;

// let nums2 = [];
// let n = 0;

// merge(nums1, m, nums2, n);

// console.log(nums1);

// let nums1 = [1, 2, 3];
// let m = 3;

// let nums2 = [];
// let n = 0;

// merge(nums1, m, nums2, n);

// console.log(nums1); // Expected output: [1, 2, 3]

// let nums1 = [0];
// let m = 0;

// let nums2 = [1];
// let n = 1;

// merge(nums1, m, nums2, n);

// console.log(nums1); // Expected output: [1]