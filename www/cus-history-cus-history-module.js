(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cus-history-cus-history-module"],{

/***/ "./src/app/cus-history/cus-history.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cus-history/cus-history.module.ts ***!
  \***************************************************/
/*! exports provided: CusHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusHistoryPageModule", function() { return CusHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cus_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cus-history.page */ "./src/app/cus-history/cus-history.page.ts");
/* harmony import */ var _components_cart_comp_cart_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cart-comp/cart-comp.component */ "./src/app/components/cart-comp/cart-comp.component.ts");
/* harmony import */ var _components_cart_total_cart_total_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/cart-total/cart-total.component */ "./src/app/components/cart-total/cart-total.component.ts");
/* harmony import */ var _components_res_comp_res_comp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/res-comp/res-comp.component */ "./src/app/components/res-comp/res-comp.component.ts");










var routes = [
    {
        path: '',
        component: _cus_history_page__WEBPACK_IMPORTED_MODULE_6__["CusHistoryPage"]
    }
];
var CusHistoryPageModule = /** @class */ (function () {
    function CusHistoryPageModule() {
    }
    CusHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cus_history_page__WEBPACK_IMPORTED_MODULE_6__["CusHistoryPage"], _components_cart_comp_cart_comp_component__WEBPACK_IMPORTED_MODULE_7__["CartCompComponent"], _components_cart_total_cart_total_component__WEBPACK_IMPORTED_MODULE_8__["CartTotalComponent"], _components_res_comp_res_comp_component__WEBPACK_IMPORTED_MODULE_9__["ResCompComponent"]]
        })
    ], CusHistoryPageModule);
    return CusHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/cus-history/cus-history.page.html":
/*!***************************************************!*\
  !*** ./src/app/cus-history/cus-history.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"openFirst()\">\n            <ion-icon fill=\"icon-only\" name=\"menu\">\n            </ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <table>\n            <tr>\n              <td><ion-title><b><i>History</i></b></ion-title></td>\n            </tr>\n          </table>\n      </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <div *ngFor = \"let c of compOrders\">\n      <ion-card>\n      \n           \n      \n        <ion-card-content text-center>\n            <app-res-comp class='name'[resID]=c.res_id></app-res-comp>\n         <ion-grid text-center> \n            <ion-row>\n                <ion-col>Name</ion-col>\n                <ion-col>\n                </ion-col>\n                <ion-col>Qty</ion-col>\n                <ion-col></ion-col>\n                <ion-col>\n                    Price\n                </ion-col>\n                <ion-col>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n          <app-cart-comp [cID]=c.cart_id></app-cart-comp>\n          <app-cart-total text-center [cID]=c.cart_id></app-cart-total>\n          <ion-button (click)=\"viewResturant(c.res_id)\" size=\"small\" >Add Items</ion-button>\n            <ion-button (click)=\"deleteCart(c.cart_id)\"size=\"small\">Remove This Cart</ion-button>\n            <ion-button (click)=\"checkout(c.cart_id)\"size=\"small\">Place Order</ion-button>\n          </ion-card-content>\n      </ion-card>\n      <br>\n      \n    </div>\n  \n  </ion-content>\n\n"

/***/ }),

/***/ "./src/app/cus-history/cus-history.page.scss":
/*!***************************************************!*\
  !*** ./src/app/cus-history/cus-history.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cy1oaXN0b3J5L2N1cy1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cus-history/cus-history.page.ts":
/*!*************************************************!*\
  !*** ./src/app/cus-history/cus-history.page.ts ***!
  \*************************************************/
/*! exports provided: CusHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusHistoryPage", function() { return CusHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var CusHistoryPage = /** @class */ (function () {
    function CusHistoryPage(cs, us, menu) {
        this.cs = cs;
        this.us = us;
        this.menu = menu;
        this.uid = "";
        this.compOrders = [];
    }
    CusHistoryPage.prototype.openFirst = function () {
        this.menu.enable(true, 'cmenu');
        this.menu.toggle('cmenu');
        console.log(this.menu.isOpen());
    };
    CusHistoryPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.us.getCurrentUID().subscribe(function (uid) {
                    _this.uid = uid;
                    _this.cs.getCuscomp(_this.uid, _this.compOrders).subscribe(function (orders) {
                        _this.compOrders = orders;
                        console.log(orders);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CusHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cus-history',
            template: __webpack_require__(/*! ./cus-history.page.html */ "./src/app/cus-history/cus-history.page.html"),
            styles: [__webpack_require__(/*! ./cus-history.page.scss */ "./src/app/cus-history/cus-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], CusHistoryPage);
    return CusHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=cus-history-cus-history-module.js.map