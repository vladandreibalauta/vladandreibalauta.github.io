(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Cars R Us</a>\n</nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a id=\"home-anchor\" class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"> <i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home </a>\n          </li>\n          <li class=\"nav-item\">\n            <a id=\"cars-anchor\" class=\"nav-link\" routerLink=\"/cars\" routerLinkActive=\"active\"> <i class=\"fa fa-car\" aria-hidden=\"true\"></i> Cars </a>\n          </li>\n          <li class=\"nav-item\">\n            <a id=\"salespeople-anchor\" class=\"nav-link\" routerLink=\"/salespeople\" routerLinkActive=\"active\"> <i class=\"fa fa-users\" aria-hidden=\"true\"></i> Salespeople </a>\n          </li>\n          <li class=\"nav-item\">\n            <a id=\"carsale-anchor\" class=\"nav-link\" routerLink=\"/carsale\" routerLinkActive=\"active\"> <i class=\"fa fa-usd\"></i> Cars for sale </a>\n          </li>\n          <li class=\"nav-item\">\n            <a id=\"totalsales-anchor\" class=\"nav-link\" routerLink=\"/total-sales\" routerLinkActive=\"active\"> <i class=\"fa fa-list\"></i> Total sales </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4 main\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'car-dealership';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cars_cars_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cars/cars.component */ "./src/app/cars/cars.component.ts");
/* harmony import */ var _salespeople_salespeople_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salespeople/salespeople.component */ "./src/app/salespeople/salespeople.component.ts");
/* harmony import */ var _carsale_carsale_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carsale/carsale.component */ "./src/app/carsale/carsale.component.ts");
/* harmony import */ var _totalsales_totalsales_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./totalsales/totalsales.component */ "./src/app/totalsales/totalsales.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/car.service */ "./src/services/car.service.ts");
/* harmony import */ var _services_salesperson_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/salesperson.service */ "./src/services/salesperson.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_caresale_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/caresale.service */ "./src/services/caresale.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _cars_cars_component__WEBPACK_IMPORTED_MODULE_3__["CarsComponent"],
                _salespeople_salespeople_component__WEBPACK_IMPORTED_MODULE_4__["SalespeopleComponent"],
                _carsale_carsale_component__WEBPACK_IMPORTED_MODULE_5__["CarsaleComponent"],
                _totalsales_totalsales_component__WEBPACK_IMPORTED_MODULE_6__["TotalsalesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"].forRoot(),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], {
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_8__["PreloadAllModules"]
                })
            ],
            providers: [_services_car_service__WEBPACK_IMPORTED_MODULE_11__["CarService"], _services_salesperson_service__WEBPACK_IMPORTED_MODULE_12__["SalesPersonService"], _services_caresale_service__WEBPACK_IMPORTED_MODULE_14__["CarSaleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars */ "./src/app/cars/index.ts");
/* harmony import */ var _salespeople__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salespeople */ "./src/app/salespeople/index.ts");
/* harmony import */ var _totalsales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totalsales */ "./src/app/totalsales/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _carsale_carsale_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carsale/carsale.component */ "./src/app/carsale/carsale.component.ts");





var ROUTES = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'home', component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'cars', component: _cars__WEBPACK_IMPORTED_MODULE_0__["CarsComponent"] },
    { path: 'carsale', component: _carsale_carsale_component__WEBPACK_IMPORTED_MODULE_4__["CarsaleComponent"] },
    { path: 'salespeople', component: _salespeople__WEBPACK_IMPORTED_MODULE_1__["SalespeopleComponent"] },
    { path: 'total-sales', component: _totalsales__WEBPACK_IMPORTED_MODULE_2__["TotalsalesComponent"] },
    { path: '**', component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];


/***/ }),

