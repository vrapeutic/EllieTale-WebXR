console.log("myinps");
AFRAME.registerComponent('inpsscore', {
  tick: function() {
      
let fairy = document.querySelector("#Fairy");
 let inpusCount=document.querySelector("#inpsCounter").getAttribute("value");
  let index=document.querySelector("#inps").getAttribute("value");


   if (this.el.sceneEl.camera) {
      var cam = this.el.sceneEl.camera
      var frustum = new THREE.Frustum();
      frustum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, 
      cam.matrixWorldInverse));  

      // Your 3d point to check
    
      var fairyPosition =  new THREE.Vector3(fairy.getAttribute("position").x,fairy.getAttribute("position").y,fairy.getAttribute("position").z);
     
      if (frustum.containsPoint(fairyPosition)) {
        // Do something with the position...
        console.log("here");
      }
     else{
      console.log("nothere");

      setTimeout(() => 
      {
          if(inpusCount==3)
          {
            console.log("nothere"+inpusCount);

             index++;
           inpusCount=0;
        document.querySelector("#inps").setAttribute("value", index);
fairy.setAttribute( "animation",
"property:position; to:"+document.getElementById("cam").getAttribute("position").x +
" 0.5 " +
(document.getElementById("cam").getAttribute("position").z-3)+" dur:1000") 
setTimeout(() => 
{
    fairy.setAttribute( "animation",
       "property:position; to:"+fairyPositionx  +
       " 0.5 " +
       fairyPositionz+" dur:1000")
},3000)

        }
console.log("not count"+inpusCount)
setTimeout(() => {
  

       inpusCount++;
       document.querySelector("#inpsCounter").setAttribute("value", inpusCount); 
 }, 2000);   
     
},1000);
}       

   }
  }
})