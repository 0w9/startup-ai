"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Generator.js":
/*!*********************************!*\
  !*** ./components/Generator.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Generator\": function() { return /* binding */ Generator; }\n/* harmony export */ });\n/* harmony import */ var _Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Generator() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), idea = ref[0], setIdea = ref[1];\n    function getIdea(event) {\n        return _getIdea.apply(this, arguments);\n    }\n    function _getIdea() {\n        _getIdea = _asyncToGenerator(_Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var keyword;\n            return _Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        keyword = document.getElementById(\"keyword\").value;\n                        fetch(\"http://localhost:3000/api/idea?keyword=\".concat(keyword)).then(function(response) {\n                            return response.json();\n                        }).then(function(response) {\n                            console.log(response.idea);\n                            setIdea(response.idea);\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getIdea.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"box-content flex flex-row grid place-items-center h-screen bg-cyan\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    className: \"\",\n                    onSubmit: getIdea,\n                    label: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter one or more keywords.\",\n                            id: \"keyword\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                            lineNumber: 22,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            type: \"submit\",\n                            className: \"\",\n                            children: \"Get ideas\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: idea\n                        }, void 0, false, {\n                            fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                    lineNumber: 21,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Generator, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = Generator;\nvar _c;\n$RefreshReg$(_c, \"Generator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dlbmVyYXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Q7O0FBRXBDLFNBQVNHLFNBQVMsR0FBRzs7SUFDeEIsSUFBd0JILEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUp0QyxJQUllLEdBQWFBLEdBQVUsR0FBdkIsRUFKZixPQUl3QixHQUFJQSxHQUFVLEdBQWQ7YUFFTE0sT0FBTyxDQUFDQyxLQUFLO2VBQWJELFFBQU87O2FBQVBBLFFBQU87UUFBUEEsUUFBTyxHQUF0Qix5TUFBdUJDLEtBQUssRUFBRTtnQkFFdEJDLE9BQU87Ozs7d0JBRFhELEtBQUssQ0FBQ0UsY0FBYyxFQUFFLENBQUM7d0JBQ25CRCxPQUFPLEdBQUdFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxLQUFLLENBQUM7d0JBQ3ZEQyxLQUFLLENBQUMseUNBQXdDLENBQVUsT0FBUkwsT0FBTyxDQUFFLENBQUMsQ0FBQ00sSUFBSSxDQUFDQyxTQUFBQSxRQUFRO21DQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRTt5QkFBQSxDQUFDLENBQUNGLElBQUksQ0FBQ0MsU0FBQUEsUUFBUSxFQUFJOzRCQUMxR0UsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQ1gsSUFBSSxDQUFDLENBQUM7NEJBRTNCQyxPQUFPLENBQUNVLFFBQVEsQ0FBQ1gsSUFBSSxDQUFDO3lCQUN6QixDQUFDOzs7Ozs7U0FDTDtlQVJjRSxRQUFPOztJQVV0QixxQkFDSTtrQkFDSSw0RUFBQ2EsS0FBRztzQkFDQSw0RUFBQ0EsS0FBRztnQkFBQ0MsU0FBUyxFQUFFLG9FQUFvRTswQkFDaEYsNEVBQUNDLE1BQUk7b0JBQUNELFNBQVMsRUFBRSxFQUFFO29CQUFFRSxRQUFRLEVBQUVoQixPQUFPO29CQUFFaUIsS0FBSyxFQUFFLEVBQUU7O3NDQUM3Qyw4REFBQ0MsT0FBSzs0QkFBRUMsSUFBSSxFQUFFLE1BQU07NEJBQUVDLFdBQVcsRUFBRSw2QkFBNkI7NEJBQUVDLEVBQUUsRUFBRSxTQUFTOzRCQUFHQyxRQUFROzs7OztnQ0FBRztzQ0FDN0YsOERBQUMxQixxREFBTTs0QkFBQ3VCLElBQUksRUFBRSxRQUFROzRCQUFFTCxTQUFTLEVBQUUsRUFBRTtzQ0FBRSxXQUFTOzs7OztnQ0FBUztzQ0FDekQsOERBQUNTLEdBQUM7c0NBQUV6QixJQUFJOzs7OztnQ0FBSzs7Ozs7O3dCQUNWOzs7OztvQkFDTDs7Ozs7Z0JBQ0o7cUJBRVAsQ0FDTjtDQUNKO0dBM0JlRCxTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW5lcmF0b3IuanM/ZWUyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gR2VuZXJhdG9yKCkge1xuICAgIGNvbnN0IFtpZGVhLCBzZXRJZGVhXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRJZGVhKGV2ZW50KSB7ICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGtleXdvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtleXdvcmRcIikudmFsdWU7XG4gICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2lkZWE/a2V5d29yZD0ke2tleXdvcmR9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuaWRlYSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldElkZWEocmVzcG9uc2UuaWRlYSlcbiAgICAgICAgfSkgICBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJib3gtY29udGVudCBmbGV4IGZsZXgtcm93IGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGgtc2NyZWVuIGJnLWN5YW5cIn0+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17XCJcIn0gb25TdWJtaXQ9e2dldElkZWF9IGxhYmVsPXtcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT17XCJ0ZXh0XCJ9IHBsYWNlaG9sZGVyPXtcIkVudGVyIG9uZSBvciBtb3JlIGtleXdvcmRzLlwifSBpZD17XCJrZXl3b3JkXCJ9ICByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifSBjbGFzc05hbWU9e1wiXCJ9PkdldCBpZGVhczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lkZWF9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwiR2VuZXJhdG9yIiwiaWRlYSIsInNldElkZWEiLCJnZXRJZGVhIiwiZXZlbnQiLCJrZXl3b3JkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwicmVxdWlyZWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Generator.js\n");

/***/ })

});