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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// const Row = styled(Box)<{\n//   width?: string\n//   align?: string\n//   justify?: string\n//   padding?: string\n//   border?: string\n//   borderRadius?: string\n// }>`\n//   width: ${({ width }) => width ?? '100%'};\n//   display: flex;\n//   padding: 0;\n//   align-items: ${({ align }) => align ?? 'center'};\n//   justify-content: ${({ justify }) => justify ?? 'flex-start'};\n//   padding: ${({ padding }) => padding};\n//   border: ${({ border }) => border};\n//   border-radius: ${({ borderRadius }) => borderRadius};\n// `\n// const RowFixed = styled(Row)<{ gap?: string; justify?: string }>`\n//   width: fit-content;\n//   margin: ${({ gap }) => gap && `-${gap}`};\n// `\n// const HeaderRow = styled(RowFixed)`\n// `\n// const HeaderFrame = styled.div`\n//   display: flex;\n//   grid-template-columns: 1fr 120px;\n//   align-items: center;\n//   justify-content: space-between;\n//   align-items: center;\n//   flex-direction: row;\n//   width: 100%;\n//   top: 0;\n//   position: relative;\n//   border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n//   padding: 1rem;\n//   z-index: 2;\n// `\n// const HeaderControls = styled.div`\n//   display: flex;\n//   flex-direction: row;\n//   align-items: center;\n//   justify-self: flex-end;\n// `\n// const HeaderElement = styled.div`\n//   display: flex;\n//   align-items: center;\n//   /* addresses safari's lack of support for \"gap\" */\n//   & > *:not(:first-child) {\n//     margin-left: 8px;\n//   }\n// `\n// const HeaderElementWrap = styled.div`\n//   display: flex;\n//   align-items: center;\n// `\n// const HeaderLinks = styled(Row)`\n//   justify-content: center;\n// `\n// const Title = styled.a`\n//   display: flex;\n//   align-items: center;\n//   pointer-events: auto;\n//   justify-self: flex-start;\n//   margin-right: 12px;\n//   :hover {\n//     cursor: pointer;\n//   }\n// `\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(String), currentAccount = ref[0], setCurrentAccount = ref[1];\n    function checkIfWalletIsConnected() {\n        return _checkIfWalletIsConnected.apply(this, arguments);\n    }\n    function _checkIfWalletIsConnected() {\n        _checkIfWalletIsConnected = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            console.log(\"Ethereum\", ethereum);\n                        } else {\n                            console.log(\"No wallet found\");\n                        }\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 4:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Found Accounts: \", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No Authorized account found\");\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkIfWalletIsConnected.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkIfWalletIsConnected();\n    }, []);\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, chainId, LuksoChainId, accounts;\n            return _Users_abhishek_Desktop_Hackathon_lukso_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: \"eth_chainId\"\n                        });\n                    case 7:\n                        chainId = _ctx.sent;\n                        console.log(\"Connected to chain:\" + chainId);\n                        LuksoChainId = \"0x16\";\n                        if (!(chainId !== LuksoChainId)) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        alert(\"You are not connected to the Lukso Testnet!\");\n                        return _ctx.abrupt(\"return\");\n                    case 13:\n                        _ctx.next = 15;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 15:\n                        accounts = _ctx.sent;\n                        console.log(\"Found account\", accounts[0]);\n                        setCurrentAccount(accounts[0]);\n                        _ctx.next = 23;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"Error connecting to metamask\", _ctx.t0);\n                    case 23:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    20\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    return(// <HeaderFrame>\n    //   <HeaderRow>\n    //     <HeaderLinks>\n    //       <div className='flex flex-col items-center pt-32 bg-[#f3f6f4] text-[#6a50aa] min-h-screen'>\n    //         <div className='trasition hover:rotate-180 hover:scale-105 transition duration-500 ease-in-out'>\n    //         </div>\n    //       <h2 className='text-3xl font-bold mb-20 mt-12'>\n    //           Build UP\n    //       </h2>\n    //         {currentAccount === '' ? (\n    //           <button\n    //           className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'\n    //           onClick={connectWallet}\n    //           >\n    //           Connect Wallet\n    //           </button>\n    //           ) : null}\n    //       </div>\n    //     </HeaderLinks>\n    //   </HeaderRow>\n    //   <HeaderControls>\n    //     <HeaderElement>\n    //     </HeaderElement>\n    //     <HeaderElementWrap>\n    //     </HeaderElementWrap>\n    //   </HeaderControls>\n    // </HeaderFrame>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: \"Create UNiversal Profile\"\n                }, void 0, false, {\n                    fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                    lineNumber: 167,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                lineNumber: 166,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: currentAccount === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onClick: connectWallet,\n                    children: \"ConnectWallet\"\n                }, void 0, false, {\n                    fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 34\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: [\n                        \" \",\n                        currentAccount,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 88\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhishek/Desktop/Hackathon/lukso-frontend/src/components/Header.tsx\",\n        lineNumber: 165,\n        columnNumber: 5\n    }, this));\n};\n_s(Header, \"vXxzJzW/sGXdU/03ZbRsn9TSd7M=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFBa0Q7QUFHVjtBQUNBOztBQUd4Qyw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsTUFBTTtBQUNOLDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLHNEQUFzRDtBQUN0RCxrRUFBa0U7QUFDbEUsMENBQTBDO0FBQzFDLHVDQUF1QztBQUN2QywwREFBMEQ7QUFDMUQsSUFBSTtBQUNKLG9FQUFvRTtBQUNwRSx3QkFBd0I7QUFDeEIsOENBQThDO0FBQzlDLElBQUk7QUFFSixzQ0FBc0M7QUFDdEMsSUFBSTtBQUNKLGtDQUFrQztBQUNsQyxtQkFBbUI7QUFDbkIsc0NBQXNDO0FBQ3RDLHlCQUF5QjtBQUN6QixvQ0FBb0M7QUFDcEMseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsWUFBWTtBQUNaLHdCQUF3QjtBQUN4QixpREFBaUQ7QUFDakQsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixJQUFJO0FBRUoscUNBQXFDO0FBQ3JDLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1QixJQUFJO0FBRUosb0NBQW9DO0FBQ3BDLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFFekIsdURBQXVEO0FBQ3ZELDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEIsTUFBTTtBQUNOLElBQUk7QUFFSix3Q0FBd0M7QUFDeEMsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QixJQUFJO0FBRUosbUNBQW1DO0FBQ25DLDZCQUE2QjtBQUM3QixJQUFJO0FBR0osMEJBQTBCO0FBQzFCLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixNQUFNO0FBQ04sSUFBSTtBQUVXLFNBQVNLLE1BQU0sR0FBRzs7SUFDL0IsSUFBNENILEdBQWdCLEdBQWhCQSwrQ0FBUSxDQUFDSSxNQUFNLENBQUMsRUFBckRDLGNBQWMsR0FBdUJMLEdBQWdCLEdBQXZDLEVBQUVNLGlCQUFpQixHQUFJTixHQUFnQixHQUFwQjthQUN6Qk8sd0JBQXdCO2VBQXhCQSx5QkFBd0I7O2FBQXhCQSx5QkFBd0I7UUFBeEJBLHlCQUF3QixHQUF2QyxtUUFBeUM7Z0JBQ2hDQyxRQUFRLEVBT1RDLFFBQVE7Ozs7d0JBUFIsUUFBUyxHQUFJQyxNQUFNLENBQWxCRixRQUFRO3dCQUNmLElBQUdBLFFBQVEsRUFBQzs0QkFDVkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSixRQUFRLENBQUM7eUJBQ2xDLE1BQU07NEJBQ0xHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO3lCQUMvQjs7K0JBRXNCSixRQUFRLENBQUNLLE9BQU8sQ0FBQzs0QkFBQ0MsTUFBTSxFQUFFLGNBQWM7eUJBQUMsQ0FBQzs7d0JBQTNETCxRQUFRLFlBQW1EO3dCQUVqRSxJQUFHQSxRQUFRLENBQUNNLE1BQU0sS0FBSyxDQUFDLEVBQUM7NEJBQ3ZCSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRUgsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM1Q0gsaUJBQWlCLENBQUNHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFFL0IsTUFBTTs0QkFDTEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7eUJBQzNDOzs7Ozs7U0FDRjtlQWpCY0wseUJBQXdCOztJQW1CdkNSLGdEQUFTLENBQUMsV0FBTTtRQUNoQlEsd0JBQXdCLEVBQUU7S0FDMUIsRUFBRSxFQUFFLENBQUM7YUFDVVMsYUFBYTtlQUFiQSxjQUFhOzthQUFiQSxjQUFhO1FBQWJBLGNBQWEsR0FBNUIsbVFBQThCO2dCQUVoQlIsUUFBUSxFQU1aUyxPQUFPLEVBR0xDLFlBQVksRUFPWlQsUUFBUTs7Ozs7d0JBaEJSLFFBQVUsR0FBS0MsTUFBTSxDQUFuQkYsUUFBUTs0QkFFWEEsUUFBUTs7Ozt3QkFDWEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7Ozs7K0JBR2xCSixRQUFRLENBQUNLLE9BQU8sQ0FBQzs0QkFBRUMsTUFBTSxFQUFFLGFBQWE7eUJBQUMsQ0FBQzs7d0JBQTFERyxPQUFPLFlBQW1EO3dCQUM5RE4sT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEdBQUdLLE9BQU8sQ0FBQzt3QkFFdENDLFlBQVksR0FBRyxNQUFNOzRCQUV2QkQsQ0FBQUEsQ0FBQUEsT0FBTyxLQUFLQyxZQUFZOzs7O3dCQUMxQkMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDOzs7OytCQUkvQlgsUUFBUSxDQUFDSyxPQUFPLENBQUM7NEJBQUVDLE1BQU0sRUFBRSxxQkFBcUI7eUJBQUUsQ0FBQzs7d0JBQXBFTCxRQUFRLFlBQTREO3dCQUUxRUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFSCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pDSCxpQkFBaUIsQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7d0JBRWpDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsVUFBUTs7Ozs7Ozs7Ozs7U0FFcEQ7ZUF6QmNJLGNBQWE7O0lBMEI1QixPQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9HQUFvRztJQUNwRywyR0FBMkc7SUFDM0csaUJBQWlCO0lBQ2pCLHdEQUF3RDtJQUN4RCxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHFDQUFxQztJQUNyQyxvQkFBb0I7SUFDcEIsd0lBQXdJO0lBQ3hJLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUV0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsaUJBQWlCO2tCQUNqQiw4REFBQ2YsNERBQUk7OzBCQUNILDhEQUFDQSw0REFBSTswQkFDSCw0RUFBQ0MsNERBQUk7OEJBQUMsMEJBQXdCOzs7Ozt3QkFBTzs7Ozs7b0JBQ2hDOzBCQUNQLDhEQUFDRCw0REFBSTswQkFDRkksY0FBYyxLQUFLLEVBQUUsaUJBQUcsOERBQUNILDREQUFJO29CQUFDa0IsT0FBTyxFQUFFSixhQUFhOzhCQUFHLGVBQWE7Ozs7O3dCQUFPLGlCQUFHLDhEQUFDZCw0REFBSTs7d0JBQUMsR0FBQzt3QkFBQ0csY0FBYzt3QkFBQyxHQUFDOzs7Ozs7d0JBQU87Ozs7O29CQUN6Rzs7Ozs7O1lBQ0YsRUFDUjtDQUNGO0dBeEZ1QkYsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3g/YTY5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3Mvc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IEl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuXG5cbi8vIGNvbnN0IFJvdyA9IHN0eWxlZChCb3gpPHtcbi8vICAgd2lkdGg/OiBzdHJpbmdcbi8vICAgYWxpZ24/OiBzdHJpbmdcbi8vICAganVzdGlmeT86IHN0cmluZ1xuLy8gICBwYWRkaW5nPzogc3RyaW5nXG4vLyAgIGJvcmRlcj86IHN0cmluZ1xuLy8gICBib3JkZXJSYWRpdXM/OiBzdHJpbmdcbi8vIH0+YFxuLy8gICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aCA/PyAnMTAwJSd9O1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBhbGlnbi1pdGVtczogJHsoeyBhbGlnbiB9KSA9PiBhbGlnbiA/PyAnY2VudGVyJ307XG4vLyAgIGp1c3RpZnktY29udGVudDogJHsoeyBqdXN0aWZ5IH0pID0+IGp1c3RpZnkgPz8gJ2ZsZXgtc3RhcnQnfTtcbi8vICAgcGFkZGluZzogJHsoeyBwYWRkaW5nIH0pID0+IHBhZGRpbmd9O1xuLy8gICBib3JkZXI6ICR7KHsgYm9yZGVyIH0pID0+IGJvcmRlcn07XG4vLyAgIGJvcmRlci1yYWRpdXM6ICR7KHsgYm9yZGVyUmFkaXVzIH0pID0+IGJvcmRlclJhZGl1c307XG4vLyBgXG4vLyBjb25zdCBSb3dGaXhlZCA9IHN0eWxlZChSb3cpPHsgZ2FwPzogc3RyaW5nOyBqdXN0aWZ5Pzogc3RyaW5nIH0+YFxuLy8gICB3aWR0aDogZml0LWNvbnRlbnQ7XG4vLyAgIG1hcmdpbjogJHsoeyBnYXAgfSkgPT4gZ2FwICYmIGAtJHtnYXB9YH07XG4vLyBgXG5cbi8vIGNvbnN0IEhlYWRlclJvdyA9IHN0eWxlZChSb3dGaXhlZClgXG4vLyBgXG4vLyBjb25zdCBIZWFkZXJGcmFtZSA9IHN0eWxlZC5kaXZgXG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyMHB4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICB0b3A6IDA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vICAgcGFkZGluZzogMXJlbTtcbi8vICAgei1pbmRleDogMjtcbi8vIGBcblxuLy8gY29uc3QgSGVhZGVyQ29udHJvbHMgPSBzdHlsZWQuZGl2YFxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuLy8gYFxuXG4vLyBjb25zdCBIZWFkZXJFbGVtZW50ID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuLy8gICAvKiBhZGRyZXNzZXMgc2FmYXJpJ3MgbGFjayBvZiBzdXBwb3J0IGZvciBcImdhcFwiICovXG4vLyAgICYgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbi8vICAgICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICB9XG4vLyBgXG5cbi8vIGNvbnN0IEhlYWRlckVsZW1lbnRXcmFwID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIGBcblxuLy8gY29uc3QgSGVhZGVyTGlua3MgPSBzdHlsZWQoUm93KWBcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyBgXG5cblxuLy8gY29uc3QgVGl0bGUgPSBzdHlsZWQuYWBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4vLyAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuLy8gICA6aG92ZXIge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuLy8gYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoU3RyaW5nKVxuICBhc3luYyBmdW5jdGlvbiBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKXtcbiAgICBjb25zdCB7ZXRoZXJldW19ID0gd2luZG93XG4gICAgaWYoZXRoZXJldW0pe1xuICAgICAgY29uc29sZS5sb2coJ0V0aGVyZXVtJywgZXRoZXJldW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyB3YWxsZXQgZm91bmQnKVxuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX2FjY291bnRzJ30pXG5cbiAgICBpZihhY2NvdW50cy5sZW5ndGggIT09IDApe1xuICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIEFjY291bnRzOiAnLCBhY2NvdW50c1swXSlcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBBdXRob3JpemVkIGFjY291bnQgZm91bmQnKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y2hlY2tJZldhbGxldElzQ29ubmVjdGVkKClcblx0fSwgW10pXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQoKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuXG4gICAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWV0YW1hc2sgbm90IGRldGVjdGVkJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hhaW5JZCA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfY2hhaW5JZCd9KVxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIGNoYWluOicgKyBjaGFpbklkKVxuXG4gICAgICAgIGNvbnN0IEx1a3NvQ2hhaW5JZCA9ICcweDE2J1xuXG4gICAgICAgIGlmIChjaGFpbklkICE9PSBMdWtzb0NoYWluSWQpIHtcbiAgICAgICAgICBhbGVydCgnWW91IGFyZSBub3QgY29ubmVjdGVkIHRvIHRoZSBMdWtzbyBUZXN0bmV0IScpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBhY2NvdW50JywgYWNjb3VudHNbMF0pXG4gICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQgIGNvbnNvbGUubG9nKCdFcnJvciBjb25uZWN0aW5nIHRvIG1ldGFtYXNrJywgZXJyb3IpXG5cdFx0fVxuICB9XG4gIHJldHVybiAoXG4gICAgLy8gPEhlYWRlckZyYW1lPlxuICAgIC8vICAgPEhlYWRlclJvdz5cbiAgICAvLyAgICAgPEhlYWRlckxpbmtzPlxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwdC0zMiBiZy1bI2YzZjZmNF0gdGV4dC1bIzZhNTBhYV0gbWluLWgtc2NyZWVuJz5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmFzaXRpb24gaG92ZXI6cm90YXRlLTE4MCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQnPlxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkIG1iLTIwIG10LTEyJz5cbiAgICAvLyAgICAgICAgICAgQnVpbGQgVVBcbiAgICAvLyAgICAgICA8L2gyPlxuICAgIC8vICAgICAgICAge2N1cnJlbnRBY2NvdW50ID09PSAnJyA/IChcbiAgICAvLyAgICAgICAgICAgPGJ1dHRvblxuICAgIC8vICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCBweS0zIHB4LTEyIGJnLVsjZjFjMjMyXSByb3VuZGVkLWxnIG1iLTEwIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCdcbiAgICAvLyAgICAgICAgICAgb25DbGljaz17Y29ubmVjdFdhbGxldH1cbiAgICAvLyAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgIC8vICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAvLyAgICAgICAgICAgKSA6IG51bGx9XG4gICAgLy8gICAgICAgPC9kaXY+XG4gICAgLy8gICAgIDwvSGVhZGVyTGlua3M+XG4gICAgLy8gICA8L0hlYWRlclJvdz5cbiAgICAvLyAgIDxIZWFkZXJDb250cm9scz5cbiAgICAvLyAgICAgPEhlYWRlckVsZW1lbnQ+XG4gICAgIFxuICAgIC8vICAgICA8L0hlYWRlckVsZW1lbnQ+XG4gICAgLy8gICAgIDxIZWFkZXJFbGVtZW50V3JhcD5cbiAgICAvLyAgICAgPC9IZWFkZXJFbGVtZW50V3JhcD5cbiAgICAvLyAgIDwvSGVhZGVyQ29udHJvbHM+XG4gICAgLy8gPC9IZWFkZXJGcmFtZT5cbiAgICA8R3JpZD5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8SXRlbT5DcmVhdGUgVU5pdmVyc2FsIFByb2ZpbGU8L0l0ZW0+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZD5cbiAgICAgICAge2N1cnJlbnRBY2NvdW50ID09PSAnJyA/IDxJdGVtIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9ID5Db25uZWN0V2FsbGV0PC9JdGVtPiA6IDxJdGVtPiB7Y3VycmVudEFjY291bnR9IDwvSXRlbT59XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHcmlkIiwiSXRlbSIsIkhlYWRlciIsIlN0cmluZyIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJldGhlcmV1bSIsImFjY291bnRzIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJjb25uZWN0V2FsbGV0IiwiY2hhaW5JZCIsIkx1a3NvQ2hhaW5JZCIsImFsZXJ0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n"));

/***/ })

});