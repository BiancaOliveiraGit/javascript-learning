// css
/*
body{
    width:33%;
}

#res {
    background-color: lightgray;
    border: solid;
    height:48px;
    font-size:20px;
}

#btns button{
    width:25%;
    height:36px;
    font-size:18px;
    margin:0;
    float:left;  
}
#btn0 ,#btn1{
    background-color:lightgreen;
    color:brown;
}
#btnClr ,#btnEql{
    background-color:darkgreen;
    color:white;
}
#btnSum ,#btnSub, #btnMul, #btnDiv{
    background-color:black;
    color:red;
}
*/
//html
/*
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Binary Calculator</title>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    <body>
        <div id="container">
            <div id="res"></div>
            <div id="btns">
                <button id="btn0">0</button>
                <button id="btn1">1</button>
                <button id="btnClr">C</button>
                <button id="btnEql">=</button>
                <button id="btnSum">+</button>
                <button id="btnSub">-</button>
                <button id="btnMul">*</button>
                <button id="btnDiv">/</button>
        </div>
        <script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>
*/

// js
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var result = document.getElementById("res");
var clear = document.getElementById("btnClr");       
var eq = document.getElementById("btnEql");    
var sum = document.getElementById("btnSum");   
var sub = document.getElementById("btnSub");    
var mul = document.getElementById("btnMul");    
var div = document.getElementById("btnDiv"); 


btn0.onclick = action;
btn1.onclick = action;
sum.onclick = action;
sub.onclick = action;
mul.onclick = action;
div.onclick = action;

function action(e) {
   const btn = e.target || e.srcElement;
    // check no other operations exist in res
   res.innerHTML +=  btn.innerHTML;
}

clear.onclick = function() {
    res.innerHTML = '';
}

eq.onclick = function() {
    let calc = res.innerHTML;
    let nums = /(\d+)/g;
    calc = calc.replace(nums, function(match) {
        return parseInt(match, 2); // to base 10
    })
    res.innerHTML = eval(calc).toString(2);
}


