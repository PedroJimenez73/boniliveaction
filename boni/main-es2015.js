(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet (activate)=\"onActivate($event)\"></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 style=\"font-family: 'Lobster', cursive; text-align: center; margin: 40px auto; font-size: 80px\">\n    <span style=\"color: #433a51\">Boni </span>\n    <span style=\"color: #a23248\">Live </span>\n    <span style=\"color: #7ac3ce\">Action </span>\n</h1>\n<div class=\"carteles\">\n    <a href=\"https://animeflv.ru/anime/11919/net-juu-no-suzume?__cf_chl_jschl_tk__=a2b20072e63e40dc1f9e4c8dc84932b67f0b7e5c-1578256889-0-AbkdlOMOFZ7MkaXhx8YiM1bdeDw9J0NMzSFCZGkO402pKgxHxbFbOx6_YK6ZS__zcI3aCkTPVU1E-1oj_CXmJP96Nc99ZRdW8pmDvNGWWgOZPlun3ub8JyeuOpDdugJYF47_EnlyzVd1He26Ivg7fT0IS-x3l3zD-YdYar0B8r52CAYSNzFbxILTwXmouUAOjdzrnfZ213KjJrFrO5YcJ_HUfEn_Dwy34zwqRpovNZD43W2gBliQ9d_bNl-7vDq_V2EiqRpQemx2QvIdAK1ylKFhdb9CGV0Rcqbu2uu5rNHv\">\n        <img src=\"assets/tirori.png\" alt=\"\">\n    </a>\n    <a *ngFor=\"let episode of episodes\" routerLink=\"/player/{{episode.id}}\">\n        <img src=\"{{episode.pic}}\" alt=\"\">\n    </a>\n</div>\n<div class=\"botones\">\n    <a href=\"https://www5.doramasmp4.com\">\n        Go to Doramas MP4\n    </a>\n    <a href=\"http://pandrama.com/\">\n        Go to Pandrama\n    </a>\n    <a href=\"https://animeflv.net/\">\n        Go to Anime FLV\n    </a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin: 0 40px 0 100px; max-width: 1260px\">\n    <p class=\"titulo\">\n        {{episode.title}}\n    </p>\n    <p>\n        {{episode.description}}\n    </p>\n</div>\n<div *ngFor=\"let video of episode.videos; let i = index\">\n    <div class=\"capitulo\">\n        <video preload=\"none\" controls src=\"{{video}}\"></video>\n        <div>\n            <span class=\"numero\">{{i + 1}}</span>\n            <span class=\"check\" (click)=\"checkEpisode(i)\">&#10004;</span>\n        </div>    \n    </div>\n    <div *ngIf=\"i !== (episode.videos.length - 1)\" class=\"separador\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");





