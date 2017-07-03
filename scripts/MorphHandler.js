"use strict";

var MorphHandler = function (pixatron) {

    this.run = function () {
        createjs.Ticker.addEventListener("tick", _tick);
    };

    function _tick() {
        console.log(createjs.Ticker.getMeasuredFPS());
        if (pixatron.morphQueue.length === 0) {
            createjs.Ticker.removeEventListener("tick", _tick);
            return;
        }
        pixatron.clean();
        pixatron.update();
        let currentMorph = pixatron.morphQueue[0];
        if (!currentMorph.morphEffect.func(pixatron.data, currentMorph.morphData, pixatron)) {
            pixatron.morphQueue.shift();
        }
        pixatron.draw();
        pixatron.update();
    };

};