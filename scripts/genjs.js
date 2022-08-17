// Assets used to gen. password (i.e. letters, numbers, symbols)
var txt0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var txt1 = "abcdefghijklmnopqrstuvwxyz"
var txt2 = "1234567890"
var txt3 = "`~!@#$%^&*()_+-={|[];<>?,./:"
//

//Function addlen(): gives prompt, asking the size (length) of the password.
function addlen(){
    var a = prompt("Addlen?");
    if (a <= 0){
        console.log("Input invalid")
        addlen()
    }
    else if (a > 0){
        console.log("Length is", a)
        b(a)
    }
}
//

//Fuction b(a): builds password using assets (txtn) with the given password lenght (a).
function b(a){
    var out = ""
    for (i=0;i<=a;i++){
        var r = Math.floor(Math.random() * 3);
        if (r==0){
            var x0 = Math.floor(Math.random() * txt0.length)
            out = out+txt0[x0]
            console.log(out)
        }
        else if (r==1){
            var x1 = Math.floor(Math.random() * txt1.length)
            out = out+txt1[x1]
            console.log(out)
        }
        else if (r==2){
            var x2 = Math.floor(Math.random() * txt2.length)
            out = out+txt2[x2]
            console.log(out)
        }
        else if (r==3){
            var x3 = Math.floor(Math.random() * txt3.length)
            out = out+txt3[x3]
            console.log(out)
        }
        else{
            addlen()
        }
    }
}
addlen()

// Assets - lists of characters that will be used in the generation of password.

// var uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
// var numbers = "1234567890";
// var symbols = "`~!@#$%^&*()_+-={|[]\:;<>?,./:";

// Takes value from the form.
// function Add_length() {
//     var password_length = prompt("Add length:")
//     while (password_length<=0){
//         var password_length = prompt("Invalid input. Add length:")
//     }
//     return password_length;
// }

// var button = document.getElementById("generate-password-button"),
// value =  button.form.valueId.value;
// button.onclick = Generate_password();

// function Generate_password () {
//     var password_length = document.getElementById("password-length").value;
//     console.log(password_length);

//     var password_output = "";
//     for (i = 0; i <= password_length; i++){
//         var x = Math.floor(Math.random() * 3);
//         if (x==0){
//             var x0 = Math.floor(Math.random() * uppercase_letters.length)
//             password_output = password_output+uppercase_letters[x0]
//         }
//         if (x==1){
//             var x1 = Math.floor(Math.random() * lowercase_letters.length)
//             password_output = password_output+lowercase_letters[x1]
//         }
//         if (x==2){
//             var x2 = Math.floor(Math.random() * numbers.length)
//             password_output = password_output+numbers[x2]
//         }
//         if (x==3){
//             var x3 = Math.floor(Math.random() * symbols.length)
//             password_output = password_output+symbols[x3]
//         }
//     }
//     document.getElementById("generated-password-paragraph").innerHTML = password_output;
// }