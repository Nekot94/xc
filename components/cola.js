AFRAME.registerComponent('cola', {

    schema: {
        takeDistance: {type: "number", default: 1},
        player: {type: "string", default: "#player"}
    },

    init: function() {
        console.log("Cola")
        this.el.addEventListener('mouseenter',  ()=> {
            this.el.setAttribute('color',"#FF0000");
          });
    
          this.el.addEventListener('mouseleave', ()=> {
            this.el.setAttribute('color', "#FFFFFF");
          });
    },

    tick: function (time, timeDelta) {
        // var player = document.querySelector("#player")
        var player = document.querySelector(this.data.player)
        var playerPosition = player.getAttribute("position")
        var elementPosition = this.el.getAttribute("position")

        var takeDistance = this.data.takeDistance

        if ( Math.abs(playerPosition.x - elementPosition.x) < takeDistance && Math.abs(playerPosition.z - elementPosition.z) < takeDistance ) {
            // var winText = player.querySelector("#winText").components["win"]
            // winText.toWin()

            var sceneEl = document.querySelector('a-scene');
            sceneEl.emit("win")

            this.el.parentNode.removeChild(this.el);
        }

        
    }
})