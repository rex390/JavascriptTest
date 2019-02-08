

(function startRequest()
{
    'use strict';
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
    {
        let superHeroes = request.response;
        
        for(let superAttribute in superHeroes)
        {
            if(superAttribute!="members")
            {
            let h1y = document.createElement(superAttribute == "squadName" ? "h1" : "h2");
            h1y.id = superAttribute;
            h1y.innerHTML = superAttribute + " : " + superHeroes[superAttribute];
            document.getElementById("supergang").appendChild(h1y);
            }
            else 
            {
                let divMember = document.createElement("div");
                divMember.id = "membersList";
                document.getElementById("bodyID").appendChild(divMember);
                let membersTitle = document.createElement("h1");
                membersTitle.id = superAttribute;
                membersTitle.innerHTML = superAttribute + " List";
                document.getElementById(divMember.id).appendChild(membersTitle);
                let number =0;
                for(let member of superHeroes[superAttribute]) 
                {
                    createElement('ol',"",("membersList" + number),"SquadMembers",divMember.id);
                    let list =  document.getElementById("membersList"+number);
                    for(let key in member)
                    {
                        let keyAndValue = key + ": " + member[key];
                        createElement('li',keyAndValue,"membersList","SquadMembers",list.id);
                    }
                    number++;
                }
            }
        }
    }
})()

function createElement(attributeName,elementTextContent,elementID,elementClassName,placeElementID)
{
    var element = document.createElement(attributeName)
    element.textContent = elementTextContent;
    element.id=elementID;
    element.className = elementClassName;
    document.getElementById(placeElementID).appendChild(element);
}
