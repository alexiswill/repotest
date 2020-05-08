const btn = document.getElementById('x');

//event listner
btn.addEventListener('click', function(){
    alert('call or annonymous');
});



//creating a function
//function expression
// const result = function nameOfFunction(typeOfAnimal){
//annonomaus function, call back function
const result = function (typeOfAnimal){
    return`we are, freaking ${typeOfAnimal}`;
    //function is done after return 
    console.log('cant get here' )
}

//use, call, or invoke function
console.log(result('Gorillas'));




// function favoriteAnime(nameOfAnime){
//     return `my favorite anime is, ${nameOfAnime}`
// }
// console.log(nameOfFunction('Bleach'))

//Arrow function or lambda functions, 1 parameter doesn't need parethesis or return
const multipy = x => x * x;

console.log(multipy(40));




















