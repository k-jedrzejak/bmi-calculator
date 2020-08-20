
const button = document.querySelector('.button__btn');
const inputs = document.querySelectorAll('.data__input');
const form = document.querySelector(".form");

const calcBmi = (weight, height) => (weight / (Math.pow((height/100),2)));


button.addEventListener('click', function(){
    
    const weight = document.querySelector('.data__input--weight').value;
    const height = document.querySelector('.data__input--height').value;
    const resultText = document.querySelector('.result');

    const bmi = calcBmi(weight,height).toFixed(2);

    let message = "";

    if (weight.length != 0 &&  height.length !=0){
    
        this.innerHTML = "&#x2714";
        this.style.fontSize = "30px";

        if (bmi <= 18.5) {
            message = `Your BMI is ${bmi}. You are UNDERWEIGHT!! It's dangerous for your health!`
            resultText.style.color = "red";
        } 
        else if (bmi <= 24.99){
            message = `Your BMI is ${bmi}. Your weight is CORRECT.`
            resultText.style.color = "green";
        }
        else if (bmi <= 29.99){
            message = `Your BMI is ${bmi}. You are OVERWEIGHT!.`
            resultText.style.color = "yellow";
        }
        else if (bmi <= 34.99){
            message = `Your BMI is ${bmi}. You have OBESITY GRADE 1! It's unhealthy.`
            resultText.style.color = "red";
        }
        else if (bmi <= 39.99){
            message = `Your BMI is ${bmi}. You have OBESITY GRADE 2! It's dangerous for your health!`
            resultText.style.color = "red";
        }
        else {
            message = `Your BMI is ${bmi}. You have OBESITY GRADE 3! It's very dangerous for your health! `
            resultText.style.color = "red";
        }
    } else if (weight.length == 0 ||  height.length ==0){
        message ="You need to fill all fields to see BMI!";
        resultText.style.cssText ="color: red; text-transform: uppercase;";
    }
    
    resultText.textContent = message;

   

});


const changeBtn = () => {
    button.innerHTML = "Check";
    button.style.fontSize = "1.2rem";
}

for ( var i = 0; i <inputs.length; i++) {
    inputs[i].addEventListener('focus', changeBtn)
};



const handleForm = event => event.preventDefault();

form.addEventListener('submit', handleForm)



