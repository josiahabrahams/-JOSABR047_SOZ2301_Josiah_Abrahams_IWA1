const Max_Number = 15
const Min_Number = -5
const Step_Amount = 5


const number=document.querySelector('[data-key="number"]')
const subtract= document.querySelector('[data-key="subtract"]')
const add=document.querySelector('[data-key="add"]')

const subtractHandler = () =>{
   const newValue =  parseInt(number.value) - Step_Amount
   number.value = newValue ;
   if(add.disabled == true){
    add.disabled = false

}
  
   if(newValue <= Min_Number){
                  subtract.disabled = true
  
}
}
  const addHandler = () => {
    const newValue =  parseInt(number.value) + Step_Amount
    number.value = newValue ;
    if(subtract.disabled == true){
        subtract.disabled = false
    }
    
    if(newValue >= Max_Number){
        add.disabled = true
    }
                
  }

subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler)