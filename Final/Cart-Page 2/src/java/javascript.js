var Productimg = document.getElementById("ProductImg");
var Smallimg = document.getElementsByClassName("small-img");

Smallimg[0].onclick = function()
{
   Productimg.src = Smallimg[0].src;
}
Smallimg[1].onclick = function()
{
   Productimg.src = Smallimg[1].src;
}
Smallimg[2].onclick = function()
{
   Productimg.src = Smallimg[2].src;
}
Smallimg[3].onclick = function()
{
   Productimg.src = Smallimg[3].src;
}











var LoginForm = document.getElementById("LoginForm");
var RegiForm = document.getElementById("RegiForm");
var Indicator = document.getElementById("Indicator");


   function register() {
    RegiForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
   }

   function Login() {
    RegiForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
   }