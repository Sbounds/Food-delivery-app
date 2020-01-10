(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-res-dashboard-res-module"],{

/***/ "./src/app/add-item-modal/add-item-modal.page.html":
/*!*********************************************************!*\
  !*** ./src/app/add-item-modal/add-item-modal.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Add Item</ion-title>\n    <div text-right>\n        <ion-button color = \"danger\" (click)=\"dismiss()\">X</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label position = \"floating\">Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"itemName\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position = \"floating\">Price</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"itemPrice\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position = \"floating\">Description</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"itemDescription\"></ion-input>\n    </ion-item>\n    <ion-button fill=\"solid\" expand=\"block\" color=\"success\" (click)=\"addItem()\">Add</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-item-modal/add-item-modal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/add-item-modal/add-item-modal.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  position: relative;\n  text-align: center; }\n\n/*ion-content {\n    --ion-background-color: rgb(187, 255, 131);\n}*/\n\nion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-img {\n  height: 45px;\n  width: auto; }\n\n/*ion-button{\n    background-color: rgb(207, 50, 50);\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9hZGQtaXRlbS1tb2RhbC9hZGQtaXRlbS1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1pdGVtLW1vZGFsL2FkZC1pdGVtLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7O0VDQ0U7O0FERUY7RUFDSSwwQ0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmOztFQ0RFIiwiZmlsZSI6InNyYy9hcHAvYWRkLWl0ZW0tbW9kYWwvYWRkLWl0ZW0tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDI1NSwgMTMxKTtcbn0qL1xuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcbn1cblxuaW9uLWltZyB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4vKmlvbi1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgNTAsIDUwKTtcbn0qLyIsImlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi8qaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDI1NSwgMTMxKTtcbn0qL1xuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7IH1cblxuaW9uLWltZyB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IGF1dG87IH1cblxuLyppb24tYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDUwLCA1MCk7XG59Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-item-modal/add-item-modal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-item-modal/add-item-modal.page.ts ***!
  \*******************************************************/
/*! exports provided: AddItemModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemModalPage", function() { return AddItemModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resturant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resturant.service */ "./src/app/resturant.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");


 // required for app->firestore communication
 // required for app->firestore communication




var AddItemModalPage = /** @class */ (function () {
    function AddItemModalPage(modalController, router, resSer, afs, navParams) {
        this.modalController = modalController;
        this.router = router;
        this.resSer = resSer;
        this.afs = afs;
        this.navParams = navParams;
        this.itemName = "";
        this.itemPrice = "";
        this.itemDescription = "";
        this.user = this.navParams.get('userOb');
        console.log(this.user.res_id);
    }
    AddItemModalPage.prototype.ngOnInit = function () {
    };
    AddItemModalPage.prototype.addItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, _a, itemName, itemPrice, itemDescription, id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
                _a = this, itemName = _a.itemName, itemPrice = _a.itemPrice, itemDescription = _a.itemDescription;
                try {
                    id = this.afs.createId();
                    db.collection('resturant').doc(this.user.res_id).collection('menuItem').doc(id).set({
                        item_name: itemName,
                        item_price: itemPrice,
                        item_description: itemDescription,
                        item_id: id
                    });
                }
                catch (error) {
                    console.dir(error);
                }
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    AddItemModalPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    AddItemModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item-modal',
            template: __webpack_require__(/*! ./add-item-modal.page.html */ "./src/app/add-item-modal/add-item-modal.page.html"),
            styles: [__webpack_require__(/*! ./add-item-modal.page.scss */ "./src/app/add-item-modal/add-item-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _resturant_service__WEBPACK_IMPORTED_MODULE_6__["ResturantService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]])
    ], AddItemModalPage);
    return AddItemModalPage;
}());



/***/ }),

