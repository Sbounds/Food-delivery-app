(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cus-history-cus-history-module~cust-cart-cust-cart-module"],{

/***/ "./src/app/components/cart-comp/cart-comp.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-comp/cart-comp.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ list }}\n  <div *ngFor= \"let i of list\">\n    <!--{{i.item_name}}-->\n    <ion-grid>\n    <ion-row>\n          <ion-col >\n            {{i.item_name}}\n          </ion-col>\n          <ion-col >\n            {{i.item_qty}}\n          </ion-col>\n          <ion-col>\n            <ion-button (click)=\"increase(i.item_id, i.item_qty)\" class =\"btn\">+</ion-button>\n            <ion-button (click)=\"decrease(i.item_id, i.item_qty)\" class =\"btn\">-</ion-button>\n          </ion-col>\n          <ion-col>\n              {{i.item_price*i.item_qty}}\n          </ion-col>\n          <ion-col>\n              <ion-button (click) = \"delete(i.item_id)\"class =\"btn1\" >x</ion-button>\n          </ion-col>\n      </ion-row>\n    \n   \n  </ion-grid>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/cart-comp/cart-comp.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-comp/cart-comp.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  --ion-grid-columns: 6;\n  --ion-grid-padding: 8px; }\n\n.btn {\n  display: block;\n  height: 10px;\n  width: 5px;\n  border-radius: 50%;\n  border: 0px; }\n\n.btn1 {\n  display: block;\n  height: 25px;\n  width: 5px;\n  border-radius: 100%;\n  border: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9jb21wb25lbnRzL2NhcnQtY29tcC9jYXJ0LWNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBbUI7RUFDbkIsdUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0ksY0FBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVksRUFBQTs7QUFFZDtFQUNFLGNBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQtY29tcC9jYXJ0LWNvbXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiA2O1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDhweDtcbn1cbi5idG4ge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMHB4IDtcbiAgfVxuICAuYnRuMSB7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IDtcbiAgfVxuXG5cbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/cart-comp/cart-comp.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cart-comp/cart-comp.component.ts ***!
  \*************************************************************/
/*! exports provided: CartCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCompComponent", function() { return CartCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



 // required for app->firestore communication


var CartCompComponent = /** @class */ (function () {
    function CartCompComponent(cs, alert, toast) {
        this.cs = cs;
        this.alert = alert;
        this.toast = toast;
        this.list = [];
    }
    CartCompComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.list = [];
                console.log(this.cID);
                this.cs.getItemsCarts(this.cID, this.list).subscribe(function (citems) {
                    _this.list = citems;
                    console.log(_this.list);
                });
                return [2 /*return*/];
            });
        });
    };
    CartCompComponent.prototype.delete = function (itemID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
                        console.log(itemID);
                        return [4 /*yield*/, this.alert.create({
                                header: 'Warning',
                                message: 'Are you sure you want to delete this item?',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel'
                                    },
                                    {
                                        text: 'Delete',
                                        handler: function (data) {
                                            db.collection('cart').doc(_this.cID).collection('items').doc(itemID).delete().then(function (any) {
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
    CartCompComponent.prototype.increase = function (itemID, qty) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.qty = qty + 1;
                db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
                this.cs.getCart(this.cID).subscribe(function (cart) {
                    _this.cart = cart;
                });
                console.log(this.cart.total);
                /* db.collection('cart').doc(this.cID).update({
                   total: (this.cart.total+itemID.item_price)
                 });*/
                console.log(this.cID.total + itemID.item_price);
                db.collection('cart').doc(this.cID).collection('items').doc(itemID).update({
                    item_qty: this.qty
                });
                this.ngOnInit();
                return [2 /*return*/];
            });
        });
    };
    CartCompComponent.prototype.decrease = function (itemID, qty) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.qty = qty - 1;
                        console.log(this.qty);
                        db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
                        if (!(this.qty > 0)) return [3 /*break*/, 1];
                        /*db.collection('cart').doc(this.cID).update({
                          total: (this.cID.total-itemID.item_price)
                        });*/
                        db.collection('cart').doc(this.cID).collection('items').doc(itemID).update({
                            item_qty: this.qty
                        });
                        this.ngOnInit();
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.toast.create({
                            message: 'Cannot decrease!',
                            duration: 1000,
                            position: 'top'
                        })];
                    case 2:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartCompComponent.prototype, "cID", void 0);
    CartCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-comp',
            template: __webpack_require__(/*! ./cart-comp.component.html */ "./src/app/components/cart-comp/cart-comp.component.html"),
            styles: [__webpack_require__(/*! ./cart-comp.component.scss */ "./src/app/components/cart-comp/cart-comp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], CartCompComponent);
    return CartCompComponent;
}());



/***/ }),

/***/ "./src/app/components/cart-total/cart-total.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/cart-total/cart-total.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Total: ${{total}}\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/cart-total/cart-total.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/cart-total/cart-total.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC10b3RhbC9jYXJ0LXRvdGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/cart-total/cart-total.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-total/cart-total.component.ts ***!
  \***************************************************************/
/*! exports provided: CartTotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartTotalComponent", function() { return CartTotalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");




var CartTotalComponent = /** @class */ (function () {
    function CartTotalComponent(cs) {
        this.cs = cs;
        this.total = 0;
    }
    CartTotalComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.list = [];
                console.log(this.cID);
                this.cs.getCartTotal(this.cID).subscribe(function (total) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, total];
                            case 1:
                                _a.sent();
                                console.log(total);
                                this.total = total;
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartTotalComponent.prototype, "cID", void 0);
    CartTotalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-total',
            template: __webpack_require__(/*! ./cart-total.component.html */ "./src/app/components/cart-total/cart-total.component.html"),
            styles: [__webpack_require__(/*! ./cart-total.component.scss */ "./src/app/components/cart-total/cart-total.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartTotalComponent);
    return CartTotalComponent;
}());



/***/ }),

/***/ "./src/app/components/res-comp/res-comp.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/res-comp/res-comp.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-label class=\"name\">{{ res_name }}</ion-label>"

/***/ }),

/***/ "./src/app/components/res-comp/res-comp.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/res-comp/res-comp.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name {\n  text-align: left;\n  font-size: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9jb21wb25lbnRzL3Jlcy1jb21wL3Jlcy1jb21wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzLWNvbXAvcmVzLWNvbXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/res-comp/res-comp.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/res-comp/res-comp.component.ts ***!
  \***********************************************************/
/*! exports provided: ResCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResCompComponent", function() { return ResCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_resturant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resturant.service */ "./src/app/resturant.service.ts");



var ResCompComponent = /** @class */ (function () {
    function ResCompComponent(rs) {
        this.rs = rs;
        this.res_name = "";
    }
    ResCompComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.getSingleResturant(this.resID).then(function (res) {
            _this.res = res;
            _this.res_name = res.resturantName;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResCompComponent.prototype, "resID", void 0);
    ResCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-res-comp',
            template: __webpack_require__(/*! ./res-comp.component.html */ "./src/app/components/res-comp/res-comp.component.html"),
            styles: [__webpack_require__(/*! ./res-comp.component.scss */ "./src/app/components/res-comp/res-comp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_resturant_service__WEBPACK_IMPORTED_MODULE_2__["ResturantService"]])
    ], ResCompComponent);
    return ResCompComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~cus-history-cus-history-module~cust-cart-cust-cart-module.js.map