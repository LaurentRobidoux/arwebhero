
document.querySelector("#scene").addEventListener("click",function()
{
    document.querySelector("#modalShare").setAttribute("style","display:none");
});
document.querySelector("#take-photo").addEventListener("click",function()
{
 
    document.querySelector("#modalShare").setAttribute("style","");
    //https://aframe.io/docs/0.9.0/components/screenshot.html#methods
    var canvas = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');
    document.querySelector("#modalShare img").setAttribute("src", canvas.toDataURL());
})
