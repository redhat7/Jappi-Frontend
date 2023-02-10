(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/components/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/components/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">Cargando ...</p>\r\n</ngx-spinner>\r\n<main class=\"d-flex align-items-center min-vh-100 py-3 py-md-0 form-main\">\r\n  <div class=\"container\">\r\n    <div class=\"card form-main-card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 form-main-logo-container\">\r\n          <img\r\n            src=\"./assets/img/form-image.png\"\r\n            alt=\"login\"\r\n            class=\"form-main-img\"\r\n          />\r\n          <img\r\n            src=\"./assets/img/japi-verde.png\"\r\n            alt=\"logo\"\r\n            class=\"form-main-logo\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <div class=\"form-main-body\">\r\n            <p class=\"form-main-description\">Iniciar Sesión</p>\r\n            <form action=\"#!\" class=\"form-main-container\">\r\n              <div class=\"form-group\">\r\n                <label for=\"email\" class=\"sr-only\">Correo</label>\r\n                <input\r\n                  type=\"email\"\r\n                  name=\"email\"\r\n                  id=\"email\"\r\n                  class=\"form-control form-main-input\"\r\n                  [(ngModel)]=\"mail\"\r\n                  placeholder=\"Correo Electrónico\"\r\n                />\r\n                <span id=\"email-message\" class=\"form-main-input-error\"> </span>\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <label for=\"password\" class=\"sr-only\">Contraseña</label>\r\n                <input\r\n                  type=\"password\"\r\n                  name=\"password\"\r\n                  id=\"password\"\r\n                  class=\"form-control form-main-input\"\r\n                  [(ngModel)]=\"pass\"\r\n                  placeholder=\"***********\"\r\n                />\r\n                <span id=\"password-message\" class=\"form-main-input-error\">\r\n                </span>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button\r\n                  type=\"submit\"\r\n                  name=\"login\"\r\n                  id=\"login\"\r\n                  class=\"btn btn-block form-main-btn\"\r\n                  type=\"input\"\r\n                  (click)=\"loginService()\"\r\n                >\r\n                  Iniciar Sesión\r\n                </button>\r\n                <span\r\n                  id=\"button-message\"\r\n                  class=\"form-main-input-error text-center\"\r\n                >\r\n                </span>\r\n              </div>\r\n            </form>\r\n            <p class=\"form-main-footer\">\r\n              No tengo cuenta?\r\n              <a [routerLink]=\"['/registro']\" class=\"text-link\"\r\n                >Registrarme aquí</a\r\n              >\r\n            </p>\r\n            <a\r\n              class=\"form-main-terms text-link\"\r\n              target=\"_blank\"\r\n              href=\"https://drive.google.com/file/d/1MHvTB9t3uQervfF1MYtHC_3nA8oyllcA/view?usp=sharing\"\r\n              >Términos y condiciones</a\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n");

/***/ }),

/***/ "./src/app/login/components/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/login/components/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/login/components/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/components/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _utils_services_location_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/services/location/location.service */ "./src/app/utils/services/location/location.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, _location, spinnnerService) {
        this.http = http;
        this.router = router;
        this._location = _location;
        this.spinnnerService = spinnnerService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._location.getLocationService().then(function (resp) {
            _this.lng = resp.lng;
            _this.lat = resp.lat;
        });
    };
    LoginComponent.prototype.loginService = function () {
        var _this = this;
        this.emailInput = document.querySelector("#email");
        this.passInput = document.querySelector("#password");
        this.buttonSpan = document.querySelector("#button-message");
        localStorage.setItem("correo-chido", this.mail);
        if (!this.mail || !this.pass) {
            this.buttonSpan.textContent =
                "Por favor complete los campos de correo y contraseña";
            this.emailInput.classList.add("error");
            this.passInput.classList.add("error");
        }
        else {
            this.emailInput.classList.remove("error");
            this.passInput.classList.remove("error");
            this.buttonSpan.textContent = "";
            this.spinnnerService.show();
            var data = JSON.stringify({ email: this.mail, pass: this.pass });
            this.http
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_api + "/usuario/login", data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Credentials": "true",
                    "Access-Control-Allow-Origin": "http://localhost:4200/*",
                },
            })
                .subscribe(function (result) {
                var success = result.success, message = result.message, data = result.data;
                if (success) {
                    localStorage.setItem("auth", JSON.stringify(data[0]));
                    _this.spinnnerService.hide();
                    var currentUser = JSON.parse(localStorage.getItem("auth"));
                    if (currentUser.tipo == 1) {
                        _this.router.navigate(["/registro-envio"]);
                    }
                    else if (currentUser.tipo == 2) {
                        _this.router.navigate(["/envios"]);
                    }
                    else if (currentUser.tipo == 3) {
                        _this.router.navigate(["/entregas-motorizado"]);
                    }
                }
                else if (message.toLowerCase() === "correo invalido") {
                    _this.spinnnerService.hide();
                    _this.buttonSpan.textContent =
                        "El correo o la contraseña son incorrectos. Por favor inténtelo de nuevo";
                    _this.emailInput.classList.add("error");
                    _this.passInput.classList.add("error");
                }
                else if (message.toLowerCase() === "su correo falta activar") {
                    _this.spinnnerService.hide();
                    _this.router.navigate(["/validar"], {
                        queryParams: { emailValidar: _this.mail },
                    });
                }
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _utils_services_location_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], LoginComponent.prototype, "mail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], LoginComponent.prototype, "pass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Float32Array)
    ], LoginComponent.prototype, "lng", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Float32Array)
    ], LoginComponent.prototype, "lat", void 0);
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-login",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/components/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/login/components/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _utils_services_location_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login.component */ "./src/app/login/components/login.component.ts");



// Components

var routes = [
    {
        path: "",
        component: _components_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login.component */ "./src/app/login/components/login.component.ts");






// Components

var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map