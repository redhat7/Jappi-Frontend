(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["motorizado-motorizado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/entregas/entregas.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/entregas/entregas.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">Cargando ...</p>\r\n</ngx-spinner>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body d-flex align-items-center\">\r\n        <select\r\n          class=\"form-select form-main-select col-md-3 mr-2\"\r\n          id=\"entrega\"\r\n          style=\"display: block\"\r\n          (change)=\"selectSpinner($event.target.value)\"\r\n        >\r\n          <option [value]=\"o.id\" *ngFor=\"let o of spinner\">\r\n            {{ o.descripcion }}\r\n          </option>\r\n        </select>\r\n        <input\r\n          type=\"text\"\r\n          name=\"search\"\r\n          id=\"search\"\r\n          class=\"form-control form-main-input col-md-3 mr-2\"\r\n          [(ngModel)]=\"searchTxt\"\r\n          placeholder=\"Buscar\"\r\n        />\r\n        <button\r\n          class=\"btn btn-green\"\r\n          id=\"btn-search-date\"\r\n          (click)=\"filterList()\"\r\n        >\r\n          Filtrar\r\n        </button>\r\n      </div>\r\n      <div class=\"card-header\">\r\n        <h2 class=\"card-title\">Lista de entregas</h2>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div *ngIf=\"data.length !== 0\" class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead class=\"text-primary\">\r\n              <th scope=\"col\"></th>\r\n              <th scope=\"col\">Vendedor</th>\r\n              <th scope=\"col\">Producto</th>\r\n              <th scope=\"col\">Cantidad</th>\r\n              <th scope=\"col\">Comprador</th>\r\n              <th scope=\"col\">Telefono</th>\r\n              <th scope=\"col\">Direccion</th>\r\n              <th scope=\"col\">Distrito</th>\r\n              <th class=\"size\">Monto Total</th>\r\n              <th class=\"size\">Método de pago</th>\r\n              <th scope=\"col\">Observaciones</th>\r\n              <th class=\"size\">Modo de Entrega</th>\r\n              <th class=\"size\">Estado</th>\r\n              <th scope=\"col\">Opciones</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let envio of data; index as i\">\r\n                <th>{{ i + 1 }}</th>\r\n                <td>{{ envio.vendedor }}  </td>\r\n                <td>{{ envio.descripcion }}</td>\r\n                <td>{{ envio.cantidad }}</td>\r\n                <td>{{ envio.comprador }}</td>\r\n                <td>{{ envio.telefono }}</td>\r\n                <td>\r\n                  <a\r\n                    href=\"{{ envio.url }}\"\r\n                    class=\"table-link\"\r\n                    target=\"_blank\"\r\n                    *ngIf=\"envio.check\"\r\n                  >\r\n                    {{ envio.direccion }}\r\n                  </a>\r\n                  <span *ngIf=\"!envio.check\"> {{ envio.direccion }} </span>\r\n                </td>\r\n                <td>{{ envio.nombre_distrito}}</td>\r\n                <td>{{ envio.monto_total | currency: \"S/\" }}</td>\r\n                <td>{{ envio.metodo_pago || \"No tiene\" }}</td>\r\n                <td>{{ envio.observacion || \"No tiene\" }}</td>\r\n                <td>{{ envio.modo_entrega }}</td>\r\n                <td>{{ envio.nombre_estado }}</td>\r\n                <td>\r\n                  <div class=\"w-10\">\r\n                 \r\n                  <button\r\n                    class=\"btn btn-yellow mr-1\"\r\n                    (click)=\"pendiente(envio)\"\r\n                  >\r\n                    Observado\r\n                  </button>\r\n                  <button\r\n                  class=\"btn btn-green tmax mr-1\"\r\n                  (click)=\"Enruta(envio)\"\r\n                >En Ruta</button>\r\n                  <button\r\n                    class=\"btn btn-info\"\r\n                    (click)=\"Entregado(envio)\"\r\n                  >\r\n                    Entregado\r\n                  </button>\r\n                </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div *ngIf=\"data.length === 0\">\r\n          <p>No tienes entregas programadas</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">Cargando ...</p>\r\n</ngx-spinner>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body d-flex align-items-center\">\r\n        <input\r\n          id=\"date-start\"\r\n          type=\"date\"\r\n          class=\"form-control form-main-input col-md-3 mr-2\"\r\n          placeholder=\"dd/mm/yyyy\"\r\n        />\r\n        <input\r\n          id=\"date-end\"\r\n          type=\"date\"\r\n          class=\"form-control form-main-input col-md-3 mr-2\"\r\n          placeholder=\"dd/mm/yyyy\"\r\n        />\r\n        <button\r\n          class=\"btn btn-green\"\r\n          id=\"btn-search-date\"\r\n          (click)=\"searchByDate($event)\"\r\n        >\r\n          Consultar\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body d-flex align-items-center\">\r\n        <select\r\n          class=\"form-select form-main-select col-md-3 mr-2\"\r\n          id=\"entrega\"\r\n          style=\"display: block\"\r\n          (change)=\"selectSpinner($event.target.value)\"\r\n        >\r\n          <option [value]=\"o.id\" *ngFor=\"let o of spinner\">\r\n            {{ o.descripcion }}\r\n          </option>\r\n        </select>\r\n        <input\r\n          type=\"text\"\r\n          name=\"search\"\r\n          id=\"search\"\r\n          class=\"form-control form-main-input col-md-3 mr-2\"\r\n          [(ngModel)]=\"searchTxt\"\r\n          placeholder=\"Buscar\"\r\n        />\r\n        <button\r\n          class=\"btn btn-green\"\r\n          id=\"btn-search-date\"\r\n          (click)=\"filterList()\"\r\n        >\r\n          Filtrar\r\n        </button>\r\n      </div>\r\n      <div class=\"card-header\">\r\n        <h2 class=\"card-title\">Envios por Fechas</h2>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead class=\"table-head\">\r\n              <th scope=\"col\">N°</th>\r\n              <th scope=\"col\">Empresa</th>\r\n              <th scope=\"col\">Direccion</th>\r\n              <th scope=\"col\">Cantidad</th>\r\n              <th scope=\"col\">Estado</th>\r\n              <th scope=\"col\">Fecha</th>\r\n              <th scope=\"col\">Distrito</th>\r\n              <th scope=\"col\">Producto</th>\r\n              \r\n             \r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let envio of data; index as i\">\r\n                <th>{{ i + 1 }}</th>\r\n                <td>{{ envio.nomempresa }}</td>\r\n                <td>{{ envio.direccion }}</td>\r\n                <td>{{ envio.cantidad }}</td>\r\n                <td>{{ envio.estado }}</td>\r\n                <td>{{ envio.fecha_entrega }}</td>\r\n                <td>{{ envio.nombre_distrito }}</td>\r\n                <td>{{ envio.descripcion }}</td>\r\n                \r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/historial/historial.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/historial/historial.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">Cargando ...</p>\r\n</ngx-spinner>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body d-flex align-items-center\">\r\n        <input\r\n          id=\"date-start\"\r\n          type=\"date\"\r\n          class=\"form-control form-main-input col-md-3 mr-2\"\r\n          [(ngModel)]=\"dateFilter\"\r\n          placeholder=\"dd/mm/yyyy\"\r\n        />\r\n        <input\r\n          id=\"date-end\"\r\n          type=\"date\"\r\n          class=\"form-control form-main-input col-md-3 mr-2\"\r\n          [(ngModel)]=\"dateFilter2\"\r\n          placeholder=\"dd/mm/yyyy\"\r\n        />\r\n        <button\r\n          class=\"btn btn-green\"\r\n          id=\"btn-search-date\"\r\n          (click)=\"searchByDate()\"\r\n        >\r\n          Consultar\r\n        </button>\r\n      </div>\r\n      <div class=\"card-header\">\r\n        <h2 class=\"card-title\">Historial</h2>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div *ngIf=\"data.length !== 0\" class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead class=\"text-primary\">\r\n              <th scope=\"col\"></th>\r\n              <th scope=\"col\">Vendedor</th>\r\n              <th scope=\"col\">Producto</th>\r\n              <th scope=\"col\">Cantidad</th>\r\n              <th scope=\"col\">Comprador</th>\r\n              <th scope=\"col\">Telefono</th>\r\n              <th scope=\"col\">Direccion</th>\r\n              <th scope=\"col\">Distrito</th>\r\n              <th scope=\"col\">Monto Total</th>\r\n              <th class=\"size\">Fecha de Entrega</th>\r\n              <th class=\"size\">Método de pago</th>\r\n              <th scope=\"col\">Observaciones</th>\r\n              <th class=\"size\">Modo de Entrega</th>\r\n              <th class=\"size\">Estado</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let envio of data; index as i\">\r\n                <th>{{ i + 1 }}</th>\r\n                <td>{{ envio.vendedor }}</td>\r\n                <td>{{ envio.descripcion }}</td>\r\n                <td>{{ envio.cantidad }}</td>\r\n                <td>{{ envio.comprador }}</td>\r\n                <td>{{ envio.telefono }}</td>\r\n                <td>\r\n                  <a\r\n                    href=\"{{ envio.url }}\"\r\n                    class=\"table-link\"\r\n                    target=\"_blank\"\r\n                    *ngIf=\"envio.check\"\r\n                  >\r\n                    {{ envio.direccion }}\r\n                  </a>\r\n                  <span *ngIf=\"!envio.check\"> {{ envio.direccion }} </span>\r\n                </td>\r\n                <td>{{ envio.nombre_distrito }}</td>\r\n                <td>{{ envio.monto_total | currency: \"S/\" }}</td>\r\n                <td>{{ envio.fecha_entrega }}</td>\r\n                <td>{{ envio.metodo_pago || \"No tiene\" }}</td>\r\n                <td>{{ envio.observacion || \"No tiene\" }}</td>\r\n                <td>{{ envio.modo_entrega }}</td>\r\n                <td>{{ envio.nombre_estado }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div *ngIf=\"data.length === 0\">\r\n          <p>No tienes entregas programadas</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/layout/layout.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/layout/layout.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"sidebar\" data-color=\"red\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n  <div class=\"main-panel\">\r\n    <app-navbar></app-navbar>\r\n    <div class=\"panel-header panel-header-sm\"></div>\r\n    <div class=\"main-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/recojos/recojos.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/recojos/recojos.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">Cargando ...</p>\r\n</ngx-spinner>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"d-flex cabeza\">\r\n      <div class=\"card-body d-flex align-items-center col-md-8\">\r\n        <select\r\n          class=\"form-select form-main-select col-md-3 mr-2\"\r\n          id=\"entrega\"\r\n          style=\"display: block\"\r\n          (change)=\"selectSpinner($event.target.value)\"\r\n        >\r\n          <option [value]=\"o.id\" *ngFor=\"let o of spinner\">\r\n            {{ o.descripcion }}\r\n          </option>\r\n        </select>\r\n        <input\r\n          type=\"text\"\r\n          name=\"search\"\r\n          id=\"search\"\r\n          class=\"form-control form-main-input col-md-3 mr-2\"\r\n          [(ngModel)]=\"searchTxt\"\r\n          placeholder=\"Buscar\"\r\n        />\r\n        <button\r\n          class=\"btn btn-green\"\r\n          id=\"btn-search-date\"\r\n          (click)=\"filterList()\"\r\n        >\r\n          Filtrar\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-4 empresas\">\r\n        <h3>Empresas</h3>\r\n      <div *ngFor=\"let envio of arr; index as i\" >\r\n        <li> {{envio}}</li>\r\n      </div>\r\n    </div>\r\n      </div>\r\n      <div class=\"card-header\">\r\n        <h2 class=\"card-title\">Lista de recojos</h2>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div *ngIf=\"data.length !== 0\" class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead class=\"text-primary\">\r\n              <th scope=\"col\"></th>\r\n              <th scope=\"col\">Nombre de la Empresa </th>\r\n              <th scope=\"col\">Vendedor</th>\r\n              <th scope=\"col\">Cantidad</th>\r\n              <th scope=\"col\">Comprador</th>\r\n              <th scope=\"col\">Dirección</th>\r\n              <th scope=\"col\">Distrito</th>\r\n              <th scope=\"col\">Telefono</th>\r\n              <th scope=\"col\">Estado</th>\r\n              <th scope=\"col\">Opciones</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let envio of data; index as i\">\r\n                <th>{{ i + 1 }}</th>\r\n                <td>{{ envio.nombre_empresa }}</td>\r\n                <td>{{ envio.cliente }}</td>\r\n                <td>{{ envio.cantidad }}</td>\r\n                <td>{{ envio.comprador }}</td>\r\n                <td>\r\n                  <a\r\n                    href=\"{{ envio.url }}\"\r\n                    class=\"table-link\"\r\n                    target=\"_blank\"\r\n                    *ngIf=\"envio.check\"\r\n                  >\r\n                    {{ envio.direccion }}\r\n                  </a>\r\n                  <span *ngIf=\"!envio.check\"> {{ envio.direccion }} </span>\r\n                </td>\r\n                <td>{{ envio.nombre_distrito}}</td>\r\n                <td>{{ envio.telefono }}</td>\r\n                <td>{{ envio.nombre_estado }}</td>\r\n                <td>\r\n                 <div class=\"botones\">\r\n                <button\r\n                  class=\"btn btn-info mr-1\"\r\n                  (click)=\"Entregado(envio)\"\r\n                >\r\n                  Recogido\r\n                </button>\r\n                <button\r\n                  class=\"btn btn-green botoncito mr-1\"\r\n                  (click)=\"Enruta(envio)\"\r\n                >\r\n                  En Ruta\r\n                </button>\r\n                <button\r\n                class=\"btn btn-danger\"\r\n                (click)=\"caida(envio)\"\r\n              >\r\n                Caida\r\n              </button>\r\n            </div>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div *ngIf=\"data.length === 0\">\r\n          <p>No tienes recojos programados</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/motorizado/components/entregas/entregas.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/motorizado/components/entregas/entregas.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".w-10 {\n  display: flex;\n}\n\n.tmax {\n  width: 7rem;\n}\n\nthead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background-color: #ffffff;\n}\n\n.table-responsive {\n  height: 600px;\n  overflow: scroll;\n}\n\n.size {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2VudHJlZ2FzL0M6XFxVc2Vyc1xcTFVJU1xcRXNjcml0b3Jpb1xcSmFwaUV4cHJlc3Mvc3JjXFxhcHBcXG1vdG9yaXphZG9cXGNvbXBvbmVudHNcXGVudHJlZ2FzXFxlbnRyZWdhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2VudHJlZ2FzL2VudHJlZ2FzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtBQ0FKOztBREdBO0VBRUksV0FBQTtBQ0RKOztBREdBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vdG9yaXphZG8vY29tcG9uZW50cy9lbnRyZWdhcy9lbnRyZWdhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53LTEwe1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG59XHJcbi50bWF4e1xyXG4gICAgXHJcbiAgICB3aWR0aDogN3JlbTtcclxufVxyXG50aGVhZCAgdGggeyBcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHsgXHJcbiAgICBoZWlnaHQ6NjAwcHg7XHJcbiAgICBvdmVyZmxvdzpzY3JvbGw7XHJcbn1cclxuLnNpemV7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG59IiwiLnctMTAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udG1heCB7XG4gIHdpZHRoOiA3cmVtO1xufVxuXG50aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNpemUge1xuICBtaW4td2lkdGg6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/motorizado/components/entregas/entregas.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/motorizado/components/entregas/entregas.component.ts ***!
  \**********************************************************************/
/*! exports provided: EntregasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasComponent", function() { return EntregasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_components_modal_entrega_moto_modal_entrega_moto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/modal-entrega-moto/modal-entrega-moto.component */ "./src/app/shared/components/modal-entrega-moto/modal-entrega-moto.component.ts");
/* harmony import */ var _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/services/form/form.service */ "./src/app/utils/services/form/form.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");








