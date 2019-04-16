"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PaCellColor = (function () {
    function PaCellColor() {
        this.bgClass = "";
    }
    PaCellColor.prototype.setColor = function (dark) {
        this.bgClass = dark ? "bg-inverse" : "";
    };
    __decorate([
        core_1.HostBinding("class"), 
        __metadata('design:type', String)
    ], PaCellColor.prototype, "bgClass", void 0);
    PaCellColor = __decorate([
        core_1.Directive({
            selector: "td[paApplyColor]"
        }), 
        __metadata('design:paramtypes', [])
    ], PaCellColor);
    return PaCellColor;
}());
exports.PaCellColor = PaCellColor;
