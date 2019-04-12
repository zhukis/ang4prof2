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
var PaIteratorDirective = (function () {
    function PaIteratorDirective(container, template) {
        this.container = container;
        this.template = template;
    }
    PaIteratorDirective.prototype.ngOnInit = function () {
        this.updateContent();
    };
    PaIteratorDirective.prototype.ngDoCheck = function () {
        console.log("ngDoCkeck Called");
        this.updateContent();
    };
    PaIteratorDirective.prototype.updateContent = function () {
        this.container.clear();
        for (var i = 0; i < this.dataSource.length; i++) {
            this.container.createEmbeddedView(this.template, new PaIteratorContext(this.dataSource[i], i, this.dataSource.length));
        }
    };
    __decorate([
        core_1.Input("paForOf"), 
        __metadata('design:type', Object)
    ], PaIteratorDirective.prototype, "dataSource", void 0);
    PaIteratorDirective = __decorate([
        core_1.Directive({
            selector: "[paForOf]"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
    ], PaIteratorDirective);
    return PaIteratorDirective;
}());
exports.PaIteratorDirective = PaIteratorDirective;
var PaIteratorContext = (function () {
    function PaIteratorContext($implicit, index, total) {
        this.$implicit = $implicit;
        this.index = index;
        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total - 1;
        // setInterval(() => {
        //     this.odd = !this.odd;
        //     this.even = !this.even;
        //     this.$implicit.price++;
        // }, 2000);
    }
    return PaIteratorContext;
}());
