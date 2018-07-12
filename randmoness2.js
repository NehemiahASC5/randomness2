rand()
function randomnumber(){
   console.log(Math.random()*21);
}

//OR

function randomInterger(){
    const decimal = Math.random()*21;
    const int = Math.floor(decimal);
    console.log(int);
}

// should be console.log a random letter from the alphabet 
function randomletter(){
    const number = Math.random()*alphabet.lenght;
    const index = Math.floor(number)
    const letter = alphabet[index];
    console.log(letter);
}


