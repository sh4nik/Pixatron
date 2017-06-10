"use strict";

var MorphEffect = {

    BLACK_OUT_UP_TO_DOWN : function () {
        this.index = 0;
        this.func = function (sourceMorphData, targetMorphData) {
            sourceMorphData[this.index] = null;
            this.index++;
            return this.index < sourceMorphData.length;
        };
    },

    BLACK_OUT_DOWN_TO_UP : function () {
        this.index = 0;
        this.func = function (sourceMorphData, targetMorphData) {
            sourceMorphData[sourceMorphData.length - 1 - this.index] = null;
            this.index++;
            return this.index < sourceMorphData.length;
        };
    },

    BLACK_OUT_UP_AND_DOWN : function () {
        this.index = 0;
        this.func = function (sourceMorphData, targetMorphData) {
            sourceMorphData[this.index] = null;
            sourceMorphData[sourceMorphData.length - 1 - this.index] = null;
            this.index++;
            return this.index < sourceMorphData.length / 2;
        };
    },

    REPLACE_UP_TO_DOWN : function () {
        this.index = 0;
        this.func = function (sourceMorphData, targetMorphData) {
            sourceMorphData[this.index] = targetMorphData[this.index];
            this.index++;
            return this.index < sourceMorphData.length;
        };
    },

    REPLACE__DOWN_TO_UP : function () {
        this.index = 0;
        this.func = function (sourceMorphData, targetMorphData) {
            sourceMorphData[sourceMorphData.length - 1 - this.index] = targetMorphData[sourceMorphData.length - 1 - this.index];
            this.index++;
            return this.index < sourceMorphData.length;
        };
    },

    REPLACE_UP_AND_DOWN : function () {
        this.index = 0;
        this.func = function (sourceMorphData, targetMorphData) {
            sourceMorphData[this.index] = targetMorphData[this.index];
            sourceMorphData[sourceMorphData.length - 1 - this.index] = targetMorphData[sourceMorphData.length - 1 - this.index];
            this.index++;
            return this.index < sourceMorphData.length / 2;
        };
    }

};