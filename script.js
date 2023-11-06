const passwordBox = document.getElementById("password");
const length = 8;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = uppercase.toLowerCase();
const number = "0123456789";
const symbol = "@#$%^&*(){}[]<>-+=~";

const allChars = uppercase + lowercase + number + symbol;
function generatePassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;


}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