var EntregasComponent = /** @class */ (function () {
    function EntregasComponent(http, dialog, formService, spinnerService) {
        this.http = http;
        this.dialog = dialog;
        this.formService = formService;
        this.spinnerService = spinnerService;
        this.data = [];
        this.spinner = [
            { descripcion: "--- Elige un campo ---", id: "" },
            { descripcion: "Nombre del Vendedor", id: "vendedor" },
            { descripcion: "Nombre del Comprador", id: "comprador" },
            { descripcion: "Distrito", id: "nombre_distrito" },
            { descripcion: "Telefono", id: "telefono" },
        ];
    }
    EntregasComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem("auth"));
        this.token = currentUser.token;
        this.estadoEntrega = this.formService.getEstadoEntrega();
        this.estadoEntregaModal = this.formService.getEstadoEntregaModal();
        this.getData(this.token);
    };
    EntregasComponent.prototype.selectSpinner = function (value) {
        this.valorSpinner = value;
        console.log(this.valorSpinner);
    };
    EntregasComponent.prototype.filterList = function () {
        this.data = [];
        for (var _i = 0, _a = this.datos; _i < _a.length; _i++) {
            var element = _a[_i];
            ("use strict");
            var varia = element[this.valorSpinner];
            console.log(this.searchTxt);
            console.log(varia);
            if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
                this.data.push(element);
            }
        }
    };
    EntregasComponent.prototype.dateToString = function (currentDate) {
        var _a = currentDate.split("/"), date = _a[0], month = _a[1], year = _a[2];
        var trasnformDate = this.trasnformDate(date);
        var trasnforMonth = this.trasnformDate(month);
        return trasnformDate + "-" + trasnforMonth + "-" + year;
    };
    EntregasComponent.prototype.trasnformDate = function (date) {
        return date.length === 1 ? "0" + date : date;
    };
    EntregasComponent.prototype.getData = function (token) {
        var _this = this;
        this.fecha = this.dateToString(new Date().toLocaleDateString());
        console.log(this.fecha);
        this.spinnerService.show();
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url_api + "/motorizado/MisEntregas", 
        // "https://backend-japi.herokuapp.com/motorizado/MisEntregas",
        { token: token, fecha: this.fecha }, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
            },
        })
            .subscribe(function (_a) {
            var success = _a.success, data = _a.data;
            var dataFormat = data.map(function (entrega) {
                var estado = _this.estadoEntrega.find(function (estado) { return estado.value === entrega.estado; }).estado;
                var urlCheck = false;
                if (Number(entrega.latitud) != 0 && Number(entrega.longitud) != 0) {
                    urlCheck = true;
                    var latitud = entrega.latitud;
                    var longitud = entrega.longitud;
                    var urlLocation = "https://www.google.com/maps?q=" + latitud + "," + longitud + "&z=17&hl=es";
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entrega), { nombre_estado: estado, url: urlLocation, check: urlCheck });
                }
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entrega), { nombre_estado: estado, check: urlCheck });
            });
            if (success) {
                _this.data = dataFormat;
                _this.datos = dataFormat;
            }
            else {
                console.log("Error al traer las entregas del día");
            }
            _this.spinnerService.hide();
        });
    };
    EntregasComponent.prototype.pendiente = function (_a) {
        var _this = this;
        var id_envio = _a.id_envio;
        var data = {
            token: this.token,
            id_envio: id_envio,
            estado: 7,
        };
        console.log(data);
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url_api + "/motorizado/UpdateEntrega", 
        // "https://backend-japi.herokuapp.com/motorizado/UpdateEntrega",
        data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
            },
        })
            .subscribe(function (result) {
            if (result.success) {
                _this.getData(_this.token);
            }
            else {
                console.log("Error al actualizar");
            }
        });
    };
    EntregasComponent.prototype.Enruta = function (_a) {
        var _this = this;
        var id_envio = _a.id_envio;
        var data = {
            token: this.token,
            id_envio: id_envio,
            estado: 2,
        };
        console.log(data);
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url_api + "/motorizado/UpdateEntrega", 
        // "https://backend-japi.herokuapp.com/motorizado/UpdateEntrega",
        data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
            },
        })
            .subscribe(function (result) {
            if (result.success) {
                _this.getData(_this.token);
            }
            else {
                console.log("Error al actualizar");
            }
        });
    };
    EntregasComponent.prototype.Entregado = function (_a) {
        var _this = this;
        var id_envio = _a.id_envio;
        var data = {
            token: this.token,
            id_envio: id_envio,
            estado: 3,
        };
        console.log(data);
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url_api + "/motorizado/UpdateEntrega", 
        // "https://backend-japi.herokuapp.com/motorizado/UpdateEntrega",
        data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
            },
        })
            .subscribe(function (result) {
            if (result.success) {
                _this.getData(_this.token);
            }
            else {
                console.log("Error al actualizar");
            }
        });
    };
    EntregasComponent.prototype.clickModalEdit = function (_a) {
        var id_envio = _a.id_envio;
        var param = {
            token: this.token,
            idEnvio: id_envio,
            estados: this.estadoEntregaModal,
            title: "Actualizar estado",
        };
        this.openModalEdit(param);
    };
    EntregasComponent.prototype.openModalEdit = function (_a) {
        var _this = this;
        var token = _a.token, idEnvio = _a.idEnvio, estados = _a.estados, title = _a.title;
        var modalRef = this.dialog.open(_shared_components_modal_entrega_moto_modal_entrega_moto_component__WEBPACK_IMPORTED_MODULE_5__["ModalEntregaMotoComponent"], {
            data: {
                token: token,
                idEnvio: idEnvio,
                estados: estados,
                title: title,
            },
            minWidth: "400px",
        });
        modalRef.afterClosed().subscribe(function (result) {
            result
                ? _this.getData(_this.token)
                : console.log("Error al actualizar el estado de las entregas");
        });
    };
    EntregasComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_6__["FormService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], EntregasComponent.prototype, "valorSpinner", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EntregasComponent.prototype, "spinner", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], EntregasComponent.prototype, "searchTxt", void 0);
    EntregasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-entregas",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entregas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/entregas/entregas.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./entregas.component.scss */ "./src/app/motorizado/components/entregas/entregas.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_6__["FormService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], EntregasComponent);
    return EntregasComponent;
}());



