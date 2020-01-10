(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-81780b86.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-81780b86.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelection; });
function hapticSelection(){var e=window.TapticEngine;e&&e.selection()}function hapticSelectionStart(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function hapticSelectionChanged(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function hapticSelectionEnd(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-90d954cd.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-90d954cd.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIFECYCLE_WILL_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIFECYCLE_WILL_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIFECYCLE_DID_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIFECYCLE_DID_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LIFECYCLE_WILL_UNLOAD; });
var LIFECYCLE_WILL_ENTER="ionViewWillEnter",LIFECYCLE_DID_ENTER="ionViewDidEnter",LIFECYCLE_WILL_LEAVE="ionViewWillLeave",LIFECYCLE_DID_LEAVE="ionViewDidLeave",LIFECYCLE_WILL_UNLOAD="ionViewWillUnload";

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-99929188.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-99929188.js ***!
  \***********************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
function attachComponent(e,t,n,o,r){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var a;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,r,o)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,o&&o.forEach(function(e){return a.classList.add(e)}),r&&Object.assign(a,r),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}})})}function detachComponent(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-da1efb5f.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-da1efb5f.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setPageHidden; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-90d954cd.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-90d954cd.js");
var iosTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 142).then(__webpack_require__.bind(null, /*! ./chunk-e34b3d2d.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e34b3d2d.js"))},mdTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 143).then(__webpack_require__.bind(null, /*! ./chunk-f2d9e763.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f2d9e763.js"))};function transition(e){return new Promise(function(n,i){e.queue.write(function(){beforeTransition(e),runTransition(e).then(function(i){i.animation&&i.animation.destroy(),afterTransition(e),n(i)},function(n){afterTransition(e),i(n)})})})}function beforeTransition(e){var n=e.enteringEl,i=e.leavingEl;setZIndex(n,i,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),setPageHidden(n,!1),i&&setPageHidden(i,!1)}function runTransition(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return[4,getAnimationBuilder(e)];case 1:return[2,(n=i.sent())?animation(n,e):noAnimation(e)]}})})}function afterTransition(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function getAnimationBuilder(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,iosTransitionAnimation()]:[2,void 0];case 1:return n=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,mdTransitionAnimation()];case 3:n=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,n]}})})}function animation(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return[4,waitForReady(n,!0)];case 1:return t.sent(),[4,__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./chunk-b43431d3.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b43431d3.js")).then(function(i){return i.create(e,n.baseEl,n)})];case 2:return i=t.sent(),fireWillEvents(n.enteringEl,n.leavingEl),[4,playTransition(i,n)];case 3:return t.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&fireDidEvents(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function noAnimation(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n,i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return n=e.enteringEl,i=e.leavingEl,[4,waitForReady(e,!1)];case 1:return t.sent(),fireWillEvents(n,i),fireDidEvents(n,i),[2,{hasCompleted:!0}]}})})}function waitForReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return i=(void 0!==e.deepWait?e.deepWait:n)?[deepReady(e.enteringEl),deepReady(e.leavingEl)]:[shallowReady(e.enteringEl),shallowReady(e.leavingEl)],[4,Promise.all(i)];case 1:return t.sent(),[4,notifyViewReady(e.viewIsReady,e.enteringEl)];case 2:return t.sent(),[2]}})})}function notifyViewReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e?[4,e(n)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}function playTransition(e,n){var i=n.progressCallback,t=new Promise(function(n){return e.onFinish(n)});return i?(e.progressStart(),i(e)):e.play(),t}function fireWillEvents(e,n){lifecycle(n,_chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["a"]),lifecycle(e,_chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["b"])}function fireDidEvents(e,n){lifecycle(e,_chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["c"]),lifecycle(n,_chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["d"])}function lifecycle(e,n){if(e){var i=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(i)}}function shallowReady(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function deepReady(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return(n=e)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(deepReady))];case 3:i.sent(),i.label=4;case 4:return[2]}})})}function setPageHidden(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function setZIndex(e,n,i){void 0!==e&&(e.style.zIndex="back"===i?"99":"101"),void 0!==n&&(n.style.zIndex="100")}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f56eaea8.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-f56eaea8.js ***!
  \***********************************************************************/
/*! exports provided: createGesture, GESTURE_CONTROLLER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGesture", function() { return createGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GESTURE_CONTROLLER", function() { return GESTURE_CONTROLLER; });
var _sPassive,GestureController=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new GestureDelegate(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new BlockerDelegate(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,s=-1e4;if(i.forEach(function(t){s=Math.max(s,t)}),s===r){this.capturedId=e,i.clear();var n=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(n),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(BACKDROP_NO_SCROLL)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(BACKDROP_NO_SCROLL)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),GestureDelegate=function(){function t(t,e,r,i,s){this.id=e,this.name=r,this.disableScroll=s,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),BlockerDelegate=function(){function t(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),BACKDROP_NO_SCROLL="backdrop-no-scroll",GESTURE_CONTROLLER=new GestureController(document);function addEventListener(t,e,r,i){var s,n,o=supportsPassive(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(s="__zone_symbol__addEventListener",n="__zone_symbol__removeEventListener"):(s="addEventListener",n="removeEventListener"),t[s](e,r,o),function(){t[n](e,r,o)}}function supportsPassive(t){if(void 0===_sPassive)try{var e=Object.defineProperty({},"passive",{get:function(){_sPassive=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){_sPassive=!1}return!!_sPassive}var MOUSE_WAIT=2e3;function createPointerEvents(t,e,r,i,s){var n,o,a,c,u,l,d,h=0;function p(i){h=Date.now()+MOUSE_WAIT,e(i)&&(!o&&r&&(o=addEventListener(t,"touchmove",r,s)),a||(a=addEventListener(t,"touchend",f,s)),c||(c=addEventListener(t,"touchcancel",f,s)))}function v(i){h>Date.now()||e(i)&&(!l&&r&&(l=addEventListener(getDocument(t),"mousemove",r,s)),d||(d=addEventListener(getDocument(t),"mouseup",b,s)))}function f(t){S(),i&&i(t)}function b(t){y(),i&&i(t)}function S(){o&&o(),a&&a(),c&&c(),o=a=c=void 0}function y(){l&&l(),d&&d(),l=d=void 0}function m(){S(),y()}function D(e){e?(n&&n(),u&&u(),n=u=void 0,m()):(n||(n=addEventListener(t,"touchstart",p,s)),u||(u=addEventListener(t,"mousedown",v,s)))}return{setDisabled:D,stop:m,destroy:function(){D(!0),i=r=e=void 0}}}function getDocument(t){return t instanceof Document?t:t.ownerDocument}function createPanRecognizer(t,e,r){var i=r*(Math.PI/180),s="x"===t,n=Math.cos(i),o=e*e,a=0,c=0,u=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-a,i=e-c,d=r*r+i*i;if(d<o)return!1;var h=Math.sqrt(d),p=(s?r:i)/h;return l=p>n?1:p<-n?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}function createGesture(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),r=e.canStart,i=e.onWillStart,s=e.onStart,n=e.onEnd,o=e.notCaptured,a=e.onMove,c=e.threshold,u=e.queue,l={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},d=createPointerEvents(e.el,function(t){var e=now(t);return!(f||!b)&&(updateDetail(t,l),l.startX=l.currentX,l.startY=l.currentY,l.startTimeStamp=l.timeStamp=e,l.velocityX=l.velocityY=l.deltaX=l.deltaY=0,l.event=t,(!r||!1!==r(l))&&(p.release(),!!p.start()&&(f=!0,0===c?m():(h.start(l.startX,l.startY),!0))))},function(t){v?!S&&b&&(S=!0,calcGestureData(l,t),u.write(y)):(calcGestureData(l,t),h.detect(l.currentX,l.currentY)&&(h.isGesture()&&m()||(g(),d.stop(),o&&o(l))))},E,{capture:!1}),h=createPanRecognizer(e.direction,e.threshold,e.maxAngle),p=GESTURE_CONTROLLER.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),v=!1,f=!1,b=!0,S=!1;function y(){v&&(S=!1,a&&a(l))}function m(){return!(p&&!p.capture()||(v=!0,b=!1,l.startX=l.currentX,l.startY=l.currentY,l.startTimeStamp=l.timeStamp,i?i(l).then(D):D(),0))}function D(){s&&s(l),b=!0}function g(){v=!1,f=!1,S=!1,b=!0,p.release()}function E(t){var e=v,r=b;g(),r&&(calcGestureData(l,t),e?n&&n(l):o&&o(l))}return{setDisabled:function(t){t&&v&&E(void 0),d.setDisabled(t)},destroy:function(){p.destroy(),d.destroy()}}}function calcGestureData(t,e){if(e){var r=t.currentX,i=t.currentY,s=t.timeStamp;updateDetail(e,t);var n=t.currentX,o=t.currentY,a=(t.timeStamp=now(e))-s;if(a>0&&a<100){var c=(o-i)/a;t.velocityX=(n-r)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=o-t.startY,t.event=e}}function updateDetail(t,e){var r=0,i=0;if(t){var s=t.changedTouches;if(s&&s.length>0){var n=s[0];r=n.clientX,i=n.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i}function now(t){return t.timeStamp||Date.now()}

/***/ }),

