(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label position = \"floating\">Email</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label position = \"floating\">Password</ion-label>\n            <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position = \"floating\">Confirm Password</ion-label>\n            <ion-input type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\n        </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-label>Pick User Type</ion-label>\n            <ion-select [(ngModel)]=\"userType\" placeholder=\"Select One\">\n              <ion-select-option value=\"customer\">Customer</ion-select-option>\n              <ion-select-option value=\"owner\">Resturant Owner</ion-select-option>\n              <ion-select-option value=\"deliver\">Deliverer</ion-select-option>\n            </ion-select>\n          </ion-item>\n          </ion-list>\n          \n          \n    \n          <ion-list>\n              <ion-item *ngIf=\"userType =='customer'\">\n                <ion-label position= \"floating\">First Name</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"user_firstName\"></ion-input>\n              </ion-item>\n              \n              <ion-item *ngIf=\"userType =='customer'\">\n                <ion-label position= \"floating\">Last Name</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"user_lastName\"></ion-input>\n              </ion-item>\n          \n              <ion-item *ngIf=\"userType =='customer'\">\n                <ion-label position= \"floating\">Contact Number</ion-label>\n                <ion-input type = \"tel\" [(ngModel)]=\"contactNumber\" maxlength=10></ion-input>\n              </ion-item>\n          \n              <ion-item *ngIf=\"userType =='customer'\">\n                <ion-label position= \"floating\">Street Address</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"streetAddress\"></ion-input>\n              </ion-item>\n          \n              <ion-item *ngIf=\"userType =='customer'\">\n                <ion-label position= \"floating\">City</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"city\"></ion-input>\n              </ion-item>\n          \n              <ion-item *ngIf=\"userType =='customer'\">\n                <ion-label position= \"floating\">State</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"state\"></ion-input>\n              </ion-item>\n              <ion-item *ngIf=\"userType =='customer'\">\n                <ion-label position= \"floating\">Zipcode</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"zipcode\"></ion-input>\n              </ion-item>\n          \n              <!--Owner pop up fields-->\n              <ion-item *ngIf = \"userType =='owner'\">\n                <ion-header>Personal Information</ion-header>\n              </ion-item>\n\n              <ion-item *ngIf=\"userType =='owner'\">\n                <ion-label position= \"floating\">First Name</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"user_firstName\"></ion-input>\n              </ion-item>\n              \n              <ion-item *ngIf=\"userType =='owner'\">\n                <ion-label position= \"floating\">Last Name</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"user_lastName\"></ion-input>\n              </ion-item>\n\n              <ion-item *ngIf=\"userType =='owner'\">\n                <ion-label position= \"floating\">Contact Number</ion-label>\n                <ion-input type = \"tel\" [(ngModel)]=\"contactNumber\" maxlength=10></ion-input>\n              </ion-item>\n\n              <br>\n\n              <ion-item *ngIf = \"userType =='owner'\">\n                <ion-header>Resturant Information</ion-header>\n              </ion-item>\n              <ion-item *ngIf=\"userType=='owner'\">\n                <ion-label position= \"floating\">Resturant Name</ion-label>\n                <ion-input type = \"resturantName\" [(ngModel)]=\"resturantName\"></ion-input>\n              </ion-item>\n          \n              <ion-item *ngIf=\"userType =='owner'\">\n                <ion-label position= \"floating\">Contact Number</ion-label>\n                <ion-input type = \"tel\" [(ngModel)]=\"resContactNumber\" maxlength=10></ion-input>\n              </ion-item>\n\n              <ion-item *ngIf=\"userType =='owner'\">\n                <ion-label position= \"floating\">Street Address</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"streetAddress\"></ion-input>\n              </ion-item>\n          \n              <ion-item *ngIf=\"userType =='owner'\">\n                <ion-label position= \"floating\">City</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"city\"></ion-input>\n              </ion-item>\n          \n              <ion-item *ngIf=\"userType =='owner'\">\n                <ion-label position= \"floating\">State</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"state\"></ion-input>\n              </ion-item>\n              <ion-item *ngIf=\"userType =='owner'\">\n                <ion-label position= \"floating\">Zipcode</ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"zipcode\"></ion-input>\n              </ion-item>\n          \n              <!--Deliverer pop up fields-->\n              <ion-item *ngIf=\"userType == 'deliver'\">\n                <ion-label position= \"floating\">First Name: </ion-label>\n                <ion-input type = \"firstName\" [(ngModel)]=\"user_firstName\"></ion-input>\n              </ion-item>\n              <ion-item *ngIf=\"userType == 'deliver'\">\n                <ion-label position= \"floating\">Last Name: </ion-label>\n                <ion-input type = \"firstName\" [(ngModel)]=\"user_lastName\"></ion-input>\n              </ion-item>\n            </ion-list>\n          \n            <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"register()\">Submit</ion-button>\n            <ion-button expand = 'block' color = \"dark\" href=\"/login\" routerDirection=\"forward\">Login</ion-button>\n            <br />\n          \n   \n\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  position: relative;\n  text-align: center; }\n\nion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-header {\n  --ion-background-color: rgb(196, 196, 196); }\n\nion-img {\n  height: 45px;\n  width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMENBQXVCLEVBQUE7O0FBRTNCO0VBQ0ssMENBQXVCLEVBQUE7O0FBSTVCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuaW9uLWhlYWRlciB7XG4gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcbn1cblxuXG5pb24taW1nIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _resturant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resturant.service */ "./src/app/resturant.service.ts");




 // required for app->firestore communication
 // required for app->firestore communication




var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, alertCtrl, nav, afstore, rest, us, menuCtrl, toast) {
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.afstore = afstore;
        this.rest = rest;
        this.us = us;
        this.menuCtrl = menuCtrl;
        this.toast = toast;
        this.createSuccess = false;
        this.username = "";
        this.password = "";
        this.cpassword = "";
        //user attributes
        this.userType = "";
        this.resID = "";
        this.uid = "";
        this.user_firstName = "";
        this.user_lastName = "";
        this.contactNumber = "";
        this.streetAddress = "";
        this.city = "";
        this.state = "";
        this.resturantName = "";
        this.resContactNumber = "";
        //rest.setResturantID(this.resID)
        //console.log(this.resID)
    }
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.custClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(this.userType);
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, _a, username, password, cpassword, userType, res, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        db = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
                        _a = this, username = _a.username, password = _a.password, cpassword = _a.cpassword, userType = _a.userType;
                        if (!(password !== cpassword)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.presentAlert('Error', "Passwords do not match")];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(password == cpassword)) return [3 /*break*/, 6];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(username, password).then(function (user) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var toast3, resid;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(userType == "customer")) return [3 /*break*/, 5];
                                            console.log("customerchecked");
                                            if (!(isNaN(this.zipcode) || !this.username || !this.user_firstName || !this.user_lastName || !this.contactNumber || !this.streetAddress || !this.city || !this.state)) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.toast.create({
                                                    message: 'Please enter all fields correctly!',
                                                    duration: 1000,
                                                    position: 'top'
                                                })];
                                        case 1:
                                            toast3 = _a.sent();
                                            return [4 /*yield*/, toast3.present()];
                                        case 2: return [2 /*return*/, _a.sent()];
                                        case 3:
                                            console.log("in else");
                                            try {
                                                db.collection("users").doc(user.user.uid).set({
                                                    user_name: username,
                                                    user_type: 0,
                                                    user_id: user.user.uid,
                                                    user_firstName: this.user_firstName,
                                                    user_lastName: this.user_lastName,
                                                    contactNumber: this.contactNumber,
                                                    streetAddress: this.streetAddress,
                                                    city: this.city,
                                                    state: this.state,
                                                    zip: this.zipcode
                                                });
                                            }
                                            catch (_b) {
                                                console.log("error in submitting");
                                            }
                                            _a.label = 4;
                                        case 4: return [3 /*break*/, 6];
                                        case 5:
                                            if (userType == "owner") {
                                                resid = this.afstore.createId();
                                                db.collection("users").doc(user.user.uid).set({
                                                    // uid: this.uid,
                                                    user_name: username,
                                                    user_type: 1,
                                                    res_id: resid,
                                                    user_id: user.user.uid,
                                                    user_firstName: this.user_firstName,
                                                    user_lastName: this.user_lastName,
                                                    contactNumber: this.contactNumber
                                                }).then(function (data) {
                                                    console.log(data);
                                                }).catch(function (error) {
                                                    console.log;
                                                });
                                                try {
                                                    db.collection('resturant').doc(resid).set({
                                                        resturantName: this.resturantName,
                                                        res_id: resid,
                                                        resContactNumber: this.resContactNumber,
                                                        streetAddress: this.streetAddress,
                                                        city: this.city,
                                                        state: this.state,
                                                        zip: this.zipcode
                                                    });
                                                }
                                                catch (error) {
                                                    console.dir(error);
                                                }
                                            }
                                            else if (userType == "deliver") {
                                                db.collection("users").doc(user.user.uid).set({
                                                    user_name: username,
                                                    user_type: 2,
                                                    user_id: user.user.uid,
                                                    user_firstName: this.user_firstName,
                                                    user_lastName: this.user_lastName
                                                }).then(function (data) {
                                                    console.log(data);
                                                }).catch(function (error) {
                                                    console.log;
                                                });
                                            }
                                            _a.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 4:
                        res = _b.sent();
                        console.log(res);
                        console.log("complete create user");
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        console.dir(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.presentAlert = function (title, text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: text,
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function (data) {
                                        if (_this.createSuccess) {
                                            _this.navController.navigateRoot('/login');
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _resturant_service__WEBPACK_IMPORTED_MODULE_8__["ResturantService"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map