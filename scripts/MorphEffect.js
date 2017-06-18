"use strict";

var MorphEffect = {

    PAUSE: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            let ticksToPause = morphData;
            this.index++;
            return this.index < ticksToPause;
        };
    },

    BLACK_OUT_UP_TO_DOWN: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            var y = Math.floor(this.index / pixatronData.length);
            var x = this.index % pixatronData[y].length;

            pixatronData[y][x] = null;

            this.index++;
            return this.index < pixatronData.length * pixatronData[y].length;
        };
    },

    BLACK_OUT_DOWN_TO_UP: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            var y = Math.floor(this.index / pixatronData.length);
            var x = this.index % pixatronData[y].length;

            pixatronData[pixatronData.length - 1 - y][pixatronData[y].length - 1 - x] = null;

            this.index++;
            return this.index < pixatronData.length * pixatronData[y].length;
        };
    },

    BLACK_OUT_UP_AND_DOWN: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            var y = Math.floor(this.index / pixatronData.length);
            var x = this.index % pixatronData[y].length;

            pixatronData[y][x] = null;
            pixatronData[pixatronData.length - 1 - y][pixatronData[y].length - 1 - x] = null;

            this.index++;
            return this.index < (pixatronData.length * pixatronData[y].length) / 2;
        };
    },

    BLACK_OUT_MIDDLE_OUT: function () {
        this.index;
        this.func = function (pixatronData, morphData) {

            if(this.index === undefined) {
                this.index = (pixatronData.length * pixatronData[0].length) / 2;
            }

            var y = Math.floor(this.index / pixatronData.length);
            var x = this.index % pixatronData[y].length;

            pixatronData[y][x] = null;
            pixatronData[pixatronData.length - 1 - y][pixatronData[y].length - 1 - x] = null;

            this.index--;
            return this.index >= 0;
        };
    },

    REPLACE_UP_TO_DOWN: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            var y = Math.floor(this.index / pixatronData.length);
            var x = this.index % pixatronData[y].length;

            pixatronData[y][x] = morphData[y][x];

            this.index++;
            return this.index < pixatronData.length * pixatronData[y].length;
        };
    },

    REPLACE_DOWN_TO_UP: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            var y = Math.floor(this.index / pixatronData.length);
            var x = this.index % pixatronData[y].length;

            pixatronData[pixatronData.length - 1 - y][pixatronData[y].length - 1 - x] = morphData[pixatronData.length - 1 - y][pixatronData[y].length - 1 - x];

            this.index++;
            return this.index < pixatronData.length * pixatronData[y].length;
        };
    },

    REPLACE_UP_AND_DOWN: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            var y = Math.floor(this.index / pixatronData.length);
            var x = this.index % pixatronData[y].length;

            pixatronData[y][x] = morphData[y][x];
            pixatronData[pixatronData.length - 1 - y][pixatronData[y].length - 1 - x] = morphData[pixatronData.length - 1 - y][pixatronData[y].length - 1 - x];

            this.index++;
            return this.index < (pixatronData.length * pixatronData[y].length) / 2;
        };
    },

    REPLACE_MIDDLE_OUT: function () {
        this.index;
        this.func = function (pixatronData, morphData) {

            if(this.index === undefined) {
                this.index = (pixatronData.length * pixatronData[0].length) / 2;
            }

            var y = Math.floor(this.index / pixatronData.length);
            var x = this.index % pixatronData[y].length;

            pixatronData[y][x] = morphData[y][x];
            pixatronData[pixatronData.length - 1 - y][pixatronData[y].length - 1 - x] = morphData[pixatronData.length - 1 - y][pixatronData[y].length - 1 - x];

            this.index--;
            return this.index >= 0;
        };
    },

    LIFE: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData, pixatron) {

            var color = '#7fa5e2';

            var nextGen = pixatron.getNullDataSet();

            for (var y = 0; y < pixatronData.length; y++) {
                for (var x = 0; x < pixatronData[y].length; x++) {

                    var neighbours = 0;

                    if (y > 0 && x > 0 && pixatronData[y - 1][x - 1]) {
                        neighbours++;
                    }
                    if (y > 0 && pixatronData[y - 1][x]) {
                        neighbours++;
                    }
                    if (y > 0 && x < pixatronData[y].length - 2 && pixatronData[y - 1][x + 1]) {
                        neighbours++;
                    }

                    if (x > 0 && pixatronData[y][x - 1]) {
                        neighbours++;
                    }
                    if (x < pixatronData[y].length - 2 && pixatronData[y][x + 1]) {
                        neighbours++;
                    }

                    if (y < pixatronData.length - 2 && x > 0 && pixatronData[y + 1][x - 1]) {
                        neighbours++;
                    }
                    if (y < pixatronData.length - 2 && pixatronData[y + 1][x]) {
                        neighbours++;
                    }
                    if (y < pixatronData.length - 2 && x < pixatronData[y].length - 2 && pixatronData[y + 1][x + 1]) {
                        neighbours++;
                    }

                    if (!pixatronData[y][x] && neighbours === 3) {
                        nextGen[y][x] = color;
                    } else if (pixatronData[y][x]) {
                        if (neighbours < 2 || neighbours > 3) {
                            nextGen[y][x] = null;
                        } else {
                            nextGen[y][x] = color;
                        }
                    }
                }
            }

            pixatron.data = nextGen;

            this.index++;
            return this.index < 1200;
        };
    }

};