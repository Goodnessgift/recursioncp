function isPalindrome(word) {
    // Base cases: an empty word or a word with a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the first and last characters
    if (word[0] !== word[word.length - 1]) {
        return false;
    }

    // Recur with the rest of the word
    return isPalindrome(word.slice(1, -1));
}

// Example usage:
console.log(isPalindrome("gag"));  // Output: true
console.log(isPalindrome("kayak"));  // Output: true
console.log(isPalindrome("php"));  // Output: false
console.log(isPalindrome("radar"));  // Output: true


        //  EXPLANATION
// In this code, the isPalindrome function recursively checks if the first and last characters of the word are equal. If they are, it continues checking the rest of the word (excluding the first and last characters). If at any point the characters are not equal, it returns false.

// The base cases are when the word is empty or contains a single character, in which case it's considered a palindrome.

// You can use the isPalindrome function to check if a word is a palindrome. For example, isPalindrome("gag") will return true.