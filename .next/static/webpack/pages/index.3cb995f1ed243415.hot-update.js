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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Generator\": function() { return /* binding */ Generator; }\n/* harmony export */ });\n/* harmony import */ var _Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Generator() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), idea = ref[0], setIdea = ref[1];\n    function getIdea(event) {\n        return _getIdea.apply(this, arguments);\n    }\n    function _getIdea() {\n        _getIdea = _asyncToGenerator(_Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var keyword;\n            return _Users_lennarddorst_programming_startup_ai_remake_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        keyword = document.getElementById(\"keyword\").value;\n                        fetch(\"http://localhost:3000/api/idea?keyword=\".concat(keyword)).then(function(response) {\n                            return response.json();\n                        }).then(function(response) {\n                            console.log(response.idea);\n                            setIdea(response.idea);\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getIdea.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"box-content flex flex-row grid place-items-center h-screen bg-cyan\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        className: \"\",\n                        onSubmit: getIdea,\n                        label: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                type: \"text\",\n                                placeholder: \"Enter one or more keywords.\",\n                                id: \"keyword\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                type: \"submit\",\n                                className: \"\",\n                                children: \"Get ideas\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                blockquote: true,\n                                children: \"Sorry for the UI \\uD83D\\uDE05, I am experimenting.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                                lineNumber: 28,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    idea !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                blockquote: true,\n                                children: idea\n                            }, void 0, false, {\n                                fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                                lineNumber: 32,\n                                columnNumber: 54\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                            lineNumber: 32,\n                            columnNumber: 43\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                        lineNumber: 32,\n                        columnNumber: 37\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lennarddorst/programming/startup-ai-remake/frontend/components/Generator.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Generator, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = Generator;\nvar _c;\n$RefreshReg$(_c, \"Generator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dlbmVyYXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2tCOztBQUV2RCxTQUFTTSxTQUFTLEdBQUc7O0lBQ3hCLElBQXdCTixHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFKdEMsSUFJZSxHQUFhQSxHQUFVLEdBQXZCLEVBSmYsT0FJd0IsR0FBSUEsR0FBVSxHQUFkO2FBRUxTLE9BQU8sQ0FBQ0MsS0FBSztlQUFiRCxRQUFPOzthQUFQQSxRQUFPO1FBQVBBLFFBQU8sR0FBdEIseU1BQXVCQyxLQUFLLEVBQUU7Z0JBRXRCQyxPQUFPOzs7O3dCQURYRCxLQUFLLENBQUNFLGNBQWMsRUFBRSxDQUFDO3dCQUNuQkQsT0FBTyxHQUFHRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO3dCQUN2REMsS0FBSyxDQUFDLHlDQUF3QyxDQUFVLE9BQVJMLE9BQU8sQ0FBRSxDQUFDLENBQUNNLElBQUksQ0FBQ0MsU0FBQUEsUUFBUTttQ0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7eUJBQUEsQ0FBQyxDQUFDRixJQUFJLENBQUNDLFNBQUFBLFFBQVEsRUFBSTs0QkFDMUdFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNYLElBQUksQ0FBQyxDQUFDOzRCQUUzQkMsT0FBTyxDQUFDVSxRQUFRLENBQUNYLElBQUksQ0FBQzt5QkFDekIsQ0FBQzs7Ozs7O1NBQ0w7ZUFSY0UsUUFBTzs7SUFVdEIscUJBQ0k7a0JBQ0ksNEVBQUNhLEtBQUc7c0JBQ0EsNEVBQUNBLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRSxvRUFBb0U7O2tDQUNoRiw4REFBQ0MsTUFBSTt3QkFBQ0QsU0FBUyxFQUFFLEVBQUU7d0JBQUVFLFFBQVEsRUFBRWhCLE9BQU87d0JBQUVpQixLQUFLLEVBQUUsRUFBRTs7MENBQzdDLDhEQUFDdkIsb0RBQUs7Z0NBQUV3QixJQUFJLEVBQUUsTUFBTTtnQ0FBRUMsV0FBVyxFQUFFLDZCQUE2QjtnQ0FBRUMsRUFBRSxFQUFFLFNBQVM7Z0NBQUdDLFFBQVE7Ozs7O29DQUFHOzBDQUM3Riw4REFBQzVCLHFEQUFNO2dDQUFDeUIsSUFBSSxFQUFFLFFBQVE7Z0NBQUVKLFNBQVMsRUFBRSxFQUFFOzBDQUFFLFdBQVM7Ozs7O29DQUFTOzs7Ozs7NEJBQ3REO2tDQUVQLDhEQUFDbEIsbURBQUk7a0NBQ0QsNEVBQUNBLHdEQUFTO3NDQUNOLDRFQUFDRCxtREFBSTtnQ0FBQzRCLFVBQVU7MENBQUMsb0RBQXVDOzs7OztvQ0FBTzs7Ozs7Z0NBQ3ZEOzs7Ozs0QkFDVDtvQkFFTHpCLElBQUksS0FBSyxFQUFFLGlCQUFHLDhEQUFDRixtREFBSTtrQ0FBQyw0RUFBQ0Esd0RBQVM7c0NBQUMsNEVBQUNELG1EQUFJO2dDQUFDNEIsVUFBVTswQ0FBRXpCLElBQUk7Ozs7O29DQUFROzs7OztnQ0FBWTs7Ozs7NEJBQU8saUJBQUcsNklBQUs7Ozs7OztvQkFDeEY7Ozs7O2dCQUNKO3FCQUVQLENBQ047Q0FDSjtHQWxDZUQsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2VuZXJhdG9yLmpzP2VlMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFRleHQsIENhcmQgfSBmcm9tICdAbmV4dHVpLW9yZy9yZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7XG4gICAgY29uc3QgW2lkZWEsIHNldElkZWFdID0gdXNlU3RhdGUoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldElkZWEoZXZlbnQpIHsgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQga2V5d29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5d29yZFwiKS52YWx1ZTtcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaWRlYT9rZXl3b3JkPSR7a2V5d29yZH1gKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5pZGVhKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0SWRlYShyZXNwb25zZS5pZGVhKVxuICAgICAgICB9KSAgIFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJveC1jb250ZW50IGZsZXggZmxleC1yb3cgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgaC1zY3JlZW4gYmctY3lhblwifT5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtcIlwifSBvblN1Ym1pdD17Z2V0SWRlYX0gbGFiZWw9e1wiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0ICB0eXBlPXtcInRleHRcIn0gcGxhY2Vob2xkZXI9e1wiRW50ZXIgb25lIG9yIG1vcmUga2V5d29yZHMuXCJ9IGlkPXtcImtleXdvcmRcIn0gIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IGNsYXNzTmFtZT17XCJcIn0+R2V0IGlkZWFzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYmxvY2txdW90ZT5Tb3JyeSBmb3IgdGhlIFVJIPCfmIUsIEkgYW0gZXhwZXJpbWVudGluZy48L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICAgICAgICAgICAgIHsgaWRlYSAhPT0gXCJcIiA/IDxDYXJkPjxDYXJkLkJvZHk+PFRleHQgYmxvY2txdW90ZT57aWRlYX08L1RleHQ+PC9DYXJkLkJvZHk+PC9DYXJkPiA6IDw+PC8+IH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJJbnB1dCIsIlRleHQiLCJDYXJkIiwiR2VuZXJhdG9yIiwiaWRlYSIsInNldElkZWEiLCJnZXRJZGVhIiwiZXZlbnQiLCJrZXl3b3JkIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsInJlcXVpcmVkIiwiQm9keSIsImJsb2NrcXVvdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Generator.js\n");

/***/ })

});