/***/ "./src/app/cars/cars.component.css":
/*!*****************************************!*\
  !*** ./src/app/cars/cars.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-trash-o{\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/cars/cars.component.html":
/*!******************************************!*\
  !*** ./src/app/cars/cars.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add car</h1>\n  <form class=\"form-row\" #carForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"carsForm\">\n    <div class=\"form-group col-md-4\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"carToAdd.name\"\n             formControlName=\"name\" required=\"required\">\n    </div>\n\n    <div class=\"form-group col-md-4\">\n      <label for=\"color\">Color</label>\n      <input type=\"text\" class=\"form-control\" id=\"color\" [(ngModel)]=\"carToAdd.color\"\n             formControlName=\"color\" required=\"required\">\n    </div>\n\n    <div class=\"form-group col-md-4\">\n      <label for=\"purchaseValue\">Purchase Value</label>\n      <input type=\"number\" class=\"form-control\" id=\"purchaseValue\" [(ngModel)]=\"carToAdd.purchaseValue\"\n             formControlName=\"purchaseValue\" required=\"required\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!carForm.valid\">Submit</button>\n\n  </form>\n</div>\n<hr />\n<div class=\"container pt-3\" *ngIf=\"carList.length>0\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Color</th>\n      <th scope=\"col\">Purchase Value</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let car of carList\">\n      <th scope=\"row\">{{carList.indexOf(car)+1}}</th>\n      <td>{{car.name}}</td>\n      <td>{{car.color}}</td>\n      <td>{{car.purchaseValue}}</td>\n      <td><i id=\"delete-identity-icon\" class=\"fa fa-trash-o px-3\" aria-hidden=\"true\" (click)=\"removeCar(car)\"></i></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cars/cars.component.ts":
/*!****************************************!*\
  !*** ./src/app/cars/cars.component.ts ***!
  \****************************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return CarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_car_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/car.model */ "./src/models/car.model.ts");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/car.service */ "./src/services/car.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarsComponent = /** @class */ (function () {
    function CarsComponent(carService) {
        this.carService = carService;
        this.carToAdd = new _models_car_model__WEBPACK_IMPORTED_MODULE_1__["Car"]();
        this.carList = this.carService.getCars();
    }
    CarsComponent.prototype.ngOnInit = function () {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.color = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.purchaseValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.carsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: this.name,
            color: this.color,
            purchaseValue: this.purchaseValue
        });
    };
    CarsComponent.prototype.onSubmit = function () {
        // not allowing empty spaces
        if (this.carToAdd.name.replace(/\s/g, '').length &&
            this.carToAdd.color.replace(/\s/g, '').length) {
            this.carService.addCar(this.carToAdd);
        }
        this.carToAdd = new _models_car_model__WEBPACK_IMPORTED_MODULE_1__["Car"]();
    };
    CarsComponent.prototype.removeCar = function (car) {
        this.carService.deleteCar(car);
        this.carList = this.carService.getCars();
    };
    CarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cars',
            template: __webpack_require__(/*! ./cars.component.html */ "./src/app/cars/cars.component.html"),
            styles: [__webpack_require__(/*! ./cars.component.css */ "./src/app/cars/cars.component.css")]
        }),
        __metadata("design:paramtypes", [_services_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"]])
    ], CarsComponent);
    return CarsComponent;
}());



/***/ }),

/***/ "./src/app/cars/index.ts":
/*!*******************************!*\
  !*** ./src/app/cars/index.ts ***!
  \*******************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cars_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars.component */ "./src/app/cars/cars.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return _cars_component__WEBPACK_IMPORTED_MODULE_0__["CarsComponent"]; });




/***/ }),

