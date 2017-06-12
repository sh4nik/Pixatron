"use strict";

var MorphHandler = function(pixatron, morphEffect, morphData) {

    this.run = function() {
        createjs.Ticker.addEventListener("tick", tick);
    };

    function tick() {
        if(pixatron.morphQueue.length === 0) {
            createjs.Ticker.removeEventListener("tick", tick);
            return;
        }
        pixatron.stage.removeAllChildren();
        pixatron.stage.update();
        var currentMorph = pixatron.morphQueue[0];
        if(!currentMorph.morphEffect.func(pixatron.data, currentMorph.targetMorphData, pixatron)) {
            pixatron.morphQueue.shift();
        }
        pixatron.draw();
        pixatron.stage.update();
    };

};