webpackHotUpdate("static\\development\\pages\\ImageChangeOnScroll.js",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\abdoulaye\\Desktop\\abdoul\\Learning\\react-hooks\\src\\ImageToggleOnScroll.js";


var ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      inView = _useState4[0],
      setInView = _useState4[1];

  var isInView = function isInView() {
    if (imageRef.current) {
      var rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  var scrollHandler = function scrollHandler() {
    setInView(function () {
      return isInView();
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ })

})
//# sourceMappingURL=ImageChangeOnScroll.js.828afb7359169f63f4d9.hot-update.js.map