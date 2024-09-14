// ---
// ### Task-2: 
// Count how many times a string has the letter `a` or `A`

// ---

function nameCount(name){
    let count=0;
    let countA=0;
    for(const char of name){
        if(char==='a'){
            count++;
          
        }
        else if( char==='A'){
        countA++;
        }

     else {
            continue;
        }
      
    }
    console.log('Numbers of A: ',countA);
    console.log('Numbers of a: ');
    return count;
   
}
   

console.log(nameCount('aaAAbada'));