/***/ }),

/***/ "./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead  th { \r\n    position: -webkit-sticky; \r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 10;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.table-responsive { \r\n    height:600px;\r\n    overflow:scroll;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2hpc3RvcmlhbC1tb3RvLXJlY29qb3MvaGlzdG9yaWFsLW1vdG8tcmVjb2pvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2hpc3RvcmlhbC1tb3RvLXJlY29qb3MvaGlzdG9yaWFsLW1vdG8tcmVjb2pvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWQgIHRoIHsgXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7IFxyXG4gICAgaGVpZ2h0OjYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: HistorialMotoRecojosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialMotoRecojosComponent", function() { return HistorialMotoRecojosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/services/form/form.service */ "./src/app/utils/services/form/form.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var HistorialMotoRecojosComponent = /** @class */ (function () {
    function HistorialMotoRecojosComponent(http, formService, spinnerService) {
        this.http = http;
        this.formService = formService;
        this.spinnerService = spinnerService;
        this.spinner = [
            { descripcion: "--- Elige un campo ---", id: "" },
            { descripcion: "Empresa", id: "nomempresa" },
            { descripcion: "Fecha", id: "fecha_entrega" },
            { descripcion: "Distrito", id: "nombre_distrito" },
            { descripcion: "Descripcion del producto", id: "descripcion" },
        ];
    }
    HistorialMotoRecojosComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem("auth"));
        var currentDate = this.convertNewDateToString();
        this.token = currentUser.token;
        this.distritos = this.formService.getDistritos();
        this.estadoRecojo = this.formService.getEstadoRecojo();
        this.getDataByDate(this.token, currentDate, currentDate);
    };
    HistorialMotoRecojosComponent.prototype.selectSpinner = function (value) {
        this.valorSpinner = value;
        console.log(this.valorSpinner);
    };
    HistorialMotoRecojosComponent.prototype.filterList = function () {
        this.data = [];
        for (var _i = 0, _a = this.datos; _i < _a.length; _i++) {
            var element = _a[_i];
            ("use strict");
            var varia = element[this.valorSpinner];
            if (varia != null) {
                if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
                    this.data.push(element);
                }
            }
        }
    };
    HistorialMotoRecojosComponent.prototype.searchByDate = function (evt) {
        var inputStart = document.querySelector("#date-start");
        var inputEnd = document.querySelector("#date-end");
        this.validateNavigator(inputStart.value, inputEnd.value);
    };
    HistorialMotoRecojosComponent.prototype.validateNavigator = function (dateStart, dateEnd) {
        var navigatorVendor = window.navigator.vendor;
        var start = "";
        var end = "";
        if (navigatorVendor.toLowerCase().includes("apple")) {
            start = this.convertDateToString(dateStart, "apple");
            end = this.convertDateToString(dateEnd, "apple");
        }
        else {
            start = this.convertDateToString(dateStart, "google");
            end = this.convertDateToString(dateEnd, "google");
        }
        this.getDataByDate(this.token, start, end);
    };
    HistorialMotoRecojosComponent.prototype.convertNewDateToString = function () {
        var currentDate = new Date().toLocaleDateString();
        var _a = currentDate.split("/"), date = _a[0], month = _a[1], year = _a[2];
        var trasnformDate = this.trasnformDate(date);
        var trasnforMonth = this.trasnformDate(month);
        return trasnformDate + "-" + trasnforMonth + "-" + year;
    };
    HistorialMotoRecojosComponent.prototype.trasnformDate = function (date) {
        return date.length === 1 ? "0" + date : date;
    };
    HistorialMotoRecojosComponent.prototype.convertDateToString = function (date, sys) {
        if (sys.toLowerCase() === "apple") {
            return date.replace(/[/]/g, "-");
        }
        else {
            return date.split("-")[2] + "-" + date.split("-")[1] + "-" + date.split("-")[0];
        }
    };
    HistorialMotoRecojosComponent.prototype.getDataByDate = function (token, date1, date2) {
        var _this = this;
        console.log({ token: token, fecha1: date1, fecha2: date2 });
        this.spinnerService.show();
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_api + "/motorizado/HistorialRecojosMoto", 
        // "https://backend-japi.herokuapp.com/motorizado/HistorialRecojosMoto",
        { token: token, fecha1: date1, fecha2: date2 }, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "http://localhost:4200/*",
            },
        })
            .subscribe(function (result) {
            console.log(result);
            if (result.success) {
                var dataFormat = result.data.map(function (distritoData) {
                    var estado = _this.estadoRecojo.find(function (estado) { return estado.value === distritoData.estado; }).estado;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, distritoData), { nombre_estado: estado });
                });
                _this.data = dataFormat;
                _this.datos = dataFormat;
            }
            else {
                console.log("error");
            }
            _this.spinnerService.hide();
        });
    };
    HistorialMotoRecojosComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], HistorialMotoRecojosComponent.prototype, "valorSpinner", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], HistorialMotoRecojosComponent.prototype, "spinner", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], HistorialMotoRecojosComponent.prototype, "searchTxt", void 0);
    HistorialMotoRecojosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-historial-moto-recojos',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./historial-moto-recojos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./historial-moto-recojos.component.css */ "./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], HistorialMotoRecojosComponent);
    return HistorialMotoRecojosComponent;
}());



