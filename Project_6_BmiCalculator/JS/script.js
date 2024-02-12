const form = document.querySelector('form');
form.addEventListener( 'submit' , function(e){
    e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results');
let bmi = 0;

if( height < 0 || height === "" || isNaN(height)){
    result.innerHTML = `Please Enter a Valid Height`;
}else if( weight < 0 || weight === "" || isNaN(weight)){
    result.innerHTML = `Please Enter a Valid Weight`;
}else{
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI is <span> ${bmi} </span>`;
}

if( bmi < 18.6){
    document.getElementById('UW').style.color = "red";
}else if( bmi > 18.6 && bmi < 24.9 ){
    document.getElementById('NW').style.color = "red";
}else{
    document.getElementById('OW').style.color = "red";


}})
