// ---
// ### Task-5:
// Capitalize Every first Letter of each word in a String

function capitalizeLetter(word){
 return word.charAt(0).toUpperCase() + word.slice(1);
//  Explanation: This function takes a string as an argument and capitalizes its first letter. It does this by using charAt(0) to access the first character of the string and toUpperCase() to convert this character to uppercase. The slice(1) method is then used to extract the rest of the string starting from the second character. 
}
console.log(capitalizeLetter('agert'));