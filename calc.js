const inputField=document.getElementById('input')
console.log(inputField.value)


function calculateTotalBill(totalBill){
    console.log(0.05*totalBill)
}

const form = document.querySelector(".form")
form.addEventListener('submit',function(e){
    e.preventDefault()

    if (inputField.value === ''){
        console.log('You need to key in the bill amount')
    }else{
        console.log(calculateTotalBill(Number(inputField.value)))
    }
})