/***/ "./src/app/carsale/carsale.component.css":
/*!***********************************************!*\
  !*** ./src/app/carsale/carsale.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carsale/carsale.component.html":
/*!************************************************!*\
  !*** ./src/app/carsale/carsale.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Sale a car</h1>\n  <form class=\"col-md-4\" #carSaleForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"carSalesForm\">\n    <div class=\"form-group\">\n      <label for=\"car\">Car</label>\n      <select id=\"car\" class=\"form-control\" [(ngModel)]=\"carForSale\" formControlName=\"car\" required>\n        <option *ngFor=\"let c of carList\" [ngValue]=\"c\">{{c.name}} - {{c.purchaseValue}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"salesman\">Salesman</label>\n      <select id=\"salesman\" class=\"form-control\" [(ngModel)]=\"salesman\" formControlName=\"salesperson\" required>\n        <option *ngFor=\"let s of salesmanList\" [ngValue]=\"s\">{{s.firstname}} - {{s.lastname}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"salePrice\">Sale price</label>\n      <input id=\"salePrice\" type=\"number\" value=\"{{carForSale.purchaseValue}}\" class=\"form-control\" [(ngModel)]=\"price\"\n             formControlName=\"salePrice\" min=\"{{carForSale.purchaseValue}}\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"buyer\">Buyer name</label>\n      <input id=\"buyer\" type=\"text\" class=\"form-control\" [(ngModel)]=\"buyer\"\n             formControlName=\"buyerName\" required=\"required\">\n    </div>\n\n\n    <div class=\"form-group\">\n      <ngb-datepicker #dp [(ngModel)]=\"dateModel\" formControlName=\"datePicker\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n    </div>\n\n\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!carSaleForm.valid\">Submit</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/carsale/carsale.component.ts":
/*!**********************************************!*\
  !*** ./src/app/carsale/carsale.component.ts ***!
  \**********************************************/
/*! exports provided: CarsaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsaleComponent", function() { return CarsaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_car_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/car.model */ "./src/models/car.model.ts");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/car.service */ "./src/services/car.service.ts");
/* harmony import */ var _services_salesperson_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/salesperson.service */ "./src/services/salesperson.service.ts");
/* harmony import */ var _services_caresale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/caresale.service */ "./src/services/caresale.service.ts");
/* harmony import */ var _models_carsale_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/carsale.model */ "./src/models/carsale.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarsaleComponent = /** @class */ (function () {
    function CarsaleComponent(carService, salePersonService, carSaleService) {
        this.carSaleService = carSaleService;
        this.carForSale = new _models_car_model__WEBPACK_IMPORTED_MODULE_2__["Car"](null, null, null);
        this.car = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.salesperson = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.buyerName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.datePicker = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.carSalesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            car: this.car,
            salesperson: this.salesperson,
            buyerName: this.buyerName,
            datePicker: this.datePicker
        });
        this.carList = carService.getCars();
        this.salesmanList = salePersonService.getSalesPersonList();
    }
    CarsaleComponent.prototype.ngOnInit = function () {
    };
    CarsaleComponent.prototype.onSubmit = function () {
        this.carSaleService.addCarForSale(new _models_carsale_model__WEBPACK_IMPORTED_MODULE_6__["CarSale"](this.carForSale, this.salesman, this.buyer, new Date(this.dateModel.year, this.dateModel.month - 1, this.dateModel.day), this.price, this.price - this.carForSale.purchaseValue));
        this.carForSale = null;
        this.salesman = null;
        this.buyer = null;
        this.price = null;
        this.dateModel = null;
    };
    CarsaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carsale',
            template: __webpack_require__(/*! ./carsale.component.html */ "./src/app/carsale/carsale.component.html"),
            styles: [__webpack_require__(/*! ./carsale.component.css */ "./src/app/carsale/carsale.component.css")]
        }),
        __metadata("design:paramtypes", [_services_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"], _services_salesperson_service__WEBPACK_IMPORTED_MODULE_4__["SalesPersonService"], _services_caresale_service__WEBPACK_IMPORTED_MODULE_5__["CarSaleService"]])
    ], CarsaleComponent);
    return CarsaleComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"mt-5\">Hello, Cars R Us!</h1>\n  <p>\n    Your car is here.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/salespeople/index.ts":
/*!**************************************!*\
  !*** ./src/app/salespeople/index.ts ***!
  \**************************************/
