// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("lastName", "Smith");
//     // Retrieve
//     document.getElementById("myForm").innerHTML = localStorage.getItem("lastName");
//   } else {
//     document.getElementById("myForm").innerHTML = "Sorry, your browser does not support Web Storage...";
//   }


// function submit(){
//     var firstName = document.getElementById("button");
//     document.getElementById("button").innerHTML = "My name is: " + firstName.innerHTML;
// }

// const x = document.forms["myForm"];
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("submit").innerHTML = text;
// localStorage.clear();

// Local Storage

// function formSubmit()
// {
//     document.getElementById("myForm").submit();
//     console.log("Form has been submitted");
// }
// function gfgMenu() {
//     const GFG = document.querySelector('.btn-check');

//     if (GFG.style.display === "none") {
//         GFG.style.display = "block";
//     }
//     else {
//         GFG.style.display = "none";
//     }
// }

// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.openMenu');

// openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close);

// function show(){
//     mainMenu.style.display = 'flex';
//     mainMenu.style.top = '0';

// }
// function close(){
//     mainMenu.style.top = '-100%'
// }
document.querySelector(".close").style.display = "none";
document.querySelector(".humburger").addEventListener("click", ()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if( document.querySelector(".sidebar").classList.contains("sidebarGo")){
    document.querySelector(".hum").style.display = "inline";
    document.querySelector(".close").style.display = "none";   
}
    else{
        document.querySelector(".hum").style.display = "none";
    setTimeout(()=>{
document.querySelector(".close").style.display = "inline";
    },350);
}
}) 
document.querySelector(".closeL").style.display = "none";
document.querySelector(".humburgerL").addEventListener("click", ()=>{
    document.querySelector(".sidebarL").classList.toggle("sidebarGoL");
    if( document.querySelector(".sidebarL").classList.contains("sidebarGoL")){
    document.querySelector(".humL").style.display = "inline";
    document.querySelector(".closeL").style.display = "none";   
}
    else{
        document.querySelector(".humL").style.display = "none";
    setTimeout(()=>{
document.querySelector(".closeL").style.display = "inline";
    },350);
}
}) 


document.getElementById("myForm").onclick=
function submit(){

var firstName = document.getElementById("validationCustom01");
var lastName = document.getElementById("validationCustom02");
var inputEmail = document.getElementById("validationCustomUsername");
var inputCity = document.getElementById("validationCustom03");
var inputState = document.getElementById("validationCustom04");


localStorage.setItem("validationCustom01", firstName.value);
localStorage.setItem("validationCustom02", lastName.value);
localStorage.setItem("validationCustomUsername", inputEmail.value);
localStorage.setItem("validationCustom03", inputCity.value);
localStorage.setItem("validationCustom04", inputState.value);


localStorage.getItem("validationCustom01", firstName.value);
localStorage.getItem("validationCustom02", lastName.value);
localStorage.getItem("validationCustomUsername", inputEmail.value);
localStorage.getItem("validationCustom03", inputCity.value);
localStorage.getItem("validationCustom04", inputState.value);




}
