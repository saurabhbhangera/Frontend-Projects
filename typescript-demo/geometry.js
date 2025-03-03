"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = void 0;
var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (exports.Geometry = Geometry = {}));
