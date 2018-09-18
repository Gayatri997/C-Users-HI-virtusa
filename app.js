function changeBackground()
{
    document.getElementById("block1").style.background="blue";
}
function increaseFont()
{
    document.getElementById("block2").style.fontSize = "xx-large";
}
setInterval(function()
{
        var x = document.getElementById("block3");
        var y = document.getElementById("block3");
    
        function changeFontColor() {
            x.style.color = 'green';
            y.style.color = 'black';
        }
    
        function revertColor() {
            x.style.color = 'black';
        }
    },250);
