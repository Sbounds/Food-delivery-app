(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cust-cart-cust-cart-module~dashboard-cust-dashboard-cust-module"],{

/***/ "./src/app/view-resturant-modal/view-resturant-modal.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/view-resturant-modal/view-resturant-modal.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ resturant.resturantName }}</ion-title>\n    <div text-right>\n        <ion-button color = \"danger\" (click)=\"dismiss()\">X</ion-button>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor = \"let mi of menItems\">\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>{{ mi.item_name }}</ion-card-title>\n          </ion-card-header>\n        \n          <ion-card-content>\n            Price: {{mi.item_price}}\n            <br>\n            Description: {{mi.item_description}}\n            <br>\n            <ion-button (click)=\"addToCart(mi)\" size = \"small\">Add To Cart</ion-button>\n          </ion-card-content>\n        </ion-card>\n      \n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/view-resturant-modal/view-resturant-modal.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/view-resturant-modal/view-resturant-modal.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcmVzdHVyYW50LW1vZGFsL3ZpZXctcmVzdHVyYW50LW1vZGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view-resturant-modal/view-resturant-modal.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view-resturant-modal/view-resturant-modal.page.ts ***!
  \*******************************************************************/
/*! exports provided: ViewResturantModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResturantModalPage", function() { return ViewResturantModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resturant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resturant.service */ "./src/app/resturant.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




 // required for app->firestore communication




var ViewResturantModalPage = /** @class */ (function () {
    function ViewResturantModalPage(modalController, navParams, resSer, afs, cart, user, toast) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.resSer = resSer;
        this.afs = afs;
        this.cart = cart;
        this.user = user;
        this.toast = toast;
        this.rid = "";
        this.status = 0;
        this.uid = "";
        this.menItems = [];
        this.resturant = this.navParams.get('rs');
        console.log(this.resturant);
    }
    ViewResturantModalPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var s2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                s2 = this.resSer.getMenuSubcollection(this.resturant.res_id, this.menItems).subscribe(function (menuItems) {
                    _this.menItems = menuItems;
                    console.log(_this.menItems);
                });
                return [2 /*return*/];
            });
        });
    };
    ViewResturantModalPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    ViewResturantModalPage.prototype.addToCart = function (mi) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
                console.log(mi.item_id);
                this.user.getCurrentUID().subscribe(function (uid) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var query1, snapshot1, id, toast, _a;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.uid = uid;
                                query1 = db.collection('cart').where('res_id', '==', this.resturant.res_id).where('user_id', '==', this.uid).where('status', '==', 0);
                                return [4 /*yield*/, query1.get()];
                            case 1:
                                snapshot1 = _b.sent();
                                if (!!snapshot1.empty) return [3 /*break*/, 2];
                                //adding to existing cart
                                console.log("in if statement");
                                //let itemId = this.afs.createId()
                                this.cart.getCurCartforRes(this.uid, this.resturant.res_id, this.existResOpenCart).subscribe(function (cart) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var query2, snapshot2, toast, _a;
                                    var _this = this;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                this.existResOpenCart = cart;
                                                console.log(this.existResOpenCart.cart_id);
                                                query2 = db.collection('cart').doc(this.existResOpenCart.cart_id).collection('items').where('item_id', '==', mi.item_id);
                                                return [4 /*yield*/, query2.get()];
                                            case 1:
                                                snapshot2 = _b.sent();
                                                if (!!snapshot2.empty) return [3 /*break*/, 2];
                                                console.log("in snapsot not empty");
                                                console.log(this.existResOpenCart.cart_id);
                                                this.cart.getSingleItem(this.existResOpenCart.cart_id, mi.item_id).then(function (item) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var toast, _a;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                //console.log(item);
                                                                console.log(this.existItem);
                                                                this.existItem = item;
                                                                //this.updatedQty= item.item_qty + 1;
                                                                console.log(this.updatedQty);
                                                                _b.label = 1;
                                                            case 1:
                                                                _b.trys.push([1, 4, , 5]);
                                                                /**/
                                                                db.collection('cart').doc(this.existResOpenCart.cart_id).collection('items').doc(mi.item_id).update({
                                                                    item_qty: (this.existItem.item_qty + 1)
                                                                });
                                                                return [4 /*yield*/, this.toast.create({
                                                                        message: 'Item added to existing cart',
                                                                        duration: 1000,
                                                                        position: 'top'
                                                                    })];
                                                            case 2:
                                                                toast = _b.sent();
                                                                return [4 /*yield*/, toast.present()];
                                                            case 3: return [2 /*return*/, _b.sent()];
                                                            case 4:
                                                                _a = _b.sent();
                                                                console.log("error");
                                                                return [3 /*break*/, 5];
                                                            case 5: return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                                return [3 /*break*/, 6];
                                            case 2:
                                                _b.trys.push([2, 5, , 6]);
                                                db.collection('cart').doc(this.existResOpenCart.cart_id).collection('items').doc(mi.item_id).set({
                                                    item_name: mi.item_name,
                                                    item_price: mi.item_price,
                                                    item_description: mi.item_description,
                                                    item_id: mi.item_id,
                                                    item_qty: 1
                                                });
                                                return [4 /*yield*/, this.toast.create({
                                                        message: 'Item added to existing cart',
                                                        duration: 1000,
                                                        position: 'top'
                                                    })];
                                            case 3:
                                                toast = _b.sent();
                                                return [4 /*yield*/, toast.present()];
                                            case 4: return [2 /*return*/, _b.sent()];
                                            case 5:
                                                _a = _b.sent();
                                                console.log("There has been an error");
                                                return [3 /*break*/, 6];
                                            case 6: return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [3 /*break*/, 7];
                            case 2:
                                //making a new cart
                                console.log("in else statement");
                                id = this.afs.createId();
                                _b.label = 3;
                            case 3:
                                _b.trys.push([3, 6, , 7]);
                                db.collection('cart').doc(id).set({
                                    user_id: this.uid,
                                    cart_id: id,
                                    res_id: this.resturant.res_id,
                                    status: this.status
                                    //total: mi.item_price
                                });
                                db.collection('cart').doc(id).collection('items').doc(mi.item_id).set({
                                    item_name: mi.item_name,
                                    item_price: mi.item_price,
                                    item_description: mi.item_description,
                                    item_id: mi.item_id,
                                    item_qty: 1
                                });
                                return [4 /*yield*/, this.toast.create({
                                        message: 'Item added to new cart',
                                        duration: 1000,
                                        position: 'top'
                                    })];
                            case 4:
                                toast = _b.sent();
                                return [4 /*yield*/, toast.present()];
                            case 5: return [2 /*return*/, _b.sent()];
                            case 6:
                                _a = _b.sent();
                                console.log("error adding");
                                return [3 /*break*/, 7];
                            case 7: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ViewResturantModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-resturant-modal',
            template: __webpack_require__(/*! ./view-resturant-modal.page.html */ "./src/app/view-resturant-modal/view-resturant-modal.page.html"),
            styles: [__webpack_require__(/*! ./view-resturant-modal.page.scss */ "./src/app/view-resturant-modal/view-resturant-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _resturant_service__WEBPACK_IMPORTED_MODULE_3__["ResturantService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"],
            _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ViewResturantModalPage);
    return ViewResturantModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~cust-cart-cust-cart-module~dashboard-cust-dashboard-cust-module.js.map