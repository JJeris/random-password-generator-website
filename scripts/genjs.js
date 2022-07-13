//Assets used to gen. password (i.e. letters, numbers, symbols)
var txt0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var txt1 = "abcdefghijklmnopqrstuvwxyz"
var txt2 = "1234567890"
var txt3 = "`~!@#$%^&*()_+-={|[];<>?,./:"
//

//Function addlen(): gives prompt, asking the size (length) of the password.
function addlen(){
    var a = prompt("Addlen?")
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