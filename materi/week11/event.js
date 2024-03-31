
//click event
function hello() {
    alert("hello world");
}

const btnlogin = document.getElementById("heyAstro");
btnlogin.addEventListener("click", function(){
    alert("Hello batch astrosphere");
});

//double click event
const btnlogin2 = document.getElementById("btn-double");
btnlogin2.addEventListener("dblclick", function(){
    alert("Terima Kasih, kamu sudah klik 2x");
});


//Mouse event
const btnEnter = document.getElementById("mouse-enter");
const btnOver = document.getElementById("mouse-over");
const btnOut = document.getElementById("mouse-out");

btnEnter.addEventListener("mouseenter",function (event) {
    event.target.innerText = "mouse sudah masuk";
    alert("mouse memasuki buton")
})

btnOver.addEventListener("mouseover",function (event) {
    event.target.innerText = "mouse sudah diatas elemen"
})

btnOut.addEventListener("mouseout",function (event) {
    event.target.innerText = "mouse sudah keluar"
})

//keyboard event
const keydown = document.getElementById("key-down");
const keyup = document.getElementById("key-up");
const pressed = document.getElementById("pressed");

document.addEventListener("keydown",function (event) {
    keydown.innerText = `menekan: ${event.key}`;
});
document.addEventListener("keyup",function (event) {
    keyup.innerText = `melepas: ${event.key}`;
});
document.addEventListener("pressed",function (event) {
    pressed.innerText = `menahan: ${event.key}`;
});

//event change
const buah = document.getElementById("buah");
const info = document.getElementById("info");

buah.addEventListener("change", function(e){
    info.innerText = `anda memilih: ${e.target.value}`;
});

const formLogin = document.getElementById("form-login");
const feedbackMessage = document.getElementById("feedback");

// mendengarkan event submit pada form
formLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  feedbackMessage.innerHTML = `Login dengan username <code>${data.get(
    "username"
  )}</code> dikirim!`;
});

// mendengarkan event reset pada form
formLogin.addEventListener("reset", function () {
  feedbackMessage.textContent = "Form dibersihkan!";
});

//CUSTOM EVENT
const namaObjectEvent = new Event("new-event");

const listenerObject = document.getElementById("listenerObject");

listenerObject.addEventListener("new-event", function(event){
    console.log("event customEvent telah dipicu!");
});

listenerObject.dispatchEvent(namaObjectEvent)

constbtnCheck = document.getElementById("btn-check");
const inputNumber = document.getElementById("check-number").value;

const customEvent1 = new Event("check-ganjil-genap");

document.addEventListener("check-ganjil-genap", () =>{
    console.log("tess event");
})