const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "1234567890";
// const symbols = "`~!@#$%^&*()_+-={}[]|\;:',<.>/?";
// const SYMBOLS = "`~!@#$%^&*()_+-={}[];:',.?";
// const SYMBOLS = "`~!@#$%^*()_+={}[];:',.?";
const SYMBOLS = "`~!@#$%^*()_+={}[];:',.";

let form = document.getElementById('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    let password_length = document.getElementById('password-length').value;

    // console.log(password_length);

    let password_output = "";
    for (i = 0; i <= password_length-1; i++){
        let x = Math.floor(Math.random() *4);
        // console.log(x);
        if (x==0){
            let x0 = Math.floor(Math.random() * UPPERCASE_LETTERS.length)
            password_output = password_output+UPPERCASE_LETTERS[x0]
        }
        if (x==1){
            let x1 = Math.floor(Math.random() * LOWERCASE_LETTERS.length)
            password_output = password_output+LOWERCASE_LETTERS[x1]
        }
        if (x==2){
            let x2 = Math.floor(Math.random() * NUMBERS.length)
            password_output = password_output+NUMBERS[x2]
        }
        if (x==3){
            let x3 = Math.floor(Math.random() * SYMBOLS.length)
            password_output = password_output+SYMBOLS[x3]
        }
    }
    // console.log(password_output);

    // Add functionality that segments the output into sub paragraph tags, centered and textalign centered on the webpage.
    document.getElementById("generated-password-paragraph").innerHTML = password_output;
    
})