/***/ "./src/app/dashboard-res/dashboard-res.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-res/dashboard-res.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardResPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardResPageModule", function() { return DashboardResPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_res_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-res.page */ "./src/app/dashboard-res/dashboard-res.page.ts");
/* harmony import */ var _add_item_modal_add_item_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-item-modal/add-item-modal.page */ "./src/app/add-item-modal/add-item-modal.page.ts");
/* harmony import */ var _update_item_update_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../update-item/update-item.page */ "./src/app/update-item/update-item.page.ts");









var routes = [
    {
        path: '',
        component: _dashboard_res_page__WEBPACK_IMPORTED_MODULE_6__["DashboardResPage"]
    }
];
var DashboardResPageModule = /** @class */ (function () {
    function DashboardResPageModule() {
    }
    DashboardResPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_res_page__WEBPACK_IMPORTED_MODULE_6__["DashboardResPage"], _add_item_modal_add_item_modal_page__WEBPACK_IMPORTED_MODULE_7__["AddItemModalPage"], _update_item_update_item_page__WEBPACK_IMPORTED_MODULE_8__["UpdateItemPage"]],
            entryComponents: [_add_item_modal_add_item_modal_page__WEBPACK_IMPORTED_MODULE_7__["AddItemModalPage"], _update_item_update_item_page__WEBPACK_IMPORTED_MODULE_8__["UpdateItemPage"]]
        })
    ], DashboardResPageModule);
    return DashboardResPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard-res/dashboard-res.page.html":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-res/dashboard-res.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n            <ion-toolbar>\n              <ion-buttons slot=\"start\">\n                <ion-button (click)=\"openFirst()\">\n                  <ion-icon fill=\"icon-only\" name=\"menu\">                 \n\n                  </ion-icon>\n                </ion-button>\n              </ion-buttons>\n              <table>\n                  <tr>\n                    <td><ion-title><b><i>Dashboard</i></b></ion-title></td>\n                    <td><ion-img src=\"../assets/icon/oxford2go.png\"></ion-img></td>\n                  </tr>\n                </table>\n            </ion-toolbar>\n          </ion-header>\n        \n    <ion-content padding>\n      <ion-searchbar (ionChange)=\"searchItems($event)\"></ion-searchbar>\n      <ion-list *ngFor = \"let menI of misub\">\n          <ion-card>\n              <ion-card-header>\n                  <ion-card-title >{{ menI.item_name }}</ion-card-title>\n                </ion-card-header>\n              \n                <ion-card-content>\n                  Price: {{menI.item_price}}\n                  <br>\n                  Description: {{menI.item_description}}\n                  <br>\n                  <ion-button (click) = \"updateItem(menI)\" color=\"light\">Update</ion-button>\n                  <ion-button (click) = \"deleteItem(menI.item_id)\" color =\"danger\">Delete</ion-button>\n\n                </ion-card-content>\n              </ion-card>\n      </ion-list>\n\n      <!--add item button-->\n      <ion-button (click) = \"addMenuItem()\" color=\"success\">Add Menu Item</ion-button>\n\n      <ion-input [(ngModel)]=\"value\"></ion-input>\n    </ion-content>\n      \n"

/***/ }),

/***/ "./src/app/dashboard-res/dashboard-res.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-res/dashboard-res.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*ion-content {\n    //--ion-background-color: rgb(196, 196, 196);\n}*/\nion-img {\n  height: 45px;\n  width: auto; }\nion-content {\n  --ion-background-color: rgb(243, 243, 243); }\nion-card {\n  background-color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9kYXNoYm9hcmQtcmVzL2Rhc2hib2FyZC1yZXMucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQtcmVzL2Rhc2hib2FyZC1yZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FERUY7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBO0FBR2Y7RUFDSSwwQ0FBdUIsRUFBQTtBQUczQjtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkLXJlcy9kYXNoYm9hcmQtcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW9uLWNvbnRlbnQge1xuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xufSovXG5cbmlvbi1pbWcge1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG5pb24tY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufSIsIi8qaW9uLWNvbnRlbnQge1xuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xufSovXG5pb24taW1nIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogYXV0bzsgfVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTsgfVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard-res/dashboard-res.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard-res/dashboard-res.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardResPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardResPage", function() { return DashboardResPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_item_modal_add_item_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-item-modal/add-item-modal.page */ "./src/app/add-item-modal/add-item-modal.page.ts");
/* harmony import */ var src_app_menuItem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/menuItem.service */ "./src/app/menuItem.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _resturant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resturant.service */ "./src/app/resturant.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _update_item_update_item_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../update-item/update-item.page */ "./src/app/update-item/update-item.page.ts");



