webpackHotUpdate("main",{

/***/ "./src/components/ScoresCat.js":
/*!*************************************!*\
  !*** ./src/components/ScoresCat.js ***!
  \*************************************/
/*! exports provided: ScoresCat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresCat", function() { return ScoresCat; });
/* harmony import */ var _home_julie_Documents_stackerine_app_complete_app_catmatch_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/catsMatchStyle */ "./src/components/style/catsMatchStyle.js");
/* harmony import */ var _service_catsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/catsData */ "./src/service/catsData.js");

var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/app-catmatch/client/src/components/ScoresCat.js";




const ScoresCat = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_julie_Documents_stackerine_app_complete_app_catmatch_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        scores = _useState2[0],
        setScores = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchScores = async () => {
      const response = await Object(_service_catsData__WEBPACK_IMPORTED_MODULE_4__["getScores"])();
      setScores(response);
    };

    fetchScores();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_3__["ContainerHome"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "TOP 5 cats"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "cats"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "points")), scores.map((score, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: score.image,
    alt: "cat on list",
    style: {
      width: '100px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, score.catWon))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_3__["DesignLink"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Back")));
};

/***/ })

})
//# sourceMappingURL=main.0f6c31efa4f115b35cdc.hot-update.js.map