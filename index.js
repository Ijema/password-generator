function getPassword(){
    // Grab the word to be used to generate password and the length required
    let textInput = document.getElementById("text-input1[]").value
    let lengthInput = document.getElementById("text-input2").value
    // Display the generated password here
    let displayUnit1= document.getElementById("display-unit1")
    let displayUnit2 = document.getElementById("display-unit2")
    
    
    //let arrayOfWords = [textInput]
    let x = ""
   for (let i = 0; i < lengthInput; i++) {
      
        let generatePass = Math.floor(Math.random()*textInput.length)
        x += textInput[generatePass]
        displayUnit1.value = x
        
   }
   let y = ""
    for (let i = 0; i < lengthInput; i++) {
      
         let generatePass = Math.floor(Math.random()*textInput.length)
         y += textInput[generatePass]
         displayUnit2.value = y
   
     }
    console.log(lengthInput)
}
document.querySelectorAll(".copy-password").forEach(copyLinkContainer => {
    const inputField1 = copyLinkContainer.querySelector("#display-unit1")
    const inputField2 = copyLinkContainer.querySelector("#display-unit2")
    const copyInput1 = copyLinkContainer.querySelector(".copy-link-input1")
    const copyInput2 = copyLinkContainer.querySelector(".copy-link-input2")
   
    // selects everything when you click on the input box
    inputField1.addEventListener("focus", () => {
        inputField1.select()
        console.log("Selected")
    })
    inputField2.addEventListener("focus", () => {
        inputField2.select()
        console.log("Selected")
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

