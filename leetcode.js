/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 1) return 1;
    let i = s.length-1;
    let wordLen=0;
  while( i > 0){
    if(s[i] === ' '){
        i -- ;
    }   
    else{
        break;
    }
  }//while

  while(i>=0)
  {
    if(s[i] !== ' '){
        i -- ;
        wordLen++;
    }else{
        return wordLen;
    }
  }

    return wordLen;
    
};

//I see a builtin solution so ill add it here:

const lengthOfLastWord2 =function (s){
    return s.trimEnd().split(' ').pop().length
}


// Example 1
const s1 = "a ";
const expected1 = 1;
console.log("Example 1:", lengthOfLastWord2(s1), "Expected:", expected1);
console.log("---");

// Example 2
const s2 = "   fly me   to   the moon  ";
const expected2 = 4;
console.log("Example 2:", lengthOfLastWord2(s2), "Expected:", expected2);
console.log("---");

// Example 3
const s3 = "luffy is still joyboy";
const expected3 = 6;
console.log("Example 3:", lengthOfLastWord2(s3), "Expected:", expected3);
console.log("---");

// Edge Case 1: Minimum input length
const sEmpty = "a";
const expectedEmpty = 1;
console.log("Edge Case 1:", lengthOfLastWord2(sEmpty), "Expected:", expectedEmpty);
console.log("---");

// Edge Case 2: Multiple spaces between words
const sMultipleSpaces = "word1    word2   word3";
const expectedMultipleSpaces = 5;
console.log("Edge Case 2:", lengthOfLastWord2(sMultipleSpaces), "Expected:", expectedMultipleSpaces);
console.log("---");

// Edge Case 3: All spaces
const sAllSpaces = "      ";
const expectedAllSpaces = 0;
console.log("Edge Case 3:", lengthOfLastWord2(sAllSpaces), "Expected:", expectedAllSpaces);
console.log("---");

// // Edge Case 4: String with a single space
// const sSingleSpace = " ";
// const expectedSingleSpace = 0;
// console.log("Edge Case 4:", lengthOfLastWord(sSingleSpace), "Expected:", expectedSingleSpace);
// console.log("---");

// Edge Case 5: String with multiple spaces at the end
const sSpacesAtEnd = "word1 word2      ";
const expectedSpacesAtEnd = 5;
console.log("Edge Case 5:", lengthOfLastWord2(sSpacesAtEnd), "Expected:", expectedSpacesAtEnd);
console.log("---");
