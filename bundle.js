/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\r\n\r\n\r\n// Engine Class for our RPG Game\r\nclass Engine {\r\n    constructor() {\r\n        // Create the canvas\r\n        document.body.style.margin = \"0px\";\r\n        document.body.style.overflow = \"hidden\";\r\n        this.canvas = document.createElement(\"canvas\");\r\n        this.canvas.width = window.innerWidth;\r\n        this.canvas.height = window.innerHeight;\r\n\r\n        document.body.appendChild(this.canvas);\r\n\r\n        this.ctx = this.canvas.getContext(\"2d\");\r\n\r\n        this.lastTime = new Date().getTime();\r\n\r\n        this.objs = [];\r\n\r\n        this.input = new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n        window.requestAnimationFrame(this.loop.bind(this));\r\n    }\r\n\r\n    // Function for adding new game objects\r\n    addObject(obj) {\r\n        if(obj instanceof _gameobject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n            this.objs.push(obj);\r\n        }\r\n        else {\r\n            console.error(\"Invalid object added. Not GameObject\");\r\n        }\r\n    }\r\n\r\n    // Canvas - whole browser width and height\r\n    loop() {\r\n        let time = new Date().getTime();\r\n        let dt = (time - this.lastTime) / 1000;\r\n\r\n        // Do updates here!\r\n        if(this.update) {\r\n            this.update(dt);\r\n        }\r\n\r\n        this.ctx.fillStyle = \"#303030\";\r\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n\r\n        // Do drawing here!\r\n        this.objs.forEach(obj => {\r\n            obj.draw(this.ctx);\r\n        });\r\n\r\n        this.lastTime = time;\r\n        window.requestAnimationFrame(this.loop.bind(this));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/engine.js?");

/***/ }),

/***/ "./src/gameobject.js":
/*!***************************!*\
  !*** ./src/gameobject.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameObject; });\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n\r\n\r\n// GameObject class to create new game objects\r\nclass GameObject {\r\n    constructor() {\r\n        this.position = [0, 0];\r\n        this.children = [];\r\n    }\r\n\r\n    translate(x, y) {\r\n        this.position[0] += x;\r\n        this.position[1] += y;\r\n    }\r\n\r\n    addChild(child) {\r\n        this.children.push(child);\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.translate(this.position[0], this.position[1]);\r\n\r\n        this.children.forEach(child => {\r\n            if(child instanceof GameObject) {\r\n                child.draw(ctx);\r\n            }\r\n            if(child instanceof _renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n                child.draw(ctx);\r\n            }\r\n        });\r\n\r\n        ctx.restore();\r\n    }\r\n}   \n\n//# sourceURL=webpack:///./src/gameobject.js?");

/***/ }),

/***/ "./src/images/dungeon_sheet.png":
/*!**************************************!*\
  !*** ./src/images/dungeon_sheet.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/cab5b0e2a99ca06cc506ad1b9884ab4e-dungeon_sheet.png\";\n\n//# sourceURL=webpack:///./src/images/dungeon_sheet.png?");

/***/ }),

/***/ "./src/images/enemy.png":
/*!******************************!*\
  !*** ./src/images/enemy.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/a6e5ad2b3a9bfd2d53bfdce300bca075-enemy.png\";\n\n//# sourceURL=webpack:///./src/images/enemy.png?");

/***/ }),

/***/ "./src/images/missing.jpg":
/*!********************************!*\
  !*** ./src/images/missing.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/823d0669f7f9bf6f7c0c1cb31b1e83e5-missing.jpg\";\n\n//# sourceURL=webpack:///./src/images/missing.jpg?");

/***/ }),

