function getPassword(){
    // Grab the word to be used to generate password and the length required
    let textInput = document.getElementById("text-input-password[]").value
    let lengthInput = document.getElementById("text-input-length").value
    // Display the generated password here
    let displayUnit1= document.getElementById("display-unit1")
    let displayUnit2 = document.getElementById("display-unit2")
    
    
    // Generates random password
    let x = ""
    let y = ""

    function passwordGen(){
        let generatePass1 = Math.floor(Math.random()*textInput.length)
        let generatePass2 = Math.floor(Math.random()*textInput.length)
        
        x += textInput[generatePass1]
        y += textInput[generatePass2]
    }

   for (let i = 0; i < lengthInput; i++) {
        passwordGen()
        
        // if (( x === y) || ( x.length < lengthInput) || (y.length < lengthInput)){
        //     x = ""
        //     y = ""
        //     passwordGen()
        // }
        // else {
            // passwordGen()
            displayUnit1.value = x
            displayUnit2.value = y
        // }
   }
   return false
}
document.querySelectorAll(".copy-password").forEach(copyLinkContainer => {
    const inputField1 = copyLinkContainer.querySelector("#display-unit1")
    const inputField2 = copyLinkContainer.querySelector("#display-unit2")
    const copyInput1 = copyLinkContainer.querySelector(".copy-link-input1")
    const copyInput2 = copyLinkContainer.querySelector(".copy-link-input2")
   
    // selects everything when you click on the input box
    inputField1.addEventListener("focus", () => {
        inputField1.select()
    })
    inputField2.addEventListener("focus", () => {
        inputField2.select()
    })

    //enables the copy button to copy the text once it is clicked
    copyInput1.addEventListener("click", () => {
        // grabs the value of the textboxes
        const text1 = inputField1.value
        inputField1.select()
        // this performs the actual copying
        navigator.clipboard.writeText(text1)
        inputField1.value = "Copied"
        setTimeout(() => inputField1.value = text1, 1000)
    })
    copyInput2.addEventListener("click", () => {
        // grabs the value of the textboxes
        const text2 = inputField2.value
        inputField2.select()
        navigator.clipboard.writeText(text2)
        inputField2.value = "Copied"
        setTimeout(() => inputField2.value = text2, 1000)
    })
})

