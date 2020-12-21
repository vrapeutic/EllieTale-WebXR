var url= "../images/particles/snowflake.png";

AFRAME.registerComponent('menu', {
init :function(){

  var firtTargetPos=document.getElementById("targetone").getAttribute("position")
 var  lastTargetPos=document.getElementById("targetfour").getAttribute("position")
 console.log(document.getElementById("selectenvironment").getAttribute("value"))


   /*   if(document.getElementById("selectenvironment").getAttribute("value")=="Beach" )
 {
   url= "../images/particles/snowflake.png";

createBeachPartical();
console.log(partical.id);
 }
 if(document.getElementById("selectenvironment").getAttribute("value")=="Garden" )
 {
createBeachPartical();
 console.log(partical.id);

 }*/


 let  load=function fload(){
document.getElementById("boxLevel").parentNode.removeChild( document.getElementById('boxLevel'))
document.getElementById('boxLevel1').parentNode.removeChild(document.getElementById('boxLevel1'))
document.getElementById('boxLevel2').parentNode.removeChild(document.getElementById('boxLevel2'))


}
let checkLevel=function fcheckLevel(){
  
  document.getElementById("Taxi").setAttribute(
 "animation",
 "property:position; to:"+(firtTargetPos.x + 1) +
 " 0.5 " +
 firtTargetPos.z +" dur:1000"
)
xpos=firtTargetPos.x + 1;
zpos=firtTargetPos.z;
if(  document.getElementById("level").getAttribute("value")==3){ 
  
//  document.getElementById("ds").parentNode.removeChild( document.getElementById("ds"));
 
document.getElementById("myDs").setAttribute(
 "animation",
 "property:position; to:"+(lastTargetPos.x+1) +
 " 0.5 " +
 lastTargetPos.z +" dur:10"

) 
     var partical=document.createElement("a-entity")
partical.setAttribute("spe-particles","texture:../images/particles/snowflake.png; color: #0000FF, #00FFFF, #FFFFFF; particle-count: 1000; acceleration: 0 -6 0;")
partical.setAttribute("spe-particles","opacity: 2, 2, 0; velocity: 0 2 0; size: 2, 2, 0; velocity-spread: 2 0 2;") 
partical.setAttribute("id", "DsPartical")
 partical.setAttribute("position", 
        (lastTargetPos.x+1) +
        " 1 " +
       lastTargetPos.z )
       setTimeout(() => {
                 document.querySelector('a-scene').appendChild(partical);

       },1500); 
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

// console.log(document.getElementById("myDs").childElementCount)

document.getElementById("myDs").setAttribute(
  "animation",
  "property:position; to:"+(lastTargetPos.x + 1) +
  " 0.5 " +
  lastTargetPos.z +" dur:1000"
)
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
