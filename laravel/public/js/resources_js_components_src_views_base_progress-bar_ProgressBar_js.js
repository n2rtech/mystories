"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_src_views_base_progress-bar_ProgressBar_js"],{

/***/ "./resources/js/components/src/reusable/DocsLink.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/src/reusable/DocsLink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
var _excluded = ["name", "text"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var DocsLink = function DocsLink(props) {
  var name = props.name,
      text = props.text,
      rest = _objectWithoutProperties(props, _excluded);

  var href = name ? "https://coreui.io/react/docs/components/".concat(name) : props.href;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CLink, _extends({}, rest, {
    href: href,
    rel: "noreferrer noopener",
    target: "_blank",
    className: "card-header-action"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
    className: "text-muted"
  }, text || 'docs')));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(DocsLink));

/***/ }),

/***/ "./resources/js/components/src/reusable/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/src/reusable/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsLink": () => (/* reexport safe */ _DocsLink__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _DocsLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocsLink */ "./resources/js/components/src/reusable/DocsLink.js");



/***/ }),

/***/ "./resources/js/components/src/views/base/progress-bar/ProgressBar.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/src/views/base/progress-bar/ProgressBar.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _src_reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/reusable */ "./resources/js/components/src/reusable/index.js");




var ProgressBar = function ProgressBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Progress", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_reusable__WEBPACK_IMPORTED_MODULE_2__.DocsLink, {
    name: "CProgressBar"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    value: 25,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    value: 50,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    value: 75,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    value: 100,
    className: "mb-3"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Progress", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " labels")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    value: 25.3746472,
    showPercentage: true,
    precision: 2,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    value: 50.45,
    showValue: true,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    value: 15,
    max: 20,
    showPercentage: true,
    className: "mb-3"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Progress", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " heights")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    value: 25,
    className: "mb-3",
    style: {
      height: "3px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    value: 25,
    className: "mb-3",
    style: {
      height: "30px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Progress", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " backgrounds")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    color: "success",
    value: "25",
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    color: "info",
    value: 50,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    color: "warning",
    value: 75,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    color: "danger",
    value: "100",
    className: "mb-3"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Progress", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " multiple bar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgressBar, {
    value: 10
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgressBar, {
    color: "success",
    value: 30
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgressBar, {
    color: "danger",
    value: 20
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Progress", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " striped")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    striped: true,
    value: 2 * 5,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    striped: true,
    color: "success",
    value: 25,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    striped: true,
    color: "info",
    value: 50,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    striped: true,
    color: "warning",
    value: 75,
    className: "mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    striped: true,
    color: "danger",
    value: 100,
    className: "mb-3"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Progress", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " animated")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
    animated: true,
    value: 75,
    className: "mb-3"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ })

}]);