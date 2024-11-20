//alert("Hello Java Script")
console.log("Hello JS from console")

//--------------- variable ------------------
let empty;//undefined
let nullObject = null;//null

let number = 100.33333333333333333333;//number

let email = "lena@gmail.com";//string
let flag = true;//boolean
let array = [1,2,3]//object
let summ = function(a,b){console.log(`${a} + ${b} = ${a+b}`)}//function

console.log(number)
console.log(typeof(number))
console.log(`Number = ${number}, type : ${typeof(number)}`)
console.log(`Email = ${email}, type : ${typeof(email)}`)
console.log(`Flag = ${flag}, type : ${typeof(flag)}`)

number = 'Hello';
email = 3.36;
console.log(`Number = ${number}, type : ${typeof(number)}`)
console.log(`Email = ${email}, type : ${typeof(email)}`)


console.log(`Empty = ${empty}, type : ${typeof(empty)}`)
console.log(`nullObject = ${nullObject}, type : ${typeof(nullObject)}`)


console.log(`Array = ${array}, type : ${typeof(array)}`)


console.log(`Func = ${summ}, type : ${typeof(summ)}`)

summ(5,7)

array = [1, 10.3 ,true, "green", 'red',[ 11 ,21, 31 ],summ]//7
console.log(`Array = ${array}, type : ${typeof(array)}`)
console.log(array[5][1])
console.log(array[3])
console.log(array[5][2])
array[6](5,6)
array[array.length-1](5,6)

const numbers = [33,8,9,6,14,75]
for (let i = 0; i < numbers.length; i++) {
    
    console.log(`[${i}] - ${numbers[i]}`)
}
numbers[0]=100
//numbers = [0,1,2,3] //error
for (let i = 0; i < numbers.length; i++) {
    
    console.log(`[${i}] - ${numbers[i]}`)
}

console.log("Value: " + 333 + 100 + "!!!")
console.log(`Value: ${333 + 100} !!!`)
//forof - get all elements
for (const element of numbers) {
    console.log(element)
}
//forin - get all indexes
for (const index in numbers) {
    console.log(index)
}
console.log("Length = " +  numbers.length);
numbers[20] = 111

for (const element of numbers) {
    console.log(element)
}
console.log("Length = " +  numbers.length);
for (const index in numbers) {
    console.log(index)
}
console.log("Hello world!!!!!!");
console.warn("Some warning!!!!")
console.error("Some error!!!")

if(5 > 4)
    console.log("True..")
else
    console.log("False..")

// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

let message = (3>2)?"bigger":"smaller";

function divide(a,b)
{
    if(b== 0)
    {
        console.error("Can not divide by zero!!!")
        return;
    }
    return a/b;
}
function Summa(a,b)
{

    return a+b;
}

// alert("Result : " + divide(45,5))

//let numA = +prompt("Enter your number A : ");
// let numB = +prompt("Enter your number B : ");
// //alert("Result = " + divide(numA, numB))
// alert("Result = " + Summa(numA, numB))
console.log(Math.round(12.4))








