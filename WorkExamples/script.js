

let x = "He Said \"My name is Matt\"";
console.log(x);
x = x.toUpperCase();
console.log(x);
let num1,num2;
num1 ="1";
num2 =2;
console.log("number combined equals " + (Number(num1)+num2));
let values = [1,2,3,4,5];
printfun();
values.push(6);
printfun();
values.pop();
printfun();
let person = 
{
    age: 10
};

changeAge(10);
checkAge(20,40);
checkType(10);
changeAge(20);
console.log(returnCheckAge(20,40,person));
function stringToPrint(wordToPrint) 
{
    'use strict';
    console.log(wordToPrint);
}

function printfun()
{
    for(let i = 0;i<values.length;i++)
    {
        console.log(values[i]);
    }
}



function changeAge(ageToPass)
{
    person.age = ageToPass;
}

function checkAge(minAge,maxAge)
{
    if((person.age >= minAge) && (person.age<=maxAge))
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}

function returnCheckAge(minAge,maxAge,personPassed)
{
    return(personPassed && ((personPassed.age >=minAge) && (personPassed.age <= maxAge)))
}

function checkType(minAge)
{
    if(person.age === minAge)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}


