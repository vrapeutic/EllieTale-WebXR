console.log(xpos);


AFRAME.registerComponent('inpsscore', {

  tick: function(time) {
        let fairy = document.querySelector("#Taxi");
 let score=document.querySelector("#inpsCounter").getAttribute("value");
      let index=document.querySelector("#inps").getAttribute("value");
    time=1000;

   if (this.el.sceneEl.camera) {
      var cam = this.el.sceneEl.camera
      var frustum = new THREE.Frustum();
      frustum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, 
      cam.matrixWorldInverse));  

      // Your 3d point to check
    
      var pos =  new THREE.Vector3(fairy.getAttribute("position").x,fairy.getAttribute("position").y,fairy.getAttribute("position").z);
      if (frustum.containsPoint(pos)) {
        // Do something with the position...
      }
     else{
      setTimeout(() => 
      {
          if(score==3)
          {
             index++;
           score=0;
        document.querySelector("#inps").setAttribute("value", index);
fairy.setAttribute( "animation",
"property:position; to:"+(document.getElementById("cam").getAttribute("position").x)  +
" 0.5 " +
(document.getElementById("cam").getAttribute("position").z-3)+" dur:1000") 
setTimeout(() => 
{
    fairy.setAttribute( "animation",
       "property:position; to:"+xpos  +
       " 0.5 " +
zpos+" dur:1000")
},3000)

        }

       score++;
       document.querySelector("#inpsCounter").setAttribute("value", score); 

    
     
},1000);
}       

   }
  }
})