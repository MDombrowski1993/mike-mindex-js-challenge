(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-title\">Mindex Coding Challenge</h1>\n<app-employee-list></app-employee-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editDialog/editDialog.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editDialog/editDialog.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>UPDATE COMPENSATION</h1>\r\n<form>\r\n    <mat-form-field appearance=\"fill\">\r\n        <mat-label>First Name</mat-label>\r\n        <input disabled matInput [(ngModel)]=\"dialogPayload.ee.firstName\" name=\"firstName\">\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"fill\">\r\n        <mat-label>Last Name</mat-label>\r\n        <input disabled matInput [(ngModel)]=\"dialogPayload.ee.lastName\" name=\"lastName\">\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"fill\">\r\n        <mat-label>Position</mat-label>\r\n        <input disabled matInput [(ngModel)]=\"dialogPayload.ee.position\" name=\"position\">\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"fill\">\r\n        <mat-label>Compensation</mat-label>\r\n        <input matInput [(ngModel)]=\"dialogPayload.ee.compensation\" name=\"compensation\">\r\n    </mat-form-field>\r\n    <button mat-button (click)=\"saveEeEdit($event)\">Save</button>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list class=\"employee-list\" cols=\"1\">\r\n  <mat-grid-tile *ngFor=\"let emp of employees\">\r\n    <app-employee class=\"employee-list-item\" (onEeEditCallback)=\"editEmployee(emp)\" [employee]=\"emp\"></app-employee>\r\n  </mat-grid-tile>\r\n</mat-grid-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Performance: only eval ngIf once, rather than running redundant checks (i.e. for card count or child displays)-->\r\n<ng-container *ngIf=\"!!employee.directReports; else noDirectReports\">\r\n  <mat-card class=\"employee\">\r\n      <mat-card-header>\r\n        <mat-card-title>{{employee.lastName}}, {{employee.firstName}}: {{employee.position}}</mat-card-title>\r\n        <!--Task 2: Display number of direct reports-->\r\n        <mat-card-title>Direct Reports: {{employee.directReports.length}}</mat-card-title>\r\n        <mat-card-subtitle>Employee ID: {{employee.id}}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-card class=\"employee-direct-reports\">\r\n          <mat-card-header>\r\n            <mat-card-title>Direct Reports</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <mat-list role=\"list\">\r\n                <mat-list-item role=\"listitem\" *ngFor=\"let dirEmp of employee.directReports\">\r\n                  <app-reporting-employee [eeId]=\"dirEmp\" [editEeCb]=\"onEditEmployee\"></app-reporting-employee>\r\n                </mat-list-item>\r\n            </mat-list>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </mat-card-content>  \r\n  </mat-card>\r\n</ng-container>\r\n\r\n<ng-template #noDirectReports>\r\n  <mat-card class=\"employee\">\r\n  <mat-card-header>\r\n    <mat-card-title>{{employee.lastName}}, {{employee.firstName}}: {{employee.position}}</mat-card-title>\r\n    <mat-card-subtitle>Employee ID: {{employee.id}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n</mat-card>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportingEmployee/reportingEmployee.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportingEmployee/reportingEmployee.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!isLoading; else loadingTreatment\">\r\n    <div class=\"reporting-ee-details\">\r\n        <p>{{ee.firstName}} {{ee.lastName}}</p>\r\n        <div class=\"ee-actions\">\r\n            <mat-icon (click)=\"openEditDialog()\">edit</mat-icon>\r\n            <mat-icon (click)=\"deleteEe()\">delete</mat-icon>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-template #loadingTreatment><span>Loading...</span></ng-template>");

