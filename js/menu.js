
AFRAME.registerComponent('menu', {
init :function(){

 let  load=function fload(){
document.getElementById("boxLevel").parentNode.removeChild( document.getElementById('boxLevel'))
document.getElementById('boxLevel1').parentNode.removeChild(document.getElementById('boxLevel1'))
document.getElementById('boxLevel2').parentNode.removeChild(document.getElementById('boxLevel2'))
document.getElementById("Taxi").setAttribute(
 "animation",
 "property:position; to:-35 0.8  30; dur:1000"
)
document.getElementById("myDs").setAttribute(
 "animation",
 "property:position; to:-42.5 1.2  4; dur:1000"
)
}
let checkLevel=function fcheckLevel(){
if(  document.getElementById("level").getAttribute("value")==3){ 
  
//  document.getElementById("ds").parentNode.removeChild( document.getElementById("ds"));


// el.setAttribute("color", "#1dd4ed")
document.getElementById("myDs").setAttribute('dsmove',"enabled",true)
document.getElementById("myDs").setAttribute('visible',true);

console.log(document.getElementById("myDs"));

}
else if(document.getElementById("level").getAttribute("value")==2){
//    document.getElementById("dsmove").parentNode.removeChild(document.getElementById("dsmove"));
document.getElementById("myDs").setAttribute('ds',"enabled",true)
//   document.getElementById("myDs").removeAttribute('dsmove')
var old_element = document.getElementById("myDs");
var new_element = old_element.cloneNode(true);
old_element.parentNode.replaceChild(new_element, old_element);
document.getElementById("myDs").setAttribute('visible',true);
level=2
console.log(document.getElementById("myDs")+ level);

// console.log(document.getElementById("myDs").childElementCount);


}
else{
// document.getElementById("ds").parentNode.removeChild( document.getElementById("ds"));
// document.getElementById("dsmove").parentNode.removeChild( document.getElementById("dsmove"));
//console.log(document.getElementById("myDs").childElementCount);
//   document.getElementById("myDs").removeAttribute('dsmove')
// document.getElementById("myDs").removeAttribute('aabb-collider')

var old_element = document.getElementById("myDs");
var new_element = old_element.cloneNode(true);
old_element.parentNode.replaceChild(new_element, old_element);
document.getElementById("myDs").setAttribute('visible',true);
console.log(document.getElementById("myDs"));

}
}  
document.getElementById('boxLevel').addEventListener("click",e => 
{
checkLevel();
load();
console.log(document.getElementById("counter").getAttribute("value"))


});
document.getElementById('boxLevel1').addEventListener("click",e => 
{
checkLevel();
load();
console.log(document.getElementById("level").getAttribute("value"))


});
document.getElementById('boxLevel2').addEventListener("click",e => 
{
checkLevel();
load();
console.log(document.getElementById("level").getAttribute("value"))

});
  //
  if(document.querySelectorAll('.timer')!="undefined"){
  document.querySelectorAll('.timer').forEach(element => {
    element.addEventListener("click",e => {
      document.getElementById("counter").setAttribute('closedtime',"enabled")
 Disable();
    })
  });
let Disable= function fDisable(){
        document.getElementById("boxtimer").parentNode.removeChild(document.getElementById('boxtimer'))
document.getElementById('boxtimer1').parentNode.removeChild(document.getElementById('boxtimer1'))
document.getElementById('boxtimer2').parentNode.removeChild(document.getElementById('boxtimer2'))
document.getElementById('noTimer').parentNode.removeChild(document.getElementById('noTimer'))
document.getElementById("LevelsButton").setAttribute("visible",true)

}
 }
}
})
