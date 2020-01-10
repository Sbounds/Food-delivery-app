(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cust-cart-cust-cart-module"],{

/***/ "./src/app/cust-cart/cust-cart.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cust-cart/cust-cart.module.ts ***!
  \***********************************************/
/*! exports provided: CustCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustCartPageModule", function() { return CustCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_modal_checkout_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkout-modal/checkout-modal.page */ "./src/app/checkout-modal/checkout-modal.page.ts");
/* harmony import */ var _cust_cart_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cust-cart.page */ "./src/app/cust-cart/cust-cart.page.ts");
/* harmony import */ var _components_cart_comp_cart_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/cart-comp/cart-comp.component */ "./src/app/components/cart-comp/cart-comp.component.ts");
/* harmony import */ var _components_res_comp_res_comp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/res-comp/res-comp.component */ "./src/app/components/res-comp/res-comp.component.ts");
/* harmony import */ var _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../view-resturant-modal/view-resturant-modal.page */ "./src/app/view-resturant-modal/view-resturant-modal.page.ts");
/* harmony import */ var _components_cart_total_cart_total_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/cart-total/cart-total.component */ "./src/app/components/cart-total/cart-total.component.ts");












var routes = [
    {
        path: '',
        component: _cust_cart_page__WEBPACK_IMPORTED_MODULE_7__["CustCartPage"]
    }
];
var CustCartPageModule = /** @class */ (function () {
    function CustCartPageModule() {
    }
    CustCartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cust_cart_page__WEBPACK_IMPORTED_MODULE_7__["CustCartPage"], _components_cart_comp_cart_comp_component__WEBPACK_IMPORTED_MODULE_8__["CartCompComponent"], _checkout_modal_checkout_modal_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutModalPage"], _components_res_comp_res_comp_component__WEBPACK_IMPORTED_MODULE_9__["ResCompComponent"], _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_10__["ViewResturantModalPage"], _components_cart_total_cart_total_component__WEBPACK_IMPORTED_MODULE_11__["CartTotalComponent"]],
            entryComponents: [_checkout_modal_checkout_modal_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutModalPage"], _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_10__["ViewResturantModalPage"]]
        })
    ], CustCartPageModule);
    return CustCartPageModule;
}());



/***/ }),

/***/ "./src/app/cust-cart/cust-cart.page.html":
/*!***********************************************!*\
  !*** ./src/app/cust-cart/cust-cart.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-button (click)=\"openFirst()\">\n          <ion-icon fill=\"icon-only\" name=\"menu\">\n          </ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <table>\n          <tr>\n            <td><ion-title><b><i>Shopping Cart</i></b></ion-title></td>\n            <td><ion-img src=\"../assets/icon/oxford2go.png\"></ion-img></td>\n          </tr>\n        </table>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor = \"let c of cart\">\n    <ion-card>\n    \n         \n    \n      <ion-card-content text-center>\n          <app-res-comp class='name'[resID]=c.res_id></app-res-comp>\n       <ion-grid text-center> \n          <ion-row>\n              <ion-col>Name</ion-col>\n              <ion-col>\n              </ion-col>\n              <ion-col>Qty</ion-col>\n              <ion-col></ion-col>\n              <ion-col>\n                  Price\n              </ion-col>\n              <ion-col>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n        <app-cart-comp [cID]=c.cart_id></app-cart-comp>\n        <app-cart-total text-center [cID]=c.cart_id></app-cart-total>\n        </ion-card-content>\n    </ion-card>\n    <br>\n    \n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/cust-cart/cust-cart.page.scss":
/*!***********************************************!*\
  !*** ./src/app/cust-cart/cust-cart.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  position: relative;\n  text-align: center; }\n\nion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-img {\n  height: 45px;\n  width: auto; }\n\nion-card {\n  background-color: #ffffff; }\n\n.name {\n  text-align: left;\n  font-size: 40px; }\n\nion-grid {\n  --ion-grid-columns: 6;\n  --ion-grid-padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9jdXN0LWNhcnQvY3VzdC1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwwQ0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0kseUJBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFZjtFQUNBLHFCQUFtQjtFQUNuQix1QkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2N1c3QtY2FydC9jdXN0LWNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG59XG5cbmlvbi1pbWcge1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuaW9uLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuXG4ubmFtZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cbiAgICBpb24tZ3JpZHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDY7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/cust-cart/cust-cart.page.ts":
/*!*********************************************!*\
  !*** ./src/app/cust-cart/cust-cart.page.ts ***!
  \*********************************************/
