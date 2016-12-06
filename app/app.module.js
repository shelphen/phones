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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var phones_list_component_1 = require('./components/phones-list.component');
var phone_item_component_1 = require('./components/phone-item.component');
var home_component_1 = require('./components/home.component');
var contacts_component_1 = require('./components/contacts.component');
var phones_services_1 = require('./services/phones.services');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'phones-list', component: phones_list_component_1.PhonesListComponent },
    { path: 'phone/:id', component: phone_item_component_1.PhoneItemComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes), http_1.HttpModule],
            exports: [router_1.RouterModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, phones_list_component_1.PhonesListComponent, contacts_component_1.ContactsComponent, phone_item_component_1.PhoneItemComponent],
            providers: [phones_services_1.PhoneService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map