/***/ "./src/app/checkout-modal/checkout-modal.page.html":
/*!*********************************************************!*\
  !*** ./src/app/checkout-modal/checkout-modal.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Check Out</ion-title>\n    <div text-right>\n        <ion-button color = \"danger\" (click)=\"dismiss()\">X</ion-button>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    Payment Info:\n        <ion-item>\n            <ion-label text-left>Card Number: </ion-label>\n            <ion-input type = \"text\" [(ngModel)]=\"cardnum\"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label text-left>CSV: </ion-label>\n              <ion-input type = \"text\" [(ngModel)]=\"cardcsv\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label text-left>Expiration Date: </ion-label>\n                <ion-input type = \"text\" [(ngModel)]=\"cardexp\"></ion-input>\n              </ion-item>\n              Billing Address:\n              <ion-item>\n                  <ion-label text-left>First Name: </ion-label>\n                  <ion-input type = \"text\" [(ngModel)]=\"cardfname\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-left>Last Name: </ion-label>\n                    <ion-input type = \"text\" [(ngModel)]=\"cardlname\"></ion-input>\n                  </ion-item>\n              <ion-item>\n                  <ion-label text-left>Street Address: </ion-label>\n                  <ion-input type = \"text\" [(ngModel)]=\"cardstreet\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-left>City: </ion-label>\n                    <ion-input type = \"text\" [(ngModel)]=\"cardcity\"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label text-left>State: </ion-label>\n                      <ion-input type = \"text\" [(ngModel)]=\"cardstate\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-left>Zipcode: </ion-label>\n                        <ion-input type = \"text\" [(ngModel)]=\"cardzip\"></ion-input>\n                      </ion-item>\n    \n    Delivery Info:\n    <ion-item>\n        <ion-label text-left>First Name: </ion-label>\n        <ion-input type = \"text\" [(ngModel)]=\"user_firstName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-left>Last Name: </ion-label>\n        <ion-input type = \"text\" [(ngModel)]=\"user_lastName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label text-left>Phone Number: </ion-label>\n        <ion-input type = \"text\" [(ngModel)]=\"contactNumber\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label text-left>Street Address: </ion-label>\n          <ion-input type = \"text\" [(ngModel)]=\"streetAddress\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left>City: </ion-label>\n          <ion-input type = \"text\" [(ngModel)]=\"city\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left>State: </ion-label>\n          <ion-input type = \"text\" [(ngModel)]=\"state\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label text-left>Zipcode: </ion-label>\n            <ion-input type = \"text\" [(ngModel)]=\"zipcode\"></ion-input>\n          </ion-item>\n\n\n          <ion-button (click)=\"submit()\">Submit</ion-button>\n          \n        \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/checkout-modal/checkout-modal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/checkout-modal/checkout-modal.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0LW1vZGFsL2NoZWNrb3V0LW1vZGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/checkout-modal/checkout-modal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/checkout-modal/checkout-modal.page.ts ***!
  \*******************************************************/
