"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_src_views_buttons_button-groups_ButtonGroups_js"],{

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

/***/ "./resources/js/components/src/views/buttons/button-groups/ButtonGroups.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/src/views/buttons/button-groups/ButtonGroups.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _src_reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/reusable */ "./resources/js/components/src/reusable/index.js");




var ButtonGroups = function ButtonGroups() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Callout", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_reusable__WEBPACK_IMPORTED_MODULE_2__.DocsLink, {
    name: "CCallout"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCallout, {
    color: "primary"
  }, "Callout"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Button Group", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_reusable__WEBPACK_IMPORTED_MODULE_2__.DocsLink, {
    name: "-Button/#CButtonGroup"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Middle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Right")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Button Group", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " toolbar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonToolbar, {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, {
    className: "mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, {
    className: "mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "8"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonToolbar, {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, {
    className: "mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroupPrepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroupText, null, "@")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInput, {
    placeholder: "Input group example"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonToolbar, {
    justify: "between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroupPrepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroupText, null, "@")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInput, {
    placeholder: "Input group example"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Button Group", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " vertical variation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, {
    vertical: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "3"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Button Group", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " sizing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, {
    size: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Middle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Middle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, {
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Middle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "Right")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Button Group", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " nestingccc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    color: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    caret: true,
    color: "secondary"
  }, "Dropdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Dropdown Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Dropdown Link")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Button Group", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, " vertical")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButtonGroup, {
    vertical: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
    color: "secondary"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
    color: "secondary",
    caret: true
  }, "Dropdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Dropdown Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, null, "Dropdown Link"))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonGroups);

/***/ })

}]);