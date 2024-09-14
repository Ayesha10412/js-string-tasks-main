// ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//     Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// ---

function replaceChar(value){
   let char=value.replace('X', 'Y')&&value.replace('x', 'y');
   return char;
    
}
console.log(replaceChar('Xtux'));