/*! exports provided: CheckoutModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModalPage", function() { return CheckoutModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 // required for app->firestore communication



var CheckoutModalPage = /** @class */ (function () {
    function CheckoutModalPage(us, modal, param) {
        this.us = us;
        this.modal = modal;
        this.param = param;
        this.uid = "";
        this.user_firstName = "";
        this.user_lastName = "";
        this.contactNumber = "";
        this.streetAddress = "";
        this.city = "";
        this.state = "";
        this.cardfname = "";
        this.cardlname = "";
        this.cardnum = "";
        this.cardcsv = "";
        this.cardexp = "";
        this.cardstreet = "";
        this.cardcity = "";
        this.cardstate = "";
        this.cid = "";
        this.cid = this.param.get('cID');
    }
    CheckoutModalPage.prototype.ngOnInit = function () {
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
                        _this.user_firstName = _this.user.user_firstName;
                        _this.user_lastName = _this.user.user_lastName;
                        _this.contactNumber = _this.user.contactNumber;
                        _this.streetAddress = _this.user.streetAddress;
                        _this.city = _this.user.city;
                        _this.state = _this.user.state;
                        _this.zipcode = _this.user.zip;
                        _this.cardfname = _this.user.user_firstName;
                        _this.cardlname = _this.user.user_lastName;
                        _this.cardstreet = _this.user.streetAddress;
                        _this.cardcity = _this.user.city;
                        _this.cardstate = _this.user.state;
                        _this.cardzip = _this.user.zip;
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CheckoutModalPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
                console.log(this.cid);
                console.log(this.zipcode);
                try {
                    db.collection('cart').doc(this.cid).update({
                        status: 1,
                        //pay info
                        card_num: this.cardnum,
                        card_csv: this.cardcsv,
                        card_exp: this.cardexp,
                        card_fname: this.cardfname,
                        card_lname: this.cardlname,
                        card_street: this.cardstreet,
                        card_city: this.cardcity,
                        card_state: this.cardstate,
                        card_zip: this.cardzip,
                        //delivery info
                        cust_fname: this.user_firstName,
                        cust_lname: this.user_lastName,
                        cust_num: this.contactNumber,
                        cust_street: this.streetAddress,
                        cust_city: this.city,
                        cust_state: this.state,
                        cust_zip: this.zipcode,
                        created: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].Timestamp.fromDate(new Date())
                    });
                }
                catch (_b) {
                    console.error("error placing order");
                }
                this.modal.dismiss();
                return [2 /*return*/];
            });
        });
    };
    CheckoutModalPage.prototype.dismiss = function () {
        this.modal.dismiss();
    };
    CheckoutModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout-modal',
            template: __webpack_require__(/*! ./checkout-modal.page.html */ "./src/app/checkout-modal/checkout-modal.page.html"),
            styles: [__webpack_require__(/*! ./checkout-modal.page.scss */ "./src/app/checkout-modal/checkout-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]])
    ], CheckoutModalPage);
    return CheckoutModalPage;
}());



