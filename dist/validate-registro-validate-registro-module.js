(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validate-registro-validate-registro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/validate-registro/components/validate.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validate-registro/components/validate.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"validate\">\r\n  <header class=\"validate__header p-3\">\r\n    <img src=\"./assets/img/logo-japi.png\" alt=\"logo\" />\r\n  </header>\r\n  <main>\r\n    <section class=\"validate__title-section\">\r\n      <div\r\n        class=\"validate__title-container px-3 py-4 m-auto d-flex align-items-center justify-content\"\r\n      >\r\n        <div class=\"validate__icon-container\">\r\n          <svg\r\n            aria-hidden=\"true\"\r\n            focusable=\"false\"\r\n            data-prefix=\"far\"\r\n            data-icon=\"inbox-in\"\r\n            class=\"validate__icon\"\r\n            role=\"img\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            viewBox=\"0 0 576 512\"\r\n          >\r\n            <path\r\n              fill=\"currentColor\"\r\n              d=\"M395.5 185.5l-99 99c-4.7 4.7-12.3 4.7-17 0l-99-99c-7.6-7.6-2.2-20.5 8.5-20.5h67V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v153h67c10.7 0 16.1 12.9 8.5 20.5zM528 352H408l-32 64H200l-32-64H48v112h480V352zm48 2.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V354.2c0-11.8 4.3-23.1 12.1-31.9l101.6-114.2c2.3-2.6 4.9-4.9 7.7-7 2.4-1.7 5.6-1.4 7.7.7l24.8 24.9c2.2 2.2 2.3 5.9.2 8.2L92.7 304h105l32 64h116.7l32-64h105L422 234.9c-2.1-2.4-2-5.9.2-8.2l24.6-25c2-2.1 5.3-2.4 7.7-.7 2.9 2.1 5.5 4.4 7.9 7.1L564 322.3c7.7 8.8 12 20.2 12 31.9z\"\r\n            ></path>\r\n          </svg>\r\n        </div>\r\n        <div class=\"validate__title-content\">\r\n          <h2 class=\"validate__title\">Validando su registro</h2>\r\n          <p class=\"validate__title-description\">\r\n            No te preocupes, solo es esta vez\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"validate__content-section\">\r\n      <div class=\"validate__content-container p-3 m-auto\">\r\n        <h3 class=\"validate__content-title\">Habilitaremos este correo:</h3>\r\n        <p class=\"validate__content\">\r\n          {{ emailValidar }}\r\n        </p>\r\n        <p class=\"validate__content\">\r\n          Gracias por confiar en japi, en breve su cuenta será habilitada e\r\n          informada en el correo registrado.\r\n        </p>\r\n        <a class=\"validate__content-link text-center\" [routerLink]=\"['/']\"\r\n          >Volver al inicio</a\r\n        >\r\n        <span class=\"validate__content-footer\">\r\n          Después de validar tu correo electrónico puedes iniciar sesión.\r\n        </span>\r\n        <p class=\"validate__content-help\">\r\n          Si tienes alguna duda o consulta adicional por favor contáctanos a\r\n          nuestro whatsapp: 902 781 212\r\n        </p>\r\n      </div>\r\n    </section>\r\n  </main>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/validate-registro/components/validate.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/validate-registro/components/validate.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validate {\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--green-clr);\n  color: var(--white);\n}\n.validate__header img {\n  width: 6rem;\n}\n.validate__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.3em;\n}\n.validate__title-section {\n  width: 100%;\n  background-color: #00755e;\n}\n.validate__title-container {\n  max-width: 34rem;\n}\n.validate__title-content {\n  width: calc(100% - 3.5rem);\n}\n.validate__title-description {\n  margin: 0;\n}\n.validate__icon {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  color: var(--dark);\n}\n.validate__icon-container {\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-right: 45px;\n  padding: 0.5rem;\n  border-radius: 50%;\n  background-color: var(--yellow-clr);\n}\n.validate__content {\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin-bottom: 1.1rem;\n}\n.validate__content:first-of-type {\n  font-size: 1.1rem;\n}\n.validate__content-container {\n  max-width: 34rem;\n}\n.validate__content-title {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin-bottom: 0.3em;\n}\n.validate__content-link {\n  font-weight: 500;\n  color: var(--dark);\n  display: block;\n  padding: 1em;\n  max-width: 25rem;\n  margin-bottom: 1.1rem;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 25px;\n  background-color: var(--yellow-clr);\n}\n.validate__content-link:hover, .validate__content-link:active, .validate__content-link:focus {\n  text-decoration: none;\n}\n.validate__content-footer {\n  font-size: 0.8rem;\n  display: block;\n  border-top: 1px solid #00755e;\n  padding: 1em 0;\n}\n.validate__content-help {\n  max-width: 25rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1em;\n  border-radius: 0.5rem;\n  background-color: var(--yellow-clr);\n  text-align: center;\n  color: var(--dark);\n  font-weight: 500;\n}\n@media screen and (max-width: 445px) {\n  .validate__header img {\n    width: 4em;\n  }\n  .validate__title {\n    font-size: 1rem;\n  }\n  .validate__icon-container {\n    margin-right: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGUtcmVnaXN0cm8vY29tcG9uZW50cy9DOlxcVXNlcnNcXExVSVNcXEVzY3JpdG9yaW9cXEphcGlFeHByZXNzL3NyY1xcYXBwXFx2YWxpZGF0ZS1yZWdpc3Ryb1xcY29tcG9uZW50c1xcdmFsaWRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhbGlkYXRlLXJlZ2lzdHJvL2NvbXBvbmVudHMvdmFsaWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDSTtFQUNFLFdBQUE7QUNDTjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUo7QURDSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0NOO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FEQ0k7RUFDRSwwQkFBQTtBQ0NOO0FEQ0k7RUFDRSxTQUFBO0FDQ047QURFRTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FDQ047QURFRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0FKO0FEQ0k7RUFDRSxpQkFBQTtBQ0NOO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FEQ0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNDTjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FDQ047QURBTTtFQUdFLHFCQUFBO0FDQVI7QURHSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ0ROO0FER0k7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ROO0FETUE7RUFHTTtJQUNFLFVBQUE7RUNMTjtFRFFFO0lBQ0UsZUFBQTtFQ05KO0VEU0k7SUFDRSxrQkFBQTtFQ1BOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92YWxpZGF0ZS1yZWdpc3Ryby9jb21wb25lbnRzL3ZhbGlkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZhbGlkYXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1jbHIpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcclxuICAgICYtc2VjdGlvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NTVlO1xyXG4gICAgfVxyXG4gICAgJi1jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDM0cmVtO1xyXG4gICAgfVxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgICB9XHJcbiAgICAmLWRlc2NyaXB0aW9uIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19pY29uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcclxuICAgICYtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDMuNXJlbTtcclxuICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNDVweDtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jbHIpO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMXJlbTtcclxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgJi1jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDM0cmVtO1xyXG4gICAgfVxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcclxuICAgIH1cclxuICAgICYtbGluayB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgbWF4LXdpZHRoOiAyNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS4xcmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY2xyKTtcclxuICAgICAgJjpob3ZlcixcclxuICAgICAgJjphY3RpdmUsXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1mb290ZXIge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA3NTVlO1xyXG4gICAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIH1cclxuICAgICYtaGVscCB7XHJcbiAgICAgIG1heC13aWR0aDogMjVyZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY2xyKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0tZGFyayk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDVweCkge1xyXG4gIC52YWxpZGF0ZSB7XHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnZhbGlkYXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1jbHIpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLnZhbGlkYXRlX19oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDZyZW07XG59XG4udmFsaWRhdGVfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufVxuLnZhbGlkYXRlX190aXRsZS1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc1NWU7XG59XG4udmFsaWRhdGVfX3RpdGxlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzRyZW07XG59XG4udmFsaWRhdGVfX3RpdGxlLWNvbnRlbnQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMy41cmVtKTtcbn1cbi52YWxpZGF0ZV9fdGl0bGUtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDA7XG59XG4udmFsaWRhdGVfX2ljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgY29sb3I6IHZhcigtLWRhcmspO1xufVxuLnZhbGlkYXRlX19pY29uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzLjVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY2xyKTtcbn1cbi52YWxpZGF0ZV9fY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW4tYm90dG9tOiAxLjFyZW07XG59XG4udmFsaWRhdGVfX2NvbnRlbnQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLnZhbGlkYXRlX19jb250ZW50LWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzRyZW07XG59XG4udmFsaWRhdGVfX2NvbnRlbnQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG59XG4udmFsaWRhdGVfX2NvbnRlbnQtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWF4LXdpZHRoOiAyNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4xcmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY2xyKTtcbn1cbi52YWxpZGF0ZV9fY29udGVudC1saW5rOmhvdmVyLCAudmFsaWRhdGVfX2NvbnRlbnQtbGluazphY3RpdmUsIC52YWxpZGF0ZV9fY29udGVudC1saW5rOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnZhbGlkYXRlX19jb250ZW50LWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDc1NWU7XG4gIHBhZGRpbmc6IDFlbSAwO1xufVxuLnZhbGlkYXRlX19jb250ZW50LWhlbHAge1xuICBtYXgtd2lkdGg6IDI1cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LWNscik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWRhcmspO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDVweCkge1xuICAudmFsaWRhdGVfX2hlYWRlciBpbWcge1xuICAgIHdpZHRoOiA0ZW07XG4gIH1cbiAgLnZhbGlkYXRlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC52YWxpZGF0ZV9faWNvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/validate-registro/components/validate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/validate-registro/components/validate.component.ts ***!
  \********************************************************************/
/*! exports provided: ValidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateComponent", function() { return ValidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var ValidateComponent = /** @class */ (function () {
    function ValidateComponent(route) {
        this.route = route;
    }
    ValidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (_a) {
            var emailValidar = _a.emailValidar;
            _this.emailValidar = emailValidar;
        });
    };
    ValidateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ValidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-validate",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./validate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/validate-registro/components/validate.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./validate.component.scss */ "./src/app/validate-registro/components/validate.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ValidateComponent);
    return ValidateComponent;
}());



