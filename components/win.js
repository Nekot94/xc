AFRAME.registerComponent('win', {

    init: function() {
        var sceneEl = document.querySelector('a-scene');
        sceneEl.addEventListener("win", () => {
            this.toWin()
        })

    }, 


    toWin: function() {
        this.el.setAttribute("visible", true)
        var char= document.querySelector("#char");
        console.log(char)
        char.setAttribute("animation-mixer", {
            clip: "Collect&Drink",
            loop: "once"
        })
        char.addEventListener('animation-finished', function () {
            console.log('Ended');
            char.setAttribute("animation-mixer", {
                clip: "idle",
                loop: "repeat"
            })
        },);
    }
})