/***/ }),

/***/ "./src/app/components/del-cart/del-cart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/del-cart/del-cart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ list }}\n<div *ngFor= \"let i of list\">\n  {{i.cust_street}} <br>\n  {{i.cust_city}} <br>\n  {{i.cust_state}} <br>\n  {{i.cust_zip}} <br>\n  <!--add in special instructions-->\n</div>"

/***/ }),

/***/ "./src/app/components/del-cart/del-cart.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/del-cart/del-cart.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsLWNhcnQvZGVsLWNhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/del-cart/del-cart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/del-cart/del-cart.component.ts ***!
  \***********************************************************/
/*! exports provided: DelCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelCartComponent", function() { return DelCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cart.service */ "./src/app/cart.service.ts");



var DelCartComponent = /** @class */ (function () {
    function DelCartComponent(cs) {
        this.cs = cs;
        this.list = [];
    }
    DelCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getDelCart(this.cID, this.list).subscribe(function (citems) {
            _this.list = citems;
            console.log(_this.list);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DelCartComponent.prototype, "cID", void 0);
    DelCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-del-cart',
            template: __webpack_require__(/*! ./del-cart.component.html */ "./src/app/components/del-cart/del-cart.component.html"),
            styles: [__webpack_require__(/*! ./del-cart.component.scss */ "./src/app/components/del-cart/del-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], DelCartComponent);
    return DelCartComponent;
}());



/***/ }),

/***/ "./src/app/components/del-res-add-comp/del-res-add-comp.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/del-res-add-comp/del-res-add-comp.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  {{res.streetAddress}} <br>\n  {{res.city}}, {{res.state}} <br>\n  {{res.zip}}\n  <!--need to add zipcoade-->\n</div>"

/***/ }),

/***/ "./src/app/components/del-res-add-comp/del-res-add-comp.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/del-res-add-comp/del-res-add-comp.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsLXJlcy1hZGQtY29tcC9kZWwtcmVzLWFkZC1jb21wLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/del-res-add-comp/del-res-add-comp.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/del-res-add-comp/del-res-add-comp.component.ts ***!
  \***************************************************************************/
/*! exports provided: DelResAddCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelResAddCompComponent", function() { return DelResAddCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_resturant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resturant.service */ "./src/app/resturant.service.ts");



var DelResAddCompComponent = /** @class */ (function () {
    function DelResAddCompComponent(rs) {
        this.rs = rs;
    }
    DelResAddCompComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.rs.getSingleResturant(this.resID).then(function (res) {
                    _this.res = res;
                    console.log(_this.res.streetAddress);
                });
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DelResAddCompComponent.prototype, "resID", void 0);
    DelResAddCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-del-res-add-comp',
            template: __webpack_require__(/*! ./del-res-add-comp.component.html */ "./src/app/components/del-res-add-comp/del-res-add-comp.component.html"),
            styles: [__webpack_require__(/*! ./del-res-add-comp.component.scss */ "./src/app/components/del-res-add-comp/del-res-add-comp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_resturant_service__WEBPACK_IMPORTED_MODULE_2__["ResturantService"]])
    ], DelResAddCompComponent);
    return DelResAddCompComponent;
}());



