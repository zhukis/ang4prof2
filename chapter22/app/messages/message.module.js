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
var platform_browser_1 = require("@angular/platform-browser");
var message_component_1 = require("./message.component");
var message_service_1 = require("./message.service");
var errorHandler_1 = require("./errorHandler");
var router_1 = require("@angular/router");
var MessageModule = (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule],
            declarations: [message_component_1.MessageComponent],
            exports: [message_component_1.MessageComponent],
            providers: [message_service_1.MessageService,
                { provide: core_1.ErrorHandler, useClass: errorHandler_1.MessageErrorHandler }]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageModule);
    return MessageModule;
}());
exports.MessageModule = MessageModule;
