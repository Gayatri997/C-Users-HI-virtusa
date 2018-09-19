
function identifyById()
{
    document.getElementById("para1").innerHTML="identified";
}
function identifyByClass()
{
    document.getElementsByClassName("class1")[0].innerHTML="identified";
}
function byTag()
{
    document.getElementsByTagName("p")[2].innerHTML="identified";
}
function changeBackground()
{
    document.getElementById("block1").style.background="blue";
}
function increaseFont()
{
    document.getElementById("block2").style.fontSize = "xx-large";
}

        function changeFontColor() {
    document.getElementById("block3").style.color = "green";
}

function revertColor() {
    document.getElementById("block3").style.color = "black";
}
document.getElementById("block4").ondblclick=function() {hide()};
    function hide() {
        document.getElementById("block4").innerHTML =" ";
    }
function myFunction()
   {
       var a=document.getElementById("fname");
       a.value=a.value.toUpperCase();
   }
function color(x)
    {
  x.style.background="green";
    }
