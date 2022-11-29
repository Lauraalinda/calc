//how to console the information to chack for functionality*/

const validateinput = () => {
    const billamount = document.querySelector('.billamount');
    console.log(billamount)
    const numberofpeople = document.querySelector('.numberofpeople');

    if (!billamount.value) {
        billamount.classList.add('form-control-error')
        numberofpeople.classList.remove('form-control-error')
        return false;
    } if (!numberofpeople) {
        billamount.classList.remove('form-control-error')
        numberofpeople.classList.add('form-control-error')
        return false;
    }
    billamount.classList.remove('form-control-error')
    numberofpeople.remove('form-control-error')
    return true;
}
validateinput()
//custom input
const custom = document.querySelector('.custom-tip')
custom.addEventListener('focus', (event) => {
    event.preventDefault();

    if (custom.value) {
        const billamount = document.querySelector('.billamount').value;
        const numberofpeople = document.querySelector('.numberofpeople').value;
        const customvalue = Number(custom.value) / 100
        if (numberofpeople) {
            const tipamount = (billamount * customvalue) / numberofpeople
            const totalamount = (billamount / numberofpeople) + tipamount
            document.querySelector('.tip_amount').innerHTML = `$${tipamount}`
            document.querySelector('.total_amount').innerHTML = `$${totalamount}`
        }
    }

})

//percentage buttons how can I see the nodelist of buttons when I console nothing comes
const buttons = Array.from(document.querySelectorAll('button'));
let tipPercentage;
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
       
        e.preventDefault()
        if (validateinput()) {
            const billamount = document.querySelector('.billamount').value;
            const numberofpeople = document.querySelector('.numberofpeople').value;
            tipPercentage = (e.target.id)
            const tipamount = (billamount * tipPercentage) / numberofpeople
            const totalamount = (billamount / numberofPeople) + tipamount
            document.querySelector('.tip_amount').innerHTML = `$ ${tipamount}`;
            document.querySelector('.total_amount').innerHTML = `$ ${totalamount}`
        }
        

    })

})