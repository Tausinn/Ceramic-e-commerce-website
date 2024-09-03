const inputBox1 = document.querySelector(".login-input");
const inputBox2 = document.querySelector(".login-input2");
const loginBtn = document.querySelector(".login-btn");
const getText = document.querySelector(".getText");

function loginMsg(){
if(inputBox1.value === ""){
    alert("Please enter your e-mail")
} else if(inputBox2.value === ""){
    alert("Please enter your password")

}
ValidateEmail(inputBox1);
aPrototype();
}

function ValidateEmail(inputBox1){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputBox1.value.match(validRegex)){
        loginBtn.disabled = false;
    }else if(!inputBox1.value.match(validRegex)){
        loginBtn.disabled = true;
        alert("Please enter a valid email address")
    
    }
    }

    function aPrototype(){
        alert("This is just a prototype of a website thanks for checking it out")
    }


