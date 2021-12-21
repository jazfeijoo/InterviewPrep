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

longestSubPalindrome('jazracecarnope')
longestSubPalindrome('jaztttttttttttnope')