/***/ }),

/***/ "./src/app/components/res-cart-comp/res-cart-comp.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/res-cart-comp/res-cart-comp.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n{{ list }}\n<div *ngFor= \"let i of list\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-label class = 'name'> {{i.item_name}}</ion-label>\n      </ion-col>\n      <ion-col>\n          <ion-label class=\"qty\">{{i.item_qty}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <!--add in special instructions-->\n  \n \n</div>"

/***/ }),

/***/ "./src/app/components/res-cart-comp/res-cart-comp.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/res-cart-comp/res-cart-comp.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qty {\n  text-align: right;\n  font-size: 20px; }\n\n.name {\n  text-align: left;\n  font-size: 20px; }\n\nion-grid {\n  --ion-grid-columns: 2;\n  --ion-grid-padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnlib3VuZHMvMzg3cHJvamVjdDIvc3JjL2FwcC9jb21wb25lbnRzL3Jlcy1jYXJ0LWNvbXAvcmVzLWNhcnQtY29tcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxxQkFBbUI7RUFDbkIsdUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlcy1jYXJ0LWNvbXAvcmVzLWNhcnQtY29tcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdHl7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5hbWV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5pb24tZ3JpZHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDI7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiA4cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/res-cart-comp/res-cart-comp.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/res-cart-comp/res-cart-comp.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResCartCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResCartCompComponent", function() { return ResCartCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cart.service */ "./src/app/cart.service.ts");



var ResCartCompComponent = /** @class */ (function () {
    function ResCartCompComponent(cs) {
        this.cs = cs;
        this.list = [];
    }
    ResCartCompComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = [];
        this.cs.getItemsCarts(this.cID, this.list).subscribe(function (citems) {
            _this.list = citems;
            console.log(_this.list);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResCartCompComponent.prototype, "cID", void 0);
    ResCartCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-res-cart-comp',
            template: __webpack_require__(/*! ./res-cart-comp.component.html */ "./src/app/components/res-cart-comp/res-cart-comp.component.html"),
            styles: [__webpack_require__(/*! ./res-cart-comp.component.scss */ "./src/app/components/res-cart-comp/res-cart-comp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ResCartCompComponent);
    return ResCartCompComponent;
}());



/***/ }),

/***/ "./src/app/update-item/update-item.page.html":
/*!***************************************************!*\
  !*** ./src/app/update-item/update-item.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ item.item_name }}</ion-title>\n      <div text-right>\n          <ion-button color = \"danger\" (click)=\"dismiss()\">X</ion-button>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label text-left>Name: </ion-label>\n    <ion-input type = \"text\" [(ngModel)]=\"item_name\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label text-left>Price: </ion-label>\n    <ion-input type = \"text\" [(ngModel)]=\"item_price\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label text-left>Description: </ion-label>\n    <ion-input type = \"text\" [(ngModel)]=\"item_description\"></ion-input>\n  </ion-item>\n\n  <ion-button (click) = \"updateItem()\" color = \"success\">Update Item</ion-button>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/update-item/update-item.page.scss":
/*!***************************************************!*\
  !*** ./src/app/update-item/update-item.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1pdGVtL3VwZGF0ZS1pdGVtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/update-item/update-item.page.ts":
/*!*************************************************!*\
  !*** ./src/app/update-item/update-item.page.ts ***!
  \*************************************************/
/*! exports provided: UpdateItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItemPage", function() { return UpdateItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");



 // required for app->firestore communication

var UpdateItemPage = /** @class */ (function () {
    function UpdateItemPage(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.resId = "";
        this.item_name = "";
        this.item_price = "";
        this.item_description = "";
        this.resId = this.navParams.get('resId');
        this.item = this.navParams.get('menI');
        this.item_name = this.item.item_name;
        this.item_price = this.item.item_price;
        this.item_description = this.item.item_description;
    }
    UpdateItemPage.prototype.ngOnInit = function () {
    };
    UpdateItemPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    UpdateItemPage.prototype.updateItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, itemRef;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
                itemRef = db.collection('resturant').doc(this.resId).collection('menuItem').doc(this.item.item_id);
                // Set the "capital" field of the city 'DC'
                return [2 /*return*/, itemRef.update({
                        item_name: this.item_name,
                        item_description: this.item_description,
                        item_price: this.item_price
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
    UpdateItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-item',
            template: __webpack_require__(/*! ./update-item.page.html */ "./src/app/update-item/update-item.page.html"),
            styles: [__webpack_require__(/*! ./update-item.page.scss */ "./src/app/update-item/update-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], UpdateItemPage);
    return UpdateItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map