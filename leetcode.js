var maxProfit = function(prices) {
    let localMin;
    let localMax;
    let maxIndex=-1;
    let minIndex=-1;

    let currentProfit=0;
    localMax = localMin = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if(localMin > prices[i]){
            //found new minimum
            localMin = prices[i];
            minIndex = i;
            //the older max is`nt counts 
            localMax = 0;
            maxIndex= 0;
        }
        else if(localMax < prices[i] && minIndex <i){
            if(currentProfit < prices[i] - localMin){
                localMax = prices[i];
                maxIndex = i;
                currentProfit = localMax - localMin;
            }      
        }
    }
  return currentProfit;
};

// Test Case 1
const prices1 = [7, 1, 5, 3, 6, 4];
// Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
const expected1 = 5;

// Test Case 2
const prices2 = [7, 6, 4, 3, 1];
// No transactions are done, and the max profit = 0.
const expected2 = 0;

// Test Case 3
const prices3 = [2, 4, 1];
// Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
const expected3 = 2;

// Test Case 4 (Edge Case: Empty Array)
const prices4 = [];
// Cannot make any transactions, so max profit = 0.
const expected4 = 0;

// Test Case 5 (Edge Case: Single Element)
const prices5 = [5];
// Cannot make any transactions, so max profit = 0.
const expected5 = 0;

// Test Case 6 (Edge Case: Two Elements)
const prices6 = [7, 3];
// Buy on day 2 (price = 3) and sell on day 1 (price = 7), profit = 7-3 = 4.
const expected6 = 0;

// Test Case 7 (Edge Case: All Prices Same)
const prices7 = [3, 3, 3, 3, 3];
// Cannot make any transactions, so max profit = 0.
const expected7 = 0;

// Test Case 8 (Edge Case: Decreasing Prices)
const prices8 = [5, 4, 3, 2, 1];
// Cannot make any transactions, so max profit = 0.
const expected8 = 0;

// Test Case 9 (Edge Case: Increasing Prices)
const prices9 = [1, 2, 3, 4, 5];
// Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
const expected9 = 4;

console.log("Test Case 1:", maxProfit(prices1) === expected1);
console.log("Test Case 2:", maxProfit(prices2) === expected2);
console.log("Test Case 3:", maxProfit(prices3) === expected3);
console.log("Test Case 4:", maxProfit(prices4) === expected4);
console.log("Test Case 5:", maxProfit(prices5) === expected5);
console.log("Test Case 6:", maxProfit(prices6) === expected6);
console.log("Test Case 7:", maxProfit(prices7) === expected7);
console.log("Test Case 8:", maxProfit(prices8) === expected8);
console.log("Test Case 9:", maxProfit(prices9) === expected9);
