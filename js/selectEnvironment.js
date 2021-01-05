AFRAME.registerComponent('selectenvironment',{

init: function() {

    function loadEnvironment()
    {
        window.location.href="html/"+document.getElementById("selectenvironment").getAttribute("value")+".html";
    }

 document.getElementById('Garden').addEventListener("click",e => 
      {loadEnvironment()});
/*
 document.getElementById('Library').addEventListener("click",e => 
      {loadEnvironment()});
*/
 document.getElementById('Beach').addEventListener("click",e => 
      {
          loadEnvironment()
        });

}
})