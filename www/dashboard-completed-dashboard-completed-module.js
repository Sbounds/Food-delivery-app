(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-completed-dashboard-completed-module"],{

/***/ "./src/app/dashboard-completed/dashboard-completed.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-completed/dashboard-completed.module.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardCompletedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCompletedPageModule", function() { return DashboardCompletedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_completed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-completed.page */ "./src/app/dashboard-completed/dashboard-completed.page.ts");
/* harmony import */ var _components_del_cart_del_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/del-cart/del-cart.component */ "./src/app/components/del-cart/del-cart.component.ts");
/* harmony import */ var _components_del_res_add_comp_del_res_add_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/del-res-add-comp/del-res-add-comp.component */ "./src/app/components/del-res-add-comp/del-res-add-comp.component.ts");









var routes = [
    {
        path: '',
        component: _dashboard_completed_page__WEBPACK_IMPORTED_MODULE_6__["DashboardCompletedPage"]
    }
];
var DashboardCompletedPageModule = /** @class */ (function () {
    function DashboardCompletedPageModule() {
    }
    DashboardCompletedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_completed_page__WEBPACK_IMPORTED_MODULE_6__["DashboardCompletedPage"], _components_del_cart_del_cart_component__WEBPACK_IMPORTED_MODULE_7__["DelCartComponent"], _components_del_res_add_comp_del_res_add_comp_component__WEBPACK_IMPORTED_MODULE_8__["DelResAddCompComponent"]]
        })
    ], DashboardCompletedPageModule);
    return DashboardCompletedPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard-completed/dashboard-completed.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-completed/dashboard-completed.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"openFirst()\">\n            <ion-icon fill=\"icon-only\" name=\"menu\">\n  \n            </ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-title text-center>Completed Orders</ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-label> Completed Orders</ion-label>\n    <div *ngFor = \"let c of compOrders\">\n        <ion-card>\n            <ion-grid>\n              <ion-card-header>\n              <ion-row>\n                <ion-col text-left>Delivery Address</ion-col>\n                <ion-col text-left>Restuarant Address</ion-col>\n              </ion-row>\n            </ion-card-header>\n              <ion-row>\n                <ion-col>\n                    <app-del-cart [cID]=c.cart_id></app-del-cart>\n                </ion-col>\n                <ion-col>\n                    <app-del-res-add-comp [resID]=c.res_id></app-del-res-add-comp>\n                </ion-col>\n              </ion-row>\n          </ion-grid>\n          </ion-card>\n      \n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/dashboard-completed/dashboard-completed.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-completed/dashboard-completed.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1jb21wbGV0ZWQvZGFzaGJvYXJkLWNvbXBsZXRlZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-completed/dashboard-completed.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-completed/dashboard-completed.page.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardCompletedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCompletedPage", function() { return DashboardCompletedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var DashboardCompletedPage = /** @class */ (function () {
    function DashboardCompletedPage(cs, menu, us) {
        this.cs = cs;
        this.menu = menu;
        this.us = us;
        this.compOrders = [];
    }
    DashboardCompletedPage.prototype.openFirst = function () {
        this.menu.enable(true, 'dmenu');
        this.menu.toggle('dmenu');
        console.log(this.menu.isOpen());
    };
    DashboardCompletedPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.us.getCurrentUID().subscribe(function (uid) {
                    _this.uid = uid;
                    _this.cs.getcomp(uid, _this.compOrders).subscribe(function (orders) {
                        _this.compOrders = orders;
                        console.log(_this.compOrders);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardCompletedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-completed',
            template: __webpack_require__(/*! ./dashboard-completed.page.html */ "./src/app/dashboard-completed/dashboard-completed.page.html"),
            styles: [__webpack_require__(/*! ./dashboard-completed.page.scss */ "./src/app/dashboard-completed/dashboard-completed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], DashboardCompletedPage);
    return DashboardCompletedPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-completed-dashboard-completed-module.js.map