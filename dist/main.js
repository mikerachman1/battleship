/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\n  color: red;\n}\n\n.grid,\n.info-box {\n  border: 1px solid red;\n}\n\n.grid {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n}\n\n.row {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.col {\n  border: 1px solid black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.hover {\n  background-color: rgb(246, 127, 127);\n}\n\n.ship {\n  background-color: rgb(255, 0, 0);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["h1 {\n  color: red;\n}\n\n.grid,\n.info-box {\n  border: 1px solid red;\n}\n\n.grid {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n}\n\n.row {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.col {\n  border: 1px solid black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.hover {\n  background-color: rgb(246, 127, 127);\n}\n\n.ship {\n  background-color: rgb(255, 0, 0);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoardFactory": () => (/* binding */ gameBoardFactory)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
// '' for empty space, O for ship, X for ship hit, - for missed hit



const gameBoardFactory = () => {
  const board = [...Array(10)].map(() => Array(10).fill(''));
  const misses = [];
  const hits = [];
  const ships = [];

  const buildShip = (length) => (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(length);

  const placePiece = (ship, startCoordinate, direction = 'h') => {
    board[startCoordinate[0]][startCoordinate[1]] = 'O';
    const shipLength = ship.length - 1;
    let shipLengthIncrementor = 0;
    const shipCoords = [startCoordinate];
    for (let i = 0; i < shipLength; i += 1) {
      shipLengthIncrementor += 1;
      let nextCoord = '';
      if (direction === 'h') {
        nextCoord = [startCoordinate[0], (startCoordinate[1] + shipLengthIncrementor)];
      } else if (direction === 'v') {
        nextCoord = [startCoordinate[0] + shipLengthIncrementor, startCoordinate[1]];
      }
      board[nextCoord[0]][nextCoord[1]] = 'O';
      shipCoords.push(nextCoord);
    }
    ships.push({ object: ship, coords: shipCoords });
    return shipCoords;
  };

  const receiveAttack = (attackCoordinate) => {
    if (board[attackCoordinate[0]][attackCoordinate[1]] !== 'O') {
      misses.push(attackCoordinate);
      board[attackCoordinate[0]][attackCoordinate[1]] = '-';
    } else if (board[attackCoordinate[0]][attackCoordinate[1]] === 'O') {
      ships.forEach((ship) => {
        ship.coords.forEach((coord) => {
          const coordString = JSON.stringify(coord)
          if (coordString.includes(JSON.stringify(attackCoordinate))) {
            ship.object.hit();
            ship.object.isSunk();
            board[attackCoordinate[0]][attackCoordinate[1]] = 'X';
            hits.push(attackCoordinate);
          }
        });
      });
    }
  };

  const allSunk = () => {
    if (ships.length === 0) { return false; }
    const sunkLog = [];
    ships.forEach((ship) => {
      sunkLog.push(ship.object.sunk);
    });
    return !sunkLog.includes(false);
  };

  return { board, misses, hits, ships, buildShip, placePiece, receiveAttack, allSunk };
};




/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Computer": () => (/* binding */ Computer)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");


class Computer extends _player_js__WEBPACK_IMPORTED_MODULE_0__.Player {
  constructor() {
    super();

    this.randomInt = (maxVal) => Math.floor(Math.random() * maxVal);
    this.checkValidAttack = (opponent, attackCoords) => {
      const hitsAndMisses = opponent.gameboard.hits.concat(opponent.gameboard.misses);
      return !JSON.stringify(hitsAndMisses).includes(JSON.stringify(attackCoords));
    };
  }

  randomPlacement() {
    this.pieces.forEach((piece) => {
      let randomCoords = [this.randomInt(10), this.randomInt(10)];
      let direction = this.randomInt(2) ? 'h' : 'v';
      const ship = this.gameboard.buildShip(piece);
      while (this.checkShipPlacement(ship, randomCoords, direction) === false) {
        randomCoords = [this.randomInt(10), this.randomInt(10)];
        direction = this.randomInt(2) ? 'h' : 'v';
      }
      this.gameboard.placePiece(ship, randomCoords, direction);
    });
  }

  randomAttack(opponent) {
    let randomCoords = [this.randomInt(10), this.randomInt(10)];
    while (this.checkValidAttack(opponent, randomCoords) === false) {
      randomCoords = [this.randomInt(10), this.randomInt(10)];
    }
    this.attack(opponent, randomCoords);
    return randomCoords;
  }
}



// const comp = new Computer();
// console.log(comp.pieces)

/***/ }),

/***/ "./src/domAdditions.js":
/*!*****************************!*\
  !*** ./src/domAdditions.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBoard": () => (/* binding */ addBoard)
/* harmony export */ });
const infoBox = () => {
  const text = document.createElement('p');
  const section = document.createElement('section');
  section.className = 'info-box';
  text.className = 'info-text';
  section.appendChild(text);
  return section;
};

const rotateShipBtn = () => {
  const infoBox = document.querySelector('.info-box');
  const rotateContainer = document.createElement('div');
  rotateContainer.className = 'rotate-container';
  const rotateButton = document.createElement('button');
  rotateButton.className = 'rotate-ship';
  rotateButton.textContent = 'Rotate Ship';
  const rotateDirection = document.createElement('span');
  rotateDirection.className = 'rotate-direction';
  rotateDirection.textContent = 'Horizontal';
  rotateContainer.appendChild(rotateButton);
  rotateContainer.appendChild(rotateDirection);
  infoBox.appendChild(rotateContainer);
};

const boardRow = () => {
  const row = document.createElement('div');
  row.className = 'row';

  for (let i = 0; i < 10; i += 1) {
    const col = document.createElement('span');
    col.className = 'col';
    row.appendChild(col);
  }
  return row;
};