/***/ }),

/***/ "./src/app/motorizado/components/historial/historial.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/motorizado/components/historial/historial.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background-color: #ffffff;\n}\n\n.table-responsive {\n  height: 600px;\n  overflow: scroll;\n}\n\n.size {\n  min-width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2hpc3RvcmlhbC9DOlxcVXNlcnNcXExVSVNcXEVzY3JpdG9yaW9cXEphcGlFeHByZXNzL3NyY1xcYXBwXFxtb3Rvcml6YWRvXFxjb21wb25lbnRzXFxoaXN0b3JpYWxcXGhpc3RvcmlhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2hpc3RvcmlhbC9oaXN0b3JpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2hpc3RvcmlhbC9oaXN0b3JpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZCAgdGggeyBcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHsgXHJcbiAgICBoZWlnaHQ6NjAwcHg7XHJcbiAgICBvdmVyZmxvdzpzY3JvbGw7XHJcbn1cclxuLnNpemV7XHJcbiAgICBtaW4td2lkdGg6IDExMHB4O1xyXG59IiwidGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIGhlaWdodDogNjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zaXplIHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/motorizado/components/historial/historial.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/motorizado/components/historial/historial.component.ts ***!
  \************************************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/services/form/form.service */ "./src/app/utils/services/form/form.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");







