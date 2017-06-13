"use strict";

var Pixatron = function () {

    createjs.Ticker.setFPS(64);

    this.xLength = 8;
    this.yLength = 8;
    this.padding = 0.08;
    this.cellRounding = 0.08;
    this.data = new Array(this.xLength * this.yLength).fill(null);
    this.morphHandler = new MorphHandler(this);
    this.morphQueue = [];
    this.stage;
    this.containerId;
    this.canvasName;
    this.canvas;
    this.container;
    this.cellWidth;
    this.cellHeight;
    this.cellPadding;

    this.create = function (containerId) {

        this.containerId = containerId;
        this.canvasName = this.containerId + '_canvas';
        this.canvas = document.createElement('canvas');
        this.container = document.getElementById(containerId);

        this.cellWidth = this.container.offsetWidth / this.xLength;
        this.cellHeight = this.container.offsetHeight / this.yLength;
        this.cellPadding = this.cellWidth * this.padding;

        this.canvas.id = this.canvasName;
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;

        this.container.appendChild(this.canvas);
        this.stage = new createjs.Stage(this.canvasName);
    };

    this.draw = function (data) {

        this.data = data ? data.slice(0) : this.data;

        for (var y = 0; y < this.yLength; y++) {
            for (var x = 0; x < this.xLength; x++) {
                var inputOffset = (y * this.yLength) + x;
                if (this.data[inputOffset]) {
                    var cell = new createjs.Shape();
                    cell.graphics
                        .beginFill(this.data[inputOffset])
                        .drawRoundRect(
                        (x * this.cellWidth) + this.cellPadding,
                        (y * this.cellHeight) + this.cellPadding,
                        this.cellWidth - (this.cellPadding * 2),
                        this.cellHeight - (this.cellPadding * 2),
                        this.cellWidth * this.cellRounding
                        );
                    this.stage.addChild(cell);
                }
            }
        }

        this.stage.update();
    };

    this.createAndDraw = function (containerId, data) {
        this.create(containerId);
        this.draw(data);
    };

    this.morph = function (morphEffect, morphData, ticksToPause) {
        this.morphQueue.push({
            morphEffect: new morphEffect(),
            morphData: morphData ? morphData.slice(0) : morphData
        });
        if (this.morphQueue.length == 1) {
            this.morphHandler.run();
        }

        if (ticksToPause) {
            this.morphQueue.push({
                morphEffect: new MorphEffect.PAUSE(),
                morphData: ticksToPause
            });
        }
    };
};