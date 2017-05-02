"use strict";

function createMatrix(containerId, input) {

    //######################
    var length = 8;
    var padding = 0.08;
    var cellRounding = 0.08;
    //######################

    var c = createjs;
    var canvasName = containerId + '_canvas';

    //create canvas
    var container = document.getElementById(containerId);
    var canvas = document.createElement("canvas");
    canvas.id = canvasName;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    container.appendChild(canvas);

    var xLength = length;
    var yLength = xLength;
    var cellWidth = container.offsetWidth / xLength;
    var cellHeight = container.offsetHeight / yLength;
    var cellPadding = cellWidth * padding;

    var stage = new c.Stage(canvasName);

    for (var y = 0; y < yLength; y++) {
        for (var x = 0; x < xLength; x++) {
            var inputOffset = (y * yLength) + x;
            if(input[inputOffset]) {
                var cell = new c.Shape();
                cell
                    .graphics
                    .beginFill(input[inputOffset])
                    .drawRoundRect((x * cellWidth) + cellPadding, (y * cellHeight) + cellPadding, cellWidth - (cellPadding * 2), cellHeight - (cellPadding * 2), cellWidth * cellRounding);
                stage.addChild(cell);
            }
        }
    }

    stage.update();

}