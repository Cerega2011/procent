let inputProcent = document.querySelector('.procent')
let inputNumber = document.querySelector('.number')
let result = document.querySelector('.result')
let form1 = document.querySelector(".form1")



function calculate(event) {
    event.preventDefault()
    if (inputNumber.value !== "" && inputProcent.value !== "") {

        let number = inputNumber.value
        let procent = inputProcent.value
        let procentOfNumber = (number * procent) / 100 // Процент от числа
        let resultNumber = number - procentOfNumber
        result.textContent = procent + '% ' + 'от числа ' + number + ' равно ' + resultNumber.toFixed(0)
    } else {
        result.textContent = "ОШИБКА: Заполните поля"

    }
}

form1.addEventListener("submit", calculate)


let inputProcent1 = document.querySelector('.procent1')
let inputNumber1 = document.querySelector('.number1')
let result1 = document.querySelector('.result1')
let form2 = document.querySelector(".form2")

form2.addEventListener("submit", calculate1)

function calculate1(event) {
    event.preventDefault()
    if (inputNumber1.value !== "" && inputProcent1.value !== "") {
        let number1 = inputNumber1.value
        let procent1 = inputProcent1.value
        let procentOfNumber1 = (number1 * procent1) / 100 // Процент от числа
        let resultNumber1 = parseFloat(procentOfNumber1) + parseFloat(number1)
        result1.textContent = procent1 + '% ' + 'к числу ' + number1 + ' будет ' + resultNumber1
        console.log(inputNumber1)
    } else {
        result1.textContent = "ОШИБКА: Заполните поля"
    }

}






































// function calculate() {

//     let myBox1 = numberProcent.value;
//     let myBox2 = number.value;
//     let myResult = myBox1 * myBox2;
//     let myBox3 = document.getElementById('result');
//     myBox.value = myResult;

// }

// function calculate2() {
//     let myBox1 = document.getElementById('number').value;
//     let myBox2 = document.getElementById('procent').value;
//     let myResult = myBox1 * myBox2;
//     let myBox3 = document.getElementById('result');
//     let percentage = myResult / (myBox3.value - 2) + " %";
//     myBox3.value = percentage;