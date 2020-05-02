// html
/*
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    
    <body>
        <button id="btn" >0</button>
        <script src="js/button.js" type="text/javascript" ></script>
    </body>
</html>
*/



// js code
var counter = 0;
var btn = document.getElementById('btn');

btn.onclick = function(){
    counter++;
    btn.innerHTML = counter.toString();
}


// Button container exercise

//css
/*
#btns{
    width:75%;
}

.btnClass{
    width:30%;
    height:48px;
    font-size:24px;
}
*/
//html
/*
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
        <div id="btns" class="btnContainer">
            <button id="btn1" class="btnClass">1</button>
            <button id="btn2" class="btnClass">2</button>
            <button id="btn3" class="btnClass">3</button>
            <button id="btn4" class="btnClass">4</button>
            <button id="btn5" class="btnClass">5</button>
            <button id="btn6" class="btnClass">6</button>
            <button id="btn7" class="btnClass">7</button>
            <button id="btn8" class="btnClass">8</button>
            <button id="btn9" class="btnClass">9</button>
        </div>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>
*/
//js
var numbers = [1,2,3,6,9,8,7,4]; //[4,7,8,9,6,3,2,1];

// all button elements
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");

var btn5 = document.getElementById("btn5");

//setup button click on middle button
btn5.onclick = function() {
    // move items in array
    const first = numbers[0];
    const last = numbers[7];
    numbers[7] = numbers[6];
    numbers[6] = numbers[5];
    numbers[5] = numbers[4];
    numbers[4] = numbers[3];
    numbers[3] = numbers[2];
    numbers[2] = numbers[1];
    numbers[1] = first;
    numbers[0] = last;
    
   
     btn1.innerHTML = numbers[0].toString();
     btn2.innerHTML = numbers[1].toString();
     btn3.innerHTML = numbers[2].toString();
     btn6.innerHTML = numbers[3].toString();
     btn9.innerHTML = numbers[4].toString();
     btn8.innerHTML = numbers[5].toString();
     btn7.innerHTML = numbers[6].toString();
     btn4.innerHTML = numbers[7].toString();    
}
