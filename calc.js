const inputField = document.getElementById('inputdigit')
const inputField2 = document.getElementById('inputdigit2')
const button =document.getElementById('btn')
const form = document.querySelector('.form')
const fivePercent = document.querySelector('.btn1')
const tenPercent = document.querySelector('.btn2')
const fifteenPercent = document.querySelector('.btn3')
const twentyfivePercent = document.querySelector('.btn4')
const fiftyPercent = document.querySelector('.btn5')
const tipamount = document.querySelector('.digit')
const totalAmount = document.querySelector('.digit1')

const totalcash= Number(inputField.value).toFixed(2)
console.log(totalcash)

const numberofPeople= Number(inputField2.value)
button.addEventListener('submit',function(e){
    e.preventDefault()

    if (numberofPeople){
        console.log(numberofPeople)
    }
    return false
})




const validateInput = () => { 
    if(inputField){
      return true
    }
    return false
  }
  
  function calculateTiprate(totalBill,tipRate){
      return ((tipRate*totalBill)+totalBill)
  }
fivePercent.addEventListener('click', (e) => {
    e.preventDefault()
    const numberofPeople= Number(inputField2.value)
    console.log(numberofPeople)
    const splitedBill= (0.05*Number(inputField.value))/numberofPeople
    console.log(splitedBill)

    const total=(0.05*Number(inputField.value))+Number(inputField.value)
    // console.log(total.toFixed(2))
    tipamount.innerHTML = `$${0.05*Number(inputField.value)}` 
    totalAmount.innerHTML= `$${total.toFixed(2)}` 
    console.log(calculateTiprate(Number(inputField.value),0.05))
    
})

tenPercent.addEventListener('click', (e) => {
    e.preventDefault()
    tipamount.innerHTML = `$${0.10*Number(inputField.value)}`  
    totalAmount.innerHTML= `$${(0.10*Number(inputField.value))+Number(inputField.value)}` 
    console.log(calculateTiprate(Number(inputField.value),0.10))
})

fifteenPercent.addEventListener('click', (e) => {
    e.preventDefault()
    tipamount.innerHTML = `$${0.15*Number(inputField.value)}` 
    totalAmount.innerHTML= `$${(0.15*Number(inputField.value))+Number(inputField.value)}`  
    console.log(calculateTiprate(Number(inputField.value),0.15))
})

twentyfivePercent.addEventListener('click', (e) => {
    e.preventDefault()
    tipamount.innerHTML = `$${0.25*Number(inputField.value)}`
    totalAmount.innerHTML= `$${(0.25*Number(inputField.value))+Number(inputField.value)}`   
    console.log(calculateTiprate(Number(inputField.value),0.25))
})
fiftyPercent.addEventListener('click', (e) => {
    e.preventDefault()
    tipamount.innerHTML = `$${0.50*Number(inputField.value)}`
    totalAmount.innerHTML= `$${(0.50*Number(inputField.value))+Number(inputField.value)}`   
    console.log(calculateTiprate(Number(inputField.value),0.50))

})

form.addEventListener('submit', function(event){
   event.preventDefault()
    if(validateInput()){
       
     console.log(calculateTiprate(Number(inputField.value)) )  
    }else{
        alert('Please enter a bill amount')
    }
   
})
//CUSTOM
//DECIMAL









