
var data;
(function startRequest()
{
    'use strict';
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
    {
        data = request.response;
    }


})()

function clickFun()
{
    clearList();
    let itemFound = false;
    let number = 0;
    for(member of data)
    {
        for(key in member)
        {
            console.log(member[key]);
            if(member[key]==document.getElementById("texty").value)
            {
                createElement('ol',"",("foundList" + number),"FoundList","itemList");
                foundItem(member,number);
                number++;
            }
        }
    }
}

function foundItem(member,numberPassed)
{
    for(key in member)
    {
        let h1y = document.createElement("li");
        h1y.className = "foundStuff";
        h1y.innerHTML = member[key];
        document.getElementById("foundList" + numberPassed).appendChild(h1y);
    }
}

function clearList()
{
    let list = document.getElementsByClassName("FoundList");
    const listLength = list.length;
    for(let count =0;count<listLength;count++)
    {
        list[0].remove();
    }
}

function createElement(attributeName,elementTextContent,elementID,elementClassName,placeElementID)
{
    var element = document.createElement(attributeName)
    element.textContent = elementTextContent;
    element.id=elementID;
    element.className = elementClassName;
    document.getElementById(placeElementID).appendChild(element);
}