/***/ }),

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var angular_in_memory_web_api_1 = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var backendless_mock_service_1 = __webpack_require__(/*! ./backendless-mock.service */ "./src/app/backendless-mock.service.ts");
var employee_component_1 = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
var employee_list_component_1 = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
var reportingEmployee_component_1 = __webpack_require__(/*! ./reportingEmployee/reportingEmployee.component */ "./src/app/reportingEmployee/reportingEmployee.component.ts");
var editDialog_component_1 = __webpack_require__(/*! ./editDialog/editDialog.component */ "./src/app/editDialog/editDialog.component.ts");
var employee_service_1 = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
var card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
var grid_list_1 = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
var input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var menu_1 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
var button_1 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                employee_component_1.EmployeeComponent,
                employee_list_component_1.EmployeeListComponent,
                reportingEmployee_component_1.ReportingEmployeeComponent,
                editDialog_component_1.EditDialogComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(backendless_mock_service_1.BackendlessMockService, {
                    apiBase: 'api/',
                    delay: 250,
                    passThruUnknownUrl: true,
                    post204: false,
                    put204: false
                }),
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                dialog_1.MatDialogModule
            ],
            providers: [employee_service_1.EmployeeService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/backendless-mock.service.ts":
/*!*********************************************!*\
  !*** ./src/app/backendless-mock.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BackendlessMockService = /** @class */ (function () {
    function BackendlessMockService() {
    }
    BackendlessMockService.prototype.createDb = function () {
        var employees = [
            {
                id: 1,
                firstName: 'Brian',
                lastName: 'McGee',
                position: 'CEO',
                directReports: [2, 3]
            },
            {
                id: 2,
                firstName: 'Homer',
                lastName: 'Thompson',
                position: 'Dev Manager',
                directReports: [4]
            },
            {
                id: 3,
                firstName: 'Rock',
                lastName: 'Strongo',
                position: 'Lead Tester'
            },
            {
                id: 4,
                firstName: 'Max',
                lastName: 'Power',
                position: 'Junior Software Engineer'
            }
        ];
        return { employees: employees };
    };
    return BackendlessMockService;
}());
exports.BackendlessMockService = BackendlessMockService;


/***/ }),

/***/ "./src/app/editDialog/editDialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/editDialog/editDialog.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXREaWFsb2cvZWRpdERpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/editDialog/editDialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/editDialog/editDialog.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var form_field_1 = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(dialogRef, dialogPayload) {
        this.dialogRef = dialogRef;
        this.dialogPayload = dialogPayload;
    }
    EditDialogComponent_1 = EditDialogComponent;
    EditDialogComponent.prototype.ngOnInit = function () {
        console.log(this.dialogPayload);
    };
    EditDialogComponent.prototype.saveEeEdit = function (event) {
        this.dialogPayload.onSave({ event: event, data: this.dialogPayload.ee });
    };
    var EditDialogComponent_1;
    EditDialogComponent.ctorParameters = function () { return [
        { type: dialog_1.MatDialogRef },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
    ]; };
    EditDialogComponent = EditDialogComponent_1 = __decorate([
        core_1.Component({
            selector: 'edit-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./editDialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editDialog/editDialog.component.html")).default,
            providers: [{ provide: form_field_1.MatFormFieldControl, useExisting: EditDialogComponent_1 }],
            styles: [__importDefault(__webpack_require__(/*! ./editDialog.component.css */ "./src/app/editDialog/editDialog.component.css")).default]
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], EditDialogComponent);
    return EditDialogComponent;
}());
exports.EditDialogComponent = EditDialogComponent;


/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".employee-list-item {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXBsb3llZS1saXN0LWl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
        this.employees = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getAll()
            .pipe(operators_1.reduce(function (emps, e) { return emps.concat(e); }, []), operators_1.map(function (emps) { return _this.employees = emps; }), operators_1.catchError(this.handleError.bind(this))).subscribe();
    };
    EmployeeListComponent.prototype.editEmployee = function (ee) {
        var _this = this;
        // Why this wont work with my approach
        // Passing emitter via bindings to dialog, 
        // but requires it to be called in binding (via fn()) so args cannot be passed from children
        // needs a refactor (no reportinEmployee, change how we interact with dialog, move @Output/EventEmitter down one component level to EE -> ReportingEmployee)
        this.employeeService.save(ee)
            .subscribe(function (updateEe) {
            // Find and update the employees model with the update EE
            _this.employees[_this.employees.findIndex(function (e) { return e.id === updateEe.id; })] = updateEe;
        }, function (err) { return console.error('Error occured saving employee.  If I had more time, I would probably be displayed in red text somewhere on the page via this.error = "Yikes!"'); });
    };
    EmployeeListComponent.prototype.deleteEmployee = function (ee) {
        var _this = this;
        this.employeeService.remove(ee)
            .subscribe(function () {
            // Find and remove the employees model with the update EE
            _this.employees.splice(_this.employees.findIndex(function (e) { return e.id === ee.id; }));
        }, function (err) { return console.error('Error occured removing employee.  If I had more time, I would probably be displayed in red text somewhere on the page via this.error = "Yikes!"'); });
    };
    EmployeeListComponent.prototype.handleError = function (e) {
        console.error(e);
        return this.errorMessage = e.message || 'Unable to retrieve employees';
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService }
    ]; };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;


