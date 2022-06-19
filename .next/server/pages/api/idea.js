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

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "(api)/./pages/api/idea.js":
/*!***************************!*\
  !*** ./pages/api/idea.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nfunction handler(req, res) {\n    let keyword = req.query.keyword;\n    fetch(\"https://api.openai.com/v1/completions\", {\n        \"method\": \"POST\",\n        \"headers\": {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": `Bearer ${process.env.API_KEY}`\n        },\n        \"body\": `{\\\"model\\\":\\\"text-davinci-002\\\",\\\"prompt\\\":\\\"Create a startup idea with the keyword ${keyword}.\\\",\\\"temperature\\\":0.89,\\\"max_tokens\\\":150,\\\"top_p\\\":1,\\\"frequency_penalty\\\":0,\\\"presence_penalty\\\":0}`\n    }).then((data)=>data.json()\n    ).then((data)=>{\n        res.status(200).json({\n            idea: data.choices[0].text\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWRlYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBQzdFQSxvREFBd0IsRUFBRTtBQUVYLFNBQVNFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFeEMsSUFBSUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsT0FBTztJQUUvQkUsS0FBSyxDQUFDLHVDQUF1QyxFQUFFO1FBQzdDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRTtZQUNULGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7U0FDakQ7UUFDRCxNQUFNLEVBQUUsQ0FBQyxvRkFBb0YsRUFBRUwsT0FBTyxDQUFDLHVHQUF1RyxDQUFDO0tBQ2hOLENBQUMsQ0FBQ00sSUFBSSxDQUFDQyxDQUFBQSxJQUFJLEdBQUlBLElBQUksQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsQ0FBQyxDQUFDRixJQUFJLENBQUNDLENBQUFBLElBQUksR0FBSTtRQUN4Q1IsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELElBQUksQ0FBQztZQUFFRSxJQUFJLEVBQUVILElBQUksQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJO1NBQUUsQ0FBQztLQUNyRCxDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9pZGVhLmpzPzRiMzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblxuICBsZXQga2V5d29yZCA9IHJlcS5xdWVyeS5rZXl3b3JkO1xuXG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jb21wbGV0aW9uc1wiLCB7XG4gICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5BUElfS0VZfWBcbiAgICB9LFxuICAgIFwiYm9keVwiOiBge1xcXCJtb2RlbFxcXCI6XFxcInRleHQtZGF2aW5jaS0wMDJcXFwiLFxcXCJwcm9tcHRcXFwiOlxcXCJDcmVhdGUgYSBzdGFydHVwIGlkZWEgd2l0aCB0aGUga2V5d29yZCAke2tleXdvcmR9LlxcXCIsXFxcInRlbXBlcmF0dXJlXFxcIjowLjg5LFxcXCJtYXhfdG9rZW5zXFxcIjoxNTAsXFxcInRvcF9wXFxcIjoxLFxcXCJmcmVxdWVuY3lfcGVuYWx0eVxcXCI6MCxcXFwicHJlc2VuY2VfcGVuYWx0eVxcXCI6MH1gXG4gIH0pLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSkudGhlbihkYXRhID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkZWE6IGRhdGEuY2hvaWNlc1swXS50ZXh0IH0pXG4gIH0pXG59XG4iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJrZXl3b3JkIiwicXVlcnkiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIiwidGhlbiIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiaWRlYSIsImNob2ljZXMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/idea.js\n");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nfunction handler(req, res) {\n    let keyword = req.query.keyword;\n    fetch(\"https://api.openai.com/v1/completions\", {\n        \"method\": \"POST\",\n        \"headers\": {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer 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\"\n        },\n        \"body\": `{\\\"model\\\":\\\"text-davinci-002\\\",\\\"prompt\\\":\\\"Create a startup idea with the keyword ${keyword}.\\\",\\\"temperature\\\":0.89,\\\"max_tokens\\\":150,\\\"top_p\\\":1,\\\"frequency_penalty\\\":0,\\\"presence_penalty\\\":0}`\n    }).then((data)=>data.json()\n    ).then((data)=>{\n        res.status(200).json({\n            idea: data.choices[0].text\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWRlYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBQzdFQSxvREFBd0IsRUFBRTtBQUVYLFNBQVNFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFeEMsSUFBSUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsT0FBTztJQUUvQkUsS0FBSyxDQUFDLHVDQUF1QyxFQUFFO1FBQzdDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRTtZQUNULGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsZUFBZSxFQUFFLDREQUE0RDtTQUM5RTtRQUNELE1BQU0sRUFBRSxDQUFDLG9GQUFvRixFQUFFRixPQUFPLENBQUMsdUdBQXVHLENBQUM7S0FDaE4sQ0FBQyxDQUFDRyxJQUFJLENBQUNDLENBQUFBLElBQUksR0FBSUEsSUFBSSxDQUFDQyxJQUFJLEVBQUU7SUFBQSxDQUFDLENBQUNGLElBQUksQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFJO1FBQ3hDTCxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQUVFLElBQUksRUFBRUgsSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUk7U0FBRSxDQUFDO0tBQ3JELENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL2lkZWEuanM/NGIzMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXG4gIGxldCBrZXl3b3JkID0gcmVxLnF1ZXJ5LmtleXdvcmQ7XG5cbiAgZmV0Y2goXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NvbXBsZXRpb25zXCIsIHtcbiAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICBcImhlYWRlcnNcIjoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgc2staGsyT0hoMGF6MzR3OGt0RzVmNEFUM0JsYmtGSkxUYmkxcVFjWUJ0WVc0Rjl3Y1lNXCJcbiAgICB9LFxuICAgIFwiYm9keVwiOiBge1xcXCJtb2RlbFxcXCI6XFxcInRleHQtZGF2aW5jaS0wMDJcXFwiLFxcXCJwcm9tcHRcXFwiOlxcXCJDcmVhdGUgYSBzdGFydHVwIGlkZWEgd2l0aCB0aGUga2V5d29yZCAke2tleXdvcmR9LlxcXCIsXFxcInRlbXBlcmF0dXJlXFxcIjowLjg5LFxcXCJtYXhfdG9rZW5zXFxcIjoxNTAsXFxcInRvcF9wXFxcIjoxLFxcXCJmcmVxdWVuY3lfcGVuYWx0eVxcXCI6MCxcXFwicHJlc2VuY2VfcGVuYWx0eVxcXCI6MH1gXG4gIH0pLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSkudGhlbihkYXRhID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkZWE6IGRhdGEuY2hvaWNlc1swXS50ZXh0IH0pXG4gIH0pXG59XG4iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJrZXl3b3JkIiwicXVlcnkiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImlkZWEiLCJjaG9pY2VzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/idea.js\n");
>>>>>>> e4068e93a501591e3cb881f526f002358c516076

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