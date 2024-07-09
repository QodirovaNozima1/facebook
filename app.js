const model = document.querySelector(".model")
const btn = document.querySelector(".new")



btn.addEventListener("click", function () {
    console.log("click event");
    menuOpen()
} )
btn.addEventListener("dblclick", () =>{
    console.log("double click");
    menuOpen()
})
btn.addEventListener("mouseenter",()=>{
    console.log("mouse enter");
    menuOpen()
})
btn.addEventListener("mouseleave",()=>{
    console.log("mouse leave");
    menuOpen()
})


function menu() {
    model.classList.toggle("show")
}

{
    //1masala
    function countSheeps(sheep) {
    return  sheep.filter(qoy => qoy).length
}
// console.log( countSheeps([true,undefined,null,false,true]));
}
{
    //2masala.You get an array of numbers, return the sum of all of positives one.
    function positiveSum(array) {
        let sum = 0;

        for (let index = 0; index < array.length; index++) {
            if(array[index] > 0){
                sum += array[index];
            }
            
        }
        return sum;
    }
    // console.log(positiveSum([1,2,3,4,5,6,7]));//28

}

{
    //3masala.Complete the squaare sum function so that it squares each number passed into it and then sums
    function squareSum(num) {
        return num.reduce((sum,number)=> sum + number * number, 0) 
    }
    // console.log(squareSum([1,2]));//5
}

{
    //4masala.Given an array  of integers your solution should find the smallest integer
    function findSmallestInt(array) {
        return Math.min(...array)
    }
    // console.log(findSmallestInt([23,54,56,72,7]));//7
    // console.log(findSmallestInt([86,34,56,2,74]));//2
}

{
    //5masala.It's pretty straightforward.your goal is to create a function that removes first and last.
    function removeChar(str) {
        return str.slice(1,-1)
    }
    // console.log(removeChar(`hello world`));// ello worl
}
{
    //6masala.code as fast as you can.You need to double the integer and return it
    function doubleInteger(index) {
        return index * 2
    }
    // console.log(doubleInteger(2));//4
}
{
    //7masala.write a function that removes the spaces from the string,then return the resultant string
    function noSpace(word) {
        let result = ""
        for (let index = 0; index < word.length; index++) {
            if (word[index] !== " ") {
                result += word[index]
            }
            
        }
        return result
    }
    // console.log(noSpace(`frgsdghth dshdxnszdtje yjdrh try et u`));
}
{
    //8masala.write a program that finds the summation of every number from 1 to num.the number will always
    function summation(num) {
        let sum = 0
        for (let index = 1; index <= num; index++) {
            sum += i
            
        }
        return sum
    }
    // console.log(summation(2));//
}

{
    //9masala.this kata is inspired by Convert a number to String
    function srtingToNum(str) {
        return parseInt(str)
    }
    // console.log(srtingToNum("54246"));//54246
}
{
    //10masala.write a function that accept an integer n and a string s as parameters, and return a string
    function repeatStr(n,s) {
        return s.repeat(n)
    }
    // console.log(repeatStr(4," JS"));
}

{
    
}