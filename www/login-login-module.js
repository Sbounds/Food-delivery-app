(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content padding>\n\n  <ion-img src=\"../assets/icon/oxford2go.png\"></ion-img>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label position = \"floating\">Email</ion-label>\n      <ion-input type=\"text\" [(ngModel)]= \"username\"></ion-input>\n  </ion-item>\n\n    <ion-item>\n        <ion-label position = \"floating\">Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]= \"password\"></ion-input>\n      </ion-item>\n\n  </ion-list>\n  <ion-button fill=\"solid\" expand=\"block\" color=\"success\" (click)=\"login()\">Login</ion-button>\n  <ion-button expand = 'block' color = \"success\" href=\"/register\" routerDirection=\"forward\">Register</ion-button> \n  <ion-button  expand='block' color =\"tertiary\" size = \"small\" (click)=\"resetPassword(username)\">Reset Password</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  position: relative;\n  text-align: center; }\n\nion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-img {\n  height: 175px;\n  width: auto;\n  margin: auto;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMENBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG59XG5cbmlvbi1pbWcge1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



 // required for app->firestore communication




"";
var LoginPage = /** @class */ (function () {
    function LoginPage(menuCtrl, afAuth, router, user, alert) {
        this.menuCtrl = menuCtrl;
        this.afAuth = afAuth;
        this.router = router;
        this.user = user;
        this.alert = alert;
        this.username = "";
        this.password = "";
        this.userType = "";
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    /*resetPassword(username: string) {
      var auth = firebase.auth();
      auth.sendPasswordResetEmail(username)
        .then(() => console.log("email sent"))
        .catch((error) => console.log(error))
    }*/
    LoginPage.prototype.resetPassword = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Forgot Password',
                            inputs: [
                                {
                                    name: 'email',
                                    type: 'text',
                                    placeholder: 'Email'
                                },
                            ],
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: 'cancel',
                                }, {
                                    text: 'Submit',
                                    handler: function (data) {
                                        var auth = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]();
                                        auth.sendPasswordResetEmail(data.email)
                                            .then(function () { return console.log("email sent"); })
                                            .catch(function (error) { return console.log("error"); });
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
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, _a, username, password, res, err_1, user, query1, snapshot1, query2, snapshot2, query3, snapshot3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
                        _a = this, username = _a.username, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(username, password)];
                    case 2:
                        res = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        console.dir(err_1);
                        if (err_1.code = "auth/invalid-email") {
                            console.log("User Not Found");
                        }
                        console.log(username);
                        return [3 /*break*/, 4];
                    case 4:
                        user = db.collection('users');
                        query1 = user.where('user_name', '==', username).where('user_type', '==', 0);
                        return [4 /*yield*/, query1.get()];
                    case 5:
                        snapshot1 = _b.sent();
                        if (!snapshot1.empty) {
                            this.router.navigateByUrl('/dashboard-cust');
                            console.log("in cus if");
                        }
                        query2 = user.where('user_name', '==', username).where('user_type', '==', 1);
                        return [4 /*yield*/, query2.get()];
                    case 6:
                        snapshot2 = _b.sent();
                        if (!snapshot2.empty) {
                            this.router.navigateByUrl('/dashboard-res');
                        }
                        query3 = user.where('user_name', '==', username).where('user_type', '==', 2);
                        return [4 /*yield*/, query3.get()];
                    case 7:
                        snapshot3 = _b.sent();
                        if (!snapshot3.empty) {
                            this.router.navigateByUrl('/dashboard-del');
                            console.log("in res if");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map