//import { ModalMenuItemPage } from '../modal-menu-item/modal-menu-item.page';






 // required for app->firestore communication
 // required for app->firestore communication

var DashboardResPage = /** @class */ (function () {
    function DashboardResPage(modalController, menu, afs, miData, resSer, us, alert, nav) {
        this.modalController = modalController;
        this.menu = menu;
        this.afs = afs;
        this.miData = miData;
        this.resSer = resSer;
        this.us = us;
        this.alert = alert;
        this.nav = nav;
        this.createSuccess = false;
        this.resId = "";
        this.uid = "";
        // mil = [];
        this.misub = [];
        this.misubCOPY = [];
    }
    //subscriptions=[];
    DashboardResPage.prototype.openFirst = function () {
        this.menu.enable(true, 'rmenu');
        this.menu.toggle('rmenu');
        console.log(this.menu.isOpen());
    };
    DashboardResPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var s1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.uid = "";
                this.misub = [];
                s1 = this.us.getCurrentUID().subscribe(function (uid) {
                    console.log(uid);
                    _this.uid = uid;
                    _this.us.getSingleUser(uid).then(function (user) {
                        _this.user = user;
                        console.log(_this.user);
                        //console.log(this.user[0].res_id);
                        var s2 = _this.resSer.getMenuSubcollection(_this.user.res_id, _this.misub).subscribe(function (menuItems) {
                            _this.misub = menuItems;
                            _this.misubCOPY = menuItems;
                            console.log(_this.misub);
                        });
                        // this.subscriptions.push(s2);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardResPage.prototype.initializeItems = function () {
        this.misub = this.misubCOPY;
    };
    DashboardResPage.prototype.searchItems = function (event) {
        var searchString = event.target.value;
        this.initializeItems();
        if (!searchString) {
            return;
        }
        this.misub = this.misub.filter(function (v) {
            if (v.item_name && searchString) {
                if (v.item_name.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(searchString, this.misub.length);
    };
    DashboardResPage.prototype.addMenuItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modalElement;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.user.res_id);
                        return [4 /*yield*/, this.modalController.create({
                                component: _add_item_modal_add_item_modal_page__WEBPACK_IMPORTED_MODULE_3__["AddItemModalPage"],
                                componentProps: {
                                    userOb: this.user
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
    DashboardResPage.prototype.deleteItem = function (menId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = firebase_app__WEBPACK_IMPORTED_MODULE_8__["firestore"]();
                        console.log(menId);
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
                                            db.collection('resturant').doc(_this.user.res_id).collection('menuItem').doc(menId).delete().then(function (any) {
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
    DashboardResPage.prototype.updateItem = function (menI) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _update_item_update_item_page__WEBPACK_IMPORTED_MODULE_10__["UpdateItemPage"],
                            componentProps: {
                                resId: this.user.res_id,
                                menI: menI
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardResPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-res',
            template: __webpack_require__(/*! ./dashboard-res.page.html */ "./src/app/dashboard-res/dashboard-res.page.html"),
            styles: [__webpack_require__(/*! ./dashboard-res.page.scss */ "./src/app/dashboard-res/dashboard-res.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            src_app_menuItem_service__WEBPACK_IMPORTED_MODULE_4__["MenuItemService"],
            _resturant_service__WEBPACK_IMPORTED_MODULE_6__["ResturantService"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], DashboardResPage);
    return DashboardResPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-res-dashboard-res-module.js.map