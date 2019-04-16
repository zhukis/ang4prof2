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
var discount_service_1 = require("./discount.service");
var log_service_1 = require("./log.service");
var PaDiscountPipe = (function () {
    function PaDiscountPipe(discount, logger) {
        this.discount = discount;
        this.logger = logger;
    }
    PaDiscountPipe.prototype.transform = function (price) {
        if (price > 100) {
            this.logger.logInfoMessage("Large price discounted: " + price);
        }
        return this.discount.applyDiscount(price);
    };
    PaDiscountPipe = __decorate([
        core_1.Pipe({
            name: "discount",
            pure: false
        }), 
        __metadata('design:paramtypes', [discount_service_1.DiscountService, log_service_1.LogService])
    ], PaDiscountPipe);
    return PaDiscountPipe;
}());
exports.PaDiscountPipe = PaDiscountPipe;
