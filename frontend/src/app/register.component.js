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
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(fb) {
        this.fb = fb;
        this.form = fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required],
        }, { validator: matchingFields('password', 'confirmPassword') });
    }
    RegisterComponent.prototype.onSubmit = function () {
        console.log(this.form.errors);
    };
    RegisterComponent.prototype.isValid = function (control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: 'register.component.html',
        styles: ["\n    .error{\n        background-color:#fff0f0;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
function matchingFields(param1, param2) {
    return function (form) {
        if (form.controls[param1].value !== form.controls[param2].value)
            return { mismatchedFields: true };
    };
}
//# sourceMappingURL=register.component.js.map