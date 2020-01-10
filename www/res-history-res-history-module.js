(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["res-history-res-history-module"],{

/***/ "./src/app/res-history/res-history.module.ts":
/*!***************************************************!*\
  !*** ./src/app/res-history/res-history.module.ts ***!
  \***************************************************/
/*! exports provided: ResHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResHistoryPageModule", function() { return ResHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _res_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./res-history.page */ "./src/app/res-history/res-history.page.ts");
/* harmony import */ var _components_res_cart_comp_res_cart_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/res-cart-comp/res-cart-comp.component */ "./src/app/components/res-cart-comp/res-cart-comp.component.ts");








var routes = [
    {
        path: '',
        component: _res_history_page__WEBPACK_IMPORTED_MODULE_6__["ResHistoryPage"]
    }
];
var ResHistoryPageModule = /** @class */ (function () {
    function ResHistoryPageModule() {
    }
    ResHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_res_history_page__WEBPACK_IMPORTED_MODULE_6__["ResHistoryPage"], _components_res_cart_comp_res_cart_comp_component__WEBPACK_IMPORTED_MODULE_7__["ResCartCompComponent"]]
        })
    ], ResHistoryPageModule);
    return ResHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/res-history/res-history.page.html":
/*!***************************************************!*\
  !*** ./src/app/res-history/res-history.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"openFirst()\">\n            <ion-icon fill=\"icon-only\" name=\"menu\">\n  \n            </ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-title text-center>History</ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngFor = \"let c of compOrders\">\n        <ion-label text-center> <app-res-cart-comp [cID]=c.cart_id></app-res-cart-comp> </ion-label>\n        \n         \n     \n       </div>\n     \n</ion-content>\n"

/***/ }),

/***/ "./src/app/res-history/res-history.page.scss":
/*!***************************************************!*\
  !*** ./src/app/res-history/res-history.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlcy1oaXN0b3J5L3Jlcy1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/res-history/res-history.page.ts":
/*!*************************************************!*\
  !*** ./src/app/res-history/res-history.page.ts ***!
  \*************************************************/
/*! exports provided: ResHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResHistoryPage", function() { return ResHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ResHistoryPage = /** @class */ (function () {
    function ResHistoryPage(cs, us, menu) {
        this.cs = cs;
        this.us = us;
        this.menu = menu;
        this.uid = "";
        this.compOrders = [];
    }
    ResHistoryPage.prototype.openFirst = function () {
        this.menu.enable(true, 'rmenu');
        this.menu.toggle('rmenu');
        console.log(this.menu.isOpen());
    };
    ResHistoryPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.us.getCurrentUID().subscribe(function (uid) {
                    _this.uid = uid;
                    _this.us.getSingleUser(uid).then(function (user) {
                        _this.user = user;
                        console.log(user.res_id);
                        _this.cs.getrescomp(_this.user.res_id, _this.compOrders).subscribe(function (orders) {
                            _this.compOrders = orders;
                            console.log(orders);
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ResHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-res-history',
            template: __webpack_require__(/*! ./res-history.page.html */ "./src/app/res-history/res-history.page.html"),
            styles: [__webpack_require__(/*! ./res-history.page.scss */ "./src/app/res-history/res-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], ResHistoryPage);
    return ResHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=res-history-res-history-module.js.map