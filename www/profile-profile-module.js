(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-header>\n    <ion-toolbar>\n       <ion-buttons slot=\"start\">\n            <ion-button (click)=\"openFirst()\">\n              <ion-icon fill=\"icon-only\" name=\"menu\">                 \n\n              </ion-icon>\n            </ion-button>\n          </ion-buttons>\n      <ion-title text-center>Profile</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n    <!--need to seperate for different users-->\n   \n    <div *ngIf=\"this.user_type=='0'\">\n    <ion-item>\n        <ion-label text-left>First Name: </ion-label>\n        <ion-input type = \"text\" [(ngModel)]=\"user_firstName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-left>Last Name: </ion-label>\n        <ion-input type = \"text\" [(ngModel)]=\"user_lastName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-left>Phone Number: </ion-label>\n        <ion-input type = \"text\" [(ngModel)]=\"contactNumber\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label text-left>Street Address: </ion-label>\n          <ion-input type = \"text\" [(ngModel)]=\"streetAddress\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left>City: </ion-label>\n          <ion-input type = \"text\" [(ngModel)]=\"city\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left>State: </ion-label>\n          <ion-input type = \"text\" [(ngModel)]=\"state\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left>Zipcode: </ion-label>\n          <ion-input type = \"text\" [(ngModel)]=\"zip\"></ion-input>\n        </ion-item>\n        <div>\n        <ion-button (click) = \"updateUser()\" color = \"success\">Update Profile</ion-button>\n       </div>\n      <div>\n        <ion-button (click) = \"updatePassword()\" color = \"success\">Update Password</ion-button>\n      </div>\n      </div>\n\n      <div *ngIf=\"this.user_type=='1'\">\n        <ion-header>Personal Information</ion-header>\n        <ion-item>\n            <ion-label text-left>First Name: </ion-label>\n            <ion-input type = \"text\" [(ngModel)]=\"user_firstName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label text-left>Last Name: </ion-label>\n            <ion-input type = \"text\" [(ngModel)]=\"user_lastName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label text-left>Phone Number: </ion-label>\n            <ion-input type = \"text\" [(ngModel)]=\"contactNumber\"></ion-input>\n          </ion-item>\n          <div>\n          <ion-button (click) = \"updateUser()\" color = \"success\">Update Profile</ion-button>\n       </div>\n          <br>\n          <ion-header>Resturant Information</ion-header>\n          <ion-item>\n              <ion-label text-left>Resturant Name: </ion-label>\n              <ion-input type = \"text\" [(ngModel)]=\"resturantName\"></ion-input>\n            </ion-item>\n          <ion-item>\n              <ion-label text-left>Phone Number: </ion-label>\n              <ion-input type = \"text\" [(ngModel)]=\"resContactNumber\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label text-left>Street Address: </ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"streetAddress\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label text-left>City: </ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"city\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label text-left>State: </ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"state\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label text-left>Zipcode: </ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"zip\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label text-left>Description: </ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"description\"></ion-input>\n              </ion-item>\n              \n              <div>\n              <ion-button (click) = \"updateRes()\" color = \"success\">Update Resturant</ion-button>\n            </div>\n            <div>\n              <ion-button (click) = \"updatePassword()\" color = \"success\">Update Password</ion-button>\n            </div>\n          </div>\n\n         <div *ngIf=\"this.user_type=='2'\">\n          <ion-item>\n            <ion-label text-left>First Name: </ion-label>\n            <ion-input type = \"text\" [(ngModel)]=\"user_firstName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label text-left>Last Name: </ion-label>\n            <ion-input type = \"text\" [(ngModel)]=\"user_lastName\"></ion-input>\n          </ion-item>\n\n            <div>\n            <ion-button (click) = \"updateUser()\" color = \"success\">Update Profile</ion-button>\n            </div>\n            <div>\n              <ion-button (click) = \"updatePassword()\" color = \"success\">Update Password</ion-button>\n            </div>\n          </div>\n   \n      \n      \n      <!--TODO: need to allow for individuals to update their password through firebase-->\n     \n  </ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _resturant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resturant.service */ "./src/app/resturant.service.ts");







 // required for app->firestore communication


var ProfilePage = /** @class */ (function () {
    function ProfilePage(us, router, afs, afAuth, navCtrl, rs, menu, toast) {
        this.us = us;
        this.router = router;
        this.afs = afs;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.rs = rs;
        this.menu = menu;
        this.toast = toast;
        this.uid = "";
        this.user_firstName = "";
        this.user_lastName = "";
        this.contactNumber = "";
        this.streetAddress = "";
        this.city = "";
        this.state = "";
        this.res_id = "";
        this.resContactNumber = "";
        this.resturantName = "";
        this.username = "";
        this.description = "";
    }
    ProfilePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var s1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.uid = "";
                s1 = this.us.getCurrentUID().subscribe(function (uid) {
                    console.log(uid);
                    _this.uid = uid;
                    _this.us.getSingleUser(uid).then(function (user) {
                        _this.user = user;
                        console.log(_this.user);
                        console.log(_this.user.user_type);
                        _this.user_type = _this.user.user_type;
                        console.log(_this.user_type);
                        if (_this.user.user_type == 0) {
                            console.log("in item if");
                            _this.user_firstName = _this.user.user_firstName;
                            _this.user_lastName = _this.user.user_lastName;
                            _this.contactNumber = _this.user.contactNumber;
                            _this.streetAddress = _this.user.streetAddress;
                            _this.city = _this.user.city;
                            _this.state = _this.user.state;
                            _this.zip = _this.user.zip;
                            _this.username = _this.user.user_name;
                        }
                        if (_this.user.user_type == 1) {
                            _this.user_firstName = _this.user.user_firstName;
                            _this.user_lastName = _this.user.user_lastName;
                            _this.contactNumber = _this.user.contactNumber;
                            _this.res_id = _this.user.res_id;
                            _this.username = _this.user.user_name;
                            _this.rs.getSingleResturant(_this.res_id).then(function (res) {
                                _this.res = res;
                                console.log(_this.res);
                                _this.resturantName = _this.res.resturantName;
                                _this.resContactNumber = _this.res.resContactNumber;
                                _this.streetAddress = _this.res.streetAddress;
                                _this.city = _this.res.city;
                                _this.state = _this.res.state;
                                _this.zip = _this.res.zip;
                                _this.description = _this.res.description;
                            });
                        }
                        if (_this.user.user_type == 2) {
                            _this.user_firstName = _this.user.user_firstName;
                            _this.user_lastName = _this.user.user_lastName;
                            _this.username = _this.user.user_name;
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.openFirst = function () {
        if (this.user_type == 0) {
            this.menu.enable(true, 'cmenu');
            this.menu.toggle('cmenu');
        }
        if (this.user_type == 1) {
            this.menu.enable(true, 'rmenu');
            this.menu.toggle('rmenu');
        }
        if (this.user_type == 2) {
            this.menu.enable(true, 'dmenu');
            this.menu.toggle('dmenu');
        }
        console.log(this.menu.isOpen());
    };
    ProfilePage.prototype.updatePassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var auth, toast, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        auth = firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"]();
                        console.log(this.username);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        auth.sendPasswordResetEmail(this.username);
                        return [4 /*yield*/, this.toast.create({
                                message: 'an email has been sent ',
                                duration: 1000,
                                position: 'top'
                            })];
                    case 2:
                        toast = _b.sent();
                        return [4 /*yield*/, toast.present()];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        _a = _b.sent();
                        console.log('error');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.setUpload = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.file = event.item(0);
                if (event.item(0)) {
                    reader = new FileReader();
                    reader.onload = function (event) {
                        _this.resPic = event.target.result;
                    };
                    reader.readAsDataURL(event.item(0));
                }
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.updateUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, userRef;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"]();
                userRef = db.collection('users').doc(this.user.user_id);
                if (this.user.user_type == 0) {
                    console.log(userRef);
                    return [2 /*return*/, userRef.update({
                            user_firstName: this.user_firstName,
                            user_lastName: this.user_lastName,
                            contactNumbber: this.contactNumber,
                            streetAddress: this.streetAddress,
                            city: this.city,
                            state: this.state,
                            zip: this.zip
                        })
                            .then(function () {
                            console.log("Document successfully updated!");
                        })
                            .catch(function (error) {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        })];
                }
                if (this.user.user_type == 1) {
                    return [2 /*return*/, userRef.update({
                            user_firstName: this.user_firstName,
                            user_lastName: this.user_lastName,
                            contactNumbber: this.contactNumber
                        })
                            .then(function () {
                        })
                            .catch(function (error) {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        })];
                }
                if (this.user.user_type == 2) {
                    return [2 /*return*/, userRef.update({
                            user_firstName: this.user_firstName,
                            user_lastName: this.user_lastName
                        })
                            .then(function () {
                            console.log("Document successfully updated!");
                        })
                            .catch(function (error) {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.updateRes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, resRef;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"]();
                resRef = db.collection('resturant').doc(this.user.res_id);
                return [2 /*return*/, resRef.update({
                        resturantName: this.resturantName,
                        resContactNumber: this.resContactNumber,
                        streetAddress: this.streetAddress,
                        city: this.city,
                        state: this.state,
                        zip: this.zip,
                        description: this.description
                    })
                        .then(function () {
                        console.log("Document successfully updated!");
                    })
                        .catch(function (error) {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    })];
            });
        });
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _resturant_service__WEBPACK_IMPORTED_MODULE_9__["ResturantService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map