/*! exports provided: SalespeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salespeople_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salespeople.component */ "./src/app/salespeople/salespeople.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalespeopleComponent", function() { return _salespeople_component__WEBPACK_IMPORTED_MODULE_0__["SalespeopleComponent"]; });




/***/ }),

/***/ "./src/app/salespeople/salespeople.component.css":
/*!*******************************************************!*\
  !*** ./src/app/salespeople/salespeople.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/salespeople/salespeople.component.html":
/*!********************************************************!*\
  !*** ./src/app/salespeople/salespeople.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add salesman</h1>\n  <form class=\"col-md-4\" #salesPersonForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"salesPersonsForm\">\n    <div class=\"form-group\">\n      <label for=\"firstname\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstname\" [(ngModel)]=\"salesPersonToAdd.firstname\"\n             formControlName=\"firstname\" required=\"required\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastname\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastname\" [(ngModel)]=\"salesPersonToAdd.lastname\"\n             formControlName=\"lastname\" required=\"required\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!salesPersonForm.valid\">Submit</button>\n\n  </form>\n</div>\n<hr />\n<div class=\"container pt-3\" *ngIf=\"salesPersonList.length>0\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Firstname</th>\n      <th scope=\"col\">Lastname</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let person of salesPersonList\">\n      <th scope=\"row\">{{salesPersonList.indexOf(person)+1}}</th>\n      <td>{{person.firstname}}</td>\n      <td>{{person.lastname}}</td>\n      <td><i id=\"delete-identity-icon\" class=\"fa fa-trash-o px-3\" aria-hidden=\"true\" (click)=\"removeSalesPerson(person)\"></i></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/salespeople/salespeople.component.ts":
/*!******************************************************!*\
  !*** ./src/app/salespeople/salespeople.component.ts ***!
  \******************************************************/
/*! exports provided: SalespeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalespeopleComponent", function() { return SalespeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_salesperson_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/salesperson.service */ "./src/services/salesperson.service.ts");
/* harmony import */ var _models_salesperson_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/salesperson.model */ "./src/models/salesperson.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalespeopleComponent = /** @class */ (function () {
    function SalespeopleComponent(salesPersonService) {
        this.salesPersonService = salesPersonService;
        this.salesPersonToAdd = new _models_salesperson_model__WEBPACK_IMPORTED_MODULE_2__["SalesPerson"]();
        this.salesPersonList = this.salesPersonService.getSalesPersonList();
    }
    SalespeopleComponent.prototype.ngOnInit = function () {
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.salesPersonsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstname: this.firstname,
            lastname: this.lastname
        });
    };
    SalespeopleComponent.prototype.onSubmit = function () {
        // not allowing empty spaces
        if (this.salesPersonToAdd.firstname.replace(/\s/g, '').length &&
            this.salesPersonToAdd.lastname.replace(/\s/g, '').length) {
            this.salesPersonService.addSalesPerson(this.salesPersonToAdd);
        }
        this.salesPersonToAdd = new _models_salesperson_model__WEBPACK_IMPORTED_MODULE_2__["SalesPerson"]();
    };
    SalespeopleComponent.prototype.removeSalesPerson = function (salesPerson) {
        this.salesPersonService.deleteSalesPerson(salesPerson);
        this.salesPersonList = this.salesPersonService.getSalesPersonList();
    };
    SalespeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salespeople',
            template: __webpack_require__(/*! ./salespeople.component.html */ "./src/app/salespeople/salespeople.component.html"),
            styles: [__webpack_require__(/*! ./salespeople.component.css */ "./src/app/salespeople/salespeople.component.css")]
        }),
        __metadata("design:paramtypes", [_services_salesperson_service__WEBPACK_IMPORTED_MODULE_1__["SalesPersonService"]])
    ], SalespeopleComponent);
    return SalespeopleComponent;
}());



/***/ }),

/***/ "./src/app/totalsales/index.ts":
/*!*************************************!*\
  !*** ./src/app/totalsales/index.ts ***!
  \*************************************/
