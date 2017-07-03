"use strict";

//MorphicCell
var Pixatron = function (options) {

    this.fps = options.fps || 30;
    this.xLength = options.width;
    this.yLength = options.height;
    this.padding = options.padding || 0.08;
    this.cellRounding = options.rounding || 0.08;
    this.shadows = options.shadows || null;
    this.border = options.border || null;
    this.data;
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

        this.data = this.getNullDataSet();

        this.containerId = containerId;
        this.canvasName = this.containerId + '_canvas';
        this.canvas = document.createElement('canvas');
        this.container = document.getElementById(containerId);

        this.cellWidth = this.container.offsetWidth / this.xLength;
        this.cellHeight = this.container.offsetHeight / this.yLength;
        this.cellPadding = this.cellWidth * this.padding;

        this.canvas.id = this.canvasName;
        this.canvas.width = this.container.offsetWidth + this.shadows;
        this.canvas.height = this.container.offsetHeight + this.shadows;

        this.container.appendChild(this.canvas);
        this.stage = new createjs.Stage(this.canvasName);
    };

    this.draw = function (data) {

        this.data = data ? this.normalizeData(data) : this.data;

        for(var y = 0; y < this.data.length; y++) {
            var row = this.data[y];
            for(var x = 0; x < row.length; x++) {
                    if (row[x]) {
                        var cell = new createjs.Shape();
                        if(this.border) {
                             cell.graphics.setStrokeStyle(this.border).beginStroke("rgba(0,0,0,1)");
                         }
                        cell.graphics
                            .beginFill(row[x])
                            .drawRoundRect(
                            (x * this.cellWidth) + this.cellPadding,
                            (y * this.cellHeight) + this.cellPadding,
                            this.cellWidth - (this.cellPadding * 2),
                            this.cellHeight - (this.cellPadding * 2),
                            this.cellWidth * this.cellRounding
                            );
                         if(this.shadows) {
                             cell.shadow = new createjs.Shadow('#000', this.shadows, this.shadows, this.shadows);
                         }
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

        createjs.Ticker.setFPS(this.fps);

        this.morphQueue.push({
            morphEffect: new morphEffect(),
            morphData: morphData ? this.normalizeData(morphData) : morphData
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

    this.getNullDataSet = function() {
        var nullDataSet = [];
        for(var y = 0; y < this.yLength; y++) {
            nullDataSet[y] = new Array(this.xLength).fill(null);
        }
        return nullDataSet;
    };

    this.normalizeData = function(rawData) {
        var normalizedData = this.getNullDataSet();
        var yOffset = Math.floor((normalizedData.length - rawData.length) / 2);
        var xOffset = Math.floor((normalizedData[0].length - rawData[0].length) / 2);

        for(var y = 0; y < rawData.length; y++) {
            for(var x = 0; x < rawData[y].length; x++) {
                normalizedData[y + yOffset][x + xOffset] = rawData[y][x];
            }
        }

        return normalizedData;
    };

    this.clean = function() {
        this.stage.removeAllChildren();
    };

    this.update = function() {
        this.stage.update();
    };
};