const boardGrid = (className) => {
  const grid = document.createElement('div');
  grid.classList.add('grid', `${className}-grid`);

  for (let i = 0; i < 10; i += 1) {
    const row = boardRow();
    grid.appendChild(row);
  }
  return grid;
};

const boardSection = (title, className) => {
  const section = document.createElement('section');
  const boardTitle = document.createElement('h2');
  boardTitle.textContent = title;
  section.classList.add('board', `${className}-board`);
  section.appendChild(boardTitle);
  section.appendChild(boardGrid(className));
  return section;
};

const board = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'board-wrapper';
  wrapper.appendChild(boardSection('Your Board', 'player'));
  wrapper.appendChild(boardSection('Enemy Board', 'computer'));
  return wrapper;
};

const addBoard = () => {
  const contentDiv = document.querySelector('#content');
  contentDiv.appendChild(infoBox());
  rotateShipBtn();
  contentDiv.appendChild(board());
};

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/domInteraction.js":
/*!*******************************!*\
  !*** ./src/domInteraction.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListnersToComputerBoard": () => (/* binding */ addListnersToComputerBoard),
/* harmony export */   "displayShips": () => (/* binding */ displayShips),
/* harmony export */   "getPlayerShips": () => (/* binding */ getPlayerShips),
/* harmony export */   "updateInfoBox": () => (/* binding */ updateInfoBox)
/* harmony export */ });
/* eslint-disable no-unused-expressions */
const displayShips = (ships, name) => {
  ships.forEach((ship) => {
    ship.coords.forEach((shipCoord) => {
      const row = shipCoord[0];
      const col = shipCoord[1];
      const coordBox = document.querySelector(`.${name}-grid :nth-child(${row + 1}) :nth-child(${col + 1})`);
      coordBox.classList.add('ship');
    });
  });
};

const displayPlayerShip = (shipCoords) => {
  shipCoords.forEach((coord) => {
    const row = coord[0];
    const col = coord[1];
    const coordBox = document.querySelector(`.player-grid :nth-child(${row + 1}) :nth-child(${col + 1})`);
    coordBox.classList.add('ship');
    coordBox.classList.remove('hover');
  });
};

const updateInfoBox = (text) => {
  const infoBoxText = document.querySelector('.info-text');
  infoBoxText.textContent = text;
};

const toggleRotateShip = () => {
  const rotateDirectionText = document.querySelector('.rotate-direction');
  (rotateDirectionText.textContent === 'Horizontal') ? rotateDirectionText.textContent = 'Vertical' : rotateDirectionText.textContent = 'Horizontal';
};

const getDirectionValue = () => {
  let direction;
  const rotateDirectionText = document.querySelector('.rotate-direction');
  rotateDirectionText.textContent === 'Horizontal' ? direction = 'h' : direction = 'v';
  return direction;
};

const addRotateShipListener = () => {
  const rotateButton = document.querySelector('.rotate-ship');
  rotateButton.addEventListener('click', () => { toggleRotateShip(); });
};

const calcHoverShip = (length, grid, row, col, rowNum, colNum) => {
  const elements = [col];
  const direction = getDirectionValue();
  if (direction === 'h') {
    for (let i = 1; i < length; i += 1) {
      if (colNum + i < 10) { elements.push(row.childNodes[colNum + i]); }
    }
  } else {
    for (let i = 1; i < length; i += 1) {
      if (rowNum + i < 10) { elements.push(grid.childNodes[rowNum + i].childNodes[colNum]); }
    }
  }
  return elements;
};

const enableGridHover = (grid, shipLength) => {
  grid.childNodes.forEach((row, i) => {
    row.childNodes.forEach((col, j) => {
      col.addEventListener('mouseover', () => {
        const elements = calcHoverShip(shipLength, grid, row, col, i, j);
        elements.forEach((el) => {
          el.classList.add('hover');
        });
      });
      col.addEventListener('mouseleave', () => {
        const elements = calcHoverShip(shipLength, grid, row, col, i, j);
        elements.forEach((el) => {
          el.classList.remove('hover');
        });
      });
    });
  });
};

const resetPlayerBoard = () => {
  const board = document.querySelector('.player-board');
  const finalBoard = board.cloneNode(true);
  board.parentNode.replaceChild(finalBoard, board);
};

const placePlayerShip = (player, shipLength) => {
  const grid = document.querySelector('.player-grid');
  const ship = player.gameboard.buildShip(shipLength);

  updateInfoBox('Click on your board to place your ship');
  enableGridHover(grid, shipLength);

  return new Promise((resolve) => {
    grid.childNodes.forEach((row, i) => {
      row.childNodes.forEach((col, j) => {
        col.addEventListener('click', () => {
          const direction = getDirectionValue();
          if (player.checkShipPlacement(ship, [i, j], direction)) {
            const shipCoords = player.gameboard.placePiece(ship, [i, j], direction);
            displayPlayerShip(shipCoords);
            resetPlayerBoard();
            resolve();
          }
        });
      });
    });
  });
};

const getPlayerShips = async (player) => {
  addRotateShipListener();
  await placePlayerShip(player, 5);
  await placePlayerShip(player, 4);
  await placePlayerShip(player, 3);
  await placePlayerShip(player, 3);
  await placePlayerShip(player, 2);
  document.querySelector('.rotate-container').remove();
  updateInfoBox('Click a cell on the Enemies board to attack!');
};

// eslint-disable-next-line max-len
const checkEndGame = (player, computer) => (player.gameboard.allSunk() || computer.gameboard.allSunk());

const determineWinner = (player) => {
  if (player.gameboard.allSunk()) { return 'You Lost!!!'; }
  return 'You Won!!!';
};