/***/ }),

/***/ "./src/app/validate-registro/validate-registro.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/validate-registro/validate-registro.module.ts ***!
  \***************************************************************/
/*! exports provided: ValidateRegistroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateRegistroModule", function() { return ValidateRegistroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _validate_registro_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validate-registro.routing */ "./src/app/validate-registro/validate-registro.routing.ts");
/* harmony import */ var _components_validate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/validate.component */ "./src/app/validate-registro/components/validate.component.ts");





// Components

var ValidateRegistroModule = /** @class */ (function () {
    function ValidateRegistroModule() {
    }
    ValidateRegistroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_validate_component__WEBPACK_IMPORTED_MODULE_5__["ValidateComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _validate_registro_routing__WEBPACK_IMPORTED_MODULE_4__["ValidateRegistroRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], ValidateRegistroModule);
    return ValidateRegistroModule;
}());



/***/ }),

/***/ "./src/app/validate-registro/validate-registro.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/validate-registro/validate-registro.routing.ts ***!
  \****************************************************************/
/*! exports provided: ValidateRegistroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateRegistroRoutingModule", function() { return ValidateRegistroRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_validate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validate.component */ "./src/app/validate-registro/components/validate.component.ts");



// Components

var routes = [
    {
        path: "",
        component: _components_validate_component__WEBPACK_IMPORTED_MODULE_3__["ValidateComponent"],
    },
];
var ValidateRegistroRoutingModule = /** @class */ (function () {
    function ValidateRegistroRoutingModule() {
    }
    ValidateRegistroRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ValidateRegistroRoutingModule);
    return ValidateRegistroRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=validate-registro-validate-registro-module.js.map