/*! exports provided: TotalsalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _totalsales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalsales.component */ "./src/app/totalsales/totalsales.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TotalsalesComponent", function() { return _totalsales_component__WEBPACK_IMPORTED_MODULE_0__["TotalsalesComponent"]; });




/***/ }),

/***/ "./src/app/totalsales/totalsales.component.css":
/*!*****************************************************!*\
  !*** ./src/app/totalsales/totalsales.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/totalsales/totalsales.component.html":
/*!******************************************************!*\
  !*** ./src/app/totalsales/totalsales.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group col-md-4\">\n  <label for=\"salesman\">Salesman</label>\n  <select id=\"salesman\" class=\"form-control\" [(ngModel)]=\"salesman\" (ngModelChange)=\"salesmanSelected($event)\">\n    <option *ngFor=\"let s of salesmen\" [ngValue]=\"s\">{{s.firstname}} - {{s.lastname}}</option>\n  </select>\n</div>\n<hr />\n<div class=\"container pt-3\" *ngIf=\"details.length>0\">\n\n  <ngx-datatable\n    #table\n    class='material'\n    [columnMode]=\"'flex'\"\n    [headerHeight]=\"'auto'\"\n    [footerHeight]=\"'auto'\"\n    [rowHeight]=\"'auto'\"\n    [scrollbarH]=\"true\"\n    [limit]=\"10\"\n    [rows]='details'\n  >\n\n    <ngx-datatable-column name=\"Seller name\" [flexGrow]=\"1\" [minWidth]=\"80\" [sortable]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template >\n        <div>{{row.salesman.firstname}} {{row.salesman.lastname}}</div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Buyer name\" [flexGrow]=\"1\" [minWidth]=\"80\" [sortable]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div>{{row.buyer}}</div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Car name\" [flexGrow]=\"1\" [minWidth]=\"80\" [sortable]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div>{{row.car.name}}</div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Date\" [flexGrow]=\"1\" [minWidth]=\"200\" [sortable]=\"true\" [draggable]=\"false\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div>{{row.date.toDateString()}}</div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Price\" [flexGrow]=\"1\" [minWidth]=\"50\" [sortable]=\"true\" [draggable]=\"false\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div>{{row.price}}</div>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"MarkUp\" [minWidth]=\"50\" [flexGrow]=\"1\" [sortable]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\n      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n        <div>{{row.markUp}}</div>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n</div>\n\n<div class=\"form-group col-md-4\">\n  Total MarkUp: {{this.totalMarkUp}}\n</div>\n"

/***/ }),

/***/ "./src/app/totalsales/totalsales.component.ts":
/*!****************************************************!*\
  !*** ./src/app/totalsales/totalsales.component.ts ***!
  \****************************************************/
/*! exports provided: TotalsalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalsalesComponent", function() { return TotalsalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_salesperson_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/salesperson.service */ "./src/services/salesperson.service.ts");
/* harmony import */ var _services_caresale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/caresale.service */ "./src/services/caresale.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TotalsalesComponent = /** @class */ (function () {
    function TotalsalesComponent(salesmanService, carSaleService) {
        this.carSaleService = carSaleService;
        this.details = new Array();
        this.salesmen = salesmanService.getSalesPersonList();
    }
    TotalsalesComponent.prototype.ngOnInit = function () {
    };
    TotalsalesComponent.prototype.salesmanSelected = function (event) {
        var i;
        this.totalMarkUp = 0;
        this.details = this.carSaleService.getListOfCarsSold(this.salesman);
        for (i = 0; i < this.details.length; i++) {
            this.totalMarkUp += this.details[i].markUp;
        }
    };
    TotalsalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-totalsales',
            template: __webpack_require__(/*! ./totalsales.component.html */ "./src/app/totalsales/totalsales.component.html"),
            styles: [__webpack_require__(/*! ./totalsales.component.css */ "./src/app/totalsales/totalsales.component.css")]
        }),
        __metadata("design:paramtypes", [_services_salesperson_service__WEBPACK_IMPORTED_MODULE_1__["SalesPersonService"], _services_caresale_service__WEBPACK_IMPORTED_MODULE_2__["CarSaleService"]])
    ], TotalsalesComponent);
    return TotalsalesComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/car.model.ts":