/***/ "./src/images/plate_armor_helmet.png":
/*!*******************************************!*\
  !*** ./src/images/plate_armor_helmet.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAEACAYAAABbKsnHAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AYcEwM2xlCwAAAAFSRJREFUeNrt3V2IXPedJuC3hELkUbDUqm6b1pfVIko0Use0RlbaslEalpDxOLPM7gwiCoZEgmGJUO7mIpC98M7FeNmLvRvjEGawEhhGQTCwmIydEHZQzFruyMKK1bIFCmpJllTYXaWWjJXIGFx70V3lbn3Znt0qnarzPGAsd1W39Z7/7z3n1KmPTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAim5ddX1zXXV9U375sf7yy4/176Yl9zL87j17s//AvpSxBPKXO3/ZDwDmX3791/97vf5Lux269ef9B/Zl446dOXvsaAZWDSVJ+7a3Gxcq/bro8pc3/+12AIPVSp579vlmWTKbf/n1X/+Lsv5Luxl8bHwim0ZGMli9Nd/uPXtTr00lSf7tyNzG6JehkL/c+ct+ADD/8uu//hdx/Zd2I3wr+FefeCxnjx1t37Zr+4qcPfbxfQeHR1OvTWVsfCJXGzNJ0vNnxvKXO3/ZDwDmX3791/+irv+SbobftX1FNu7Y2b599fCjSZKHNm255XtXVocysGqop58flr/c+Rdug9179uap/U8t2vnt2r5i0X0Hh0fT2lFu+OKWvslu/uXXf/0v4vp3/EXQC894W4E37tiZrWuGFy/+/H0Gh0czsOx6kmTF3KXBniZ/efM7AJh/+fVf/4u7/ks6vfiD1cqiRV941nu59uptN0I/DIH85c5f9gOA+Zdf//W/6OvftbfBLwx+3+Vzi25rLfjtvtYPj4LkL19+BwDzL7/+63+x17/rnwP02gu/TZKculTLy8ev3fY+redC+5H85cxf9gOg+Zdf//W/aOvf0ROgq42Z1BvNnD12NC8fv9Y+4z11qZYykL/c+ct+ADD/8uu//hd5/TtyAtT6kKdrV2bal/V+89Iree2F337m8NeuzGT3nr09dRlQ/nLnL/sBwPzLr//63wvr37ErQK3g9Uaz/d83h7/5UuAn/axeIn958zsAmH/59V//i7/+HTsBOj118t/9vfXaVGZvLP//8rPuFfnLnb/sB0DzL7/+63/R179jJ0AnTp5vh2kNwc1uHoib7zf/aZDtn9VL5C93/rIfAMy//Pqv/0Vf/479KozZKzMZWDWU6Uu/z+yN6dRr1zM4PHrbs9nB4dHUG832R4HP3lieq42ZXLsy0/5ZvUb+cudfuANIbp+7nw8A5l9+/df/oq9/R06A3m5cqKyrrm8u/ItfTTJ7YzrJyG2/58z0dJLl7YW/OXwv/V4U+cudv+wHAPMvv/7rfy+sf0eHqvXCrfnfdtv+TIOV1aHbnukmaQfv5eGXX/6F2Rfm3jRytx1A+uYAYP7l13/9L/r6d/y3wY+NT+TE5JFFX7t2ZeaWD3i6dtNZbi9e9pRf/rs9CkqSY42Z0hwAzb/8+q//RV7/rnwS9O49e9tngQsDL/znZgOrhjI2PtEXOwH5y5t/bHwis1dmMrsg6/kzb+ZqY6b9z8Lt0W8HQPMvv/7rf1HXv+Nnlgt/I+6Z6elFZ7t30jpDPjF5pKfPfuUvd/6F2X/1y59/5u9/aNOWvtoG5l9+/df/Iq1/x58Ce7txoZLJI80k2fnIxtQbI3e878cvAuuP8stf7vwLs3/9G98s5QHQ/Muv//pf1PXv2sZtvSBq/4F92bpmOH9YvSHJ3IdBtd4OWG80c/jQwY83XB+Rv7z5W4+C5nYAzU+xA1jeNwdA6y+//ut/Ude/cq82xF3PGPuY/OXMX/YDoPmXX//1v2jr39dlAzsAQP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKD7Kvfif7quur55p9veblyoWJb+Vvb1l1//9d/8y3/v81fuRfhXT/4s06+fbn+tcfGDJMmpS7U89+zzfT8EZS5A2ddffv3Xf/MvfzHyV7pd+gv18/nvT/+3nJ46mcHh0fbtg9VKtq4ZzpE3LufwoYN9uzMoawHKvv7y67/+m3/5i5V/abfCP7zt4fz4p/81f/P9p1OvTWX2xvL81cOrU137+Vz8aDhrl9Ty68lzqdemMjY+kauNmSRp9ssQfNoB2L1nbw4fOtjspwKUff3l13/9N//yFy//0m6Ff/yx7e1HPbM3lucHB/5DHn9yb5Lkcu3VJCvSuPhB6o1mUptKqkPZkC19MQRlLkDZ119+/dd/8y9/MfN35QrQ9tG1+dr4hvzLv06nXpvKDw78xzz+5N5crr3a3iiNix/k1KVavvC5d5Ph0fZGyO/64+y3zAeAMq+//Pqv/+Zf/mLmX9qN8i+7/8G5ctem2pd9W+EXPv99Oxu+2Ps7gbIWoOzrL7/+67/5l7+4+Tt+BejLX/6TW742F/p0u/T9ygGg3Osvv/7rv/mXv7j5l3ay/GPjE3OPaPJgjr91IoPDoxmsVnLqUi1bM3xL+BvvvZP3P3zglp81sGqoZ3cCZS1A2ddffv3Xf/Mvf7Hzd/QK0KaRkSTvJkmW3f9g3m80557jTnKkcbl9v7mNlHb4em3KDqAPDgBlXn/59V//zb/8xc7f0ROg1vv5P8nY+MT8xvo4/OyN5Qagx5V9/eXXf/03//IXN39HT4BePfmzrB5+NEnrnQ5pv+jv4kfDSZL7Lp/L93/4zNwjnWXXF4WffyuoAehRZV9/+fVf/82//MXN35FLquuq65v7D+xLvdHMV594LLu2r8hPfvTSbe974713sv2Px/L9Hz6TsfGJJMmJySPt2wdWDWXFqqGc+92b6bXnQD/LAIyNT9xxAK5dmcnslZmeyV/29Zdf//Xf/Mtf/PwduwLUutT7Sd7/8IEcf+tExsYn2sH/+ad/m5Ftm/OTH72Uo6+dzfkzb/bUmW9rAP7n372Yrz5x7Q4DcK49AH//zA8/cQBmr/TWo4Eyr7/8+q//5l/+4ufv2AnQXz45kpFtm9uPgL77vblHP61HPkly9tjRDFYrufHe3PPlf/0Xj6e69vP58T++kOlLP8vImj/Kti89kBOTMz33sfBlL0DZ119+/dd/8y9/sfN37ATo2995+lPdb2x8Itu+NHfJ99SlWnIpmb70+/zZn47nxV9MZsP69KSyF6Ds6y+//uu/+Ze/2PmX3suNNDY+kZ2PbMyN995Z9KhpZXUoL/5iMiurQ7d9W6gB6A/9vP7y67/+m3/5i51/aSfDPbX/qaxdUsvIts23ffTTCn1m+nrOn/l5+3nu3Xv2ZvCRjak3mjl86GDf/FbkMhWg7Osvv/7rv/mXv9j5O3oF6DcvvZKz1bm/+8WPhtuhW+bCT+f8mTcze2UmY+MTOX/mzUVvH+3VnZ8DQLnXX37913/zL3+x83fsh7c+CbX1+Ra3szD87j1786tffrwT6OWFX5h9sFrJ18Y3fKYBWPiOj17dDmVef/n1X//Nv/zFz1/p9EaY/xj3O7q5+P1yubvsBSj7+suv//pv/uUvdv5KtzbEXf8SlSVpNj/qu+f6y16Asq+//Pqv/+Zf/uLm78sNbgAA/QcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACipddX1zXXV9U355cf6yy8/1r+bltzL8Lv37M3+A/tSxhLIX+78ZT8AmH/59V//7/X6L+126Naf9x/Yl407dubssaMZWDWUJO3b3m5cqPTrostf3vy32wEMVit57tnnm2XJbP7l13/9L8r6L+1m8LHxiWwaGclg9dZ8u/fsTb02lST5tyNzG6NfhkL+cucv+wHA/Muv//pfxPVf2o3wreBffeKxnD12tH3bru0rcvbY3J/nNspo6rWpjI1P5GpjJkl6/sxY/nLnL/sBwPzLr//6X9T1X9LN8Lu2r8jGHTvbt68efjRJ8tCmLe2NMDg8moFl17OyOpSBVUM9/fyw/OXOv3Ab7N6zN0/tf2rRzm/X9hXtP7eyt3aUG764pW+ym3/59V//i7j+HX8R9MIz3lbgjTt2Zuua4Tt+T2sjrJi7NNjT5C9vfgcA8y+//ut/cdd/SacXf7BaWbToC896L9devevP6OUhkL/c+ct+ADD/8uu//hd9/bv2NviFwe+7fC5J8vLxa0mSgWXX7/h9/fAoSP7y5XcAMP/y67/+F3v9u/45QK+98NskyalLtZSR/OXMX/YDoPmXX//1v2jr39EToPNn3ky90czZY0fz8vFr7TPeVvjWK8I3j34lSVJvzJ3o1mtTmb2xPFcbM7l2ZaZnF1v+cucv+wHA/Muv//pf5PXvyucA1RvN1F96JfddXn3bhW8Fvzl8v5C/nPnPn3kzm0ZGkmNHk+zMru3lPACYf/n1X/+LuP4dOQFqfcrlr3758yTJ4UMH5//92X7O/AdEZfeevTl86GDPfCaE/OXOX/YDgPmXX//1vxfWv2NXgAarlcxemcnhQwczNj6Rv/6Lx/OH1Ruya/uK9qvhF74IrPV8aOv50X/4X/8nJyaPtH9Wr5G/vPkdAMy//Pqv/8Vf/0qnBiCZ+7jv01Mn25f4Wjbu2Jld21fkJz966Y5nzIPVSvt7n3v2+SS988mY8su//8C+9t/7/3UH0PpZ1l9++fXf+vfAFaCBVUM5+trZbBoZ/fefRQ6P5uhrZzOwaiizPfZcqPzlzv/cs88v2AFsnLv0famWs8eSjTuufeIOYOcjGzOw7PqiHYD1l19+/bf+PXACNHtlJg8t+O+ta4ZvOQP+7vc+PvNtue/yuWTN4lfJz/bgC8HkL3f+sh8AzL/8+q//RV//jpwAvd24UFlXXd88MXlk7lXwaV3Se+ZTff/Y+ER2PrIxSdqXAXvp+U/5y52/7AcA8y+//ut/L6z/0k5vhDPT00lGbgn0SeHrjWbmvrc3fyuu/OXN7wBg/uXXf/0v/vp3fKOuq65vDqwayp5v/3n7I8F3bV9xy5nvQr956ZX86pc/z+yVmfTqWx/ll3/hL0McrFZy9LWzn3kHcGLySM9vA/Mvv/7rfxHXv9LNjfD1b3xz0e9GaX0Q1EL1RrNvyi+//GU/AJp/+fVf/4u6/pVub4SHNm1pXxa82Znp6Zw/82ZflV9++ct+ADT/8uu//hdx/Svd3gjJxx/wdLPWi736rfzyy1/2A6D5l1//9b9o61+5VxvhTvq1/PLLX/YDoPmXX//1v0jr39dlAzsAQP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKD7Kt3+H66rrm/e6ba3GxcqlqS/lX395dd//Tf/8hcjf6Xb4fcf2Jeta4aTJNW1n2/fNrJtcx79yrf6fgjKXICyr7/8+q//5l/+4uRf2s3S796zN1vXDOfUpVrqjWbyxtzt9dpUNo+ey4X6+awffKjZrzuDTzEAzX7NXeb1l1//9d/8y1+8/Eu7EX7DF7dkZXUo9dpUTlUr+dr4hlz8aDhrl9TSuPhB/mF6OqenTuZvvv90Xj35s/yX7/xd8nr6ZmdQ5gKUff3l13/9N//yFzP/0m6FH1h2PYPDo9m6Zjgj2zbn8eFH2/errv18/sez/zuDSaZfP53HH9s+d0MfDEGZC1D29Zdf//Xf/Mtf3PwdvwK0MPwXPvduTl2qJC8k1bWnk8xd+n38yb35QZIf/+ML+Zd/Tf7yyZHceO+dvPH6G7ED6O2dYJnXX37913/zL39x8y/tdPlv59SlWrZmeP6/Tre/Pjg8mnptKo2Lq7Ps/gfz8LaHe34nUNYClH395dd//Tf/8hc7/9J7tYFOXaolyfyGOJ3GxQ9uuc+Xv/wnPbsTcAAo9/rLr//6b/7lL3b+JZ0q/8CqoVu+/v6HD+TGe+/csiEaFz/IqUu1DFYrGRwezfG3TiRJvvC5dzM2PnHXt4728gC0sk+/fucB6NWdf5nXX37913/zL3/x8y/p1kap16YWbYQb772TeqOZeqOZI29cbv85SZbd/2D7+zaNjNgB9MEBoEzrL7/+67/5l7/4+bvyFNjsjeUZWHY99dpUBodH8/6HD+TM9HROTB5MWSzMnvmd4PsfPpAkOdK4vOi+Nw/AickjPZ297Osvv/7rv/mXv3j5O34CdLUxk5XVoUUbYfbG8pyYPJK/f+aH+cPqDUmStUvmnhMc2bY5SbJ6/l0Sl2uv5tGvfMsA9Kiyr7/8+q//5l/+YubvyIvrWi8AvHZlJrNXZtpfHxufSJJ2+ONvnVj0aGeh737vibx8/Fp+89IrGaxW8tyzz/fMh4O1LoGvmL8MvrI69++BZdfbO8TPOgC99EJI6y+//uu/+Ze/6Pk7dgXo2pWZPLRpS/Y8sjHf/d4TmX79dL79nafbG+L4Wyfy/ocPZNmn+Fmt5wZ7yYpVQx8PwO/uMgDzr4Y/O/99v548Nz8AaQ/A/gP78tyzz/fUu0HKvv7y67/+m3/5i52/IydA80Vt/qcvLc/pqZPZ858nM7Lmj/LPP/3bNC5+kCNvXE7ybgarc33euGNn+3vXLqllZNvmrB5+NN/682TX9hWZfv10Dh8yAL2i7Osvv/7rv/mXv/j5O/4aoOlLv8+f/el4XvzFZPvRTcvR187Ov8Dv+fQTB4Byr7/8+q//5l/+4ufv6AnQ+x8+kJXV63nxF5NzvwvnpkcyOx/ZmCQ9/y4HBbD+8suv/9Zf/t7K39HnlNdV1zd379mbwWol9UYzhw8dTJIMrBrKQ5u2ZNPIyF0fBU2/fjoXPxrOPz33TzkxeaTnXgi4e8/enJmebr8SfuFnGnzhc+9m2f0PLtgJfupHlum1bVDG9Zdf//Xf/Mtf7PyVbmyE1p9bwU9MHrntRmjZuGNn1i6p5deT51JvNOffMmoAevV3wpR1/eXXf/03//IXN3+l2xtiYNVQvv6Nb+bwoYOLNsKd9PLiK4D1l1//9d/8y1/M/JV7sSFu3hHczeyVmfTDLwMsewHKvv7y67/+m3/5i5W/cq82QqWyJM3mR3e9Xz/+FuSyF6Ds6y+//uu/+Ze/GPn7cgMbAED/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADri/wLuV64lwfV/agAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/images/plate_armor_helmet.png?");

/***/ }),

