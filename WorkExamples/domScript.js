
let myP;
function foo() {
    'use strict';
    myP = document.createElement("p");
    myP.textContent = "hello world";
    myP.id = "para";
    document.getElementById("place").appendChild(myP);
}
 function deleteFun2()
 {
    myP = document.getElementsByTagName('p');
    myP.remove();
 }
 function changeFun()
 {
     myT = document.getElementById('yo');
     console.log(myT);
     myP.textContent = myT.value;
    
 }

 function changeFunChangeAdd()
 {
     let myT = document.getElementById('yo');
     let myPi = document.createElement("p");
     myPi.className = "para";
     myPi.textContent = myT.value;
     document.getElementById("place").appendChild(myPi);
 }

 function deleteFun()
 {
     let element = document.getElementById("para");
     element.remove();
 }


 function changeAll()
 {
     let myPi = document.getElementsByClassName("para");
     console.log(myPi);
 }
changeFun();
deleteFun();


