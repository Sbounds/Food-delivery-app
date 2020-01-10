(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-cust-dashboard-cust-module"],{

/***/ "./src/app/dashboard-cust/dashboard-cust.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-cust/dashboard-cust.module.ts ***!
  \*********************************************************/
/*! exports provided: DashboardCustPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCustPageModule", function() { return DashboardCustPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_cust_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-cust.page */ "./src/app/dashboard-cust/dashboard-cust.page.ts");
/* harmony import */ var _modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-page/modal-page.page */ "./src/app/modal-page/modal-page.page.ts");
/* harmony import */ var _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view-resturant-modal/view-resturant-modal.page */ "./src/app/view-resturant-modal/view-resturant-modal.page.ts");









var routes = [
    {
        path: '',
        component: _dashboard_cust_page__WEBPACK_IMPORTED_MODULE_6__["DashboardCustPage"]
    }
];
var DashboardCustPageModule = /** @class */ (function () {
    function DashboardCustPageModule() {
    }
    DashboardCustPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_cust_page__WEBPACK_IMPORTED_MODULE_6__["DashboardCustPage"], _modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_7__["ModalPagePage"], _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_8__["ViewResturantModalPage"]],
            entryComponents: [_modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_7__["ModalPagePage"], _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_8__["ViewResturantModalPage"]]
        })
    ], DashboardCustPageModule);
    return DashboardCustPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard-cust/dashboard-cust.page.html":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-cust/dashboard-cust.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"openFirst()\">\n          <ion-icon fill=\"icon-only\" name=\"menu\">\n          </ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <table>\n          <tr>\n            <td><ion-title><b><i>Restaurants</i></b></ion-title></td>\n            <td><ion-img src=\"../assets/icon/oxford2go.png\"></ion-img></td>\n          </tr>\n        </table>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n \n<!--<ion-button (click)=\"presentModal()\">Present Modal</ion-button>--->\n\n<!--<div padding>\n\n  <ion-button shape = \"round\" expand = \"full\" size = \"large\" (click) = \"aToEAlpha()\">A-E</ion-button>\n  <ion-button shape = \"round\" expand = \"full\" size = \"large\" (click) = \"fToLAlpha()\">F-L</ion-button>\n  <ion-button shape = \"round\" expand = \"full\" size = \"large\" (click) = \"mToSAlpha()\">M-S</ion-button>\n  <ion-button shape = \"round\" expand = \"full\" size = \"large\" (click) = \"tToZAlpha()\">T-Z</ion-button>\n</div>\n-->\n\n<ion-searchbar (ionChange)=\"getItems($event)\"></ion-searchbar>\n<div *ngFor = \"let rs of rsl\">\n  <ion-card>\n    <ion-card-header>\n        <ion-card-title text-center>{{ rs.resturantName }}</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <!--<div text-center>\n        <ion-label text-center> cuisine type</ion-label>\n        </div>-->\n        <div text-center>\n       <ion-label text-center> {{rs.description}}</ion-label>\n      </div>\n      <div text-center> \n      <ion-button  (click)=\"viewResturant(rs)\" >Open Menu</ion-button>\n    </div> \n    </ion-card-content>\n    </ion-card>\n  \n</div>\n\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard-cust/dashboard-cust.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-cust/dashboard-cust.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  position: relative;\n  text-align: center; }\n\nion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-img {\n  height: 45px;\n  width: auto; }\n\nion-button {\n  position: relative;\n  text-align: center; }\n\nion-card {\n  background-color: #ffffff; }\n\nion-searchbar {\n  background-color: #eeeeee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9kYXNoYm9hcmQtY3VzdC9kYXNoYm9hcmQtY3VzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMENBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1jdXN0L2Rhc2hib2FyZC1jdXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG5pb24taW1nIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5pb24tYnV0dG9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuaW9uLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLXNlYXJjaGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard-cust/dashboard-cust.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-cust/dashboard-cust.page.ts ***!
  \*******************************************************/
/*! exports provided: DashboardCustPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCustPage", function() { return DashboardCustPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resturant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resturant.service */ "./src/app/resturant.service.ts");
/* harmony import */ var _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-resturant-modal/view-resturant-modal.page */ "./src/app/view-resturant-modal/view-resturant-modal.page.ts");