/***/ "./src/images/plate_armor_shoes.png":
/*!******************************************!*\
  !*** ./src/images/plate_armor_shoes.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/images/plate_armor_shoes.png?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\nclass Input {\r\n    constructor() {\r\n\r\n        this.downkeys = [];\r\n\r\n        document.onkeydown = (evt) => {\r\n            this.downkeys[evt.code] = true;\r\n        };\r\n\r\n        document.onkeyup = (evt) => {\r\n            this.downkeys[evt.code] = false;\r\n        };\r\n    }\r\n\r\n    isKeyDown(keyCode) {\r\n        return this.downkeys[keyCode];\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \"./src/engine.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony import */ var _plate_armor_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plate_armor_helmet */ \"./src/plate_armor_helmet.js\");\n/* harmony import */ var _plate_armor_shoes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plate_armor_shoes */ \"./src/plate_armor_shoes.js\");\n/* harmony import */ var _maps_testmap_testmap_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps/testmap/testmap.json */ \"./src/maps/testmap/testmap.json\");\nvar _maps_testmap_testmap_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./maps/testmap/testmap.json */ \"./src/maps/testmap/testmap.json\", 1);\n/* harmony import */ var _images_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/dungeon_sheet.png */ \"./src/images/dungeon_sheet.png\");\n/* harmony import */ var _images_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_dungeon_sheet_png__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\n// Create an engine object from the Engine Class\nlet engine = new _engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n// Create a new map object with the Map Class\n//let map = new Map(testmap, mapTiles);\n//engine.addObject(map);\n\n// Create a game object from the GameObject Class\nlet player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](900, 400);\nlet plateArmorHelmet = new _plate_armor_helmet__WEBPACK_IMPORTED_MODULE_3__[\"default\"](900, 400);\nlet plateArmorShoes = new _plate_armor_shoes__WEBPACK_IMPORTED_MODULE_4__[\"default\"](900, 400);\n\nengine.addObject(player);\nengine.addObject(plateArmorHelmet);\nengine.addObject(plateArmorShoes);\n\n// Delta Time\nengine.update = (dt) => {\n\n    if(engine.input.isKeyDown(\"ArrowUp\")) {\n        player.translate(0, -100 * dt);\n        player.facing = 1;\n        plateArmorHelmet.translate(0, -100 * dt);\n        plateArmorHelmet.facing = 1;\n        plateArmorShoes.translate(0, -100 * dt);\n        plateArmorShoes.facing = 1;\n    }\n\n    if(engine.input.isKeyDown(\"ArrowDown\")) {\n        player.translate(0, 100 * dt);\n        player.facing = 3;\n        plateArmorHelmet.translate(0, 100 * dt);\n        plateArmorHelmet.facing = 3;\n        plateArmorShoes.translate(0, 100 * dt);\n        plateArmorShoes.facing = 3;\n    }\n\n    if(engine.input.isKeyDown(\"ArrowLeft\")) {\n        player.translate(-100 * dt, 0);\n        player.facing = 4;\n        plateArmorHelmet.translate(-100 * dt, 0);\n        plateArmorHelmet.facing = 4;\n        plateArmorShoes.translate(-100 * dt, 0);\n        plateArmorShoes.facing = 4;\n    }\n\n    if(engine.input.isKeyDown(\"ArrowRight\")) {\n        player.translate(100 * dt, 0);\n        player.facing = 2;\n        plateArmorHelmet.translate(100 * dt, 0);\n        plateArmorHelmet.facing = 2;\n        plateArmorShoes.translate(100 * dt, 0);\n        plateArmorShoes.facing = 2;\n    }\n\n    if(!engine.input.isKeyDown(\"ArrowUp\") &&\n       !engine.input.isKeyDown(\"ArrowDown\") &&\n       !engine.input.isKeyDown(\"ArrowLeft\") &&\n       !engine.input.isKeyDown(\"ArrowRight\")) {\n           player.facing = 0;\n           plateArmorHelmet.facing = 0;\n           plateArmorShoes.facing = 0;\n       }\n};\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n\r\n\r\n\r\nclass Map extends _gameobject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(mapJson, mapImg){\r\n        super();\r\n\r\n        this.renderable = new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mapImg, 3, 0, 240, 24, 10, 1);\r\n\r\n        this.data = mapJson;\r\n    }\r\n\r\n    draw(ctx){\r\n        super.draw(ctx);\r\n\r\n        ctx.save();\r\n        ctx.translate(this.position[0], this.position[1]);\r\n        this.data.layers.forEach(layer => {\r\n            // Will happen to each layer\r\n            let x = 0;\r\n            let y = 0;\r\n            layer.data.forEach((value, index) => {\r\n                \r\n                this.renderable.draw(ctx);\r\n            });\r\n        });\r\n        ctx.restore();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/maps/testmap/testmap.json":