const updateGameGrid = (gameboard, name, coords) => {
  const gameboardCell = gameboard[coords[0]][coords[1]];
  const gridCell = document.querySelector(`.${name}-grid :nth-child(${coords[0] + 1}) :nth-child(${coords[1] + 1})`);
  if (gameboardCell === 'X') { gridCell.innerHTML = 'X'; }
  if (gameboardCell === '-') { gridCell.innerHTML = 'O'; }
  gridCell.style.pointerEvents = 'none';
};

const displayEnemyShipIfSunk = (computerShips) => {
  computerShips.forEach((ship) => {
    if (ship.object.sunk) {
      ship.coords.forEach((shipCoord) => {
        const row = shipCoord[0];
        const col = shipCoord[1];
        const coordBox = document.querySelector(`.computer-grid :nth-child(${row + 1}) :nth-child(${col + 1})`);
        coordBox.classList.add('ship');
      });
    }
  });
};

const makeCellsNotClickable = () => {
  const computerGridCells = document.querySelectorAll('.computer-grid .col');
  for (let i = 0; i < computerGridCells.length; i += 1) {
    computerGridCells[i].style.pointerEvents = 'none';
  }
};

const playRound = (cell, player, computer) => {
  const row = cell.parentNode;
  const rowIndex = Array.from(row.parentNode.children).indexOf(row);
  const colIndex = Array.from(cell.parentNode.children).indexOf(cell);
  const playerCoords = [rowIndex, colIndex];

  player.attack(computer, [rowIndex, colIndex]);
  updateGameGrid(computer.gameboard.board, 'computer', playerCoords);
  displayEnemyShipIfSunk(computer.gameboard.ships);

  const computerCoords = computer.randomAttack(player);
  updateGameGrid(player.gameboard.board, 'player', computerCoords);

  if (checkEndGame(player, computer)) {
    updateInfoBox(determineWinner(player));
    displayShips(computer.gameboard.ships, 'computer');
    makeCellsNotClickable();
  }
};

const addListnersToComputerBoard = (player, computer) => {
  const references = [];
  const computerGridCells = document.querySelectorAll('.computer-grid .col');
  computerGridCells.forEach((cell) => {
    const myReference = () => playRound(cell, player, computer);
    cell.addEventListener('click', myReference);
    references.push(myReference);
    cell.addEventListener('mouseover', () => { cell.classList.add('hover'); });
    cell.addEventListener('mouseleave', () => { cell.classList.remove('hover'); });
  });
  return references;
};




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer.js */ "./src/computer.js");
/* harmony import */ var _domInteraction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domInteraction.js */ "./src/domInteraction.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/player.js");




const gameLoop = () => {
  const player = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player();
  const computer = new _computer_js__WEBPACK_IMPORTED_MODULE_0__.Computer();

  const play = async () => {
    computer.randomPlacement();
    // to be replaced by user actually placing ships through UI
    // player.gameboard.placePiece(player.gameboard.buildShip(5), [0, 0], 'h');
    // player.gameboard.placePiece(player.gameboard.buildShip(4), [0, 9], 'v');
    // player.gameboard.placePiece(player.gameboard.buildShip(3), [3, 0], 'v');
    // player.gameboard.placePiece(player.gameboard.buildShip(3), [3, 3], 'v');
    // player.gameboard.placePiece(player.gameboard.buildShip(2), [7, 5], 'h');
    // displayShips(player.gameboard.ships, 'player');
    await (0,_domInteraction_js__WEBPACK_IMPORTED_MODULE_1__.getPlayerShips)(player);

    (0,_domInteraction_js__WEBPACK_IMPORTED_MODULE_1__.updateInfoBox)('Click a cell on the Enemies board to attack!');
    (0,_domInteraction_js__WEBPACK_IMPORTED_MODULE_1__.addListnersToComputerBoard)(player, computer);
  };
  return { player, computer, play };
};



// const newgame = gameLoop();
// newgame.play();

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ "./src/board.js");


class Player {
  constructor() {
    this.gameboard = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardFactory)();

