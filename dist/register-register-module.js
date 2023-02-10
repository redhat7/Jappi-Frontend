(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/components/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/components/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">Registrando Empresa ...</p>\r\n</ngx-spinner>\r\n<main class=\"d-flex align-items-center min-vh-100 py-3 py-md-0 form-main\">\r\n  <div class=\"container mx-auto\">\r\n    <div class=\"card form-main-card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 login-logo-container\">\r\n          <img\r\n            src=\"./assets/img/form-image.png\"\r\n            alt=\"login\"\r\n            class=\"form-main-img\"\r\n          />\r\n          <img\r\n            src=\"./assets/img/logo-japi.png\"\r\n            alt=\"logo\"\r\n            class=\"form-main-logo\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-7 p-4\">\r\n          <p class=\"form-main-description\">Registro</p>\r\n          <form>\r\n            <p>Datos Personales</p>\r\n            <div class=\"p-2 m-2 rounded\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control form-main-input\"\r\n                    placeholder=\"Nombres\"\r\n                    id=\"Nombres\"\r\n                    [(ngModel)]=\"nombre\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control form-main-input\"\r\n                    placeholder=\"DNI\"\r\n                    id=\"dni\"\r\n                    min=\"0\"\r\n                    pattern=\"[0-9]*\"\r\n                    inputmode=\"numeric\"\r\n                    [(ngModel)]=\"dni\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                    maxlength=\"8\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <input\r\n                    type=\"email\"\r\n                    class=\"form-control form-main-input\"\r\n                    placeholder=\"Correo Electrónico\"\r\n                    id=\"correo\"\r\n                    [(ngModel)]=\"mail\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                  <input\r\n                    type=\"password\"\r\n                    class=\"form-control form-main-input\"\r\n                    placeholder=\"Contraseña\"\r\n                    id=\"password\"\r\n                    [(ngModel)]=\"pass\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <p>Datos de la Empresa</p>\r\n            <div class=\"p-2 m-2 rounded\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control form-main-input\"\r\n                    id=\"empresa\"\r\n                    placeholder=\"Nombre Empresa\"\r\n                    [(ngModel)]=\"nameEmpresa\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control form-main-input\"\r\n                    id=\"Telefono\"\r\n                    placeholder=\"Teléfono\"\r\n                    [(ngModel)]=\"phone\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                    maxlength=\"9\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control form-main-input\"\r\n                    id=\"RUC\"\r\n                    placeholder=\"RUC (opcional)\"\r\n                    [(ngModel)]=\"ruc\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                    maxlength=\"11\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control form-main-input\"\r\n                    id=\"Direccion\"\r\n                    placeholder=\"Dirección\"\r\n                    [(ngModel)]=\"direction\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                  <select\r\n                    class=\"form-select form-main-select\"\r\n                    id=\"distrito\"\r\n                    style=\"display: block\"\r\n                    (change)=\"selectDistric($event.target.value)\"\r\n                  >\r\n                    <option [value]=\"o.value\" *ngFor=\"let o of distric\">\r\n                      {{ o.name }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                  <select\r\n                    class=\"form-select form-main-select\"\r\n                    id=\"banco\"\r\n                    (change)=\"selectOption($event.target.value)\"\r\n                  >\r\n                    <option [value]=\"o.value\" *ngFor=\"let o of options\">\r\n                      {{ o.name }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control form-main-input\"\r\n                    id=\"cuenta\"\r\n                    placeholder=\"Número de Cuenta\"\r\n                    [(ngModel)]=\"numCuenta\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control form-main-input\"\r\n                    id=\"Titular\"\r\n                    placeholder=\"Titular\"\r\n                    [(ngModel)]=\"titular\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                  />\r\n                </div>\r\n                <div\r\n                  class=\"d-flex justify-content-center\"\r\n                  style=\"margin: 0 auto\"\r\n                >\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    id=\"cbox2\"\r\n                    value=\"second_checkbox\"\r\n                    class=\"mr-2\"\r\n                    [(ngModel)]=\"isChecked\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    (change)=\"(!isChecked)\"\r\n                  />\r\n\r\n                  <a\r\n                    class=\"form-main-terms text-link\"\r\n                    target=\"_blank\"\r\n                    href=\"https://drive.google.com/file/d/1MHvTB9t3uQervfF1MYtHC_3nA8oyllcA/view?usp=sharing\"\r\n                    >Términos y condiciones</a\r\n                  >\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group d-flex flex-column align-items-center\">\r\n              <p>\r\n                Debes de aceptar los términos y condiciones para poder acceder al sistema Japi\r\n              </p>\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn form-main-btn col-md-6 m-0\"\r\n                (click)=\"register()\"\r\n              >\r\n                Registrarme\r\n              </button>\r\n\r\n              <span\r\n                id=\"button-message\"\r\n                class=\"form-main-input-error text-center\"\r\n              >\r\n              </span>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n");

/***/ }),

/***/ "./src/app/register/components/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/register/components/register.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.form-control,\ninput.form-select {\n  text-transform: uppercase;\n}\n\ninput.form-control[type=email],\ninput.form-control[type=password] {\n  text-transform: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvY29tcG9uZW50cy9DOlxcVXNlcnNcXExVSVNcXEVzY3JpdG9yaW9cXEphcGlFeHByZXNzL3NyY1xcYXBwXFxyZWdpc3RlclxcY29tcG9uZW50c1xccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL2NvbXBvbmVudHMvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUseUJBQUE7QUNDRjs7QURFQTs7RUFFRSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvY29tcG9uZW50cy9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LmZvcm0tY29udHJvbCxcclxuaW5wdXQuZm9ybS1zZWxlY3Qge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0LmZvcm0tY29udHJvbFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcbiIsImlucHV0LmZvcm0tY29udHJvbCxcbmlucHV0LmZvcm0tc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW5wdXQuZm9ybS1jb250cm9sW3R5cGU9ZW1haWxdLFxuaW5wdXQuZm9ybS1jb250cm9sW3R5cGU9cGFzc3dvcmRdIHtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59Il19 */");

