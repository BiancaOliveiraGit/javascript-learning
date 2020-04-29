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