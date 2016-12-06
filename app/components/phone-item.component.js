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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var phones_list_model_1 = require('../models/phones-list.model');
var PhoneItemComponent = (function () {
    function PhoneItemComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    PhoneItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.params.subscribe(function (param) {
            _this.phoneId = param['id'];
            _this.phonesList = new phones_list_model_1.PhonesList(_this.phoneId);
            console.log(_this.phonesList);
        });
    };
    PhoneItemComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    PhoneItemComponent = __decorate([
        core_1.Component({
            selector: 'phone-item',
            templateUrl: './app/components/phone-item.component.html',
            styleUrls: ['./app/components/phone-item.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], PhoneItemComponent);
    return PhoneItemComponent;
}());
exports.PhoneItemComponent = PhoneItemComponent;
//# sourceMappingURL=phone-item.component.js.map