/*! exports provided: CustCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustCartPage", function() { return CustCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resturant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resturant.service */ "./src/app/resturant.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _checkout_modal_checkout_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../checkout-modal/checkout-modal.page */ "./src/app/checkout-modal/checkout-modal.page.ts");
/* harmony import */ var _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view-resturant-modal/view-resturant-modal.page */ "./src/app/view-resturant-modal/view-resturant-modal.page.ts");






 // required for app->firestore communication



var CustCartPage = /** @class */ (function () {
    function CustCartPage(modalController, menu, rs, us, cs, modal, alert) {
        this.modalController = modalController;
        this.menu = menu;
        this.rs = rs;
        this.us = us;
        this.cs = cs;
        this.modal = modal;
        this.alert = alert;
        this.uid = "";
        this.cid = "";
        this.items = [];
        this.cart = [];
        this.resNames = [];
    }
    CustCartPage.prototype.openFirst = function () {
        this.menu.enable(true, 'cmenu');
        this.menu.toggle('cmenu');
        console.log(this.menu.isOpen());
    };
    CustCartPage.prototype.openCustom = function () {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    };
    CustCartPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var s1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("on cust cart page");
                this.uid = "";
                this.cart = [];
                s1 = this.us.getCurrentUID().subscribe(function (uid) {
                    console.log(uid);
                    _this.uid = uid;
                    var s2 = _this.cs.getCurCarts(_this.uid, _this.cart).subscribe(function (cart) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            this.cart = cart;
                            console.log(this.cart);
                            if (this.cart == undefined) {
                                console.log("in empty group");
                            }
                            console.log(this.cart.length);
                            return [2 /*return*/];
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    CustCartPage.prototype.checkout = function (cID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modalElement;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _checkout_modal_checkout_modal_page__WEBPACK_IMPORTED_MODULE_8__["CheckoutModalPage"],
                            componentProps: {
                                cID: cID
                            }
                        })];
                    case 1:
                        modalElement = _a.sent();
                        return [4 /*yield*/, modalElement.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustCartPage.prototype.viewResturant = function (rsID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.rs.getSingleResturant(rsID).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var modalElement;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.res = res;
                                console.log(this.res);
                                return [4 /*yield*/, this.modalController.create({
                                        component: _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_9__["ViewResturantModalPage"],
                                        componentProps: {
                                            rs: this.res
                                        }
                                    })];
                            case 1:
                                modalElement = _a.sent();
                                return [4 /*yield*/, modalElement.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    CustCartPage.prototype.deleteCart = function (cID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"]();
                        console.log(cID);
                        return [4 /*yield*/, this.alert.create({
                                header: 'Warning',
                                message: 'Are you sure you want to delete this cart?',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel'
                                    },
                                    {
                                        text: 'Delete',
                                        handler: function (data) {
                                            db.collection('cart').doc(cID).delete().then(function (any) {
                                                _this.ngOnInit();
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustCartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cust-cart',
            template: __webpack_require__(/*! ./cust-cart.page.html */ "./src/app/cust-cart/cust-cart.page.html"),
            styles: [__webpack_require__(/*! ./cust-cart.page.scss */ "./src/app/cust-cart/cust-cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _resturant_service__WEBPACK_IMPORTED_MODULE_3__["ResturantService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], CustCartPage);
    return CustCartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cust-cart-cust-cart-module.js.map