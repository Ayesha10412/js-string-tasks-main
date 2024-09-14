// ### Task-1: 
// Count how many times a string has the letter `a`

// ---

function nameCount(name){
    let count=0;
    for(const char of name){
        if(char==='a'){
            count++;
          
        }
     else {
            continue;
        }
    }
    return count;
}
   

console.log(nameCount('aaaabada'));
console.log(nameCount('ayesha'));
