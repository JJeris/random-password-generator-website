const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
// const symbols = "`~!@#$%^&*()_+-={}[]|\;:',<.>/?";
const symbols = "`~!@#$%^&*()_+-={}[];:',.?";

var form = document.getElementById('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    var password_length = document.getElementById('password-length').value;

    console.log(password_length);

    var password_output = "";
    for (i = 0; i <= password_length-1; i++){
        var x = Math.floor(Math.random() *4);
        console.log(x);
        if (x==0){
            var x0 = Math.floor(Math.random() * uppercase_letters.length)
            password_output = password_output+uppercase_letters[x0]
        }
        if (x==1){
            var x1 = Math.floor(Math.random() * lowercase_letters.length)
            password_output = password_output+lowercase_letters[x1]
        }
        if (x==2){
            var x2 = Math.floor(Math.random() * numbers.length)
            password_output = password_output+numbers[x2]
        }
        if (x==3){
            var x3 = Math.floor(Math.random() * symbols.length)
            password_output = password_output+symbols[x3]
        }
    }
    console.log(password_output);
    document.getElementById("generated-password-paragraph").innerHTML = password_output;
    
})



// if(form){
//     form.addEventListener('submit', function(event){
//         event.preventDefault(); // Doesnt default form autosubmitting.
//         var password_length = document.getElementById('password-length').value;
//         console.log(password_length);
//     })
    
// }

// window.addEventListener('DOMContentLoaded', (event) => {
//     function Generate_password () {
//         var password_length = document.getElementById('password-length');
//         form.addEventListener('generate-password-button', (e) => {

//             var uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//             var lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
//             var numbers = "1234567890";
//             var symbols = "`~!@#$%^&*()_+-={|[]\:;<>?,./:";

//             var password_output = "";
//             for (i = 0; i <= password_length; i++){
//                 var x = Math.floor(Math.random() * 3);
//                 if (x==0){
//                     var x0 = Math.floor(Math.random() * uppercase_letters.length)
//                     password_output = password_output+uppercase_letters[x0]
//                 }
//                 if (x==1){
//                     var x1 = Math.floor(Math.random() * lowercase_letters.length)
//                     password_output = password_output+lowercase_letters[x1]
//                 }
//                 if (x==2){
//                     var x2 = Math.floor(Math.random() * numbers.length)
//                     password_output = password_output+numbers[x2]
//                 }
//                 if (x==3){
//                     var x3 = Math.floor(Math.random() * symbols.length)
//                     password_output = password_output+symbols[x3]
//                 }
//             }
//             console.log(password_output);
//             // document.getElementById("generated-password-paragraph").innerHTML = password_output;
//         })
//     }
//     document.getElementById("generate-password-button").addEventListener('click', Generate_password);
// })