var HistorialComponent = /** @class */ (function () {
    function HistorialComponent(http, dialog, formService, spinnerService) {
        this.http = http;
        this.dialog = dialog;
        this.formService = formService;
        this.spinnerService = spinnerService;
        this.data = [];
        this.dataFilter = [];
    }
    HistorialComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem("auth"));
        this.token = currentUser.token;
        this.estadoEntrega = this.formService.getEstadoEntrega();
        this.estadoEntregaModal = this.formService.getEstadoEntregaModal();
        this.getData(this.token);
    };
    HistorialComponent.prototype.searchByDate = function () {
        if (this.dateFilter) {
            var startDate = this.validateNavigator(this.dateFilter)[0];
            var endDate = this.validateNavigator(this.dateFilter2)[0];
            console.log(startDate);
            console.log(endDate);
            var fechaInicial = new Date(startDate.split("-")[1] + "-" + startDate.split("-")[0] + "-" + startDate.split("-")[2]);
            var fechaFinal = new Date(endDate.split("-")[1] + "-" + endDate.split("-")[0] + "-" + endDate.split("-")[2]);
            this.filterListByDate(fechaInicial, fechaFinal);
        }
    };
    HistorialComponent.prototype.filterListByDate = function (date, endDate) {
        var _this = this;
        this.data = [];
        this.dataFilter.forEach(function (envio) {
            var fechaEntrega = envio.fecha_entrega;
            var fechaProducto = new Date(fechaEntrega.split("-")[1] + "-" + fechaEntrega.split("-")[0] + "-" + fechaEntrega.split("-")[2]);
            console.log(fechaProducto);
            if (fechaProducto >= date && fechaProducto <= endDate) {
                _this.data.push(envio);
            }
        });
    };
    HistorialComponent.prototype.validateNavigator = function (dateStart, dateEnd) {
        if (dateEnd === void 0) { dateEnd = ""; }
        var navigatorVendor = window.navigator.vendor;
        var start = "";
        var end = "";
        if (dateEnd) {
            if (navigatorVendor.toLowerCase().includes("apple")) {
                start = this.convertDateToString(dateStart, "apple");
                end = this.convertDateToString(dateEnd, "apple");
            }
            else {
                start = this.convertDateToString(dateStart, "google");
                end = this.convertDateToString(dateEnd, "google");
            }
        }
        else {
            if (navigatorVendor.toLowerCase().includes("apple")) {
                start = this.convertDateToString(dateStart, "apple");
            }
            else {
                start = this.convertDateToString(dateStart, "google");
            }
        }
        return [start, end];
    };
    HistorialComponent.prototype.convertDateToString = function (date, sys) {
        if (sys.toLowerCase() === "apple") {
            return date.replace(/[/]/g, "-");
        }
        else {
            return date.split("-")[2] + "-" + date.split("-")[1] + "-" + date.split("-")[0];
        }
    };
    HistorialComponent.prototype.getData = function (token) {
        var _this = this;
        this.spinnerService.show();
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url_api + "/motorizado/historialEntregas", 
        // "https://backend-japi.herokuapp.com/motorizado/historialEntregas",
        { token: token }, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
            },
        })
            .subscribe(function (_a) {
            var success = _a.success, data = _a.data;
            if (success) {
                var dataFormat = data.map(function (entrega) {
                    var estado = _this.estadoEntrega.find(function (estado) { return estado.value === entrega.estado; }).estado;
                    var urlCheck = false;
                    if (Number(entrega.latitud) != 0 && Number(entrega.longitud) != 0) {
                        urlCheck = true;
                        var latitud = entrega.latitud;
                        var longitud = entrega.longitud;
                        var urlLocation = "https://www.google.com/maps?q=" + latitud + "," + longitud + "&z=17&hl=es";
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entrega), { nombre_estado: estado, url: urlLocation, check: urlCheck });
                    }
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entrega), { nombre_estado: estado, check: urlCheck });
                });
                _this.data = dataFormat;
                _this.dataFilter = dataFormat;
                console.log(_this.dataFilter);
            }
            else {
                console.log("Error al traer el historial del motorizado");
            }
            _this.spinnerService.hide();
        });
    };
    HistorialComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], HistorialComponent.prototype, "dateFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], HistorialComponent.prototype, "dateFilter2", void 0);
    HistorialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-historial",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./historial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/historial/historial.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./historial.component.scss */ "./src/app/motorizado/components/historial/historial.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], HistorialComponent);
    return HistorialComponent;
}());



