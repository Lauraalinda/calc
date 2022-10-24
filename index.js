const inputField = document.getElementById("inputdigit")
const form = document.querySelector('.form')
const buttons = Array.from(document.querySelectorAll('button'))


// buttons.forEach(function (element) {
//     element.addEventListener('click', function () {
//         let tipRate = Number(element.id)



//     })
// })


for (let button of buttons) {
    button.addEventListener('click', () => {
        console.log(button.id)

    })


}





const buttonIds = buttons.map(function (element) {
    return element.id
})

const totalBill = Number(inputField.value)
function calculateTotalBill(totalBill) {
    console.log(totalBill * tr)
    //    console.log(tipRate*totalBill)
}
form.addEventListener('submit', function (e) {
    e.preventDefault();


})