var DashboardCustPage = /** @class */ (function () {
    function DashboardCustPage(modalController, menu, rsData) {
        //this.rsData =firebase.database().ref(/resturant);
        this.modalController = modalController;
        this.menu = menu;
        this.rsData = rsData;
        this.rsl = [];
        this.rslCOPY = [];
    }
    DashboardCustPage.prototype.openFirst = function () {
        this.menu.enable(true, 'cmenu');
        this.menu.toggle('cmenu');
        console.log(this.menu.isOpen());
    };
    DashboardCustPage.prototype.ngOnInit = function () {
        var _this = this;
        this.rsl = [];
        this.rsData.getResturant(this.rsl).then(function (list) {
            _this.rsl = list;
            _this.rslCOPY = list;
            console.log(_this.rsl);
        });
    };
    DashboardCustPage.prototype.initializeItems = function () {
        this.rsl = this.rslCOPY;
    };
    DashboardCustPage.prototype.getItems = function (event) {
        var searchString = event.target.value;
        this.initializeItems();
        if (!searchString) {
            return;
        }
        this.rsl = this.rsl.filter(function (v) {
            if (v.resturantName && searchString) {
                if (v.resturantName.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(searchString, this.rsl.length);
        //this.rsl = this.rslCOPY;
        //this.rslCOPY = this.rsl;
        //this.rsl.filter(rs=>{
        //  rs.resturantName.includes(searchString);
        //})
        //Reset items back to all of the items
        // this.initializeItems();
        // // set q to the value of the searchbar
        //this.ngOnInit();
        //let val = rsl.target.value;
        // if (val && val.trim() !== '') {
        //   this.rsl.filter(function(user) {
        //     return user.name.toLowerCase().includes(val.toLowerCase());
        //   });
        // }
    };
    DashboardCustPage.prototype.openEnd = function () {
        this.menu.open('end');
    };
    DashboardCustPage.prototype.openCustom = function () {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    };
    DashboardCustPage.prototype.viewResturant = function (rs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modalElement;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_4__["ViewResturantModalPage"],
                            componentProps: {
                                rs: rs
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
    DashboardCustPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-cust',
            template: __webpack_require__(/*! ./dashboard-cust.page.html */ "./src/app/dashboard-cust/dashboard-cust.page.html"),
            styles: [__webpack_require__(/*! ./dashboard-cust.page.scss */ "./src/app/dashboard-cust/dashboard-cust.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _resturant_service__WEBPACK_IMPORTED_MODULE_3__["ResturantService"]])
    ], DashboardCustPage);
    return DashboardCustPage;
}());



/***/ }),

/***/ "./src/app/modal-page/modal-page.page.html":
/*!*************************************************!*\
  !*** ./src/app/modal-page/modal-page.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ val }}</ion-title>\n    <div text-right>\n      <ion-button color = \"danger\" (click)=\"dismiss()\">X</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor = \"let rs of resList\">\n    <ion-button (click)= \"viewResturant(rs)\">{{ rs.resturantName }}</ion-button>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modal-page/modal-page.page.scss":
/*!*************************************************!*\
  !*** ./src/app/modal-page/modal-page.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLXBhZ2UvbW9kYWwtcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modal-page/modal-page.page.ts":
/*!***********************************************!*\
  !*** ./src/app/modal-page/modal-page.page.ts ***!
  \***********************************************/
/*! exports provided: ModalPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPagePage", function() { return ModalPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-resturant-modal/view-resturant-modal.page */ "./src/app/view-resturant-modal/view-resturant-modal.page.ts");




var ModalPagePage = /** @class */ (function () {
    function ModalPagePage(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.val = this.navParams.get('value');
        this.resList = this.navParams.get('resList');
    }
    ModalPagePage.prototype.ngOnInit = function () {
    };
    ModalPagePage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    ModalPagePage.prototype.viewResturant = function (rs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modalElement;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _view_resturant_modal_view_resturant_modal_page__WEBPACK_IMPORTED_MODULE_3__["ViewResturantModalPage"],
                            componentProps: {
                                rs: rs
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
    ModalPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-page',
            template: __webpack_require__(/*! ./modal-page.page.html */ "./src/app/modal-page/modal-page.page.html"),
            styles: [__webpack_require__(/*! ./modal-page.page.scss */ "./src/app/modal-page/modal-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], ModalPagePage);
    return ModalPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-cust-dashboard-cust-module.js.map