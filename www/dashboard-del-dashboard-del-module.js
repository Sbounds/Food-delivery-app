(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-del-dashboard-del-module"],{

/***/ "./src/app/dashboard-del/dashboard-del.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-del/dashboard-del.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardDelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDelPageModule", function() { return DashboardDelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_del_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-del.page */ "./src/app/dashboard-del/dashboard-del.page.ts");
/* harmony import */ var _components_del_cart_del_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/del-cart/del-cart.component */ "./src/app/components/del-cart/del-cart.component.ts");
/* harmony import */ var _components_del_res_add_comp_del_res_add_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/del-res-add-comp/del-res-add-comp.component */ "./src/app/components/del-res-add-comp/del-res-add-comp.component.ts");









var routes = [
    {
        path: '',
        component: _dashboard_del_page__WEBPACK_IMPORTED_MODULE_6__["DashboardDelPage"]
    }
];
var DashboardDelPageModule = /** @class */ (function () {
    function DashboardDelPageModule() {
    }
    DashboardDelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_del_page__WEBPACK_IMPORTED_MODULE_6__["DashboardDelPage"], _components_del_cart_del_cart_component__WEBPACK_IMPORTED_MODULE_7__["DelCartComponent"], _components_del_res_add_comp_del_res_add_comp_component__WEBPACK_IMPORTED_MODULE_8__["DelResAddCompComponent"]]
        })
    ], DashboardDelPageModule);
    return DashboardDelPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard-del/dashboard-del.page.html":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-del/dashboard-del.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"openFirst()\">\n          <ion-icon fill=\"icon-only\" name=\"menu\">\n\n          </ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title text-center>Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-label> Current Orders</ion-label>\n  <div *ngFor = \"let co of curOrders\">\n      <ion-card>\n          <ion-grid>\n            <ion-card-header>\n            <ion-row>\n              <ion-col text-left>Delivery Address</ion-col>\n              <ion-col text-left>Restuarant Address</ion-col>\n            </ion-row>\n          </ion-card-header>\n            <ion-row>\n              <ion-col>\n                  <app-del-cart [cID]=co.cart_id></app-del-cart>\n              </ion-col>\n              <ion-col>\n                  <app-del-res-add-comp [resID]=co.res_id></app-del-res-add-comp>\n              </ion-col>\n            </ion-row>\n          <ion-row>\n              <ion-button (click)=\"delivered(co.cart_id)\">Delivered</ion-button>\n        </ion-row>\n        </ion-grid>\n        </ion-card>\n    \n  </div>\n  <br>\n  <ion-label>Available Orders</ion-label>\n  <div *ngFor = \"let ao of availOrders\">\n    <ion-card>\n    <ion-grid>\n      <ion-card-header>\n      <ion-row>\n        <ion-col>Delivery Address</ion-col>\n        <ion-col>Restuarant Address</ion-col>\n      </ion-row>\n    </ion-card-header>\n      <ion-row>\n        <ion-col>\n            <app-del-cart [cID]=ao.cart_id></app-del-cart>\n        </ion-col>\n        <ion-col>\n            <app-del-res-add-comp [resID]=ao.res_id></app-del-res-add-comp>\n        </ion-col>\n      </ion-row>\n    <ion-row>\n    <ion-button (click)=\"accept(ao.cart_id)\">Accept Order</ion-button>\n  </ion-row>\n  </ion-grid>\n  </ion-card>\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/dashboard-del/dashboard-del.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-del/dashboard-del.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  --ion-grid-columns: 2;\n  --ion-grid-padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9kYXNoYm9hcmQtZGVsL2Rhc2hib2FyZC1kZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQW1CO0VBQ25CLHVCQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkLWRlbC9kYXNoYm9hcmQtZGVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xuICAgIC0taW9uLWdyaWQtY29sdW1uczogMjtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard-del/dashboard-del.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard-del/dashboard-del.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardDelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDelPage", function() { return DashboardDelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");





 // required for app->firestore communication

var DashboardDelPage = /** @class */ (function () {
    function DashboardDelPage(menu, cs, us) {
        this.menu = menu;
        this.cs = cs;
        this.us = us;
        this.uid = "";
        this.availOrders = [];
        this.curOrders = [];
    }
    DashboardDelPage.prototype.openFirst = function () {
        this.menu.enable(true, 'dmenu');
        this.menu.toggle('dmenu');
        console.log(this.menu.isOpen());
    };
    DashboardDelPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.availOrders = [];
                this.cs.getAvailableDel(this.availOrders).subscribe(function (order) {
                    _this.availOrders = order;
                    console.log(_this.availOrders);
                });
                this.us.getCurrentUID().subscribe(function (uid) {
                    _this.uid = uid;
                    _this.cs.getAcceptedDel(_this.uid, _this.curOrders).subscribe(function (orders) {
                        _this.curOrders = orders;
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardDelPage.prototype.accept = function (cartID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"]();
                try {
                    db.collection('cart').doc(cartID).update({
                        status: 3,
                        del_id: this.uid
                    }).then(function () {
                        console.log("order accepted");
                    });
                }
                catch (_b) {
                    console.error("error accepting order");
                }
                this.ngOnInit();
                return [2 /*return*/];
            });
        });
    };
    DashboardDelPage.prototype.delivered = function (cartID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"]();
                try {
                    db.collection('cart').doc(cartID).update({
                        status: 4
                    }).then(function () {
                        console.log("order delivered");
                    });
                }
                catch (_b) {
                    console.error("error delivered order");
                }
                this.ngOnInit();
                return [2 /*return*/];
            });
        });
    };
    DashboardDelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-del',
            template: __webpack_require__(/*! ./dashboard-del.page.html */ "./src/app/dashboard-del/dashboard-del.page.html"),
            styles: [__webpack_require__(/*! ./dashboard-del.page.scss */ "./src/app/dashboard-del/dashboard-del.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], DashboardDelPage);
    return DashboardDelPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-del-dashboard-del-module.js.map