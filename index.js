let Button  = document.getElementById("btn")

let code = document.getElementById("color-code")
// console.log();

let randomeColor = () => {
    
    let randomeNumber = Math.floor(Math.random() * 16777215)
    let randomHexNob = "#" +  randomeNumber.toString(16)
   document.body.style.background = randomHexNob
   code.innerText = randomHexNob

//    navigator.clipboard.writeText(randomHexNob)   // getting error {Uncaught (in promise) DOMException: Document is not focused.}
};
Button.addEventListener("click" , randomeColor)


randomeColor()