const routes = [
    { path: '', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"] },
    { path: 'player/:id', component: _player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    onActivate(event) {
        const scrollToTop = window.setInterval(() => {
            const pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"],
            _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/episodes.service.ts":
/*!*************************************!*\
  !*** ./src/app/episodes.service.ts ***!
  \*************************************/
/*! exports provided: EpisodesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesService", function() { return EpisodesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EpisodesService = class EpisodesService {
    constructor() {
        this.episodes = [
            {
                id: 'nana',
                title: 'Nana',
                description: '',
                videos: [],
                pic: 'assets/uno.jpg'
            },
            {
                id: 'yuri',
                title: 'Yuri on Ice',
                description: '',
                videos: [
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi01.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi02.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi03.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi04.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi05.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi06.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi07.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi08.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi09.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi10.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi11.mp4',
                    'https://boniliveaction.s3-us-west-2.amazonaws.com/yuri/yoi12.mp4'
                ],
                pic: 'assets/yuri.png'
            },
            {
                id: 'flaws',
                title: 'Love with Flaws',
                description: 'Una comedia romántica sobre una mujer que siente aversión por los floristas y un hombre que tiene una obsesión por la apariencia mientras superan los prejuicios contra las personas con defectos. Joo Seo Yeon es un maestro de educación física de sangre caliente con una fuerte personalidad. 365 días y 24 horas, lleva puesto su uniforme de entrenamiento o jeans y zapatillas de deporte. Debido a que sufrió dificultades debido a sus hermosos hermanos mayores y menores , odia a los niños de las flores. Su tipo ideal es un "chico no guapo". Ella entrará en conflictos con el apuesto Lee Kang Woo en todo. Lee Kang Woo es el presidente de las juntas de la escuela secundaria. Es un hombre increíblemente arrogante y está obsesionado con la apariencia. Le gusta la atención de los demás y ama su aspecto. Pasa 12 horas de su día para mejorar su apariencia. Tiene una apariencia impecable y hermosa. Sin embargo, tiene un secreto que nadie sabe: sufre un trauma pasado. Hace 15 años, tenía sobrepeso y era feo. Esto fue cuando fue rechazado por Seo Yeon. Tuvo que cambiar de escuela después de tener una enteritis aguda en el autobús escolar. Al reunirse con un conocido psicólogo, se dio cuenta de que su trastorno del síndrome del intestino irritable está relacionado con esa niña de hace 15 años. Se convirtió en el presidente de la escuela en la que trabaja. Ella ha cambiado mucho, en el pasado, odiaba a los hombres feos y ahora odia a los hombres guapos.',
                videos: [
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_1.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_2.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_3.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_4.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_5.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_6.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LoveWithFlaws_7.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LoveWithFlaws_8.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_9.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_10.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_11.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_12.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_13.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_14.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_15.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_LovewithFlaws_16.mp4"
                ],
                pic: 'assets/flaws.png'
            },
            {
                id: 'itaewon',
                title: 'Itaewon Class',
                description: '',
                videos: [
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_1.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_2.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_3.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_4.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_5.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewoClas_6.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_7.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_8.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_9.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_10.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_11.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_12.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_13.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_ItaewonClass_14.mp4"
                ],
                pic: 'assets/itaweon.png'
            },
            {
                id: 'forest',
                title: 'Forest',
                description: 'Kang Sun Hyuk parece tenerlo todo: éxito financiero, buena apariencia y cerebro, pero lo persigue una experiencia que lo deja incapaz de recordar su pasado. Aunque exitoso en el mundo corporativo, lo abandona todo para convertirse en miembro del equipo especial de rescate 119. Jung Young Jae es una joven cirujana prometedora en su hospital, pero su actitud alegre esconde un trauma infantil, que la deja incapaz de concentrarse completamente en su futuro. Ambos se sienten atraídos por un bosque místico.',
                videos: [
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest2020_1.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_2.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_3.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_4.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_5.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_6.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_7.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_8.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_9.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_10.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_11.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_12.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_13.mp4",
                    "https://storage.googleapis.com/kasian.appspot.com/720_Forest_14.mp4",
                ],
                pic: 'assets/forest.png'
            }
        ];
        this.episodes.forEach(element => {
            if (element.id === 'nana') {
                for (let i = 1; i < 48; i++) {
                    element.videos.push(`https://boniliveaction.s3-us-west-2.amazonaws.com/${i}.mp4`);
                }
            }
        });
    }
    getEpisodes() {
        return this.episodes;
    }
};
EpisodesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EpisodesService);



/***/ }),

/***/ "./src/app/inicio/inicio.component.scss":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _episodes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../episodes.service */ "./src/app/episodes.service.ts");



let InicioComponent = class InicioComponent {
    constructor(episodesService) {
        this.episodesService = episodesService;
    }
    ngOnInit() {
        this.episodes = this.episodesService.getEpisodes();
    }
};
InicioComponent.ctorParameters = () => [
    { type: _episodes_service__WEBPACK_IMPORTED_MODULE_2__["EpisodesService"] }
];
InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio.component.scss */ "./src/app/inicio/inicio.component.scss")).default]
    })
], InicioComponent);



/***/ }),

/***/ "./src/app/player/player.component.scss":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _episodes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../episodes.service */ "./src/app/episodes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PlayerComponent = class PlayerComponent {
    constructor(episodesService, route, renderer, elem) {
        this.episodesService = episodesService;
        this.route = route;
        this.renderer = renderer;
        this.elem = elem;
        this.vistos = [];
        this.checksRef = [];
    }
    ngOnInit() {
        this.episodes = this.episodesService.getEpisodes();
        this.setEpisode(this.route.snapshot.params.id);
    }
    ngAfterViewInit() {
        this.checksRef = this.elem.nativeElement.querySelectorAll('.check');
        if (JSON.parse(localStorage.getItem(this.episode.id))) {
            this.vistos = JSON.parse(localStorage.getItem(this.episode.id));
        }
        this.vistos.forEach((elem) => {
            this.checksRef[elem].classList.add('visto');
        });
    }
    setEpisode(ep) {
        this.episodes.forEach(element => {
            if (element.id === ep) {
                this.episode = element;
            }
        });
    }
    checkEpisode(i) {
        if (this.checksRef[i].classList.contains("visto")) {
            this.checksRef[i].classList.remove('visto');
            this.vistos = this.vistos.filter(elem => { return elem !== i; });
            localStorage.setItem(this.episode.id, JSON.stringify(this.vistos));
        }
        else {
            this.checksRef[i].classList.add('visto');
            this.vistos.push(i);
            localStorage.setItem(this.episode.id, JSON.stringify(this.vistos));
        }
    }
};
PlayerComponent.ctorParameters = () => [
    { type: _episodes_service__WEBPACK_IMPORTED_MODULE_2__["EpisodesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")).default]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pedro/Documents/PR PERSONALES/boni/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map