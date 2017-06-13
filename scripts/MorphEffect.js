"use strict";

var MorphEffect = {

    PAUSE: function () {
        this.ticksToPause;
        this.func = function (pixatronData, morphData) {
            if (this.ticksToPause === undefined) {
                this.ticksToPause = morphData;
            }
            this.ticksToPause--;
            return this.ticksToPause > 0;
        };
    },

    BLACK_OUT_UP_TO_DOWN: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            pixatronData[this.index] = null;
            this.index++;
            return this.index < pixatronData.length;
        };
    },

    BLACK_OUT_DOWN_TO_UP: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            pixatronData[pixatronData.length - 1 - this.index] = null;
            this.index++;
            return this.index < pixatronData.length;
        };
    },

    BLACK_OUT_UP_AND_DOWN: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            pixatronData[this.index] = null;
            pixatronData[pixatronData.length - 1 - this.index] = null;
            this.index++;
            return this.index < pixatronData.length / 2;
        };
    },

    REPLACE_UP_TO_DOWN: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            pixatronData[this.index] = morphData[this.index];
            this.index++;
            return this.index < pixatronData.length;
        };
    },

    REPLACE_DOWN_TO_UP: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            pixatronData[pixatronData.length - 1 - this.index] = morphData[pixatronData.length - 1 - this.index];
            this.index++;
            return this.index < pixatronData.length;
        };
    },

    REPLACE_UP_AND_DOWN: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            pixatronData[this.index] = morphData[this.index];
            pixatronData[pixatronData.length - 1 - this.index] = morphData[pixatronData.length - 1 - this.index];
            this.index++;
            return this.index < pixatronData.length / 2;
        };
    },

    REPLACE_MIDDLE_OUT: function () {
        this.index = 0;
        this.func = function (pixatronData, morphData) {
            pixatronData[(pixatronData.length / 2) + this.index] = morphData[(pixatronData.length / 2) + this.index];
            pixatronData[(pixatronData.length / 2) - this.index - 1] = morphData[(pixatronData.length / 2) - this.index - 1];
            this.index++;
            return this.index < pixatronData.length / 2;
        };
    }

};