    this.attack = (opponent, attackCoords) => { opponent.gameboard.receiveAttack(attackCoords); };
    this.placeShip = (ship, startCoordinate, direction) => { 
      this.gameboard.placePiece(ship, startCoordinate, direction);
    };
    this.pieces = [5, 4, 3, 3, 2];
  }

  checkShipPlacement(ship, startCoordinate, direction) {
    const gameBoard = this.gameboard.board;
    if (startCoordinate[0] > 9 || startCoordinate[1] > 9 || gameBoard[startCoordinate[0]][startCoordinate[1]] !== '') { return false; }
    const shipLength = ship.length - 1;
    let shipLengthIncrementor = 0;
    for (let i = 0; i < shipLength; i += 1) {
      shipLengthIncrementor += 1;
      let nextCoord = '';
      if (direction === 'h') {
        nextCoord = [startCoordinate[0], (startCoordinate[1] + shipLengthIncrementor)];
      } else if (direction === 'v') {
        nextCoord = [startCoordinate[0] + shipLengthIncrementor, startCoordinate[1]];
      }
      if (nextCoord[0] > 9 || nextCoord[1] > 9 || gameBoard[nextCoord[0]][nextCoord[1]] !== '') { return false; }
    }
    return true;
  }
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (length, hits = 0, sunk = false) => {
  function hit() { this.hits += 1; }

  function isSunk() { this.sunk = (this.hits === this.length); }

  return { length, hits, sunk, hit, isSunk }
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domAdditions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domAdditions.js */ "./src/domAdditions.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




console.log('hello');
(0,_domAdditions_js__WEBPACK_IMPORTED_MODULE_0__.addBoard)();
const newgame = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop)();
newgame.play();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsV0FBVztBQUNYOztBQUVvQjs7QUFFcEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUI4Qzs7QUFFOUM7QUFDQTtBQUNBLHFCQUFxQiwyREFBZ0I7O0FBRXJDLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3SEFBd0g7QUFDeEg7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLGtHQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ2hDbEI7QUFDQSxtQkFBbUI7O0FBRW5CLHNCQUFzQjs7QUFFdEIsV0FBVztBQUNYOztBQUV1Qjs7Ozs7OztVQ1J2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDUjtBQUNoQjs7QUFFckI7QUFDQSwwREFBUTtBQUNSLGdCQUFnQixrREFBUTtBQUN4QixlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21BZGRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21JbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoMSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZ3JpZCxcXG4uaW5mby1ib3gge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmNvbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAxMjcsIDEyNyk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaDEge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmdyaWQsXFxuLmluZm8tYm94IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLnJvdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jb2wge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMTI3LCAxMjcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gJycgZm9yIGVtcHR5IHNwYWNlLCBPIGZvciBzaGlwLCBYIGZvciBzaGlwIGhpdCwgLSBmb3IgbWlzc2VkIGhpdFxuXG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL3NoaXAuanNcIjtcblxuY29uc3QgZ2FtZUJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoJycpKTtcbiAgY29uc3QgbWlzc2VzID0gW107XG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBjb25zdCBidWlsZFNoaXAgPSAobGVuZ3RoKSA9PiBzaGlwRmFjdG9yeShsZW5ndGgpO1xuXG4gIGNvbnN0IHBsYWNlUGllY2UgPSAoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24gPSAnaCcpID0+IHtcbiAgICBib2FyZFtzdGFydENvb3JkaW5hdGVbMF1dW3N0YXJ0Q29vcmRpbmF0ZVsxXV0gPSAnTyc7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoIC0gMTtcbiAgICBsZXQgc2hpcExlbmd0aEluY3JlbWVudG9yID0gMDtcbiAgICBjb25zdCBzaGlwQ29vcmRzID0gW3N0YXJ0Q29vcmRpbmF0ZV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNoaXBMZW5ndGhJbmNyZW1lbnRvciArPSAxO1xuICAgICAgbGV0IG5leHRDb29yZCA9ICcnO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgIG5leHRDb29yZCA9IFtzdGFydENvb3JkaW5hdGVbMF0sIChzdGFydENvb3JkaW5hdGVbMV0gKyBzaGlwTGVuZ3RoSW5jcmVtZW50b3IpXTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndicpIHtcbiAgICAgICAgbmV4dENvb3JkID0gW3N0YXJ0Q29vcmRpbmF0ZVswXSArIHNoaXBMZW5ndGhJbmNyZW1lbnRvciwgc3RhcnRDb29yZGluYXRlWzFdXTtcbiAgICAgIH1cbiAgICAgIGJvYXJkW25leHRDb29yZFswXV1bbmV4dENvb3JkWzFdXSA9ICdPJztcbiAgICAgIHNoaXBDb29yZHMucHVzaChuZXh0Q29vcmQpO1xuICAgIH1cbiAgICBzaGlwcy5wdXNoKHsgb2JqZWN0OiBzaGlwLCBjb29yZHM6IHNoaXBDb29yZHMgfSk7XG4gICAgcmV0dXJuIHNoaXBDb29yZHM7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdHRhY2tDb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKGJvYXJkW2F0dGFja0Nvb3JkaW5hdGVbMF1dW2F0dGFja0Nvb3JkaW5hdGVbMV1dICE9PSAnTycpIHtcbiAgICAgIG1pc3Nlcy5wdXNoKGF0dGFja0Nvb3JkaW5hdGUpO1xuICAgICAgYm9hcmRbYXR0YWNrQ29vcmRpbmF0ZVswXV1bYXR0YWNrQ29vcmRpbmF0ZVsxXV0gPSAnLSc7XG4gICAgfSBlbHNlIGlmIChib2FyZFthdHRhY2tDb29yZGluYXRlWzBdXVthdHRhY2tDb29yZGluYXRlWzFdXSA9PT0gJ08nKSB7XG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjb29yZClcbiAgICAgICAgICBpZiAoY29vcmRTdHJpbmcuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoYXR0YWNrQ29vcmRpbmF0ZSkpKSB7XG4gICAgICAgICAgICBzaGlwLm9iamVjdC5oaXQoKTtcbiAgICAgICAgICAgIHNoaXAub2JqZWN0LmlzU3VuaygpO1xuICAgICAgICAgICAgYm9hcmRbYXR0YWNrQ29vcmRpbmF0ZVswXV1bYXR0YWNrQ29vcmRpbmF0ZVsxXV0gPSAnWCc7XG4gICAgICAgICAgICBoaXRzLnB1c2goYXR0YWNrQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGlmIChzaGlwcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgY29uc3Qgc3Vua0xvZyA9IFtdO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHN1bmtMb2cucHVzaChzaGlwLm9iamVjdC5zdW5rKTtcbiAgICB9KTtcbiAgICByZXR1cm4gIXN1bmtMb2cuaW5jbHVkZXMoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiB7IGJvYXJkLCBtaXNzZXMsIGhpdHMsIHNoaXBzLCBidWlsZFNoaXAsIHBsYWNlUGllY2UsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmsgfTtcbn07XG5cbmV4cG9ydCB7IGdhbWVCb2FyZEZhY3RvcnkgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuXG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJhbmRvbUludCA9IChtYXhWYWwpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heFZhbCk7XG4gICAgdGhpcy5jaGVja1ZhbGlkQXR0YWNrID0gKG9wcG9uZW50LCBhdHRhY2tDb29yZHMpID0+IHtcbiAgICAgIGNvbnN0IGhpdHNBbmRNaXNzZXMgPSBvcHBvbmVudC5nYW1lYm9hcmQuaGl0cy5jb25jYXQob3Bwb25lbnQuZ2FtZWJvYXJkLm1pc3Nlcyk7XG4gICAgICByZXR1cm4gIUpTT04uc3RyaW5naWZ5KGhpdHNBbmRNaXNzZXMpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGF0dGFja0Nvb3JkcykpO1xuICAgIH07XG4gIH1cblxuICByYW5kb21QbGFjZW1lbnQoKSB7XG4gICAgdGhpcy5waWVjZXMuZm9yRWFjaCgocGllY2UpID0+IHtcbiAgICAgIGxldCByYW5kb21Db29yZHMgPSBbdGhpcy5yYW5kb21JbnQoMTApLCB0aGlzLnJhbmRvbUludCgxMCldO1xuICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMucmFuZG9tSW50KDIpID8gJ2gnIDogJ3YnO1xuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuZ2FtZWJvYXJkLmJ1aWxkU2hpcChwaWVjZSk7XG4gICAgICB3aGlsZSAodGhpcy5jaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgcmFuZG9tQ29vcmRzLCBkaXJlY3Rpb24pID09PSBmYWxzZSkge1xuICAgICAgICByYW5kb21Db29yZHMgPSBbdGhpcy5yYW5kb21JbnQoMTApLCB0aGlzLnJhbmRvbUludCgxMCldO1xuICAgICAgICBkaXJlY3Rpb24gPSB0aGlzLnJhbmRvbUludCgyKSA/ICdoJyA6ICd2JztcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlUGllY2Uoc2hpcCwgcmFuZG9tQ29vcmRzLCBkaXJlY3Rpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcmFuZG9tQXR0YWNrKG9wcG9uZW50KSB7XG4gICAgbGV0IHJhbmRvbUNvb3JkcyA9IFt0aGlzLnJhbmRvbUludCgxMCksIHRoaXMucmFuZG9tSW50KDEwKV07XG4gICAgd2hpbGUgKHRoaXMuY2hlY2tWYWxpZEF0dGFjayhvcHBvbmVudCwgcmFuZG9tQ29vcmRzKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJhbmRvbUNvb3JkcyA9IFt0aGlzLnJhbmRvbUludCgxMCksIHRoaXMucmFuZG9tSW50KDEwKV07XG4gICAgfVxuICAgIHRoaXMuYXR0YWNrKG9wcG9uZW50LCByYW5kb21Db29yZHMpO1xuICAgIHJldHVybiByYW5kb21Db29yZHM7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ29tcHV0ZXIgfTtcblxuLy8gY29uc3QgY29tcCA9IG5ldyBDb21wdXRlcigpO1xuLy8gY29uc29sZS5sb2coY29tcC5waWVjZXMpIiwiY29uc3QgaW5mb0JveCA9ICgpID0+IHtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbi5jbGFzc05hbWUgPSAnaW5mby1ib3gnO1xuICB0ZXh0LmNsYXNzTmFtZSA9ICdpbmZvLXRleHQnO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICByZXR1cm4gc2VjdGlvbjtcbn07XG5cbmNvbnN0IHJvdGF0ZVNoaXBCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1ib3gnKTtcbiAgY29uc3Qgcm90YXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvdGF0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAncm90YXRlLWNvbnRhaW5lcic7XG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByb3RhdGVCdXR0b24uY2xhc3NOYW1lID0gJ3JvdGF0ZS1zaGlwJztcbiAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSBTaGlwJztcbiAgY29uc3Qgcm90YXRlRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICByb3RhdGVEaXJlY3Rpb24uY2xhc3NOYW1lID0gJ3JvdGF0ZS1kaXJlY3Rpb24nO1xuICByb3RhdGVEaXJlY3Rpb24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gIHJvdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdXR0b24pO1xuICByb3RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlRGlyZWN0aW9uKTtcbiAgaW5mb0JveC5hcHBlbmRDaGlsZChyb3RhdGVDb250YWluZXIpO1xufTtcblxuY29uc3QgYm9hcmRSb3cgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbC5jbGFzc05hbWUgPSAnY29sJztcbiAgICByb3cuYXBwZW5kQ2hpbGQoY29sKTtcbiAgfVxuICByZXR1cm4gcm93O1xufTtcblxuY29uc3QgYm9hcmRHcmlkID0gKGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcsIGAke2NsYXNzTmFtZX0tZ3JpZGApO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IGJvYXJkUm93KCk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG4gIHJldHVybiBncmlkO1xufTtcblxuY29uc3QgYm9hcmRTZWN0aW9uID0gKHRpdGxlLCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgYm9hcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdib2FyZCcsIGAke2NsYXNzTmFtZX0tYm9hcmRgKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChib2FyZFRpdGxlKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChib2FyZEdyaWQoY2xhc3NOYW1lKSk7XG4gIHJldHVybiBzZWN0aW9uO1xufTtcblxuY29uc3QgYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcHBlci5jbGFzc05hbWUgPSAnYm9hcmQtd3JhcHBlcic7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYm9hcmRTZWN0aW9uKCdZb3VyIEJvYXJkJywgJ3BsYXllcicpKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChib2FyZFNlY3Rpb24oJ0VuZW15IEJvYXJkJywgJ2NvbXB1dGVyJykpO1xuICByZXR1cm4gd3JhcHBlcjtcbn07XG5cbmNvbnN0IGFkZEJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbmZvQm94KCkpO1xuICByb3RhdGVTaGlwQnRuKCk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYm9hcmQoKSk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgYWRkQm9hcmQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuY29uc3QgZGlzcGxheVNoaXBzID0gKHNoaXBzLCBuYW1lKSA9PiB7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKChzaGlwQ29vcmQpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHNoaXBDb29yZFswXTtcbiAgICAgIGNvbnN0IGNvbCA9IHNoaXBDb29yZFsxXTtcbiAgICAgIGNvbnN0IGNvb3JkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0tZ3JpZCA6bnRoLWNoaWxkKCR7cm93ICsgMX0pIDpudGgtY2hpbGQoJHtjb2wgKyAxfSlgKTtcbiAgICAgIGNvb3JkQm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkaXNwbGF5UGxheWVyU2hpcCA9IChzaGlwQ29vcmRzKSA9PiB7XG4gIHNoaXBDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICBjb25zdCByb3cgPSBjb29yZFswXTtcbiAgICBjb25zdCBjb2wgPSBjb29yZFsxXTtcbiAgICBjb25zdCBjb29yZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItZ3JpZCA6bnRoLWNoaWxkKCR7cm93ICsgMX0pIDpudGgtY2hpbGQoJHtjb2wgKyAxfSlgKTtcbiAgICBjb29yZEJveC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgY29vcmRCb3guY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVJbmZvQm94ID0gKHRleHQpID0+IHtcbiAgY29uc3QgaW5mb0JveFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby10ZXh0Jyk7XG4gIGluZm9Cb3hUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbn07XG5cbmNvbnN0IHRvZ2dsZVJvdGF0ZVNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdGF0ZURpcmVjdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWRpcmVjdGlvbicpO1xuICAocm90YXRlRGlyZWN0aW9uVGV4dC50ZXh0Q29udGVudCA9PT0gJ0hvcml6b250YWwnKSA/IHJvdGF0ZURpcmVjdGlvblRleHQudGV4dENvbnRlbnQgPSAnVmVydGljYWwnIDogcm90YXRlRGlyZWN0aW9uVGV4dC50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbn07XG5cbmNvbnN0IGdldERpcmVjdGlvblZhbHVlID0gKCkgPT4ge1xuICBsZXQgZGlyZWN0aW9uO1xuICBjb25zdCByb3RhdGVEaXJlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1kaXJlY3Rpb24nKTtcbiAgcm90YXRlRGlyZWN0aW9uVGV4dC50ZXh0Q29udGVudCA9PT0gJ0hvcml6b250YWwnID8gZGlyZWN0aW9uID0gJ2gnIDogZGlyZWN0aW9uID0gJ3YnO1xuICByZXR1cm4gZGlyZWN0aW9uO1xufTtcblxuY29uc3QgYWRkUm90YXRlU2hpcExpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLXNoaXAnKTtcbiAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0b2dnbGVSb3RhdGVTaGlwKCk7IH0pO1xufTtcblxuY29uc3QgY2FsY0hvdmVyU2hpcCA9IChsZW5ndGgsIGdyaWQsIHJvdywgY29sLCByb3dOdW0sIGNvbE51bSkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IFtjb2xdO1xuICBjb25zdCBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb25WYWx1ZSgpO1xuICBpZiAoZGlyZWN0aW9uID09PSAnaCcpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY29sTnVtICsgaSA8IDEwKSB7IGVsZW1lbnRzLnB1c2gocm93LmNoaWxkTm9kZXNbY29sTnVtICsgaV0pOyB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChyb3dOdW0gKyBpIDwgMTApIHsgZWxlbWVudHMucHVzaChncmlkLmNoaWxkTm9kZXNbcm93TnVtICsgaV0uY2hpbGROb2Rlc1tjb2xOdW1dKTsgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5jb25zdCBlbmFibGVHcmlkSG92ZXIgPSAoZ3JpZCwgc2hpcExlbmd0aCkgPT4ge1xuICBncmlkLmNoaWxkTm9kZXMuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgcm93LmNoaWxkTm9kZXMuZm9yRWFjaCgoY29sLCBqKSA9PiB7XG4gICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGNhbGNIb3ZlclNoaXAoc2hpcExlbmd0aCwgZ3JpZCwgcm93LCBjb2wsIGksIGopO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBjYWxjSG92ZXJTaGlwKHNoaXBMZW5ndGgsIGdyaWQsIHJvdywgY29sLCBpLCBqKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlc2V0UGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICBjb25zdCBmaW5hbEJvYXJkID0gYm9hcmQuY2xvbmVOb2RlKHRydWUpO1xuICBib2FyZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChmaW5hbEJvYXJkLCBib2FyZCk7XG59O1xuXG5jb25zdCBwbGFjZVBsYXllclNoaXAgPSAocGxheWVyLCBzaGlwTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWdyaWQnKTtcbiAgY29uc3Qgc2hpcCA9IHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKHNoaXBMZW5ndGgpO1xuXG4gIHVwZGF0ZUluZm9Cb3goJ0NsaWNrIG9uIHlvdXIgYm9hcmQgdG8gcGxhY2UgeW91ciBzaGlwJyk7XG4gIGVuYWJsZUdyaWRIb3ZlcihncmlkLCBzaGlwTGVuZ3RoKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBncmlkLmNoaWxkTm9kZXMuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICByb3cuY2hpbGROb2Rlcy5mb3JFYWNoKChjb2wsIGopID0+IHtcbiAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldERpcmVjdGlvblZhbHVlKCk7XG4gICAgICAgICAgaWYgKHBsYXllci5jaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgW2ksIGpdLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwQ29vcmRzID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHNoaXAsIFtpLCBqXSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGRpc3BsYXlQbGF5ZXJTaGlwKHNoaXBDb29yZHMpO1xuICAgICAgICAgICAgcmVzZXRQbGF5ZXJCb2FyZCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRQbGF5ZXJTaGlwcyA9IGFzeW5jIChwbGF5ZXIpID0+IHtcbiAgYWRkUm90YXRlU2hpcExpc3RlbmVyKCk7XG4gIGF3YWl0IHBsYWNlUGxheWVyU2hpcChwbGF5ZXIsIDUpO1xuICBhd2FpdCBwbGFjZVBsYXllclNoaXAocGxheWVyLCA0KTtcbiAgYXdhaXQgcGxhY2VQbGF5ZXJTaGlwKHBsYXllciwgMyk7XG4gIGF3YWl0IHBsYWNlUGxheWVyU2hpcChwbGF5ZXIsIDMpO1xuICBhd2FpdCBwbGFjZVBsYXllclNoaXAocGxheWVyLCAyKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgdXBkYXRlSW5mb0JveCgnQ2xpY2sgYSBjZWxsIG9uIHRoZSBFbmVtaWVzIGJvYXJkIHRvIGF0dGFjayEnKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5jb25zdCBjaGVja0VuZEdhbWUgPSAocGxheWVyLCBjb21wdXRlcikgPT4gKHBsYXllci5nYW1lYm9hcmQuYWxsU3VuaygpIHx8IGNvbXB1dGVyLmdhbWVib2FyZC5hbGxTdW5rKCkpO1xuXG5jb25zdCBkZXRlcm1pbmVXaW5uZXIgPSAocGxheWVyKSA9PiB7XG4gIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFN1bmsoKSkgeyByZXR1cm4gJ1lvdSBMb3N0ISEhJzsgfVxuICByZXR1cm4gJ1lvdSBXb24hISEnO1xufTtcblxuY29uc3QgdXBkYXRlR2FtZUdyaWQgPSAoZ2FtZWJvYXJkLCBuYW1lLCBjb29yZHMpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkQ2VsbCA9IGdhbWVib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV07XG4gIGNvbnN0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0tZ3JpZCA6bnRoLWNoaWxkKCR7Y29vcmRzWzBdICsgMX0pIDpudGgtY2hpbGQoJHtjb29yZHNbMV0gKyAxfSlgKTtcbiAgaWYgKGdhbWVib2FyZENlbGwgPT09ICdYJykgeyBncmlkQ2VsbC5pbm5lckhUTUwgPSAnWCc7IH1cbiAgaWYgKGdhbWVib2FyZENlbGwgPT09ICctJykgeyBncmlkQ2VsbC5pbm5lckhUTUwgPSAnTyc7IH1cbiAgZ3JpZENlbGwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbn07XG5cbmNvbnN0IGRpc3BsYXlFbmVteVNoaXBJZlN1bmsgPSAoY29tcHV0ZXJTaGlwcykgPT4ge1xuICBjb21wdXRlclNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5vYmplY3Quc3Vuaykge1xuICAgICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoc2hpcENvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHNoaXBDb29yZFswXTtcbiAgICAgICAgY29uc3QgY29sID0gc2hpcENvb3JkWzFdO1xuICAgICAgICBjb25zdCBjb29yZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1ncmlkIDpudGgtY2hpbGQoJHtyb3cgKyAxfSkgOm50aC1jaGlsZCgke2NvbCArIDF9KWApO1xuICAgICAgICBjb29yZEJveC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbWFrZUNlbGxzTm90Q2xpY2thYmxlID0gKCkgPT4ge1xuICBjb25zdCBjb21wdXRlckdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1ncmlkIC5jb2wnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlckdyaWRDZWxscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbXB1dGVyR3JpZENlbGxzW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIH1cbn07XG5cbmNvbnN0IHBsYXlSb3VuZCA9IChjZWxsLCBwbGF5ZXIsIGNvbXB1dGVyKSA9PiB7XG4gIGNvbnN0IHJvdyA9IGNlbGwucGFyZW50Tm9kZTtcbiAgY29uc3Qgcm93SW5kZXggPSBBcnJheS5mcm9tKHJvdy5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKHJvdyk7XG4gIGNvbnN0IGNvbEluZGV4ID0gQXJyYXkuZnJvbShjZWxsLnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YoY2VsbCk7XG4gIGNvbnN0IHBsYXllckNvb3JkcyA9IFtyb3dJbmRleCwgY29sSW5kZXhdO1xuXG4gIHBsYXllci5hdHRhY2soY29tcHV0ZXIsIFtyb3dJbmRleCwgY29sSW5kZXhdKTtcbiAgdXBkYXRlR2FtZUdyaWQoY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkLCAnY29tcHV0ZXInLCBwbGF5ZXJDb29yZHMpO1xuICBkaXNwbGF5RW5lbXlTaGlwSWZTdW5rKGNvbXB1dGVyLmdhbWVib2FyZC5zaGlwcyk7XG5cbiAgY29uc3QgY29tcHV0ZXJDb29yZHMgPSBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyKTtcbiAgdXBkYXRlR2FtZUdyaWQocGxheWVyLmdhbWVib2FyZC5ib2FyZCwgJ3BsYXllcicsIGNvbXB1dGVyQ29vcmRzKTtcblxuICBpZiAoY2hlY2tFbmRHYW1lKHBsYXllciwgY29tcHV0ZXIpKSB7XG4gICAgdXBkYXRlSW5mb0JveChkZXRlcm1pbmVXaW5uZXIocGxheWVyKSk7XG4gICAgZGlzcGxheVNoaXBzKGNvbXB1dGVyLmdhbWVib2FyZC5zaGlwcywgJ2NvbXB1dGVyJyk7XG4gICAgbWFrZUNlbGxzTm90Q2xpY2thYmxlKCk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZExpc3RuZXJzVG9Db21wdXRlckJvYXJkID0gKHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgY29uc3QgcmVmZXJlbmNlcyA9IFtdO1xuICBjb25zdCBjb21wdXRlckdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1ncmlkIC5jb2wnKTtcbiAgY29tcHV0ZXJHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IG15UmVmZXJlbmNlID0gKCkgPT4gcGxheVJvdW5kKGNlbGwsIHBsYXllciwgY29tcHV0ZXIpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBteVJlZmVyZW5jZSk7XG4gICAgcmVmZXJlbmNlcy5wdXNoKG15UmVmZXJlbmNlKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHsgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpOyB9KTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTsgfSk7XG4gIH0pO1xuICByZXR1cm4gcmVmZXJlbmNlcztcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlTaGlwcywgdXBkYXRlSW5mb0JveCwgYWRkTGlzdG5lcnNUb0NvbXB1dGVyQm9hcmQsIGdldFBsYXllclNoaXBzIH07XG4iLCJpbXBvcnQgeyBDb21wdXRlciB9IGZyb20gXCIuL2NvbXB1dGVyLmpzXCI7XG5pbXBvcnQgeyBhZGRMaXN0bmVyc1RvQ29tcHV0ZXJCb2FyZCwgZGlzcGxheVNoaXBzLCBnZXRQbGF5ZXJTaGlwcywgdXBkYXRlSW5mb0JveCB9IGZyb20gXCIuL2RvbUludGVyYWN0aW9uLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcblxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcblxuICBjb25zdCBwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbXB1dGVyLnJhbmRvbVBsYWNlbWVudCgpO1xuICAgIC8vIHRvIGJlIHJlcGxhY2VkIGJ5IHVzZXIgYWN0dWFsbHkgcGxhY2luZyBzaGlwcyB0aHJvdWdoIFVJXG4gICAgLy8gcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDUpLCBbMCwgMF0sICdoJyk7XG4gICAgLy8gcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDQpLCBbMCwgOV0sICd2Jyk7XG4gICAgLy8gcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDMpLCBbMywgMF0sICd2Jyk7XG4gICAgLy8gcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDMpLCBbMywgM10sICd2Jyk7XG4gICAgLy8gcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDIpLCBbNywgNV0sICdoJyk7XG4gICAgLy8gZGlzcGxheVNoaXBzKHBsYXllci5nYW1lYm9hcmQuc2hpcHMsICdwbGF5ZXInKTtcbiAgICBhd2FpdCBnZXRQbGF5ZXJTaGlwcyhwbGF5ZXIpO1xuXG4gICAgdXBkYXRlSW5mb0JveCgnQ2xpY2sgYSBjZWxsIG9uIHRoZSBFbmVtaWVzIGJvYXJkIHRvIGF0dGFjayEnKTtcbiAgICBhZGRMaXN0bmVyc1RvQ29tcHV0ZXJCb2FyZChwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgfTtcbiAgcmV0dXJuIHsgcGxheWVyLCBjb21wdXRlciwgcGxheSB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZUxvb3AgfTtcblxuLy8gY29uc3QgbmV3Z2FtZSA9IGdhbWVMb29wKCk7XG4vLyBuZXdnYW1lLnBsYXkoKTsiLCJpbXBvcnQgeyBnYW1lQm9hcmRGYWN0b3J5IH0gZnJvbSBcIi4vYm9hcmQuanNcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG5cbiAgICB0aGlzLmF0dGFjayA9IChvcHBvbmVudCwgYXR0YWNrQ29vcmRzKSA9PiB7IG9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja0Nvb3Jkcyk7IH07XG4gICAgdGhpcy5wbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24pID0+IHsgXG4gICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVBpZWNlKHNoaXAsIHN0YXJ0Q29vcmRpbmF0ZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIHRoaXMucGllY2VzID0gWzUsIDQsIDMsIDMsIDJdO1xuICB9XG5cbiAgY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIHN0YXJ0Q29vcmRpbmF0ZSwgZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgZ2FtZUJvYXJkID0gdGhpcy5nYW1lYm9hcmQuYm9hcmQ7XG4gICAgaWYgKHN0YXJ0Q29vcmRpbmF0ZVswXSA+IDkgfHwgc3RhcnRDb29yZGluYXRlWzFdID4gOSB8fCBnYW1lQm9hcmRbc3RhcnRDb29yZGluYXRlWzBdXVtzdGFydENvb3JkaW5hdGVbMV1dICE9PSAnJykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGggLSAxO1xuICAgIGxldCBzaGlwTGVuZ3RoSW5jcmVtZW50b3IgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzaGlwTGVuZ3RoSW5jcmVtZW50b3IgKz0gMTtcbiAgICAgIGxldCBuZXh0Q29vcmQgPSAnJztcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdoJykge1xuICAgICAgICBuZXh0Q29vcmQgPSBbc3RhcnRDb29yZGluYXRlWzBdLCAoc3RhcnRDb29yZGluYXRlWzFdICsgc2hpcExlbmd0aEluY3JlbWVudG9yKV07XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgIG5leHRDb29yZCA9IFtzdGFydENvb3JkaW5hdGVbMF0gKyBzaGlwTGVuZ3RoSW5jcmVtZW50b3IsIHN0YXJ0Q29vcmRpbmF0ZVsxXV07XG4gICAgICB9XG4gICAgICBpZiAobmV4dENvb3JkWzBdID4gOSB8fCBuZXh0Q29vcmRbMV0gPiA5IHx8IGdhbWVCb2FyZFtuZXh0Q29vcmRbMF1dW25leHRDb29yZFsxXV0gIT09ICcnKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgaGl0cyA9IDAsIHN1bmsgPSBmYWxzZSkgPT4ge1xuICBmdW5jdGlvbiBoaXQoKSB7IHRoaXMuaGl0cyArPSAxOyB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkgeyB0aGlzLnN1bmsgPSAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCk7IH1cblxuICByZXR1cm4geyBsZW5ndGgsIGhpdHMsIHN1bmssIGhpdCwgaXNTdW5rIH1cbn07XG5cbmV4cG9ydCB7IHNoaXBGYWN0b3J5IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBhZGRCb2FyZCB9IGZyb20gJy4vZG9tQWRkaXRpb25zLmpzJztcbmltcG9ydCB7IGdhbWVMb29wIH0gZnJvbSAnLi9nYW1lLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zb2xlLmxvZygnaGVsbG8nKTtcbmFkZEJvYXJkKCk7XG5jb25zdCBuZXdnYW1lID0gZ2FtZUxvb3AoKTtcbm5ld2dhbWUucGxheSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==