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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Generator\": function() { return /* binding */ Generator; }\n/* harmony export */ });\n/* harmony import */ var _Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nfunction Generator() {\n    function getIdea() {\n        return _getIdea.apply(this, arguments);\n    }\n    function _getIdea() {\n        _getIdea = _asyncToGenerator(_Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var controller, timeoutId;\n            return _Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        controller = new AbortController();\n                        timeoutId = setTimeout(function() {\n                            return controller.abort();\n                        }, 1000000);\n                        fetch(\"http://localhost:3003/api/idea?keyword=food\", {\n                            \"body\": \"false\"\n                        }).then(function(response) {\n                            console.log(response);\n                        }).catch(function(err) {\n                            console.error(err);\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getIdea.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            className: \"grid place-items-center h-screen\",\n            onSubmit: getIdea,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Enter one or more keywords.\",\n                    id: \"keyword\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Get ideas\"\n                }, void 0, false, {\n                    fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = Generator;\nvar _c;\n$RefreshReg$(_c, \"Generator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dlbmVyYXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsU0FBUyxHQUFHO2FBRVRDLE9BQU87ZUFBUEEsUUFBTzs7YUFBUEEsUUFBTztRQUFQQSxRQUFPLEdBQXRCLDJNQUF5QjtnQkFDakJDLFVBQVUsRUFDVkMsU0FBUzs7Ozt3QkFEVEQsVUFBVSxHQUFHLElBQUlFLGVBQWUsRUFBRTt3QkFDbENELFNBQVMsR0FBR0UsVUFBVSxDQUFDO21DQUFNSCxVQUFVLENBQUNJLEtBQUssRUFBRTt5QkFBQSxFQUFFLE9BQU8sQ0FBQzt3QkFFN0RDLEtBQUssQ0FBQyw2Q0FBNkMsRUFBRTs0QkFDakQsTUFBTSxFQUFFLE9BQU87eUJBQ2hCLENBQUMsQ0FDREMsSUFBSSxDQUFDQyxTQUFBQSxRQUFRLEVBQUk7NEJBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDLENBQUM7eUJBQ3ZCLENBQUMsQ0FDREcsS0FBSyxDQUFDQyxTQUFBQSxHQUFHLEVBQUk7NEJBQ1pILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FBQzt5QkFDcEIsQ0FBQyxDQUFDOzs7Ozs7U0FDUjtlQWJjWixRQUFPOztJQWV0QixxQkFDSTtrQkFDSSw0RUFBQ2MsTUFBSTtZQUFDQyxTQUFTLEVBQUUsa0NBQWtDO1lBQUVDLFFBQVEsRUFBRWhCLE9BQU87OzhCQUNsRSw4REFBQ2lCLE9BQUs7b0JBQUNDLElBQUksRUFBRSxNQUFNO29CQUFFQyxXQUFXLEVBQUUsNkJBQTZCO29CQUFFQyxFQUFFLEVBQUUsU0FBUztvQkFBRUMsUUFBUTs7Ozs7d0JBQUU7OEJBQzFGLDhEQUFDQyxRQUFNO29CQUFDSixJQUFJLEVBQUUsUUFBUTs4QkFBRSxXQUFTOzs7Ozt3QkFBUzs7Ozs7O2dCQUN2QztxQkFDUixDQUNOO0NBQ0o7QUF6QmVuQixLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2VuZXJhdG9yLmpzP2VlMjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRvcigpIHtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldElkZWEoKSB7XG4gICAgICAgIGxldCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpICBcbiAgICAgICAgbGV0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCAxMDAwMDAwKVxuXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAzL2FwaS9pZGVhP2tleXdvcmQ9Zm9vZFwiLCB7XG4gICAgICAgICAgICBcImJvZHlcIjogXCJmYWxzZVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtcImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGgtc2NyZWVuXCJ9IG9uU3VibWl0PXtnZXRJZGVhfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IHBsYWNlaG9sZGVyPXtcIkVudGVyIG9uZSBvciBtb3JlIGtleXdvcmRzLlwifSBpZD17XCJrZXl3b3JkXCJ9IHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9PkdldCBpZGVhczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkdlbmVyYXRvciIsImdldElkZWEiLCJjb250cm9sbGVyIiwidGltZW91dElkIiwiQWJvcnRDb250cm9sbGVyIiwic2V0VGltZW91dCIsImFib3J0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Generator.js\n");

/***/ })

});