/*!***************************************!*\
  !*** ./src/maps/testmap/testmap.json ***!
  \***************************************/
/*! exports provided: height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

eval("module.exports = {\"height\":13,\"infinite\":false,\"layers\":[{\"data\":[6,7,199,194,195,7,7,7,7,196,197,198,7,8,6,193,194,195,8,30,31,223,218,219,31,31,31,31,220,221,222,31,32,30,217,218,219,32,54,26,26,26,26,26,26,26,26,26,26,26,26,56,54,26,26,26,56,54,26,26,26,26,26,26,26,26,26,26,26,26,56,54,26,26,26,56,54,26,26,26,26,26,26,26,26,26,26,26,26,57,58,26,26,26,56,54,26,26,26,26,26,26,26,26,26,26,26,26,81,82,26,26,26,56,54,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,56,54,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,56,54,26,9,79,79,79,10,26,26,26,26,26,26,26,26,26,26,26,56,54,26,33,0,0,0,34,26,26,26,26,26,26,26,26,26,26,26,56,54,26,56,0,0,0,54,26,26,26,26,26,26,26,26,26,26,26,56,78,79,80,0,0,0,54,26,26,26,26,26,26,26,26,26,26,26,56,0,0,0,0,0,0,78,79,79,79,79,79,79,79,79,79,79,79,80],\"height\":13,\"id\":6,\"name\":\"Tile Layer 1\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":19,\"x\":0,\"y\":0}],\"nextlayerid\":7,\"nextobjectid\":1,\"orientation\":\"orthogonal\",\"renderorder\":\"right-down\",\"tiledversion\":\"1.2.0\",\"tileheight\":16,\"tilesets\":[{\"firstgid\":1,\"source\":\"dungeon.tsx\"}],\"tilewidth\":16,\"type\":\"map\",\"version\":1.2,\"width\":19};\n\n//# sourceURL=webpack:///./src/maps/testmap/testmap.json?");

/***/ }),

