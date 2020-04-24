(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_CatsMatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CatsMatch.js */ "./src/components/CatsMatch.js");
/* harmony import */ var _components_ScoresCat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ScoresCat */ "./src/components/ScoresCat.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/app-catmatch/client/src/App.js";






function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _components_CatsMatch_js__WEBPACK_IMPORTED_MODULE_2__["CatsMatch"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/ScoresCat",
    component: _components_ScoresCat__WEBPACK_IMPORTED_MODULE_3__["ScoresCat"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Cat.js":
/*!*******************************!*\
  !*** ./src/components/Cat.js ***!
  \*******************************/
/*! exports provided: Cat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cat", function() { return Cat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/catsMatchStyle */ "./src/components/style/catsMatchStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/app-catmatch/client/src/components/Cat.js";


const Cat = ({
  cats = {},
  update,
  catLoser = {}
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: update.bind(null, cats._id, catLoser._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_1__["CatImg"], {
    src: cats.image,
    alt: "cat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/components/CatsMatch.js":
/*!*************************************!*\
  !*** ./src/components/CatsMatch.js ***!
  \*************************************/
/*! exports provided: CatsMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsMatch", function() { return CatsMatch; });
/* harmony import */ var _home_julie_Documents_stackerine_app_complete_app_catmatch_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cat */ "./src/components/Cat.js");
/* harmony import */ var _service_catsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/catsData */ "./src/service/catsData.js");
/* harmony import */ var _style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/catsMatchStyle */ "./src/components/style/catsMatchStyle.js");
/* harmony import */ var _style_podium_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/podium.png */ "./src/components/style/podium.png");
/* harmony import */ var _style_podium_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_podium_png__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/app-catmatch/client/src/components/CatsMatch.js";





const CatsMatch = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_julie_Documents_stackerine_app_complete_app_catmatch_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        cats = _useState2[0],
        setCats = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
        _useState4 = Object(_home_julie_Documents_stackerine_app_complete_app_catmatch_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        index = _useState4[0],
        setIndex = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchCats = async () => {
      const data = await Object(_service_catsData__WEBPACK_IMPORTED_MODULE_3__["getCats"])();
      setCats(oldData => [...oldData, ...data.slice(oldData.length === 0 ? 0 : 4)]);
    };

    if (cats.length === 0 || cats.length - index <= 4) {
      fetchCats();
    }
  }, [index]);

  const increment = () => {
    setIndex(oldIndex => oldIndex + 2);
  };

  const update = (winCatId, lostCatId) => {
    increment();
    Object(_service_catsData__WEBPACK_IMPORTED_MODULE_3__["addPointCat"])(winCatId, lostCatId);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__["ContainerHome"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__["ContainerHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Choose your favorite cat"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__["DesignLink"], {
    to: "/ScoresCat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__["ImgPodium"], {
    src: _style_podium_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__["ContainerPic"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cat__WEBPACK_IMPORTED_MODULE_2__["Cat"], {
    cats: cats[index],
    update: update,
    catLoser: cats[index + 1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Cat 1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "VS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cat__WEBPACK_IMPORTED_MODULE_2__["Cat"], {
    cats: cats[index + 1],
    update: update,
    catLoser: cats[index],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_catsMatchStyle__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Cat 2"))));
};

/***/ }),

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

/***/ }),

/***/ "./src/components/style/catsMatchStyle.js":
/*!************************************************!*\
  !*** ./src/components/style/catsMatchStyle.js ***!
  \************************************************/
/*! exports provided: ContainerHome, ContainerPic, ContainerHeader, DesignLink, Title, Text, ImgPodium, CatImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerHome", function() { return ContainerHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerPic", function() { return ContainerPic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerHeader", function() { return ContainerHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignLink", function() { return DesignLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgPodium", function() { return ImgPodium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatImg", function() { return CatImg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


const ContainerHome = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400%;
  background-position: 0 100%;
  animation: anim 10s infinite;

  @keyframes anim {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const ContainerPic = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 80%;
  margin: 0 auto;
`;
const ContainerHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-evenly;
`;
const DesignLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  font-size: 26px;
  margin: 10px;
  font-weight: 900;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 30px;
  font-weight: 900;
  color: #ebb434;
  text-transform: uppercase;
  font-family: 'Fredoka one';
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 20px;
  font-weight: 900;
  font-family: 'Pacifico';
`;
const ImgPodium = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 100px;
`; ////////// cat.js

const CatImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 400px;
  border-radius: 50px;
`;

/***/ }),

/***/ "./src/components/style/podium.png":
/*!*****************************************!*\
  !*** ./src/components/style/podium.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/app-catmatch/client/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/service/catsData.js":
/*!*********************************!*\
  !*** ./src/service/catsData.js ***!
  \*********************************/
/*! exports provided: getCats, addPointCat, getScores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCats", function() { return getCats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPointCat", function() { return addPointCat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScores", function() { return getScores; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getCats = async () => {
  const _ref = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`api/v1/cats/`, {
    params: {
      count: 10
    }
  }),
        data = _ref.data;

  return data;
};
const addPointCat = async (winCatId, lostCatId) => {
  const _ref2 = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`api/v1/scores/`, {
    winCatId,
    lostCatId
  }),
        data = _ref2.data;

  return data;
};
const getScores = async () => {
  const _ref3 = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`api/v1/scores/`, {
    params: {
      count: 5
    }
  }),
        data = _ref3.data;

  return data;
};

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/julie/Documents/stackerine/app-complete/app-catmatch/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/julie/Documents/stackerine/app-complete/app-catmatch/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/julie/Documents/stackerine/app-complete/app-catmatch/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map