/***/ }),

/***/ "./src/app/register/components/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/register/components/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _utils_services_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/services/location/location.service */ "./src/app/utils/services/location/location.service.ts");
/* harmony import */ var _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/services/form/form.service */ "./src/app/utils/services/form/form.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router, spinnerService, _location, formService) {
        this.http = http;
        this.router = router;
        this.spinnerService = spinnerService;
        this._location = _location;
        this.formService = formService;
        this.isChecked = false;
        this.options = [
            { name: "Seleccione un banco", value: 0 },
            { name: "BCP", value: 1 },
            { name: "INTERBANK", value: 2 },
            { name: "SCOTIABANK", value: 3 },
            { name: "BBVA", value: 4 },
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.distric = this.formService.getDistritos();
        this.configInitial();
    };
    RegisterComponent.prototype.configInitial = function () {
        var _this = this;
        this._location
            .getLocationService()
            .then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    RegisterComponent.prototype.selectOption = function (id) {
        this.banco = this.options[id].name;
    };
    RegisterComponent.prototype.selectDistric = function (id) {
        this.distrito = id;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var inputsRegistro = document.querySelectorAll(".form-main-input");
        var selectsRegistro = document.querySelectorAll(".form-main-select");
        var buttonMessage = document.querySelector("#button-message");
        this.deleteErrorMessage(inputsRegistro, selectsRegistro, buttonMessage);
        if (!this.lat && !this.lng) {
            this.addErrorMessage(inputsRegistro, selectsRegistro, buttonMessage, "Activa tu ubicación en tu dispositivo");
        }
        else {
            if (this.nombre != null &&
                this.dni != null &&
                this.mail != null &&
                this.pass != null &&
                this.nameEmpresa != null &&
                this.direction != null &&
                this.distrito != null &&
                this.lat != null &&
                this.lng != null &&
                this.phone != null &&
                this.banco != null &&
                this.numCuenta != null &&
                this.titular != null &&
                this.isChecked == true) {
                this.spinnerService.show();
                var data = JSON.stringify({
                    nombre: this.nombre,
                    dni: this.dni,
                    correo: this.mail,
                    pass: this.pass,
                    nombre_empresa: this.nameEmpresa,
                    direccion: this.direction,
                    distrito: this.distrito,
                    latitud: this.lat,
                    longitud: this.lng,
                    telefono: this.phone,
                    banco: this.banco,
                    cuenta: this.numCuenta,
                    titular: this.titular,
                    ruc: this.ruc,
                });
                console.log(data);
                this.http
                    .post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url_api + "/usuario/registro", 
                // "https://backend-japi.herokuapp.com/usuario/registro", 
                data, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Allow-Credentials": "true",
                        "Access-Control-Allow-Origin": "http://localhost:4200/*",
                    },
                })
                    .subscribe(function (result) {
                    console.log(result);
                    if (result["success"]) {
                        _this.spinnerService.hide();
                        _this.router.navigate(["/validar"], {
                            queryParams: { emailValidar: _this.mail },
                        });
                    }
                    else {
                        _this.addErrorMessage(inputsRegistro, selectsRegistro, buttonMessage, "El correo ya ha sido registrado. Por favor agrega otro correo");
                        _this.spinnerService.hide();
                    }
                });
            }
            else {
                this.addErrorMessage(inputsRegistro, selectsRegistro, buttonMessage, "Faltan datos");
            }
        }
    };
    RegisterComponent.prototype.addErrorMessage = function (inputsRegistro, selectsRegistro, buttonMessage, message) {
        inputsRegistro.forEach(function (input) { return input.classList.add("error"); });
        selectsRegistro.forEach(function (select) { return select.classList.add("error"); });
        buttonMessage.textContent = message;
    };
    RegisterComponent.prototype.deleteErrorMessage = function (inputsRegistro, selectsRegistro, buttonMessage) {
        inputsRegistro.forEach(function (input) { return input.classList.remove("error"); });
        selectsRegistro.forEach(function (select) { return select.classList.remove("error"); });
        buttonMessage.textContent = "";
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _utils_services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
        { type: _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_6__["FormService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RegisterComponent.prototype, "nombre", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Int16Array)
    ], RegisterComponent.prototype, "dni", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RegisterComponent.prototype, "mail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RegisterComponent.prototype, "pass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RegisterComponent.prototype, "nameEmpresa", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RegisterComponent.prototype, "direction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], RegisterComponent.prototype, "distrito", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Float32Array)
    ], RegisterComponent.prototype, "lng", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Float32Array)
    ], RegisterComponent.prototype, "lat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Int16Array)
    ], RegisterComponent.prototype, "phone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RegisterComponent.prototype, "banco", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Int16Array)
    ], RegisterComponent.prototype, "numCuenta", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RegisterComponent.prototype, "titular", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Int16Array)
    ], RegisterComponent.prototype, "ruc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], RegisterComponent.prototype, "isChecked", void 0);
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-register",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/components/register.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.scss */ "./src/app/register/components/register.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _utils_services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_6__["FormService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _register_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.routing */ "./src/app/register/register.routing.ts");
/* harmony import */ var _components_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register.component */ "./src/app/register/components/register.component.ts");






// Components

var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _register_routing__WEBPACK_IMPORTED_MODULE_5__["RegisterRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/register/register.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/register/register.routing.ts ***!
  \**********************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register.component */ "./src/app/register/components/register.component.ts");



// Components

var routes = [
    {
        path: "",
        component: _components_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
    },
];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map