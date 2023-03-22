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
exports.id = "pages/aRecord/[id]";
exports.ids = ["pages/aRecord/[id]"];
exports.modules = {

/***/ "./pages/aRecord/[id].js":
/*!*******************************!*\
  !*** ./pages/aRecord/[id].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n// import { GetServerSideProps } from \"./about\";\n// Generates\n\nlet url = \"https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=xDCdWA0O8nAngBUGuOORmtEFqLlucG2G\";\nconst getStaticPaths = async ()=>{\n    const res = await fetch(\"https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=xDCdWA0O8nAngBUGuOORmtEFqLlucG2G\");\n    const data = await res.json();\n    // Looping through the array of objects\n    const paths = data.results.map((aRecord)=>{\n        return {\n            params: {\n                id: aRecord.T\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\n// get  Static\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    console.log(\"This is an ID \" + id);\n    const res = await fetch(\"https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=xDCdWA0O8nAngBUGuOORmtEFqLlucG2G\");\n    const data = await res.json();\n    console.log(\"ARecord .....\" + data.results);\n    return {\n        props: {\n            aRecord: data.filter((rec)=>{\n                return rec.T == id;\n            })\n        }\n    };\n};\nconst aRecord = ({ aRecord  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {}, void 0, false, {\n                fileName: \"C:\\\\nodeApp\\\\newInvestCheck\\\\pages\\\\aRecord\\\\[id].js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"C:\\\\nodeApp\\\\newInvestCheck\\\\pages\\\\aRecord\\\\[id].js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\nodeApp\\\\newInvestCheck\\\\pages\\\\aRecord\\\\[id].js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aRecord);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hUmVjb3JkL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxnREFBZ0Q7QUFHaEQsWUFBWTtBQUVaO0FBQUEsSUFBSUEsTUFBTztBQUVKLE1BQU1DLGlCQUFpQixVQUFTO0lBRXJDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtJQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFFMUIsdUNBQXVDO0lBQ3ZDLE1BQU1DLFFBQVFGLEtBQUtHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxVQUFVO1FBQ3ZDLE9BQU87WUFDTEMsUUFBUztnQkFBQ0MsSUFBSUYsUUFBUUcsQ0FBQztZQUFBO1FBRXpCO0lBQ0Y7SUFFRSxPQUFPO1FBQ0xOO1FBQ0FPLFVBQVUsS0FBSztJQUNqQjtBQUVILEVBQUM7QUFFRixjQUFjO0FBQ1AsTUFBTUMsaUJBQWlCLE9BQU1DLFVBQVU7SUFDN0MsTUFBTUosS0FBS0ksUUFBUUwsTUFBTSxDQUFDQyxFQUFFO0lBQzVCSyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CTjtJQUUvQixNQUFNVCxNQUFNLE1BQU1DLE1BQU07SUFDeEIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBRTNCVyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCYixLQUFLRyxPQUFPO0lBRTFDLE9BQU07UUFDSlcsT0FBTTtZQUFDVCxTQUFVTCxLQUFLZSxNQUFNLENBQUNDLENBQUFBLE1BQU07Z0JBQ2pDLE9BQU9BLElBQUlSLENBQUMsSUFBSUQ7WUFDbEI7UUFFQTtJQUNGO0FBQ0YsRUFBQztBQUdELE1BQU9GLFVBQVUsQ0FBQyxFQUFDQSxRQUFPLEVBQUMsR0FBSztJQUM1QixxQkFDSSw4REFBQ1k7OzBCQUNHLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNDOzs7Ozs7Ozs7OztBQUliO0FBRUEsaUVBQWVkLE9BQU9BLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2FSZWNvcmQvW2lkXS5qcz82N2Q5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwiLi9hYm91dFwiO1xyXG5cclxuXHJcbi8vIEdlbmVyYXRlc1xyXG5cclxubGV0IHVybCA9ICAnaHR0cHM6Ly9hcGkucG9seWdvbi5pby92Mi9hZ2dzL2dyb3VwZWQvbG9jYWxlL3VzL21hcmtldC9zdG9ja3MvMjAyMy0wMS0wOT9hZGp1c3RlZD10cnVlJmFwaUtleT14RENkV0EwTzhuQW5nQlVHdU9PUm10RUZxTGx1Y0cyRyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYygpPT57XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5wb2x5Z29uLmlvL3YyL2FnZ3MvZ3JvdXBlZC9sb2NhbGUvdXMvbWFya2V0L3N0b2Nrcy8yMDIzLTAxLTA5P2FkanVzdGVkPXRydWUmYXBpS2V5PXhEQ2RXQTBPOG5BbmdCVUd1T09SbXRFRnFMbHVjRzJHJyk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgIC8vIExvb3BpbmcgdGhyb3VnaCB0aGUgYXJyYXkgb2Ygb2JqZWN0c1xyXG4gICBjb25zdCBwYXRocyA9IGRhdGEucmVzdWx0cy5tYXAoYVJlY29yZCA9PntcclxuICAgICByZXR1cm4ge1xyXG4gICAgICAgcGFyYW1zIDoge2lkOiBhUmVjb3JkLlR9XHJcblxyXG4gICAgIH1cclxuICAgfSk7XHJcblxyXG4gICAgIHJldHVybiB7XHJcbiAgICAgICBwYXRocyxcclxuICAgICAgIGZhbGxiYWNrOiBmYWxzZSwgLy8gY2FuIGFsc28gYmUgdHJ1ZSBvciAnYmxvY2tpbmcnXHJcbiAgICAgfSBcclxuXHJcbiAgfSBcclxuXHJcbiAvLyBnZXQgIFN0YXRpY1xyXG4gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoY29udGV4dCk9PntcclxuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkIDtcclxuICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgYW4gSUQgXCIgKyBpZCk7XHJcbiAgXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnBvbHlnb24uaW8vdjIvYWdncy9ncm91cGVkL2xvY2FsZS91cy9tYXJrZXQvc3RvY2tzLzIwMjMtMDEtMDk/YWRqdXN0ZWQ9dHJ1ZSZhcGlLZXk9eERDZFdBME84bkFuZ0JVR3VPT1JtdEVGcUxsdWNHMkcnKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICBjb25zb2xlLmxvZyhcIkFSZWNvcmQgLi4uLi5cIiArIGRhdGEucmVzdWx0cyk7XHJcblxyXG4gIHJldHVybntcclxuICAgIHByb3BzOnthUmVjb3JkIDogZGF0YS5maWx0ZXIocmVjID0+e1xyXG4gICAgICByZXR1cm4gcmVjLlQgPT0gaWRcclxuICAgIH0pXHJcblxyXG4gICAgfVxyXG4gIH0gIFxyXG59ICBcclxuXHJcblxyXG5jb25zdCAgYVJlY29yZCA9ICh7YVJlY29yZH0pID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz57fTwvaDM+XHJcbiAgICAgICAgICAgIDxwPnt9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcblxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYVJlY29yZCA7XHJcbiJdLCJuYW1lcyI6WyJ1cmwiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwYXRocyIsInJlc3VsdHMiLCJtYXAiLCJhUmVjb3JkIiwicGFyYW1zIiwiaWQiLCJUIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJmaWx0ZXIiLCJyZWMiLCJkaXYiLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/aRecord/[id].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/aRecord/[id].js"));
module.exports = __webpack_exports__;

})();