/*!*********************************!*\
  !*** ./src/models/car.model.ts ***!
  \*********************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
var Car = /** @class */ (function () {
    function Car(name, color, purchaseValue) {
        this.name = name || null;
        this.color = color || null;
        this.purchaseValue = purchaseValue || null;
    }
    return Car;
}());



/***/ }),

/***/ "./src/models/carsale.model.ts":
/*!*************************************!*\
  !*** ./src/models/carsale.model.ts ***!
  \*************************************/
/*! exports provided: CarSale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSale", function() { return CarSale; });
var CarSale = /** @class */ (function () {
    function CarSale(car, salesman, buyer, date, price, markUp) {
        this.car = car || null;
        this.salesman = salesman || null;
        this.buyer = buyer || null;
        this.date = date || null;
        this.price = price || null;
        this.markUp = markUp || null;
    }
    return CarSale;
}());



/***/ }),

/***/ "./src/models/salesperson.model.ts":
/*!*****************************************!*\
  !*** ./src/models/salesperson.model.ts ***!
  \*****************************************/
/*! exports provided: SalesPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPerson", function() { return SalesPerson; });
var SalesPerson = /** @class */ (function () {
    function SalesPerson(firstname, lastname, totalMarkup) {
        this.firstname = firstname || null;
        this.lastname = lastname || null;
        this.totalMarkup = totalMarkup || null;
    }
    return SalesPerson;
}());



/***/ }),

/***/ "./src/services/car.service.ts":
/*!*************************************!*\
  !*** ./src/services/car.service.ts ***!
  \*************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarService = /** @class */ (function () {
    function CarService() {
        this.carList = new Array();
    }
    CarService.prototype.addCar = function (car) {
        this.carList.push(car);
    };
    CarService.prototype.deleteCar = function (car) {
        var index = this.carList.indexOf(car, 0);
        if (index > -1) {
            this.carList.splice(index, 1);
        }
    };
    CarService.prototype.getCars = function () {
        return this.carList;
    };
    CarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/services/caresale.service.ts":
/*!******************************************!*\
  !*** ./src/services/caresale.service.ts ***!
  \******************************************/
/*! exports provided: CarSaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSaleService", function() { return CarSaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarSaleService = /** @class */ (function () {
    function CarSaleService() {
        this.carsForSaleList = new Array();
    }
    CarSaleService.prototype.addCarForSale = function (carSale) {
        this.carsForSaleList.push(carSale);
    };
    CarSaleService.prototype.getListOfCarsSold = function (saleperson) {
        return this.carsForSaleList.filter(function (carsale) { return carsale.salesman === saleperson; });
    };
    CarSaleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CarSaleService);
    return CarSaleService;
}());



/***/ }),

/***/ "./src/services/salesperson.service.ts":
/*!*********************************************!*\
  !*** ./src/services/salesperson.service.ts ***!
  \*********************************************/
/*! exports provided: SalesPersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPersonService", function() { return SalesPersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesPersonService = /** @class */ (function () {
    function SalesPersonService() {
        this.salesPersonList = new Array();
    }
    SalesPersonService.prototype.addSalesPerson = function (salesperson) {
        this.salesPersonList.push(salesperson);
    };
    SalesPersonService.prototype.deleteSalesPerson = function (salesperson) {
        var index = this.salesPersonList.indexOf(salesperson, 0);
        if (index > -1) {
            this.salesPersonList.splice(index, 1);
        }
    };
    SalesPersonService.prototype.getSalesPersonList = function () {
        return this.salesPersonList;
    };
    SalesPersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SalesPersonService);
    return SalesPersonService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\realpage\car-dealership\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map