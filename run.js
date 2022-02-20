function login(){

    var email=document.getElementById("email").value;
    var pw=document.getElementById("pw").value;

    var email1=localStorage.getItem("email1");
    var pw1=localStorage.getItem("pw1");

    if(email==email1 && pw==pw1){
        alert("Login Berhasil...!!!")
        window.location.href="home.html";
    }else {
        alert("Email dan Password Salah...!!!")
    }

}

function signup() {

var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var pw = document.getElementById("pw").value;

localStorage.setItem("username1", username)
localStorage.setItem("email1", email)
localStorage.setItem("pw1", pw)

document.getElementById("username").value="";
document.getElementById("email").value="";
document.getElementById("pw").value="";


alert("Daftar Sukses...!!!");

}