/***/ "./src/plate_armor_helmet.js":
/*!***********************************!*\
  !*** ./src/plate_armor_helmet.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return plateArmorHelmet; });\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n/* harmony import */ var _images_plate_armor_helmet_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/plate_armor_helmet.png */ \"./src/images/plate_armor_helmet.png\");\n/* harmony import */ var _images_plate_armor_helmet_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_plate_armor_helmet_png__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\nclass plateArmorHelmet extends _gameobject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y) {\r\n        super();\r\n        \r\n        // Position of the player object\r\n        this.position = [x, y];\r\n\r\n        this.facing = 0;\r\n\r\n        this.renderables = [\r\n            // The object takes arguments for: (image-name, startFrame, frameCount, frame-x, frame-y, speed)\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_helmet_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 18, 0, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_helmet_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1,  1, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_helmet_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 27, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_helmet_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 19, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_helmet_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1,  9, 7, 9, 4, 10)\r\n        ];\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.translate(this.position[0], this.position[1]);\r\n\r\n        this.renderables[this.facing].draw(ctx);\r\n\r\n        ctx.restore();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/plate_armor_helmet.js?");

/***/ }),

/***/ "./src/plate_armor_shoes.js":
/*!**********************************!*\
  !*** ./src/plate_armor_shoes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlateArmorShoes; });\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n/* harmony import */ var _images_plate_armor_shoes_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/plate_armor_shoes.png */ \"./src/images/plate_armor_shoes.png\");\n/* harmony import */ var _images_plate_armor_shoes_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_plate_armor_shoes_png__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\nclass PlateArmorShoes extends _gameobject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y) {\r\n        super();\r\n        \r\n        // Position of the player object\r\n        this.position = [x, y];\r\n\r\n        this.facing = 0;\r\n\r\n        this.renderables = [\r\n            // The object takes arguments for: (image-name, startFrame, frameCount, frame-x, frame-y, speed)\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_shoes_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 18, 0, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_shoes_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1,  1, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_shoes_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 27, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_shoes_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 19, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_plate_armor_shoes_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1,  9, 7, 9, 4, 10)\r\n        ];\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.translate(this.position[0], this.position[1]);\r\n\r\n        this.renderables[this.facing].draw(ctx);\r\n\r\n        ctx.restore();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/plate_armor_shoes.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n/* harmony import */ var _images_enemy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/enemy.png */ \"./src/images/enemy.png\");\n/* harmony import */ var _images_enemy_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_enemy_png__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nclass Player extends _gameobject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y) {\r\n        super();\r\n        \r\n        // Position of the player object\r\n        this.position = [x, y];\r\n\r\n        this.facing = 0;\r\n\r\n        this.renderables = [\r\n            // The object takes arguments for: (image-name, startFrame, frameCount, frame-x, frame-y, speed)\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_enemy_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 18, 0, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_enemy_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1,  1, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_enemy_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 27, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_enemy_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 19, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_enemy_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1,  9, 7, 9, 4, 10)\r\n        ];\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.translate(this.position[0], this.position[1]);\r\n\r\n        this.renderables[this.facing].draw(ctx);\r\n\r\n        ctx.restore();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/renderable.js":
