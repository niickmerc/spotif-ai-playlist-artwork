"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst MyApp = (param)=>{\n    let { Component, pageProps } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to extract the access token from the URL fragment\n        const getAccessToken = ()=>{\n            const hash = router.asPath.split(\"#\")[1];\n            const params = new URLSearchParams(hash);\n            const accessToken = params.get(\"access_token\");\n            // Now you have the access token, you can use it globally or pass it down to the pages\n            console.log(\"Access Token:\", accessToken);\n        // You can store the access token in state or context to make it available to all pages\n        };\n        getAccessToken();\n    }, [\n        router.asPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/_app.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined);\n};\n_s(MyApp, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDbEI7QUFHdEIsTUFBTUcsUUFBUTtRQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFOztJQUNyQyxNQUFNQyxTQUFTSixzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsNkRBQTZEO1FBQzdELE1BQU1NLGlCQUFpQjtZQUNyQixNQUFNQyxPQUFPRixPQUFPRyxNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QyxNQUFNQyxTQUFTLElBQUlDLGdCQUFnQko7WUFDbkMsTUFBTUssY0FBY0YsT0FBT0csR0FBRyxDQUFDO1lBQy9CLHNGQUFzRjtZQUN0RkMsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkg7UUFDN0IsdUZBQXVGO1FBQ3pGO1FBRUFOO0lBQ0YsR0FBRztRQUFDRCxPQUFPRyxNQUFNO0tBQUM7SUFFbEIscUJBQU8sOERBQUNMO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0dBbEJNRjs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDO0FBb0JOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZ1bmN0aW9uIHRvIGV4dHJhY3QgdGhlIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBVUkwgZnJhZ21lbnRcbiAgICBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhc2ggPSByb3V0ZXIuYXNQYXRoLnNwbGl0KCcjJylbMV07XG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGhhc2gpO1xuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBwYXJhbXMuZ2V0KCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgIC8vIE5vdyB5b3UgaGF2ZSB0aGUgYWNjZXNzIHRva2VuLCB5b3UgY2FuIHVzZSBpdCBnbG9iYWxseSBvciBwYXNzIGl0IGRvd24gdG8gdGhlIHBhZ2VzXG4gICAgICBjb25zb2xlLmxvZygnQWNjZXNzIFRva2VuOicsIGFjY2Vzc1Rva2VuKTtcbiAgICAgIC8vIFlvdSBjYW4gc3RvcmUgdGhlIGFjY2VzcyB0b2tlbiBpbiBzdGF0ZSBvciBjb250ZXh0IHRvIG1ha2UgaXQgYXZhaWxhYmxlIHRvIGFsbCBwYWdlc1xuICAgIH07XG5cbiAgICBnZXRBY2Nlc3NUb2tlbigpO1xuICB9LCBbcm91dGVyLmFzUGF0aF0pO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJnZXRBY2Nlc3NUb2tlbiIsImhhc2giLCJhc1BhdGgiLCJzcGxpdCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFjY2Vzc1Rva2VuIiwiZ2V0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});