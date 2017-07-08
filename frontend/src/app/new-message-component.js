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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web_service_1 = require("./web.service");
var NewMessageComponent = (function () {
    function NewMessageComponent(webService) {
        this.webService = webService;
        this.message = {
            owner: "",
            text: ""
        };
    }
    NewMessageComponent.prototype.post = function () {
        this.webService.postMessage(this.message);
    };
    return NewMessageComponent;
}());
NewMessageComponent = __decorate([
    core_1.Component({
        selector: 'new-message',
        template: "\n    <md-card class=\"card\">\n        <md-card-content>\n            <md-input-container>\n                <input [(ngModel)]=\"message.owner\" mdInput placeholder=\"Name\">\n            </md-input-container>\n            <md-input-container>\n                <textarea [(ngModel)]=\"message.text\" mdInput placeholder=\"Message\"></textarea>\n            </md-input-container>\n            <md-card-actions>\n                <button (click)=\"post()\"md-button color=\"primary\">POST</button>\n            </md-card-actions>\n        </md-card-content>        \n    </md-card>\n     "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService])
], NewMessageComponent);
exports.NewMessageComponent = NewMessageComponent;
//# sourceMappingURL=new-message-component.js.map