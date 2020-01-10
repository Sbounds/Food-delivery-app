(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["res-cart-res-cart-module"],{

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

/***/ "./src/app/res-cart/res-cart.module.ts":
/*!*********************************************!*\
  !*** ./src/app/res-cart/res-cart.module.ts ***!
  \*********************************************/
/*! exports provided: ResCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResCartPageModule", function() { return ResCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _res_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./res-cart.page */ "./src/app/res-cart/res-cart.page.ts");
/* harmony import */ var _components_cart_comp_cart_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cart-comp/cart-comp.component */ "./src/app/components/cart-comp/cart-comp.component.ts");
/* harmony import */ var _components_res_cart_comp_res_cart_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/res-cart-comp/res-cart-comp.component */ "./src/app/components/res-cart-comp/res-cart-comp.component.ts");









var routes = [
    {
        path: '',
        component: _res_cart_page__WEBPACK_IMPORTED_MODULE_6__["ResCartPage"]
    }
];
var ResCartPageModule = /** @class */ (function () {
    function ResCartPageModule() {
    }
    ResCartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_res_cart_page__WEBPACK_IMPORTED_MODULE_6__["ResCartPage"], _components_cart_comp_cart_comp_component__WEBPACK_IMPORTED_MODULE_7__["CartCompComponent"], _components_res_cart_comp_res_cart_comp_component__WEBPACK_IMPORTED_MODULE_8__["ResCartCompComponent"]]
        })
    ], ResCartPageModule);
    return ResCartPageModule;
}());



/***/ }),

/***/ "./src/app/res-cart/res-cart.page.html":
/*!*********************************************!*\
  !*** ./src/app/res-cart/res-cart.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   \n     \n         \n        \n   <!--- <ion-img  src=\"../assets/icon/oxford2go.png\" class ='img'  ></ion-img>-->\n    <ion-toolbar>\n       <ion-title text-center> Current Orders </ion-title>\n      \n   \n        <ion-buttons class= buttons slot=\"start\">\n          <ion-button class= buttons (click)=\"openFirst()\">\n            <ion-icon fill=\"icon-only\" name=\"menu\">                 \n\n            </ion-icon>\n          </ion-button>\n        </ion-buttons>\n           \n              \n            \n          \n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor = \"let c of resCart\">\n   <ion-label text-center> <app-res-cart-comp [cID]=c.cart_id></app-res-cart-comp> </ion-label>\n   <ion-grid>\n    <ion-row>\n      <ion-col text-left>\n          <ion-button class = 'buttona' (click)=\"accept(c.cart_id)\">Accept Cart</ion-button>\n      </ion-col>\n   <ion-col text-center>\n      <ion-button class = 'buttor'(click)=\"reject(c.cart_id)\">Reject Cart</ion-button>\n  </ion-col>\n    </ion-row>\n    </ion-grid> \n   \n    \n\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/res-cart/res-cart.page.scss":
/*!*********************************************!*\
  !*** ./src/app/res-cart/res-cart.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  width: 40%;\n  height: 40%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.buttona {\n  width: 120px; }\n\n.buttor {\n  width: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9yZXMtY2FydC9yZXMtY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUVYLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVzLWNhcnQvcmVzLWNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiBcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uYnV0dG9uYSB7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuLmJ1dHRvciB7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/res-cart/res-cart.page.ts":
/*!*******************************************!*\
  !*** ./src/app/res-cart/res-cart.page.ts ***!
  \*******************************************/
/*! exports provided: ResCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResCartPage", function() { return ResCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");





 // required for app->firestore communication

var ResCartPage = /** @class */ (function () {
    function ResCartPage(cs, us, menu) {
        this.cs = cs;
        this.us = us;
        this.menu = menu;
        this.uid = "";
        this.resCart = [];
    }
    ResCartPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.resCart = [];
                this.us.getCurrentUID().subscribe(function (uid) {
                    _this.uid = uid;
                    console.log(_this.uid);
                    _this.us.getSingleUser(_this.uid).then(function (user) {
                        _this.user = user;
                        console.log(_this.user.res_id);
                        _this.cs.getCurResCarts(_this.user.res_id, _this.resCart).subscribe(function (cart) {
                            _this.resCart = cart;
                            console.log(_this.resCart);
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ResCartPage.prototype.openFirst = function () {
        this.menu.enable(true, 'rmenu');
        this.menu.toggle('rmenu');
        console.log(this.menu.isOpen());
    };
    ResCartPage.prototype.accept = function (cartID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"]();
                try {
                    db.collection('cart').doc(cartID).update({
                        status: 2
                    }).then(function () {
                        console.log("order accepted");
                    });
                }
                catch (_b) {
                    console.error("error placing order");
                }
                this.ngOnInit();
                return [2 /*return*/];
            });
        });
    };
    ResCartPage.prototype.reject = function (cartID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"]();
                try {
                    db.collection('cart').doc(cartID).update({
                        status: 5
                    }).then(function () {
                        console.log("order denied");
                    });
                }
                catch (_b) {
                    console.error("error placing order");
                }
                this.ngOnInit();
                return [2 /*return*/];
            });
        });
    };
    ResCartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-res-cart',
            template: __webpack_require__(/*! ./res-cart.page.html */ "./src/app/res-cart/res-cart.page.html"),
            styles: [__webpack_require__(/*! ./res-cart.page.scss */ "./src/app/res-cart/res-cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], ResCartPage);
    return ResCartPage;
}());



/***/ })

}]);
//# sourceMappingURL=res-cart-res-cart-module.js.map