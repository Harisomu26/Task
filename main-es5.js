function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var routes = [{
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'front-end-task';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard");
        }
      },
      directives: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);

        this.cart_cout = 0;
        this.cart_id = "Demo";
        this.catt = " Product under Category 1";
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cat1",
        value: function cat1() {
          this.catt = " Product under Category 1";
        }
      }, {
        key: "cat2",
        value: function cat2() {
          this.catt = " Product under Category 2";
        }
      }, {
        key: "cat3",
        value: function cat3() {
          this.catt = " Product under Category 3";
        }
      }, {
        key: "cat4",
        value: function cat4() {
          this.catt = " Product under Category 4";
        }
      }, {
        key: "cart1",
        value: function cart1() {
          document.getElementById("myModal").style.display = "block"; // document.getElementById("myModal").innerHTML=``
        }
      }, {
        key: "cart1_close",
        value: function cart1_close() {
          document.getElementById("myModal").style.display = "none";
        }
      }, {
        key: "cart_list",
        value: function cart_list(idd) {
          this.cart_cout = this.cart_cout + 1;
          this.cart_id = idd; // var select = document.getElementById(idd);
          // var secondDivContent = document.getElementById('div2');
          // secondDivContent.innerHTML
          // console.log(document.getElementById("card11"))

          var itm = document.getElementById("card11");
          console.log(itm);
          this.cln = itm.cloneNode(true);
          console.log(this.cln);
          var sd = document.getElementById("clon").appendChild(this.cln);
          sd.style.display = "block";
        }
      }, {
        key: "remove",
        value: function remove() {
          this.cart_cout = this.cart_cout - 1;
          var list = document.getElementById("clon");
          list.removeChild(list.childNodes[0]);
          console.log("dfals");
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 120,
      vars: 4,
      consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"], [1, "topnav"], [1, "logo"], [1, "dot"], ["id", "myBtn", 1, "cart_icon", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart", 2, "color", "white"], [1, "user_icon"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], [1, "container", 2, "max-width", "1600px !important"], [1, "row"], [1, "col-md-3"], [1, "sidenav"], [1, "category", 3, "click"], [1, "col-md-9", 2, "border", "solid 1px #67696f", "border-radius", "3px"], [1, "main_header"], [1, "col-sm-3"], ["id", "Kids", 1, "card"], ["ref", ""], [1, "image"], ["width", "100", "height", "170", "src", "https://ak.picdn.net/shutterstock/videos/23935711/thumb/1.jpg", "alt", "Card image cap", 1, "card-img-top", 2, "border-radius", "10px"], [2, "padding", ".5em 1em", "font-weight", "bold", "font-size", "17px", "color", "white"], [1, "but", 3, "click"], ["id", "Mens", 1, "card"], ["ref1", ""], ["id", "Womens", 1, "card"], ["ref3", ""], ["id", "Sports", 1, "card"], ["ref4", ""], ["id", "Computers", 1, "card"], ["ref5", ""], ["id", "Mobiles", 1, "card"], ["ref6", ""], ["id", "Electronics", 1, "card"], ["ref7", ""], ["id", "Others", 1, "card"], ["ref8", ""], ["id", "myModal", 1, "modal"], [1, "modal-content"], [1, "close", 3, "click"], ["id", "card11", 1, "card1"], ["src", "https://ak.picdn.net/shutterstock/videos/23935711/thumb/1.jpg", "width", "189", "height", "188", "alt", "", 2, "border-radius", "10px", "margin-left", "1px", "margin-top", "1px"], [1, "pro_name"], [1, "quan"], ["type", "number", "id", "quantity", "value", "0", "name", "quantity", "min", "1", "max", "5", 1, "selector"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-top", "33px", "margin-left", "544px", 3, "click"], ["id", "clon"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blabla Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_7_listener() {
            return ctx.cart1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " UserName ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_17_listener() {
            return ctx.cat1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Category 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_19_listener() {
            return ctx.cat2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Category 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_21_listener() {
            return ctx.cat3();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Category 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_23_listener() {
            return ctx.cat4();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Category 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Kids");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx.cart_list(_r0.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

            return ctx.cart_list(_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Womens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

            return ctx.cart_list(_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);

            return ctx.cart_list(_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Computers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

            return ctx.cart_list(_r4.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Mobiles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

            return ctx.cart_list(_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Electronics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_91_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86);

            return ctx.cart_list(_r6.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Others");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_100_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](95);

            return ctx.cart_list(_r7.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_104_listener() {
            return ctx.cart1_close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Quantity: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_117_listener() {
            return ctx.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cart_cout);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.catt, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.cart_cout, ") Items In Your Cart..!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cart_id);
        }
      },
      styles: ["@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n    margin-top: -8px;\r\n    width: 100%;\r\n    \r\n    background-color: #3f424c;\r\n    \r\n  }\r\n\r\n\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    margin-left: 46px;\r\n    font-size: 40px;\r\n    margin-top: 8px;\r\n    color: white;   \r\n  }\r\n\r\n\r\n\r\n.cart_icon[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    color: white;\r\n    float: right;\r\n    font-size: 25px;\r\n    margin-top: -60px;\r\n    margin-right: 175px;\r\n\r\n    \r\n  }\r\n\r\n\r\n\r\n.user_icon[_ngcontent-%COMP%]{\r\n    color: white;\r\n font-size: 25px;\r\n    float: right;\r\n    margin-top: -60px;\r\n    margin-right: 10px;\r\n\r\n  }\r\n\r\n\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n    height: 26px;\r\n    width: 26px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    float: right;\r\n    margin-right: 242px;\r\n    margin-top: -66px;\r\n  }\r\n\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n      height: 100%;\r\n      border-radius: 3px;\r\n    background-color:#3f424c ;\r\n  }\r\n\r\n\r\n\r\n.category[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 26px;\r\n    padding-top: 30px;\r\n}\r\n\r\n\r\n\r\n.main_header[_ngcontent-%COMP%]{\r\n\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    padding: 1rem;\r\n\r\n}\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin: -1em 1em;\r\n\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%]\r\n{\r\n    width: 250px;\r\n    height:290px;\r\n    margin: 20px auto;\r\n    background-color: #64666d; \r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 19.75rem;\r\n}\r\n\r\n\r\n\r\n.but[_ngcontent-%COMP%]{\r\n  margin-top: 32px;\r\n  border-radius: 17px;\r\n  background-color: #b7b6b6;\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 100px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgb(0 0 0 / 66%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 46%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  color: #0a0a0a;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-left: 658px;\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.card1[_ngcontent-%COMP%]{\r\n  \r\n  width: 630px;\r\n  height:190px;\r\n  margin: 20px auto;\r\n  background-color: #64666d;\r\n\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.pro_name[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n    margin-left: 200px;\r\n    color: black;\r\n    font-size: 27px;\r\n    margin-top: -182px;\r\n}\r\n\r\n\r\n\r\n.quan[_ngcontent-%COMP%]{\r\n  margin-left: 208px;\r\n    color: black;\r\n    font-size: 23px;\r\n}\r\n\r\n\r\n\r\n.selector[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n#card11[_ngcontent-%COMP%]{\r\ndisplay: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdFQUF3RTs7OztBQUl4RSx1REFBdUQ7Ozs7QUFDdkQ7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekI7c0JBQ2tCO0VBQ3BCOzs7O0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkOzs7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjs7O0VBR3JCOzs7O0FBQ0E7SUFDRSxZQUFZO0NBQ2YsZUFBZTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCOztFQUVwQjs7OztBQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7Ozs7QUFFQTtNQUNJLFlBQVk7TUFDWixrQkFBa0I7SUFDcEIseUJBQXlCO0VBQzNCOzs7O0FBQ0Y7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7OztBQUdBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7O0FBRWpCOzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjs7OztBQUNBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7Ozs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7OztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOzs7O0FBUUE7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0VBQzVDLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxrQ0FBa0M7QUFDcEM7Ozs7QUFFQSxrQkFBa0I7Ozs7QUFDbEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOzs7O0FBRUEscUJBQXFCOzs7O0FBQ3JCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOzs7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOzs7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCOztFQUV6QixtQkFBbUI7QUFDckI7Ozs7QUFDQTtFQUNFLGlCQUFpQjtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7OztBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7O0FBRUE7RUFDRSxlQUFlOzs7QUFHakI7Ozs7QUFDQTtBQUNBLGFBQWE7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjQwMCw3MDAnKTtcclxuXHJcblxyXG5cclxuLyogQWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgdG9wIG5hdmlnYXRpb24gKi9cclxuLnRvcG5hdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDU1cHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MjRjO1xyXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICB9XHJcbiAgLmxvZ297XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NnB4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gIH1cclxuICAuY2FydF9pY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE3NXB4O1xyXG5cclxuICAgIFxyXG4gIH1cclxuICAudXNlcl9pY29ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gIH1cclxuICAuZG90IHtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMjQycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjZweDtcclxuICB9XHJcblxyXG4gIC5zaWRlbmF2IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzZjQyNGMgO1xyXG4gIH1cclxuLmNhdGVnb3J5e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG4gIFxyXG4gXHJcbi5tYWluX2hlYWRlcntcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG59XHJcblxyXG5cclxuLm1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAtMWVtIDFlbTtcclxuXHJcbn1cclxuLmNhcmRcclxue1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OjI5MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2NjZkOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE5Ljc1cmVtO1xyXG59XHJcbi5idXR7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2I2YjY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDY2JSk7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogNDYlO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6ICMwYTBhMGE7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiA2NThweDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkMXtcclxuICBcclxuICB3aWR0aDogNjMwcHg7XHJcbiAgaGVpZ2h0OjE5MHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDY2NmQ7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnByb19uYW1le1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE4MnB4O1xyXG59XHJcbi5xdWFue1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDhweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuLnNlbGVjdG9ye1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcblxyXG59XHJcbiNjYXJkMTF7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Admin\Desktop\task\front-end-task\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map