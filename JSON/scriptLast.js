

(function run()
{

    if (window.Event) //check for windows event
    {
        document.onmousemove = cursorLocation; 
        document.onkeydown = sizeChange;
    }
    
    //we set the document to call the cursorLocation function on mouse movement
    //document.onmousemove = cursorLocation; 
    // }
})();


function cursorLocation(event) //we pass in events which is the mouse movements
{

        let text = document.getElementById("h1Fun"); //find the text id tag
        let x = event.clientX;
        let y = event.clientY;
         text.style.top = y+"px";
         text.style.left = x+"px";
}

function sizeChange(event)
{
    let text = document.getElementById("h1Fun"); //find the text id tag
    let keyPress = event.keyCode;
    let fontStyle = window.getComputedStyle(text, null).getPropertyValue('font-size');
    let fontSize = parseFloat(fontStyle); 
    if(keyPress == 17)
    {
        text.style.fontSize = (fontSize + 1) + 'px';
    }
    else if(keyPress == 18)
    {
        text.style.fontSize = (fontSize - 1) + 'px';
    }
}
function onHoverChange()
{
    let text = document.getElementById("h1Fun"); //find the text id tag
    let textBox = document.getElementById("textBox"); //find the text id tag
    text.innerHTML = textBox.value;
}