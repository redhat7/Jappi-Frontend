(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~motorizado-motorizado-module~register-register-module"],{

/***/ "./src/app/utils/services/form/form.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/utils/services/form/form.service.ts ***!
  \*****************************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FormService = /** @class */ (function () {
    function FormService() {
        this.distritos = [
            { name: "Seleccione un distrito", value: 0, zona: 0 },
            { name: "Ate Vitarte", value: 1, zona: 1 },
            { name: "Ate-Salamanca", value: 2, zona: 1 },
            { name: "Ate-Santa Clara", value: 3, zona: 6 },
            { name: "Ate-Huaycan", value: 4, zona: 6 },
            { name: "Barranco", value: 5, zona: 2 },
            { name: "Bellavista", value: 6, zona: 4 },
            { name: "Breña", value: 7, zona: 2 },
            { name: "Carmen de la Legua", value: 8, zona: 4 },
            { name: "Callao", value: 9, zona: 4 },
            { name: "Carabayllo", value: 10, zona: 6 },
            { name: "Cercado de Lima", value: 11, zona: 2 },
            { name: "Chorrillos", value: 12, zona: 5 },
            { name: "Comas", value: 13, zona: 3 },
            { name: "El Agustino", value: 14, zona: 1 },
            { name: "Huachipa(Zoologico)", value: 15, zona: 6 },
            { name: "Independencia", value: 16, zona: 3 },
            { name: "Jesus Maria", value: 17, zona: 2 },
            { name: "La Molina", value: 18, zona: 1 },
            { name: "La Perla", value: 19, zona: 4 },
            { name: "La Punta", value: 20, zona: 4 },
            { name: "La Victoria", value: 21, zona: 2 },
            { name: "Lima", value: 22, zona: 2 },
            { name: "Lince", value: 23, zona: 2 },
            { name: "Los Olivos", value: 24, zona: 3 },
            { name: "Magdalena del Mar", value: 25, zona: 2 },
            { name: "Miraflores", value: 26, zona: 2 },
            { name: "Mi Peru", value: 27, zona: 6 },
            { name: "Pueblo Libre", value: 28, zona: 2 },
            { name: "Puente Piedra", value: 29, zona: 6 },
            { name: "Rimac", value: 30, zona: 3 },
            { name: "San Borja", value: 31, zona: 2 },
            { name: "San Isidro", value: 32, zona: 2 },
            { name: "San Juan de Lurigancho", value: 33, zona: 1 },
            { name: "San Juan de Miraflores", value: 34, zona: 5 },
            { name: "San Luis", value: 35, zona: 2 },
            { name: "San Martin de Porres", value: 36, zona: 3 },
            { name: "San Miguel", value: 37, zona: 2 },
            { name: "Santa Anita", value: 38, zona: 1 },
            { name: "Santiago de Surco", value: 39, zona: 5 },
            { name: "Surquillo", value: 40, zona: 2 },
            { name: "Ventanilla", value: 41, zona: 6 },
            { name: "Villa el Salvador", value: 42, zona: 5 },
            { name: "Villa María del Triunfo", value: 43, zona: 5 },
        ];
        this.zonas = [
            {
                id: 1,
                distritos: [1, 2, 14, 18, 33, 38],
                zonas: [
                    {
                        id: 1,
                        precio: 8,
                        name: "este",
                    },
                    {
                        id: 2,
                        precio: 9,
                        name: "centro",
                    },
                    {
                        id: 3,
                        precio: 10,
                        name: "norte",
                    },
                    {
                        id: 4,
                        precio: 11,
                        name: "oeste",
                    },
                    {
                        id: 5,
                        precio: 12,
                        name: "sur",
                    },
                    {
                        id: 6,
                        precio: 15,
                        name: "alejados",
                    },
                ],
            },
            {
                id: 2,
                distritos: [5, 7, 11, 17, 21, 22, 23, 25, 26, 28, 31, 32, 35, 37, 40],
                zonas: [
                    {
                        id: 1,
                        precio: 11,
                        name: "este",
                    },
                    {
                        id: 2,
                        precio: 8,
                        name: "centro",
                    },
                    {
                        id: 3,
                        precio: 10,
                        name: "norte",
                    },
                    {
                        id: 4,
                        precio: 9,
                        name: "oeste",
                    },
                    {
                        id: 5,
                        precio: 12,
                        name: "sur",
                    },
                    {
                        id: 6,
                        precio: 15,
                        name: "alejados",
                    },
                ],
            },
            {
                id: 3,
                distritos: [13, 16, 24, 30, 36],
                zonas: [
                    {
                        id: 1,
                        precio: 11,
                        name: "este",
                    },
                    {
                        id: 2,
                        precio: 9,
                        name: "centro",
                    },
                    {
                        id: 3,
                        precio: 8,
                        name: "norte",
                    },
                    {
                        id: 4,
                        precio: 10,
                        name: "oeste",
                    },
                    {
                        id: 5,
                        precio: 12,
                        name: "sur",
                    },
                    {
                        id: 6,
                        precio: 15,
                        name: "alejados",
                    },
                ],
            },
            {
                id: 4,
                distritos: [6, 8, 9, 19, 20],
                zonas: [
                    {
                        id: 1,
                        precio: 11,
                        name: "este",
                    },
                    {
                        id: 2,
                        precio: 9,
                        name: "centro",
                    },
                    {
                        id: 3,
                        precio: 10,
                        name: "norte",
                    },
                    {
                        id: 4,
                        precio: 8,
                        name: "oeste",
                    },
                    {
                        id: 5,
                        precio: 12,
                        name: "sur",
                    },
                    {
                        id: 6,
                        precio: 15,
                        name: "alejados",
                    },
                ],
            },
            {
                id: 5,
                distritos: [12, 34, 39, 42, 43],
                zonas: [
                    {
                        id: 1,
                        precio: 11,
                        name: "este",
                    },
                    {
                        id: 2,
                        precio: 9,
                        name: "centro",
                    },
                    {
                        id: 3,
                        precio: 12,
                        name: "norte",
                    },
                    {
                        id: 4,
                        precio: 10,
                        name: "oeste",
                    },
                    {
                        id: 5,
                        precio: 8,
                        name: "sur",
                    },
                    {
                        id: 6,
                        precio: 15,
                        name: "alejados",
                    },
                ],
            },
            {
                id: 6,
                distritos: [3, 4, 10, 15, 27, 29, 41],
            },
        ];
        this.estadoRecojo = [
            {
                estado: "pendiente",
                value: 0,
            },
            {
                estado: "programado",
                value: 1,
            },
            {
                estado: "en ruta",
                value: 2,
            },
            {
                estado: "recogido",
                value: 3,
            },
            {
                estado: "caída",
                value: 4,
            },
            {
                estado: "Recibido",
                value: 5,
            },
        ];
        this.estadoRecojoModal = [
            {
                estado: "en ruta",
                value: 2,
            },
            {
                estado: "recogido",
                value: 3,
            },
            {
                estado: "caída",
                value: 4,
            },
        ];
        this.estadoEntrega = [
            {
                estado: "pendiente",
                value: 0,
            },
            {
                estado: "programado",
                value: 1,
            },
            {
                estado: "en ruta",
                value: 2,
            },
            {
                estado: "entregado",
                value: 3,
            },
            {
                estado: "caída",
                value: 4,
            },
            {
                estado: "reprogramado",
                value: 5,
            },
            {
                estado: "repro. por cobrar",
                value: 6,
            },
            {
                estado: "Observado",
                value: 7,
            },
            {
                estado: "Caida por cobrar",
                value: 8,
            },
        ];
        this.estadoEntregaModalAdmin = [
            {
                estado: "en ruta",
                value: 2,
            },
            {
                estado: "entregado",
                value: 3,
            },
            {
                estado: "caída",
                value: 4,
            },
            {
                estado: "reprogramado",
                value: 5,
            },
            {
                estado: "repro. por cobrar",
                value: 6,
            },
            {
                estado: "Observado",
                value: 7,
            },
            {
                estado: "Caida por cobrar",
                value: 8,
            },
        ];
        this.estadoEntregaModal = [
            {
                estado: "en ruta",
                value: 2,
            },
            {
                estado: "entregado",
                value: 3,
            },
            {
                estado: "Observado",
                value: 7,
            },
        ];
        this.estadoAlmacen = [
            {
                estado: "pendiente",
                value: 0,
            },
            {
                estado: "aceptado",
                value: 1,
            },
            {
                estado: "en recojo",
                value: 2,
            },
            {
                estado: "en stock",
                value: 3,
            },
        ];
        this.modoEntrega = [
            { id: 0, value: "--- Seleccione ---" },
            { id: 1, value: "Contra-entrega" },
            { id: 2, value: "Solo Entregar" },
            { id: 3, value: "Cambio con costo" },
            { id: 4, value: "Cambio sin costo" },
        ];
        this.metodoPago = [
            { id: 0, value: "--- Seleccione ---" },
            { id: 1, value: "Efectivo" },
            { id: 2, value: "Tarjeta" },
            { id: 3, value: "Abono a vendedor" },
            { id: 4, value: "Abono a Japi" },
        ];
    }
    FormService.prototype.getModoEntrega = function () {
        return this.modoEntrega;
    };
    FormService.prototype.getMetodoPago = function () {
        return this.metodoPago;
    };
    FormService.prototype.getZonas = function () {
        return this.zonas;
    };
    FormService.prototype.getDistritos = function () {
        return this.distritos;
    };
    FormService.prototype.getMultipleDistritos = function () {
        var multipleDistritos = this.distritos.slice(1);
        return multipleDistritos;
    };
    FormService.prototype.getEstadoAlmacen = function () {
        return this.estadoAlmacen;
    };
    FormService.prototype.getEstadoRecojo = function () {
        return this.estadoRecojo;
    };
    FormService.prototype.getEstadoRecojoModal = function () {
        return this.estadoRecojoModal;
    };
    FormService.prototype.getEstadoEntrega = function () {
        return this.estadoEntrega;
    };
    FormService.prototype.getEstadoEntregaModalAdmin = function () {
        return this.estadoEntregaModalAdmin;
    };
    FormService.prototype.getEstadoEntregaModal = function () {
        return this.estadoEntregaModal;
    };
    FormService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FormService);
    return FormService;
}());



/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~motorizado-motorizado-module~register-register-module.js.map