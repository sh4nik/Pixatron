"use strict";

var MorphHandler = function (pixatron, morphEffect, morphData) {

    this.run = function () {
        createjs.Ticker.addEventListener("tick", _tick);
    };

    function _tick() {
        if (pixatron.morphQueue.length === 0) {
            createjs.Ticker.removeEventListener("tick", _tick);
            return;
        }
        pixatron.stage.removeAllChildren();
        pixatron.stage.update();
        let currentMorph = pixatron.morphQueue[0];
        if (!currentMorph.morphEffect.func(pixatron.data, currentMorph.morphData, pixatron)) {
            pixatron.morphQueue.shift();
        }
        pixatron.draw();
        pixatron.stage.update();
    };

};