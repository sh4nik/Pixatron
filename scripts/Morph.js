"use strict";

var Morph = function(pixatron, morphEffect, morphData) {

    var morphData = morphData ? morphData.slice(0) : morphData;

    createjs.Ticker.addEventListener("tick", tick);

    function tick() {
        console.log("tick [" + pixatron.containerId + "]");
        pixatron.stage.removeAllChildren();
        pixatron.stage.update();
        if(!morphEffect.func(pixatron.data, morphData, pixatron)) {
            createjs.Ticker.removeEventListener("tick", tick);
        }
        pixatron.draw();
        pixatron.stage.update();
    };

};