/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = '/api/employees';
    }
    EmployeeService.prototype.getAll = function () {
        return this.http.get(this.url)
            .pipe(operators_1.flatMap(function (emps) { return rxjs_1.from(emps); }), operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.get = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.save = function (emp) {
        var response = (!!emp.id) ? this.put(emp) : this.post(emp);
        return response.pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.remove = function (emp) {
        return this.http
            .delete(this.url + "/" + emp.id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.post = function (emp) {
        return this.http.post(this.url, emp);
    };
    EmployeeService.prototype.put = function (emp) {
        return this.http.put(this.url + "/" + emp.id, emp);
    };
    EmployeeService.prototype.handleError = function (res) {
        return rxjs_1.throwError(res.error || 'Server error');
    };
    EmployeeService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ "./src/app/employee.ts":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;


/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var employee_1 = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        var _this = this;
        this.onEeEditCallback = new core_2.EventEmitter();
        this.onEditEmployee = function (_a) {
            var event = _a.event, data = _a.data;
            _this.onEeEditCallback.emit({ event: event, data: data });
        };
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", employee_1.Employee)
    ], EmployeeComponent.prototype, "employee", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_2.EventEmitter)
    ], EmployeeComponent.prototype, "onEeEditCallback", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-employee',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;


/***/ }),

/***/ "./src/app/reportingEmployee/reportingEmployee.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/reportingEmployee/reportingEmployee.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reporting-ee-details {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.ee-actions > * {\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0aW5nRW1wbG95ZWUvcmVwb3J0aW5nRW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGluZ0VtcGxveWVlL3JlcG9ydGluZ0VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0aW5nLWVlLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5lZS1hY3Rpb25zID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/reportingEmployee/reportingEmployee.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/reportingEmployee/reportingEmployee.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var employee_1 = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var editDialog_component_1 = __webpack_require__(/*! ../editDialog/editDialog.component */ "./src/app/editDialog/editDialog.component.ts");
var ReportingEmployeeComponent = /** @class */ (function () {
    // Inject services
    function ReportingEmployeeComponent(employeeService, dialog) {
        this.employeeService = employeeService;
        this.dialog = dialog;
    }
    ReportingEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        // Fetch ee on load
        this.employeeService.get(this.eeId).subscribe(function (res) { return _this.ee = res; }, function (err) { return console.error('Error'); }, function () { return _this.isLoading = false; });
    };
    ReportingEmployeeComponent.prototype.openEditDialog = function () {
        var ref = this.dialog.open(editDialog_component_1.EditDialogComponent, {
            width: '500px',
            data: { ee: this.ee, onSave: this.editEeCb }
        });
        ref.afterClosed().subscribe(function (res) { return console.log(res); });
    };
    ReportingEmployeeComponent.prototype.deleteEe = function () {
        this.employeeService
            .remove(this.ee)
            .subscribe();
    };
    ReportingEmployeeComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService },
        { type: dialog_1.MatDialog }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ReportingEmployeeComponent.prototype, "eeId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", employee_1.Employee)
    ], ReportingEmployeeComponent.prototype, "ee", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ReportingEmployeeComponent.prototype, "isLoading", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ReportingEmployeeComponent.prototype, "editEeCb", void 0);
    ReportingEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-reporting-employee',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reportingEmployee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportingEmployee/reportingEmployee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reportingEmployee.component.css */ "./src/app/reportingEmployee/reportingEmployee.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, dialog_1.MatDialog])
    ], ReportingEmployeeComponent);
    return ReportingEmployeeComponent;
}());
exports.ReportingEmployeeComponent = ReportingEmployeeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\mindex-js-code-challenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map