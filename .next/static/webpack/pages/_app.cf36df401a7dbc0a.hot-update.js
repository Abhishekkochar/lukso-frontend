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

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass/styled-components */ \"./node_modules/rebass/styled-components/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n\n\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  width: \",\n        \";\\n  display: flex;\\n  padding: 0;\\n  align-items: \",\n        \";\\n  justify-content: \",\n        \";\\n  padding: \",\n        \";\\n  border: \",\n        \";\\n  border-radius: \",\n        \";\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  width: fit-content;\\n  margin: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  display: flex;\\n  grid-template-columns: 1fr 120px;\\n  align-items: center;\\n  justify-content: space-between;\\n  align-items: center;\\n  flex-direction: row;\\n  width: 100%;\\n  top: 0;\\n  position: relative;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n  padding: 1rem;\\n  z-index: 2;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-self: flex-end;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        '\\n  display: flex;\\n  align-items: center;\\n\\n  /* addresses safari\\'s lack of support for \"gap\" */\\n  & > *:not(:first-child) {\\n    margin-left: 8px;\\n  }\\n'\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  pointer-events: auto;\\n  justify-self: flex-start;\\n  margin-right: 12px;\\n  :hover {\\n    cursor: pointer;\\n  }\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Row = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(rebass_styled_components__WEBPACK_IMPORTED_MODULE_4__.Box)(_templateObject(), function(param) {\n    var width = param.width;\n    return width !== null && width !== void 0 ? width : \"100%\";\n}, function(param) {\n    var align = param.align;\n    return align !== null && align !== void 0 ? align : \"center\";\n}, function(param) {\n    var justify = param.justify;\n    return justify !== null && justify !== void 0 ? justify : \"flex-start\";\n}, function(param) {\n    var padding = param.padding;\n    return padding;\n}, function(param) {\n    var border = param.border;\n    return border;\n}, function(param) {\n    var borderRadius = param.borderRadius;\n    return borderRadius;\n});\nvar RowFixed = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Row)(_templateObject1(), function(param) {\n    var gap = param.gap;\n    return gap && \"-\".concat(gap);\n});\nvar HeaderRow = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(RowFixed)(_templateObject2());\nvar HeaderFrame = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3());\nvar HeaderControls = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject4());\nvar HeaderElement = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject5());\nvar HeaderElementWrap = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject6());\nvar HeaderLinks = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Row)(_templateObject7());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].a(_templateObject8());\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(String), currentAccount = ref[0], setCurrentAccount = ref[1];\n    function checkIfWalletIsConnected() {\n        return _checkIfWalletIsConnected.apply(this, arguments);\n    }\n    function _checkIfWalletIsConnected() {\n        _checkIfWalletIsConnected = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            console.log(\"Ethereum\", ethereum);\n                        } else {\n                            console.log(\"No wallet found\");\n                        }\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 4:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Found Accounts: \", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No Authorized account found\");\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkIfWalletIsConnected.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, LuksoChainId, accounts;\n            return _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: \"eth_chainId\"\n                        });\n                    case 7:\n                        chainId = _ctx.sent;\n                        console.log(\"Connected to chain:\" + chainId);\n                        LuksoChainId = \"0x16\";\n                        if (!(chainId !== LuksoChainId)) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        alert(\"You are not connected to the Lukso Testnet!\");\n                        return _ctx.abrupt(\"return\");\n                    case 13:\n                        _ctx.next = 15;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 15:\n                        accounts = _ctx.sent;\n                        console.log(\"Found account\", accounts[0]);\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 23;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"Error connecting to metamask\", _ctx.t0);\n                    case 23:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    20\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    return(// <HeaderFrame>\n    //   <HeaderRow>\n    //     <HeaderLinks>\n    //       <Grid>\n    //         <div className='flex flex-col items-center pt-32 bg-[#f3f6f4] text-[#6a50aa] min-h-screen'>\n    //         <div className='trasition hover:rotate-180 hover:scale-105 transition duration-500 ease-in-out'>\n    //         </div>\n    //         <Grid>\n    //           <Item>\n    //         <h2 className='text-3xl font-bold mb-20 mt-12'>\n    //             Build UP\n    //         </h2>\n    //         </Item>\n    //         </Grid>\n    //           {currentAccount === '' ? (\n    //             <button\n    //             className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'\n    //             onClick={connectWallet}\n    //             >\n    //             Connect Wallet\n    //             </button>\n    //             ) : null}\n    //         </div>\n    //       </Grid>\n    //     </HeaderLinks>\n    //   </HeaderRow>\n    //   <HeaderControls>\n    //     <HeaderElement>\n    //     </HeaderElement>\n    //     <HeaderElementWrap>\n    //     </HeaderElementWrap>\n    //   </HeaderControls>\n    // </HeaderFrame>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: \"Create UNiversal Profile\"\n                }, void 0, false, {\n                    fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                    lineNumber: 173,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                lineNumber: 172,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: currentAccount === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onClick: connectWallet,\n                    children: \"ConnectWallet\"\n                }, void 0, false, {\n                    fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                    lineNumber: 176,\n                    columnNumber: 34\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        \" \",\n                        currentAccount,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                    lineNumber: 176,\n                    columnNumber: 88\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                lineNumber: 175,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n        lineNumber: 171,\n        columnNumber: 5\n    }, this));\n};\n_s(Header, \"vXxzJzW/sGXdU/03ZbRsn9TSd7M=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtJQUNsQix1Q0FBdUM7SUFDdkMsc0JBQXNCO0lBQ3RCLDBJQUEwSTtJQUMxSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBRXRCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixpQkFBaUI7a0JBQ2pCLDhEQUFDakMsNERBQUk7OzBCQUNILDhEQUFDQSw0REFBSTswQkFDSCw0RUFBQ0MsNERBQUk7OEJBQUMsMEJBQXdCOzs7Ozt3QkFBTzs7Ozs7b0JBQ2hDOzBCQUNQLDhEQUFDRCw0REFBSTswQkFDRnNCLGNBQWMsS0FBSyxFQUFFLGlCQUFHLDhEQUFDckIsNERBQUk7b0JBQUNvQyxPQUFPLEVBQUVKLGFBQWE7OEJBQUcsZUFBYTs7Ozs7d0JBQU8saUJBQUcsOERBQUNoQyw0REFBSTs7d0JBQUMsR0FBQzt3QkFBQ3FCLGNBQWM7d0JBQUMsR0FBQzs7Ozs7O3dCQUFPOzs7OztvQkFDekc7Ozs7OztZQUNGLEVBQ1I7Q0FDRjtHQTlGdUJGLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4P2E2OTYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzL3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcblxuXG5jb25zdCBSb3cgPSBzdHlsZWQoQm94KTx7XG4gIHdpZHRoPzogc3RyaW5nXG4gIGFsaWduPzogc3RyaW5nXG4gIGp1c3RpZnk/OiBzdHJpbmdcbiAgcGFkZGluZz86IHN0cmluZ1xuICBib3JkZXI/OiBzdHJpbmdcbiAgYm9yZGVyUmFkaXVzPzogc3RyaW5nXG59PmBcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGggPz8gJzEwMCUnfTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbiAgYWxpZ24taXRlbXM6ICR7KHsgYWxpZ24gfSkgPT4gYWxpZ24gPz8gJ2NlbnRlcid9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7KHsganVzdGlmeSB9KSA9PiBqdXN0aWZ5ID8/ICdmbGV4LXN0YXJ0J307XG4gIHBhZGRpbmc6ICR7KHsgcGFkZGluZyB9KSA9PiBwYWRkaW5nfTtcbiAgYm9yZGVyOiAkeyh7IGJvcmRlciB9KSA9PiBib3JkZXJ9O1xuICBib3JkZXItcmFkaXVzOiAkeyh7IGJvcmRlclJhZGl1cyB9KSA9PiBib3JkZXJSYWRpdXN9O1xuYFxuY29uc3QgUm93Rml4ZWQgPSBzdHlsZWQoUm93KTx7IGdhcD86IHN0cmluZzsganVzdGlmeT86IHN0cmluZyB9PmBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46ICR7KHsgZ2FwIH0pID0+IGdhcCAmJiBgLSR7Z2FwfWB9O1xuYFxuXG5jb25zdCBIZWFkZXJSb3cgPSBzdHlsZWQoUm93Rml4ZWQpYFxuYFxuY29uc3QgSGVhZGVyRnJhbWUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHotaW5kZXg6IDI7XG5gXG5cbmNvbnN0IEhlYWRlckNvbnRyb2xzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbmBcblxuY29uc3QgSGVhZGVyRWxlbWVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLyogYWRkcmVzc2VzIHNhZmFyaSdzIGxhY2sgb2Ygc3VwcG9ydCBmb3IgXCJnYXBcIiAqL1xuICAmID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuYFxuXG5jb25zdCBIZWFkZXJFbGVtZW50V3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmNvbnN0IEhlYWRlckxpbmtzID0gc3R5bGVkKFJvdylgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFN0cmluZylcbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKCl7XG4gICAgY29uc3Qge2V0aGVyZXVtfSA9IHdpbmRvd1xuICAgIGlmKGV0aGVyZXVtKXtcbiAgICAgIGNvbnNvbGUubG9nKCdFdGhlcmV1bScsIGV0aGVyZXVtKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gd2FsbGV0IGZvdW5kJylcbiAgICB9XG5cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9hY2NvdW50cyd9KVxuXG4gICAgaWYoYWNjb3VudHMubGVuZ3RoICE9PSAwKXtcbiAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBBY2NvdW50czogJywgYWNjb3VudHNbMF0pXG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gQXV0aG9yaXplZCBhY2NvdW50IGZvdW5kJylcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpXG5cdH0sIFtdKVxuICBhc3luYyBmdW5jdGlvbiBjb25uZWN0V2FsbGV0KCl7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcblxuICAgICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ01ldGFtYXNrIG5vdCBkZXRlY3RlZCcpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoYWluSWQgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2NoYWluSWQnfSlcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBjaGFpbjonICsgY2hhaW5JZClcblxuICAgICAgICBjb25zdCBMdWtzb0NoYWluSWQgPSAnMHgxNidcblxuICAgICAgICBpZiAoY2hhaW5JZCAhPT0gTHVrc29DaGFpbklkKSB7XG4gICAgICAgICAgYWxlcnQoJ1lvdSBhcmUgbm90IGNvbm5lY3RlZCB0byB0aGUgTHVrc28gVGVzdG5ldCEnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcblxuICAgICAgICBjb25zb2xlLmxvZygnRm91bmQgYWNjb3VudCcsIGFjY291bnRzWzBdKVxuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ICBjb25zb2xlLmxvZygnRXJyb3IgY29ubmVjdGluZyB0byBtZXRhbWFzaycsIGVycm9yKVxuXHRcdH1cbiAgfVxuICByZXR1cm4gKFxuICAgIC8vIDxIZWFkZXJGcmFtZT5cbiAgICAvLyAgIDxIZWFkZXJSb3c+XG4gICAgLy8gICAgIDxIZWFkZXJMaW5rcz5cbiAgICAvLyAgICAgICA8R3JpZD5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwdC0zMiBiZy1bI2YzZjZmNF0gdGV4dC1bIzZhNTBhYV0gbWluLWgtc2NyZWVuJz5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmFzaXRpb24gaG92ZXI6cm90YXRlLTE4MCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQnPlxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgICA8R3JpZD5cbiAgICAvLyAgICAgICAgICAgPEl0ZW0+XG4gICAgLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWJvbGQgbWItMjAgbXQtMTInPlxuICAgIC8vICAgICAgICAgICAgIEJ1aWxkIFVQXG4gICAgLy8gICAgICAgICA8L2gyPlxuICAgIC8vICAgICAgICAgPC9JdGVtPlxuICAgIC8vICAgICAgICAgPC9HcmlkPlxuICAgIC8vICAgICAgICAgICB7Y3VycmVudEFjY291bnQgPT09ICcnID8gKFxuICAgIC8vICAgICAgICAgICAgIDxidXR0b25cbiAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCBweS0zIHB4LTEyIGJnLVsjZjFjMjMyXSByb3VuZGVkLWxnIG1iLTEwIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCdcbiAgICAvLyAgICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fVxuICAgIC8vICAgICAgICAgICAgID5cbiAgICAvLyAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgIC8vICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgIC8vICAgICAgICAgICAgICkgOiBudWxsfVxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgPC9HcmlkPlxuICAgIC8vICAgICA8L0hlYWRlckxpbmtzPlxuICAgIC8vICAgPC9IZWFkZXJSb3c+XG4gICAgLy8gICA8SGVhZGVyQ29udHJvbHM+XG4gICAgLy8gICAgIDxIZWFkZXJFbGVtZW50PlxuICAgICBcbiAgICAvLyAgICAgPC9IZWFkZXJFbGVtZW50PlxuICAgIC8vICAgICA8SGVhZGVyRWxlbWVudFdyYXA+XG4gICAgLy8gICAgIDwvSGVhZGVyRWxlbWVudFdyYXA+XG4gICAgLy8gICA8L0hlYWRlckNvbnRyb2xzPlxuICAgIC8vIDwvSGVhZGVyRnJhbWU+XG4gICAgPEdyaWQ+XG4gICAgICA8R3JpZD5cbiAgICAgICAgPEl0ZW0+Q3JlYXRlIFVOaXZlcnNhbCBQcm9maWxlPC9JdGVtPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIHtjdXJyZW50QWNjb3VudCA9PT0gJycgPyA8SXRlbSBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSA+Q29ubmVjdFdhbGxldDwvSXRlbT4gOiA8SXRlbT4ge2N1cnJlbnRBY2NvdW50fSA8L0l0ZW0+fVxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQm94Iiwic3R5bGVkIiwiR3JpZCIsIkl0ZW0iLCJSb3ciLCJ3aWR0aCIsImFsaWduIiwianVzdGlmeSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJSb3dGaXhlZCIsImdhcCIsIkhlYWRlclJvdyIsIkhlYWRlckZyYW1lIiwiZGl2IiwiSGVhZGVyQ29udHJvbHMiLCJIZWFkZXJFbGVtZW50IiwiSGVhZGVyRWxlbWVudFdyYXAiLCJIZWFkZXJMaW5rcyIsIlRpdGxlIiwiYSIsIkhlYWRlciIsIlN0cmluZyIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJldGhlcmV1bSIsImFjY291bnRzIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJjb25uZWN0V2FsbGV0IiwiY2hhaW5JZCIsIkx1a3NvQ2hhaW5JZCIsImFsZXJ0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n"));

/***/ })

});