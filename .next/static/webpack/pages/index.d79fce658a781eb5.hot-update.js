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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    function checkIfWalletIsConnected() {\n        return _checkIfWalletIsConnected.apply(this, arguments);\n    }\n    function _checkIfWalletIsConnected() {\n        _checkIfWalletIsConnected = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            console.log(\"Ethereum\", ethereum);\n                        } else {\n                            console.log(\"No wallet found\");\n                        }\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 4:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Found Accounts: \", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No Authorized account found\");\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkIfWalletIsConnected.apply(this, arguments);\n    }\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, rinkebyChainId, accounts;\n            return _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: \"eth_chainId\"\n                        });\n                    case 7:\n                        chainId = _ctx.sent;\n                        console.log(\"Connected to chain:\" + chainId);\n                        rinkebyChainId = \"0x16\";\n                        if (!(chainId !== rinkebyChainId)) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        alert(\"You are not connected to the Lukso Testnet!\");\n                        return _ctx.abrupt(\"return\");\n                    case 13:\n                        _ctx.next = 15;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 15:\n                        accounts = _ctx.sent;\n                        console.log(\"Found account\", accounts[0]);\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 23;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"Error connecting to metamask\", _ctx.t0);\n                    case 23:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    20\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center pt-32 bg-[#f3f6f4] text-[#6a50aa] min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"trasition hover:rotate-180 hover:scale-105 transition duration-500 ease-in-out\"\n            }, void 0, false, {\n                fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold mb-20 mt-12\",\n                children: \"Mint your NFT!\"\n            }, void 0, false, {\n                fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, _this),\n            currentAccount === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out\",\n                onClick: connectWallet,\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 5\n            }, _this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n        lineNumber: 59,\n        columnNumber: 3\n    }, _this);\n};\n_s(Home, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUdvRDs7QUFFcEQsSUFBTUUsSUFBSSxHQUFHLFdBQU07O0lBQ2pCLElBQTRDRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQWpERSxjQUFjLEdBQXVCRixHQUFZLEdBQW5DLEVBQUVHLGlCQUFpQixHQUFJSCxHQUFZLEdBQWhCO2FBQ3pCSSx3QkFBd0I7ZUFBeEJBLHlCQUF3Qjs7YUFBeEJBLHlCQUF3QjtRQUF4QkEseUJBQXdCLEdBQXZDLG1RQUF5QztnQkFDaENDLFFBQVEsRUFPVEMsUUFBUTs7Ozt3QkFQUixRQUFTLEdBQUlDLE1BQU0sQ0FBbEJGLFFBQVE7d0JBQ2YsSUFBR0EsUUFBUSxFQUFDOzRCQUNWRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVKLFFBQVEsQ0FBQzt5QkFDbEMsTUFBTTs0QkFDTEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7eUJBQy9COzsrQkFFc0JKLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDOzRCQUFDQyxNQUFNLEVBQUUsY0FBYzt5QkFBQyxDQUFDOzt3QkFBM0RMLFFBQVEsWUFBbUQ7d0JBRWpFLElBQUdBLFFBQVEsQ0FBQ00sTUFBTSxLQUFLLENBQUMsRUFBQzs0QkFDdkJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFSCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzVDSCxpQkFBaUIsQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUUvQixNQUFNOzRCQUNMRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQzt5QkFDM0M7Ozs7OztTQUNGO2VBakJjTCx5QkFBd0I7O2FBbUJ4QlMsYUFBYTtlQUFiQSxjQUFhOzthQUFiQSxjQUFhO1FBQWJBLGNBQWEsR0FBNUIsbVFBQThCO2dCQUVoQlIsUUFBUSxFQU1aUyxPQUFPLEVBR0xDLGNBQWMsRUFPZFQsUUFBUTs7Ozs7d0JBaEJSLFFBQVUsR0FBS0MsTUFBTSxDQUFuQkYsUUFBUTs0QkFFWEEsUUFBUTs7Ozt3QkFDWEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7Ozs7K0JBR2xCSixRQUFRLENBQUNLLE9BQU8sQ0FBQzs0QkFBRUMsTUFBTSxFQUFFLGFBQWE7eUJBQUMsQ0FBQzs7d0JBQTFERyxPQUFPLFlBQW1EO3dCQUM5RE4sT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEdBQUdLLE9BQU8sQ0FBQzt3QkFFdENDLGNBQWMsR0FBRyxNQUFNOzRCQUV6QkQsQ0FBQUEsQ0FBQUEsT0FBTyxLQUFLQyxjQUFjOzs7O3dCQUM1QkMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDOzs7OytCQUkvQlgsUUFBUSxDQUFDSyxPQUFPLENBQUM7NEJBQUVDLE1BQU0sRUFBRSxxQkFBcUI7eUJBQUUsQ0FBQzs7d0JBQXBFTCxRQUFRLFlBQTREO3dCQUUxRUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFSCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pDSCxpQkFBaUIsQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7d0JBRWpDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsVUFBUTs7Ozs7Ozs7Ozs7U0FFcEQ7ZUF6QmNJLGNBQWE7O0lBMkI1QmQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2hCSyx3QkFBd0IsRUFBRTtLQUMxQixFQUFFLEVBQUUsQ0FBQztJQUVMLHFCQUNBLDhEQUFDYSxLQUFHO1FBQUNDLFNBQVMsRUFBQywyRUFBMkU7OzBCQUN6Riw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGdGQUFnRjs7Ozs7cUJBQ3pGOzBCQUNOLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsZ0NBQWdDOzBCQUFDLGdCQUUvQzs7Ozs7cUJBQUs7WUFDSmhCLGNBQWMsS0FBSyxFQUFFLGlCQUNyQiw4REFBQ2tCLFFBQU07Z0JBQ1BGLFNBQVMsRUFBQyxpSEFBaUg7Z0JBQzNIRyxPQUFPLEVBQUVSLGFBQWE7MEJBQ3JCLGdCQUVEOzs7OztxQkFBUyxHQUNMLElBQUk7Ozs7OzthQUNKLENBQ047Q0FDRDtHQXJFS1osSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBd0VWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xuaW1wb3J0IHsgcHJvdmlkZXJzLCBDb250cmFjdCwgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKVxuICBhc3luYyBmdW5jdGlvbiBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKXtcbiAgICBjb25zdCB7ZXRoZXJldW19ID0gd2luZG93XG4gICAgaWYoZXRoZXJldW0pe1xuICAgICAgY29uc29sZS5sb2coJ0V0aGVyZXVtJywgZXRoZXJldW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyB3YWxsZXQgZm91bmQnKVxuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX2FjY291bnRzJ30pXG5cbiAgICBpZihhY2NvdW50cy5sZW5ndGggIT09IDApe1xuICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIEFjY291bnRzOiAnLCBhY2NvdW50c1swXSlcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBBdXRob3JpemVkIGFjY291bnQgZm91bmQnKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQoKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuXG4gICAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWV0YW1hc2sgbm90IGRldGVjdGVkJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hhaW5JZCA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfY2hhaW5JZCd9KVxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIGNoYWluOicgKyBjaGFpbklkKVxuXG4gICAgICAgIGNvbnN0IHJpbmtlYnlDaGFpbklkID0gJzB4MTYnXG5cbiAgICAgICAgaWYgKGNoYWluSWQgIT09IHJpbmtlYnlDaGFpbklkKSB7XG4gICAgICAgICAgYWxlcnQoJ1lvdSBhcmUgbm90IGNvbm5lY3RlZCB0byB0aGUgTHVrc28gVGVzdG5ldCEnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcblxuICAgICAgICBjb25zb2xlLmxvZygnRm91bmQgYWNjb3VudCcsIGFjY291bnRzWzBdKVxuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ICBjb25zb2xlLmxvZygnRXJyb3IgY29ubmVjdGluZyB0byBtZXRhbWFzaycsIGVycm9yKVxuXHRcdH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y2hlY2tJZldhbGxldElzQ29ubmVjdGVkKClcblx0fSwgW10pXG5cbiAgcmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHQtMzIgYmctWyNmM2Y2ZjRdIHRleHQtWyM2YTUwYWFdIG1pbi1oLXNjcmVlbic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndHJhc2l0aW9uIGhvdmVyOnJvdGF0ZS0xODAgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0Jz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkIG1iLTIwIG10LTEyJz5cblx0XHRcdFx0TWludCB5b3VyIE5GVCFcblx0XHRcdDwvaDI+XG5cdFx0XHR7Y3VycmVudEFjY291bnQgPT09ICcnID8gKFxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkIHB5LTMgcHgtMTIgYmctWyNmMWMyMzJdIHJvdW5kZWQtbGcgbWItMTAgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0J1xuXHRcdFx0XHRvbkNsaWNrPXtjb25uZWN0V2FsbGV0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdENvbm5lY3QgV2FsbGV0XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwiZXRoZXJldW0iLCJhY2NvdW50cyIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiY29ubmVjdFdhbGxldCIsImNoYWluSWQiLCJyaW5rZWJ5Q2hhaW5JZCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});