/***/ }),

/***/ "./src/app/motorizado/components/layout/layout.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/motorizado/components/layout/layout.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-content {\n  min-height: calc(100vh - 10.875rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2xheW91dC9DOlxcVXNlcnNcXExVSVNcXEVzY3JpdG9yaW9cXEphcGlFeHByZXNzL3NyY1xcYXBwXFxtb3Rvcml6YWRvXFxjb21wb25lbnRzXFxsYXlvdXRcXGxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUbyBmaXggc29tZSBlbGVtZW50c1xyXG4ubWFpbi1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAuODc1cmVtKTtcclxufVxyXG4iLCIubWFpbi1jb250ZW50IHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwLjg3NXJlbSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/motorizado/components/layout/layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/motorizado/components/layout/layout.component.ts ***!
  \******************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/layout/layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./layout.component.scss */ "./src/app/motorizado/components/layout/layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/motorizado/components/recojos/recojos.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/motorizado/components/recojos/recojos.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".empresas {\n  padding-top: 15px;\n}\n\n.botones {\n  display: flex;\n}\n\n.botoncito {\n  width: 7rem;\n}\n\n@media (max-width: 600px) {\n  .cabeza {\n    flex-direction: column;\n  }\n}\n\nthead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background-color: #ffffff;\n}\n\n.table-responsive {\n  height: 600px;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL3JlY29qb3MvQzpcXFVzZXJzXFxMVUlTXFxFc2NyaXRvcmlvXFxKYXBpRXhwcmVzcy9zcmNcXGFwcFxcbW90b3JpemFkb1xcY29tcG9uZW50c1xccmVjb2pvc1xccmVjb2pvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW90b3JpemFkby9jb21wb25lbnRzL3JlY29qb3MvcmVjb2pvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0FDR0o7O0FEQUE7RUFDRTtJQUNJLHNCQUFBO0VDR0o7QUFDRjs7QURBRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vdG9yaXphZG8vY29tcG9uZW50cy9yZWNvam9zL3JlY29qb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wcmVzYXN7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4uYm90b25lc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJvdG9uY2l0b3tcclxuICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNhYmV6YXtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgfVxyXG5cclxuICB0aGVhZCAgdGggeyBcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHsgXHJcbiAgICBoZWlnaHQ6NjAwcHg7XHJcbiAgICBvdmVyZmxvdzpzY3JvbGw7XHJcbn0iLCIuZW1wcmVzYXMge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmJvdG9uZXMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm90b25jaXRvIHtcbiAgd2lkdGg6IDdyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FiZXphIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG50aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/motorizado/components/recojos/recojos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/motorizado/components/recojos/recojos.component.ts ***!
  \********************************************************************/
