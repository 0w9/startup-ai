"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/idea";
exports.ids = ["pages/api/idea"];
exports.modules = {

/***/ "(api)/./pages/api/idea.js":
/*!***************************!*\
  !*** ./pages/api/idea.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nfunction handler(req, res) {\n    let keyword = req.query.keyword;\n    fetch(\"https://api.openai.com/v1/completions\", {\n        \"method\": \"POST\",\n        \"headers\": {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": `Bearer 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`\n        },\n        \"body\": `{\\\"model\\\":\\\"text-davinci-002\\\",\\\"prompt\\\":\\\"Create a startup idea with the keyword ${keyword}.\\\",\\\"temperature\\\":0.89,\\\"max_tokens\\\":150,\\\"top_p\\\":1,\\\"frequency_penalty\\\":0,\\\"presence_penalty\\\":0}`\n    }).then((data)=>data.json()\n    ).then((data)=>{\n        res.status(200).json({\n            idea: data.choices[0].text\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWRlYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBRTlELFNBQVNBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFeEMsSUFBSUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsT0FBTztJQUUvQkUsS0FBSyxDQUFDLHVDQUF1QyxFQUFFO1FBQzdDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRTtZQUNULGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsZUFBZSxFQUFFLENBQUMsMERBQTBELENBQUM7U0FDOUU7UUFDRCxNQUFNLEVBQUUsQ0FBQyxvRkFBb0YsRUFBRUYsT0FBTyxDQUFDLHVHQUF1RyxDQUFDO0tBQ2hOLENBQUMsQ0FBQ0csSUFBSSxDQUFDQyxDQUFBQSxJQUFJLEdBQUlBLElBQUksQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsQ0FBQyxDQUFDRixJQUFJLENBQUNDLENBQUFBLElBQUksR0FBSTtRQUN4Q0wsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELElBQUksQ0FBQztZQUFFRSxJQUFJLEVBQUVILElBQUksQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJO1NBQUUsQ0FBQztLQUNyRCxDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9pZGVhLmpzPzRiMzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXG4gIGxldCBrZXl3b3JkID0gcmVxLnF1ZXJ5LmtleXdvcmQ7XG5cbiAgZmV0Y2goXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NvbXBsZXRpb25zXCIsIHtcbiAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICBcImhlYWRlcnNcIjoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciBzay1oazJPSGgwYXozNHc4a3RHNWY0QVQzQmxia0ZKTFRiaTFxUWNZQnRZVzRGOXdjWU1gXG4gICAgfSxcbiAgICBcImJvZHlcIjogYHtcXFwibW9kZWxcXFwiOlxcXCJ0ZXh0LWRhdmluY2ktMDAyXFxcIixcXFwicHJvbXB0XFxcIjpcXFwiQ3JlYXRlIGEgc3RhcnR1cCBpZGVhIHdpdGggdGhlIGtleXdvcmQgJHtrZXl3b3JkfS5cXFwiLFxcXCJ0ZW1wZXJhdHVyZVxcXCI6MC44OSxcXFwibWF4X3Rva2Vuc1xcXCI6MTUwLFxcXCJ0b3BfcFxcXCI6MSxcXFwiZnJlcXVlbmN5X3BlbmFsdHlcXFwiOjAsXFxcInByZXNlbmNlX3BlbmFsdHlcXFwiOjB9YFxuICB9KS50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBpZGVhOiBkYXRhLmNob2ljZXNbMF0udGV4dCB9KVxuICB9KVxufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJrZXl3b3JkIiwicXVlcnkiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImlkZWEiLCJjaG9pY2VzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/idea.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/idea.js"));
module.exports = __webpack_exports__;

})();