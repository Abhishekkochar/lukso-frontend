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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-flow: column;\\n  align-items: flex-start;\\n  overflow-x: hidden;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  width: 100%;\\n  justify-content: space-between;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  padding-top: 100px;\\n  align-items: center;\\n  flex: 1;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n  z-index: 10;\\n  z-index: 1;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar _s = $RefreshSig$();\nvar AppWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = AppWrapper;\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = HeaderWrapper;\nvar BodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = BodyWrapper;\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    function checkIfWalletIsConnected() {\n        return _checkIfWalletIsConnected.apply(this, arguments);\n    }\n    function _checkIfWalletIsConnected() {\n        _checkIfWalletIsConnected = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            console.log(\"Ethereum\", ethereum);\n                        } else {\n                            console.log(\"No wallet found\");\n                        }\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 4:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Found Accounts: \", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No Authorized account found\");\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkIfWalletIsConnected.apply(this, arguments);\n    }\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, LuksoChainId, accounts;\n            return _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: \"eth_chainId\"\n                        });\n                    case 7:\n                        chainId = _ctx.sent;\n                        console.log(\"Connected to chain:\" + chainId);\n                        LuksoChainId = \"0x16\";\n                        if (!(chainId !== LuksoChainId)) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        alert(\"You are not connected to the Lukso Testnet!\");\n                        return _ctx.abrupt(\"return\");\n                    case 13:\n                        _ctx.next = 15;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 15:\n                        accounts = _ctx.sent;\n                        console.log(\"Found account\", accounts[0]);\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 23;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"Error connecting to metamask\", _ctx.t0);\n                    case 23:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    20\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AppWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center pt-32 bg-[#f3f6f4] text-[#6a50aa] min-h-screen\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                            className: \"trasition hover:rotate-180 hover:scale-105 transition duration-500 ease-in-out\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold mb-20 mt-12\",\n                            children: \"Build UP\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        }, _this),\n                        currentAccount === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n                            className: \"text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out\",\n                            onClick: connectWallet,\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(BodyWrapper, {}, void 0, false, {\n                fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/pages/index.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c3 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"AppWrapper\");\n$RefreshReg$(_c1, \"HeaderWrapper\");\n$RefreshReg$(_c2, \"BodyWrapper\");\n$RefreshReg$(_c3, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDZCw0RUFBQ0QsS0FBRztvQkFBQ21CLFNBQVMsRUFBQywyRUFBMkU7O3NDQUN4Riw4REFBQ25CLEtBQUc7NEJBQUNtQixTQUFTLEVBQUMsZ0ZBQWdGOzs7OztpQ0FDekY7c0NBQ04sOERBQUNDLElBQUU7NEJBQUNELFNBQVMsRUFBQyxnQ0FBZ0M7c0NBQUMsVUFFL0M7Ozs7O2lDQUFLO3dCQUNKZixjQUFjLEtBQUssRUFBRSxpQkFDcEIsOERBQUNpQixRQUFNOzRCQUNQRixTQUFTLEVBQUMsaUhBQWlIOzRCQUMzSEcsT0FBTyxFQUFFUCxhQUFhO3NDQUNyQixnQkFFRDs7Ozs7aUNBQVMsR0FDTCxJQUFJOzs7Ozs7eUJBQ047Ozs7O3FCQUNVOzBCQUNoQiw4REFBQ2IsV0FBVzs7OztxQkFDRTs7Ozs7O2FBQ0gsQ0FDZjtDQUNEO0dBM0VLQyxJQUFJO0FBQUpBLE1BQUFBLElBQUk7QUE4RVYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgcHJvdmlkZXJzLCBDb250cmFjdCwgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcHBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5gXG5cbmNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYFxuY29uc3QgQm9keVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwO1xuICB6LWluZGV4OiAxO1xuYFxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKVxuICBhc3luYyBmdW5jdGlvbiBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKXtcbiAgICBjb25zdCB7ZXRoZXJldW19ID0gd2luZG93XG4gICAgaWYoZXRoZXJldW0pe1xuICAgICAgY29uc29sZS5sb2coJ0V0aGVyZXVtJywgZXRoZXJldW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyB3YWxsZXQgZm91bmQnKVxuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX2FjY291bnRzJ30pXG5cbiAgICBpZihhY2NvdW50cy5sZW5ndGggIT09IDApe1xuICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIEFjY291bnRzOiAnLCBhY2NvdW50c1swXSlcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBBdXRob3JpemVkIGFjY291bnQgZm91bmQnKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQoKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuXG4gICAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWV0YW1hc2sgbm90IGRldGVjdGVkJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hhaW5JZCA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfY2hhaW5JZCd9KVxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIGNoYWluOicgKyBjaGFpbklkKVxuXG4gICAgICAgIGNvbnN0IEx1a3NvQ2hhaW5JZCA9ICcweDE2J1xuXG4gICAgICAgIGlmIChjaGFpbklkICE9PSBMdWtzb0NoYWluSWQpIHtcbiAgICAgICAgICBhbGVydCgnWW91IGFyZSBub3QgY29ubmVjdGVkIHRvIHRoZSBMdWtzbyBUZXN0bmV0IScpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhY2NvdW50JywgYWNjb3VudHNbMF0pXG4gICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQgIGNvbnNvbGUubG9nKCdFcnJvciBjb25uZWN0aW5nIHRvIG1ldGFtYXNrJywgZXJyb3IpXG5cdFx0fVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblx0XHRjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKVxuXHR9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxBcHBXcmFwcGVyPlxuICAgICAgPEhlYWRlcldyYXBwZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHQtMzIgYmctWyNmM2Y2ZjRdIHRleHQtWyM2YTUwYWFdIG1pbi1oLXNjcmVlbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmFzaXRpb24gaG92ZXI6cm90YXRlLTE4MCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkIG1iLTIwIG10LTEyJz5cbiAgICAgICAgICBCdWlsZCBVUFxuICAgICAgICA8L2gyPlxuICAgICAgICB7Y3VycmVudEFjY291bnQgPT09ICcnID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCBweS0zIHB4LTEyIGJnLVsjZjFjMjMyXSByb3VuZGVkLWxnIG1iLTEwIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCdcbiAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fVxuICAgICAgICAgID5cbiAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8L0hlYWRlcldyYXBwZXI+XG4gICAgICA8Qm9keVdyYXBwZXI+XG4gICAgICA8L0JvZHlXcmFwcGVyPlxuICAgIDwvQXBwV3JhcHBlcj5cblx0KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcFdyYXBwZXIiLCJkaXYiLCJIZWFkZXJXcmFwcGVyIiwiQm9keVdyYXBwZXIiLCJIb21lIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbm5lY3RXYWxsZXQiLCJjaGFpbklkIiwiTHVrc29DaGFpbklkIiwiYWxlcnQiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});