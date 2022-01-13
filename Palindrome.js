//ALL FUNCTIONS RELATED TO PALINDROMES:

//CHECKS is the string submitted is a palindrome 

//VERSION 1: 
const is_Palindrome = (string) => {
    let rev = string.split("").reverse().join("")
    return string === rev 
}
// console.log(is_Palindrome('racecar'))
// console.log(is_Palindrome('jazmin'))

//VERSION 2:
const isPalindrome = (string) => {
    let strLen = string.length;
    string = string.toLocaleLowerCase();
  
    if (strLen === 0 || strLen === 1) {
      return true;
    }
    if (string[0] === string[strLen - 1]) {
      return isPalindrome(string.slice(1, strLen - 1) );
    }  
    return false;
};

// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('jazmin'))

//CHECKS for the longest palindromic prefix of a given string

const longestPrefixPalindrome = (string) => {
    let final = ''
    if (string.length === 0){
        return undefined 
    } 
    for (let i=string.length; 1 < i; i--){
        let sub = string.slice(0, i)
        if (is_Palindrome(sub)){
            return sub
        }
    }
}
// console.log('ANS FIN:',longestPrefixPalindrome('ssssnope'))
// console.log('ANS FIN:',longestPrefixPalindrome('noonjazmin'))

//CHECK FOR longest palindromic sub-string (any start/end) of a given string
const longestSubPalindrome = (string) => {
    let final = ''
    for (let i=0; i<4; i++){
        let sub = string.slice(i)
        let longest = longestPrefixPalindrome(sub)
        if (longest && final.length < longest.length){
            final = longest 
        }
    }
    return final 
}

// longestSubPalindrome('jazracecarnope')
// longestSubPalindrome('jaztttttttttttnope')

//8. Split Two Strings to Make Palindrome
// You are given two strings a and b of the same length. Choose an index and split both strings at the same index, splitting a into two strings: 
// aprefix and asuffix where a = aprefix + asuffix, and splitting b into two strings: bprefix and bsuffix where b = bprefix + bsuffix. 
// Check if aprefix + bsuffix or bprefix + asuffix forms a palindrome.
// When you split a string s into sprefix and ssuffix, either ssuffix or sprefix is allowed to be empty. For example, if s = "abc", then "" + "abc", "a" + "bc", "ab" + "c" , and "abc" + "" are valid splits.
// Return true if it is possible to form a palindrome string, otherwise return false.
//EXAMPLES: 
// Input: a = "ulacfd", b = "jizalu" Output: true
// Input: a = "xbdef", b = "xecab" Output: false

function checkPalindrome(a,b){
    let final = false
    let aPre = '' 
    let bPre = ''
    for(let i=0; i<a.length;i++){
        let aSuf = a.slice(i)
        let bSuf = b.slice(i)

        let checkA = aPre + bSuf
        let checkB = bSuf  + aSuf
        let revA = checkA.split('').reverse().join('')
        let revB = checkB.split('').reverse().join('')
        if (checkA === revA || checkB === revB ){
            final = true
        }
        aPre += a[i]
        bPre += b[i]
    }
    console.log(final)
    return final
}
// checkPalindrome("ulacfd", "jizalu") //SHOULD BE: true
// checkPalindrome("xbdef", "xecab") //SHOULD BE: false

