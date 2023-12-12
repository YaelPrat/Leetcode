// var maxProfit = function(prices) {
//     if(prices.length < 2) return 0;

//     let totalProfit=0;
//     let i= 1;
   
//     if(prices[0] <= prices[1]){
//         let j = 1;
//         while(j < prices.length){
//             //find local max
//             if(prices[j-1] <= prices [j] && prices[j+1] < prices[j]){
//                 totalProfit += (prices[j]-prices[0]);
//                 break;
//             }

//             if(j === prices.length-1){
//                 if(prices[j] > prices [0]){
//                     totalProfit += (prices[j]-prices[0]);
//                 }
//                 return totalProfit;
//             }
//             j++;
//         }
//         i = j;
//     }
    
//     while (i< prices.length-1) {

//         //case of local minimum
//         if (prices[i-1] >= prices [i] && prices[i+1] > prices[i]){
//             let j = i+1;
//             while(j < prices.length){
//                 //find local max
//                 if(prices[j-1] <= prices [j] && prices[j+1] < prices[j]){
//                     if(j === prices.length-1) return 0;
//                     totalProfit += ( prices[j]- prices[i]);
//                     break;
//                 }
//                 if(j === prices.length-1){
//                     totalProfit += ( prices[j]- prices[i]);
//                     return totalProfit;
//                 }
//                 j++;
//             }
//         }
//         i++;
//     }

//     return totalProfit;

// };

const maxProfit = function(prices) {
    let profit = 0;
    for(let i=1;i<prices.length;i++) {
        if(prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;
}

// Test Case 1
const prices1 = [7, 1, 5, 3, 6, 4];
const result1 = maxProfit(prices1);
console.log("7 : "+result1);  // Output: 7

// Test Case 2
const prices2 = [1, 2, 3, 4, 5];
const result2 = maxProfit(prices2);
console.log("4 : "+result2);  // Output: 4

// Test Case 3
const prices3 = [7, 6, 4, 3, 1];
const result3 = maxProfit(prices3);
console.log("0 : "+result3);  // Output: 0

// Test Case 4
const prices4 = [3, 3, 5, 0, 0, 3, 1, 4];
const result4 = maxProfit(prices4);
console.log("7 : "+result4);  // Output: 6

// // Test Case 5
// const prices5 = [1, 2, 3, 4, 5];
// const result5 = maxProfit(prices5);
// console.log("7 : "+result5);  // Output: 4

// Test Case 6
const prices6 = [1];
const result6 = maxProfit(prices6);
console.log("0 : "+result6);  // Output: 0

// Test Case 7
const prices7 = [1, 2];
const result7 = maxProfit(prices7);
console.log("1 : "+result7);  // Output: 1

// Test Case 8
const prices8 = [1, 2, 4];
const result8 = maxProfit(prices8);
console.log("3 : "+result8);  // Output: 3

// Test Case 9
const prices9 = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0];
const result9 = maxProfit(prices9);
console.log("15 : "+result9);  // Output: 13

// // Test Case 10
// const prices10 = [3, 3, 5, 0, 0, 3, 1, 4];
// const result10 = maxProfit(prices10);
// console.log(result10);  // Output: 6

// Test Case 11
const prices11 = [2, 1, 2, 1, 2, 1, 2, 1];
const result11 = maxProfit(prices11);
console.log("3 : "+result11);  // Output: 3

// Test Case 12
const prices12 = [7, 6, 4, 3, 1];
const result12 = maxProfit(prices12);
console.log("0 : "+result12);  // Output: 0

// Test Case 13
const prices13 = [2, 1, 4, 5, 2, 9, 7];
const result13 = maxProfit(prices13);
console.log("11 : "+result13);  // Output: 11

// Test Case 14
const prices14 = [3, 2, 6, 5, 0, 3];
const result14 = maxProfit(prices14);
console.log("7 : "+result14);  // Output: 7


const prices15 = [1,1,0];
const result15 = maxProfit(prices15);
console.log("0 : "+result15);  // Output: 7


const prices16 = [5,2,3,2,6,6,2,9,1,0,7,4,5,0];
const result16 = maxProfit(prices16);
console.log("20 : "+result16);  // Output: 7
