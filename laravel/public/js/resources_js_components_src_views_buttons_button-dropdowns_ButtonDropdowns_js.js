"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_src_views_buttons_button-dropdowns_ButtonDropdowns_js"],{

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

/***/ "./resources/js/components/src/views/buttons/button-dropdowns/ButtonDropdowns.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/src/views/buttons/button-dropdowns/ButtonDropdowns.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _src_reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/reusable */ "./resources/js/components/src/reusable/index.js");




var ButtonDropdowns = function ButtonDropdowns() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
    xs: "12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Dropdowns", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_reusable__WEBPACK_IMPORTED_MODULE_2__.DocsLink, {
    name: "CDropdown"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, null, "Dropdown button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 btn-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "primary"
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 btn-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Secondary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 btn-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "success"
  }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 btn-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "info"
  }, "Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 btn-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "warning"
  }, "Warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 btn-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "danger"
  }, "Danger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    split: true,
    color: "primary"
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    split: true,
    color: "secondary"
  }, "Secondary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    split: true,
    color: "success"
  }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    split: true,
    color: "info"
  }, "Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    split: true,
    color: "warning"
  }, "Warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    split: true,
    color: "danger"
  }, "Danger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1",
    size: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Large button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    split: true,
    color: "secondary",
    size: "lg"
  }, "Large split button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary",
    size: "sm"
  }, "Small button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary",
    size: "sm",
    split: true
  }, "Small split button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Dropup button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    split: true,
    color: "secondary"
  }, "Split dropup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Menus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 d-inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Direction Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 d-inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Direction Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 d-inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Direction Right"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownHeader, null, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1 d-inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Default Down"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
    placement: "bottom",
    modifiers: [{
      name: 'flip',
      enabled: false
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "This dropdown", '\'', "s menu is right-aligned"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Action Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Dropdown with header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    header: true
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Dropdown with divider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Another Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary"
  }, "Dropdown with disabled item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    disabled: true
  }, "Disabled Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    className: "m-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "info"
  }, "Dropdown with form"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CForm, {
    className: "px-4 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CLabel, {
    htmlFor: "exampleDropdownFormEmail1"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInput, {
    className: "form-control",
    id: "exampleDropdownFormEmail1",
    type: "email",
    placeholder: "email@example.com",
    autoComplete: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CLabel, {
    htmlFor: "exampleDropdownFormPassword1"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInput, {
    className: "form-control",
    id: "exampleDropdownFormPassword1",
    type: "password",
    placeholder: "Password",
    autoComplete: "current-password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormGroup, {
    variant: "custom-checkbox",
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputCheckbox, {
    custom: true,
    id: "exampleDropdownFormCheckbox1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CLabel, {
    variant: "custom-checkbox",
    htmlFor: "exampleDropdownFormCheckbox1"
  }, "Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormGroup, {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "primary",
    type: "submit"
  }, "Sign in"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownDivider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
    to: "/register"
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Forgot password?")))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonDropdowns);

/***/ })

}]);