/*!***************************!*\
  !*** ./src/renderable.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderable; });\n/* harmony import */ var _images_missing_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/missing.jpg */ \"./src/images/missing.jpg\");\n/* harmony import */ var _images_missing_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_missing_jpg__WEBPACK_IMPORTED_MODULE_0__);\n\r\nclass Renderable {\r\n    constructor(image = _images_missing_jpg__WEBPACK_IMPORTED_MODULE_0___default.a, scale = 1, startFrame = 0, frameCount = 0, framesx = 1, framesy = 1, speed = 1) {\r\n        this.img = new Image();\r\n        this.img.src = image;\r\n\r\n        this.scale = scale;\r\n\r\n        this.frame = startFrame;\r\n\r\n        this.startFrame = startFrame;\r\n        this.frameCount = frameCount;\r\n\r\n        this.framesx = framesx;\r\n        this.framesy = framesy;\r\n\r\n        this.subWidth = this.img.width / framesx;\r\n        this.subHeight = this.img.height / framesy;\r\n\r\n        this.speed = speed;\r\n\r\n        this.animTime = new Date().getTime();\r\n    }\r\n\r\n    draw(ctx) {\r\n        // Increase time between animations by x amount\r\n        let t = new Date().getTime();\r\n        if(t > this.animTime) {\r\n            this.frame++;\r\n            this.animTime = t + 1000 / this.speed;\r\n        }\r\n\r\n        // Animate the sprite\r\n        if(this.frame > this.startFrame + this.frameCount) {\r\n            this.frame = this.startFrame;\r\n        }\r\n\r\n        // Calculates the pixels for every sprite\r\n        let posx = (this.frame % this.framesx) * this.subWidth;\r\n        let posy = Math.floor(this.frame / this.framesx) * this.subHeight;\r\n\r\n        // First 4 values after this.img are for the source and the other for the destination\r\n        ctx.drawImage(this.img, posx, posy, this.subWidth, this.subHeight, 0, 0, this.subWidth * this.scale, this.subHeight * this.scale);\r\n    } \r\n}\n\n//# sourceURL=webpack:///./src/renderable.js?");

/***/ })

/******/ });