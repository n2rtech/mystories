"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_src_views_notifications_badges_Badges_js"],{

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

/***/ "./resources/js/components/src/views/notifications/badges/Badges.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/src/views/notifications/badges/Badges.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _src_reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/reusable */ "./resources/js/components/src/reusable/index.js");




var Badges = function Badges() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
    xs: "12",
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Badges", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_reusable__WEBPACK_IMPORTED_MODULE_2__.DocsLink, {
    name: "CBadge"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Example heading ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    color: "secondary"
  }, "New")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Example heading ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    color: "secondary"
  }, "New")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Example heading ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    color: "secondary"
  }, "New")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Example heading ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    color: "secondary"
  }, "New")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Example heading ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    color: "secondary"
  }, "New")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Example heading ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    color: "secondary"
  }, "New"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Notifications ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    color: "primary",
    shape: "pill",
    style: {
      position: 'static'
    }
  }, "9"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
    xs: "12",
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Badges", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " contextual variations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "primary"
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "secondary"
  }, "Secondary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "success"
  }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "danger"
  }, "Danger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "warning"
  }, "Warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "info"
  }, "Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "light"
  }, "Light"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "dark"
  }, "Dark"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Badges", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " pill badges")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "primary",
    shape: "pill"
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "secondary",
    shape: "pill"
  }, "Secondary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "success",
    shape: "pill"
  }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "danger",
    shape: "pill"
  }, "Danger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "warning",
    shape: "pill"
  }, "Warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "info",
    shape: "pill"
  }, "Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "light",
    shape: "pill"
  }, "Light"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    color: "dark",
    shape: "pill"
  }, "Dark"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Badges", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " links")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    href: "#",
    color: "primary"
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    href: "#",
    color: "secondary"
  }, "Secondary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    href: "#",
    color: "success"
  }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    href: "#",
    color: "danger"
  }, "Danger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    href: "#",
    color: "warning"
  }, "Warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    href: "#",
    color: "info"
  }, "Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    href: "#",
    color: "light"
  }, "Light"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
    className: "mr-1",
    href: "#",
    color: "dark",
    shape: "pill"
  }, "Dark")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badges);

/***/ })

}]);