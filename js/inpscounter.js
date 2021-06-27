AFRAME.registerComponent('inpsscore', {
    init: function() {
        document.getElementById('Fairy').addEventListener('position-changed', function(evt) {

            console.log(document.getElementById('Fairy').getAttribute("position").x + " x " + document.getElementById('Fairy'))
        })
    }
})