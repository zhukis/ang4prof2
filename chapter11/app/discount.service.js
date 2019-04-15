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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var log_service_1 = require("./log.service");
var DiscountService = (function () {
    function DiscountService(loggers) {
        this.loggers = loggers;
        this.discountValue = 10;
        this.logger = loggers.find(function (l) { return l.minimumLevel == log_service_1.LogLevel.DEBUG; });
    }
    Object.defineProperty(DiscountService.prototype, "discount", {
        get: function () {
            return this.discountValue;
        },
        set: function (newValue) {
            this.discountValue = newValue || 0;
        },
        enumerable: true,
        configurable: true
    });
    DiscountService.prototype.applyDiscount = function (price) {
        this.logger.logInfoMessage(("Discount " + this.discount)
            + (" applied to price: " + price));
        return Math.max(price - this.discountValue, 5);
    };
    DiscountService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(log_service_1.LOG_SERVICE)), 
        __metadata('design:paramtypes', [Array])
    ], DiscountService);
    return DiscountService;
}());
exports.DiscountService = DiscountService;
