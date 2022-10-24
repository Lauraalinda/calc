const inputField=document.getElementById("inputdigit")
const form = document.querySelector('.form')
const buttons = Array.from(document.querySelectorAll('button'))


buttons.forEach(function(element){
element.addEventListener('click',function(){
    const tipRate = Number(element.id)
    console.log( tipRate )
    
    
    // console.log(`Button of id:${element.id} has been clicked`)

   })
})

const buttonIds = buttons.map(function(element){
    return element.id
})
// const button =document.querySelector('button')

// button. addEventListener('click', function(){
//   console.log("Button is clicked")
//  
// })
const tr= tipRate
const totalBill = Number(inputField.value)
function calculateTotalBill(totalBill){
      console.log(totalBill*tr)
//    console.log(tipRate*totalBill)
}
form.addEventListener('submit',function(e){
  e.preventDefault();
  
  if (inputField.value === ''){
      alert("You need to add the bill amount")
  }else{
   
      console.log(calculateTotalBill(Number(inputField.value),tipRate))
  }
})