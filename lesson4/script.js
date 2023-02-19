var p = document.querySelectorAll('p')
// console.log(p)
var myClass=document.querySelectorAll(".myClass")
// console.log(myClass)
var myonlyP=document.querySelector("#onlyP")
// console.log(myonlyP)
var button=document.querySelector("#mybutton")
button.addEventListener("click",(e)=>
{
alert("nervers keraq")
console.log(e.clientX,e.clientY)
})
function setup(){
    createCanvas(400,400)
}
function draw()
{
    background(220)
}

function mousePressed()
{
console.log(mouseX,mouseY)
}