/*! exports provided: RecojosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecojosComponent", function() { return RecojosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/services/form/form.service */ "./src/app/utils/services/form/form.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");







var RecojosComponent = /** @class */ (function () {
    function RecojosComponent(http, dialog, formService, spinnerService) {
        this.http = http;
        this.dialog = dialog;
        this.formService = formService;
        this.spinnerService = spinnerService;
        this.data = [];
        this.datos = [];
        this.arr = [];
        this.spinner = [
            { descripcion: "--- Elige un campo ---", id: "" },
            { descripcion: "Empresa", id: "nombre_empresa" },
            { descripcion: "Dueño de Empresa", id: "cliente" },
            { descripcion: "Distrito", id: "nombre_distrito" },
            { descripcion: "Estado", id: "nombre_estado" },
            { descripcion: "Telefono", id: "telefono" },
        ];
    }
    RecojosComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem("auth"));
        this.token = currentUser.token;
        this.estadoRecojo = this.formService.getEstadoRecojo();
        this.estadoRecojoModal = this.formService.getEstadoRecojoModal();
        this.distritos = this.formService.getDistritos();
        this.getData(this.token);
    };
    RecojosComponent.prototype.dateToString = function (currentDate) {
        var _a = currentDate.split("/"), date = _a[0], month = _a[1], year = _a[2];
        var trasnformDate = this.trasnformDate(date);
        var trasnforMonth = this.trasnformDate(month);
        return trasnformDate + "-" + trasnforMonth + "-" + year;
    };
    RecojosComponent.prototype.trasnformDate = function (date) {
        return date.length === 1 ? "0" + date : date;
    };
    RecojosComponent.prototype.getData = function (token) {
        var _this = this;
        this.fecha = this.dateToString(new Date().toLocaleDateString());
        console.log(this.fecha);
        var datos = [];
        this.spinnerService.show();
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url_api + "/motorizado/MisRecojos", 
        // "https://backend-japi.herokuapp.com/motorizado/MisRecojos", 
        {
            token: token, fecha: this.fecha,
        })
            .subscribe(function (_a) {
            var success = _a.success, data = _a.data;
            var dataFormat = data.map(function (recojo) {
                var _a = _this.estadoRecojo.find(function (estado) { return estado.value === recojo.estado; }).estado, estado = _a === void 0 ? "No tiene" : _a;
                var distrito = _this.distritos.find(function (distrito) { return distrito.value == recojo.distrito; });
                var urlCheck = false;
                for (var i = 0; i < data.length; i++) {
                    var cont = 0;
                    var cant = void 0;
                    cant = _this.arr.indexOf(data[i].nombre_empresa);
                    if (cant < 0) {
                        _this.arr.push(data[i].nombre_empresa);
                    }
                    for (var j = 0; j < data.length; j++) {
                        if (data[i].id_empresa = data[j].id_empresa) {
                            cont++;
                        }
                    }
                    data[i].cont = cont;
                }
                console.log(_this.arr);
                if (Number(recojo.latitud) != 0 && Number(recojo.longitud) != 0) {
                    urlCheck = true;
                    var latitud = recojo.latitud;
                    var longitud = recojo.longitud;
                    var urlLocation = "https://www.google.com/maps?q=" + latitud + "," + longitud + "&z=17&hl=es";
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, recojo), { nombre_estado: estado, nombre_distrito: distrito.name, url: urlLocation, check: urlCheck });
                }
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, recojo), { nombre_estado: estado, nombre_distrito: distrito.name, check: urlCheck });
            });
            console.log(dataFormat);
            if (success) {
                _this.data = dataFormat;
                _this.datos = dataFormat;
            }
            else {
                console.log("Error");
            }
            _this.spinnerService.hide();
        });
    };
    RecojosComponent.prototype.selectSpinner = function (value) {
        this.valorSpinner = value;
        console.log(this.valorSpinner);
    };
    RecojosComponent.prototype.filterList = function () {
        this.data = [];
        for (var _i = 0, _a = this.datos; _i < _a.length; _i++) {
            var element = _a[_i];
            ("use strict");
            var varia = element[this.valorSpinner];
            console.log(this.searchTxt);
            console.log(varia);
            if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
                this.data.push(element);
            }
        }
    };
    RecojosComponent.prototype.caida = function (_a) {
        var _this = this;
        var id_recojo = _a.id_recojo;
        var data = {
            token: this.token,
            id_recojo: id_recojo,
            estado: 4,
        };
        console.log(data);
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url_api + "/motorizado/UpdateRecojo", 
        // "https://backend-japi.herokuapp.com/motorizado/UpdateRecojo",
        data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
            },
        })
            .subscribe(function (result) {
            if (result.success) {
                _this.getData(_this.token);
            }
            else {
                console.log("Error al actualizar");
            }
        });
    };
    RecojosComponent.prototype.Enruta = function (_a) {
        var _this = this;
        var id_recojo = _a.id_recojo;
        var data = {
            token: this.token,
            id_recojo: id_recojo,
            estado: 2,
        };
        console.log(data);
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url_api + "/motorizado/UpdateRecojo", 
        // "https://backend-japi.herokuapp.com/motorizado/UpdateRecojo",
        data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
            },
        })
            .subscribe(function (result) {
            if (result.success) {
                _this.getData(_this.token);
            }
            else {
                console.log("Error al actualizar");
            }
        });
    };
    RecojosComponent.prototype.Entregado = function (_a) {
        var _this = this;
        var id_recojo = _a.id_recojo;
        var data = {
            token: this.token,
            id_recojo: id_recojo,
            estado: 3,
        };
        console.log(data);
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url_api + "/motorizado/UpdateRecojo", 
        // "https://backend-japi.herokuapp.com/motorizado/UpdateRecojo",
        data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
            },
        })
            .subscribe(function (result) {
            if (result.success) {
                _this.getData(_this.token);
            }
            else {
                console.log("Error al actualizar");
            }
        });
    };
    RecojosComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RecojosComponent.prototype, "valorSpinner", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RecojosComponent.prototype, "spinner", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RecojosComponent.prototype, "searchTxt", void 0);
    RecojosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-recojos",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recojos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/motorizado/components/recojos/recojos.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recojos.component.scss */ "./src/app/motorizado/components/recojos/recojos.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utils_services_form_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], RecojosComponent);
    return RecojosComponent;
}());



/***/ }),

/***/ "./src/app/motorizado/motorizado-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/motorizado/motorizado-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MotorizadoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotorizadoRoutingModule", function() { return MotorizadoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/motorizado/components/layout/layout.component.ts");
/* harmony import */ var _components_entregas_entregas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/entregas/entregas.component */ "./src/app/motorizado/components/entregas/entregas.component.ts");
/* harmony import */ var _components_recojos_recojos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/recojos/recojos.component */ "./src/app/motorizado/components/recojos/recojos.component.ts");
/* harmony import */ var _components_historial_historial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/historial/historial.component */ "./src/app/motorizado/components/historial/historial.component.ts");
/* harmony import */ var _components_historial_moto_recojos_historial_moto_recojos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/historial-moto-recojos/historial-moto-recojos.component */ "./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.ts");



// Components





var routes = [
    {
        path: "",
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: "historial",
                component: _components_historial_historial_component__WEBPACK_IMPORTED_MODULE_6__["HistorialComponent"],
            },
            {
                path: "Historial-recojos",
                component: _components_historial_moto_recojos_historial_moto_recojos_component__WEBPACK_IMPORTED_MODULE_7__["HistorialMotoRecojosComponent"],
            },
            {
                path: "entregas-motorizado",
                component: _components_entregas_entregas_component__WEBPACK_IMPORTED_MODULE_4__["EntregasComponent"],
            },
            {
                path: "recojos-motorizado",
                component: _components_recojos_recojos_component__WEBPACK_IMPORTED_MODULE_5__["RecojosComponent"],
            },
        ],
    },
];
var MotorizadoRoutingModule = /** @class */ (function () {
    function MotorizadoRoutingModule() {
    }
    MotorizadoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MotorizadoRoutingModule);
    return MotorizadoRoutingModule;
}());



/***/ }),

/***/ "./src/app/motorizado/motorizado.module.ts":
/*!*************************************************!*\
  !*** ./src/app/motorizado/motorizado.module.ts ***!
  \*************************************************/
/*! exports provided: MotorizadoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotorizadoModule", function() { return MotorizadoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _motorizado_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./motorizado-routing.module */ "./src/app/motorizado/motorizado-routing.module.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/motorizado/components/layout/layout.component.ts");
/* harmony import */ var _components_entregas_entregas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/entregas/entregas.component */ "./src/app/motorizado/components/entregas/entregas.component.ts");
/* harmony import */ var _components_recojos_recojos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/recojos/recojos.component */ "./src/app/motorizado/components/recojos/recojos.component.ts");
/* harmony import */ var _components_historial_historial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/historial/historial.component */ "./src/app/motorizado/components/historial/historial.component.ts");
/* harmony import */ var _components_historial_moto_recojos_historial_moto_recojos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/historial-moto-recojos/historial-moto-recojos.component */ "./src/app/motorizado/components/historial-moto-recojos/historial-moto-recojos.component.ts");







// Route

// Components





var MotorizadoModule = /** @class */ (function () {
    function MotorizadoModule() {
    }
    MotorizadoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _components_entregas_entregas_component__WEBPACK_IMPORTED_MODULE_9__["EntregasComponent"],
                _components_recojos_recojos_component__WEBPACK_IMPORTED_MODULE_10__["RecojosComponent"],
                _components_historial_historial_component__WEBPACK_IMPORTED_MODULE_11__["HistorialComponent"],
                _components_historial_moto_recojos_historial_moto_recojos_component__WEBPACK_IMPORTED_MODULE_12__["HistorialMotoRecojosComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _motorizado_routing_module__WEBPACK_IMPORTED_MODULE_7__["MotorizadoRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
            ],
        })
    ], MotorizadoModule);
    return MotorizadoModule;
}());



/***/ })

}]);
//# sourceMappingURL=motorizado-motorizado-module.js.map