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

  const getShipName = (shipIndex) => {
    const shipNames = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];
    return shipNames[shipIndex];
  };

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
          const coordString = JSON.stringify(coord);
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

  return { board, misses, hits, ships, getShipName, buildShip, placePiece, receiveAttack, allSunk };
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

const addNewGameButton = () => {
  const newGameButton = document.createElement('button');
  newGameButton.innerHTML = 'Start New Game';
  newGameButton.className = 'new-game';
  document.querySelector('.info-box').appendChild(newGameButton);
  newGameButton.addEventListener('click', () => { window.location.reload(); });
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
  return gridCell.innerHTML;
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

const findShipIndex = (player, searchCoords) => {
  let index;
  const playerShips = player.gameboard.ships;
  playerShips.forEach((ship, i) => {
    ship.coords.forEach((coord) => {
      const coordString = JSON.stringify(coord);
      if (coordString.includes(JSON.stringify(searchCoords))) {
        index = i;
      }
    });
  });
  return index;
};

const updateEnemyAttackInfo = (player, computerAttackCoords, compAttackResult) => {
  if (compAttackResult === 'X') {
    const shipIndex = findShipIndex(player, computerAttackCoords);
    if (player.gameboard.ships[shipIndex].object.sunk) {
      updateInfoBox(`The enemy sunk your ${player.gameboard.getShipName(shipIndex)}!`);
    } else {
      updateInfoBox(`The enemy hit your ${player.gameboard.getShipName(shipIndex)}!`);
    }
  } else { updateInfoBox('The enemy missed their shot!'); }
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
  const compAttackResult = updateGameGrid(player.gameboard.board, 'player', computerCoords);
  updateEnemyAttackInfo(player, computerCoords, compAttackResult);

  if (checkEndGame(player, computer)) {
    updateInfoBox(determineWinner(player));
    displayShips(computer.gameboard.ships, 'computer');
    makeCellsNotClickable();
    addNewGameButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkE7Ozs7Ozs7Ozs7Ozs7O0FDQTZDO0FBQ1I7QUFDaEI7O0FBRXJCO0FBQ0EsMERBQVE7QUFDUixnQkFBZ0Isa0RBQVE7QUFDeEIsZSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tQWRkaXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tSW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaDEge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmdyaWQsXFxuLmluZm8tYm94IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLnJvdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jb2wge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMTI3LCAxMjcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgxIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ncmlkLFxcbi5pbmZvLWJveCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5yb3cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29sIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDEyNywgMTI3KTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vICcnIGZvciBlbXB0eSBzcGFjZSwgTyBmb3Igc2hpcCwgWCBmb3Igc2hpcCBoaXQsIC0gZm9yIG1pc3NlZCBoaXRcblxuaW1wb3J0IHsgc2hpcEZhY3RvcnkgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5cbmNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKCcnKSk7XG4gIGNvbnN0IG1pc3NlcyA9IFtdO1xuICBjb25zdCBoaXRzID0gW107XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgY29uc3QgZ2V0U2hpcE5hbWUgPSAoc2hpcEluZGV4KSA9PiB7XG4gICAgY29uc3Qgc2hpcE5hbWVzID0gWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wgQm9hdCddO1xuICAgIHJldHVybiBzaGlwTmFtZXNbc2hpcEluZGV4XTtcbiAgfTtcblxuICBjb25zdCBidWlsZFNoaXAgPSAobGVuZ3RoKSA9PiBzaGlwRmFjdG9yeShsZW5ndGgpO1xuXG4gIGNvbnN0IHBsYWNlUGllY2UgPSAoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24gPSAnaCcpID0+IHtcbiAgICBib2FyZFtzdGFydENvb3JkaW5hdGVbMF1dW3N0YXJ0Q29vcmRpbmF0ZVsxXV0gPSAnTyc7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoIC0gMTtcbiAgICBsZXQgc2hpcExlbmd0aEluY3JlbWVudG9yID0gMDtcbiAgICBjb25zdCBzaGlwQ29vcmRzID0gW3N0YXJ0Q29vcmRpbmF0ZV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNoaXBMZW5ndGhJbmNyZW1lbnRvciArPSAxO1xuICAgICAgbGV0IG5leHRDb29yZCA9ICcnO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgIG5leHRDb29yZCA9IFtzdGFydENvb3JkaW5hdGVbMF0sIChzdGFydENvb3JkaW5hdGVbMV0gKyBzaGlwTGVuZ3RoSW5jcmVtZW50b3IpXTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndicpIHtcbiAgICAgICAgbmV4dENvb3JkID0gW3N0YXJ0Q29vcmRpbmF0ZVswXSArIHNoaXBMZW5ndGhJbmNyZW1lbnRvciwgc3RhcnRDb29yZGluYXRlWzFdXTtcbiAgICAgIH1cbiAgICAgIGJvYXJkW25leHRDb29yZFswXV1bbmV4dENvb3JkWzFdXSA9ICdPJztcbiAgICAgIHNoaXBDb29yZHMucHVzaChuZXh0Q29vcmQpO1xuICAgIH1cbiAgICBzaGlwcy5wdXNoKHsgb2JqZWN0OiBzaGlwLCBjb29yZHM6IHNoaXBDb29yZHMgfSk7XG4gICAgcmV0dXJuIHNoaXBDb29yZHM7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdHRhY2tDb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKGJvYXJkW2F0dGFja0Nvb3JkaW5hdGVbMF1dW2F0dGFja0Nvb3JkaW5hdGVbMV1dICE9PSAnTycpIHtcbiAgICAgIG1pc3Nlcy5wdXNoKGF0dGFja0Nvb3JkaW5hdGUpO1xuICAgICAgYm9hcmRbYXR0YWNrQ29vcmRpbmF0ZVswXV1bYXR0YWNrQ29vcmRpbmF0ZVsxXV0gPSAnLSc7XG4gICAgfSBlbHNlIGlmIChib2FyZFthdHRhY2tDb29yZGluYXRlWzBdXVthdHRhY2tDb29yZGluYXRlWzFdXSA9PT0gJ08nKSB7XG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjb29yZCk7XG4gICAgICAgICAgaWYgKGNvb3JkU3RyaW5nLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGF0dGFja0Nvb3JkaW5hdGUpKSkge1xuICAgICAgICAgICAgc2hpcC5vYmplY3QuaGl0KCk7XG4gICAgICAgICAgICBzaGlwLm9iamVjdC5pc1N1bmsoKTtcbiAgICAgICAgICAgIGJvYXJkW2F0dGFja0Nvb3JkaW5hdGVbMF1dW2F0dGFja0Nvb3JkaW5hdGVbMV1dID0gJ1gnO1xuICAgICAgICAgICAgaGl0cy5wdXNoKGF0dGFja0Nvb3JkaW5hdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBpZiAoc2hpcHMubGVuZ3RoID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGNvbnN0IHN1bmtMb2cgPSBbXTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzdW5rTG9nLnB1c2goc2hpcC5vYmplY3Quc3Vuayk7XG4gICAgfSk7XG4gICAgcmV0dXJuICFzdW5rTG9nLmluY2x1ZGVzKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4geyBib2FyZCwgbWlzc2VzLCBoaXRzLCBzaGlwcywgZ2V0U2hpcE5hbWUsIGJ1aWxkU2hpcCwgcGxhY2VQaWVjZSwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuayB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZUJvYXJkRmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5cbmNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmFuZG9tSW50ID0gKG1heFZhbCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4VmFsKTtcbiAgICB0aGlzLmNoZWNrVmFsaWRBdHRhY2sgPSAob3Bwb25lbnQsIGF0dGFja0Nvb3JkcykgPT4ge1xuICAgICAgY29uc3QgaGl0c0FuZE1pc3NlcyA9IG9wcG9uZW50LmdhbWVib2FyZC5oaXRzLmNvbmNhdChvcHBvbmVudC5nYW1lYm9hcmQubWlzc2VzKTtcbiAgICAgIHJldHVybiAhSlNPTi5zdHJpbmdpZnkoaGl0c0FuZE1pc3NlcykuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoYXR0YWNrQ29vcmRzKSk7XG4gICAgfTtcbiAgfVxuXG4gIHJhbmRvbVBsYWNlbWVudCgpIHtcbiAgICB0aGlzLnBpZWNlcy5mb3JFYWNoKChwaWVjZSkgPT4ge1xuICAgICAgbGV0IHJhbmRvbUNvb3JkcyA9IFt0aGlzLnJhbmRvbUludCgxMCksIHRoaXMucmFuZG9tSW50KDEwKV07XG4gICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5yYW5kb21JbnQoMikgPyAnaCcgOiAndic7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5nYW1lYm9hcmQuYnVpbGRTaGlwKHBpZWNlKTtcbiAgICAgIHdoaWxlICh0aGlzLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCByYW5kb21Db29yZHMsIGRpcmVjdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICAgIHJhbmRvbUNvb3JkcyA9IFt0aGlzLnJhbmRvbUludCgxMCksIHRoaXMucmFuZG9tSW50KDEwKV07XG4gICAgICAgIGRpcmVjdGlvbiA9IHRoaXMucmFuZG9tSW50KDIpID8gJ2gnIDogJ3YnO1xuICAgICAgfVxuICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VQaWVjZShzaGlwLCByYW5kb21Db29yZHMsIGRpcmVjdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICByYW5kb21BdHRhY2sob3Bwb25lbnQpIHtcbiAgICBsZXQgcmFuZG9tQ29vcmRzID0gW3RoaXMucmFuZG9tSW50KDEwKSwgdGhpcy5yYW5kb21JbnQoMTApXTtcbiAgICB3aGlsZSAodGhpcy5jaGVja1ZhbGlkQXR0YWNrKG9wcG9uZW50LCByYW5kb21Db29yZHMpID09PSBmYWxzZSkge1xuICAgICAgcmFuZG9tQ29vcmRzID0gW3RoaXMucmFuZG9tSW50KDEwKSwgdGhpcy5yYW5kb21JbnQoMTApXTtcbiAgICB9XG4gICAgdGhpcy5hdHRhY2sob3Bwb25lbnQsIHJhbmRvbUNvb3Jkcyk7XG4gICAgcmV0dXJuIHJhbmRvbUNvb3JkcztcbiAgfVxufVxuXG5leHBvcnQgeyBDb21wdXRlciB9O1xuXG4vLyBjb25zdCBjb21wID0gbmV3IENvbXB1dGVyKCk7XG4vLyBjb25zb2xlLmxvZyhjb21wLnBpZWNlcykiLCJjb25zdCBpbmZvQm94ID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBzZWN0aW9uLmNsYXNzTmFtZSA9ICdpbmZvLWJveCc7XG4gIHRleHQuY2xhc3NOYW1lID0gJ2luZm8tdGV4dCc7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIHJldHVybiBzZWN0aW9uO1xufTtcblxuY29uc3Qgcm90YXRlU2hpcEJ0biA9ICgpID0+IHtcbiAgY29uc3QgaW5mb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWJveCcpO1xuICBjb25zdCByb3RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm90YXRlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdyb3RhdGUtY29udGFpbmVyJztcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJvdGF0ZUJ1dHRvbi5jbGFzc05hbWUgPSAncm90YXRlLXNoaXAnO1xuICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnUm90YXRlIFNoaXAnO1xuICBjb25zdCByb3RhdGVEaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHJvdGF0ZURpcmVjdGlvbi5jbGFzc05hbWUgPSAncm90YXRlLWRpcmVjdGlvbic7XG4gIHJvdGF0ZURpcmVjdGlvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgcm90YXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZUJ1dHRvbik7XG4gIHJvdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVEaXJlY3Rpb24pO1xuICBpbmZvQm94LmFwcGVuZENoaWxkKHJvdGF0ZUNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBib2FyZFJvdyA9ICgpID0+IHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvdy5jbGFzc05hbWUgPSAncm93JztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29sLmNsYXNzTmFtZSA9ICdjb2wnO1xuICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpO1xuICB9XG4gIHJldHVybiByb3c7XG59O1xuXG5jb25zdCBib2FyZEdyaWQgPSAoY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgYCR7Y2xhc3NOYW1lfS1ncmlkYCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gYm9hcmRSb3coKTtcbiAgICBncmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCBib2FyZFNlY3Rpb24gPSAodGl0bGUsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBib2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYm9hcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJywgYCR7Y2xhc3NOYW1lfS1ib2FyZGApO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkVGl0bGUpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkR3JpZChjbGFzc05hbWUpKTtcbiAgcmV0dXJuIHNlY3Rpb247XG59O1xuXG5jb25zdCBib2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdib2FyZC13cmFwcGVyJztcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChib2FyZFNlY3Rpb24oJ1lvdXIgQm9hcmQnLCAncGxheWVyJykpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJvYXJkU2VjdGlvbignRW5lbXkgQm9hcmQnLCAnY29tcHV0ZXInKSk7XG4gIHJldHVybiB3cmFwcGVyO1xufTtcblxuY29uc3QgYWRkQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGluZm9Cb3goKSk7XG4gIHJvdGF0ZVNoaXBCdG4oKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChib2FyZCgpKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBhZGRCb2FyZCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5jb25zdCBkaXNwbGF5U2hpcHMgPSAoc2hpcHMsIG5hbWUpID0+IHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuY29vcmRzLmZvckVhY2goKHNoaXBDb29yZCkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gc2hpcENvb3JkWzBdO1xuICAgICAgY29uc3QgY29sID0gc2hpcENvb3JkWzFdO1xuICAgICAgY29uc3QgY29vcmRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfS1ncmlkIDpudGgtY2hpbGQoJHtyb3cgKyAxfSkgOm50aC1jaGlsZCgke2NvbCArIDF9KWApO1xuICAgICAgY29vcmRCb3guY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQbGF5ZXJTaGlwID0gKHNoaXBDb29yZHMpID0+IHtcbiAgc2hpcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGNvb3JkWzBdO1xuICAgIGNvbnN0IGNvbCA9IGNvb3JkWzFdO1xuICAgIGNvbnN0IGNvb3JkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1ncmlkIDpudGgtY2hpbGQoJHtyb3cgKyAxfSkgOm50aC1jaGlsZCgke2NvbCArIDF9KWApO1xuICAgIGNvb3JkQm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBjb29yZEJveC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZUluZm9Cb3ggPSAodGV4dCkgPT4ge1xuICBjb25zdCBpbmZvQm94VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLXRleHQnKTtcbiAgaW5mb0JveFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xufTtcblxuY29uc3QgYWRkTmV3R2FtZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdHYW1lQnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCBOZXcgR2FtZSc7XG4gIG5ld0dhbWVCdXR0b24uY2xhc3NOYW1lID0gJ25ldy1nYW1lJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tYm94JykuYXBwZW5kQ2hpbGQobmV3R2FtZUJ1dHRvbik7XG4gIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVSb3RhdGVTaGlwID0gKCkgPT4ge1xuICBjb25zdCByb3RhdGVEaXJlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1kaXJlY3Rpb24nKTtcbiAgKHJvdGF0ZURpcmVjdGlvblRleHQudGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsJykgPyByb3RhdGVEaXJlY3Rpb25UZXh0LnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJyA6IHJvdGF0ZURpcmVjdGlvblRleHQudGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG59O1xuXG5jb25zdCBnZXREaXJlY3Rpb25WYWx1ZSA9ICgpID0+IHtcbiAgbGV0IGRpcmVjdGlvbjtcbiAgY29uc3Qgcm90YXRlRGlyZWN0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtZGlyZWN0aW9uJyk7XG4gIHJvdGF0ZURpcmVjdGlvblRleHQudGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsJyA/IGRpcmVjdGlvbiA9ICdoJyA6IGRpcmVjdGlvbiA9ICd2JztcbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn07XG5cbmNvbnN0IGFkZFJvdGF0ZVNoaXBMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1zaGlwJyk7XG4gIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdG9nZ2xlUm90YXRlU2hpcCgpOyB9KTtcbn07XG5cbmNvbnN0IGNhbGNIb3ZlclNoaXAgPSAobGVuZ3RoLCBncmlkLCByb3csIGNvbCwgcm93TnVtLCBjb2xOdW0pID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBbY29sXTtcbiAgY29uc3QgZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uVmFsdWUoKTtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2gnKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbE51bSArIGkgPCAxMCkgeyBlbGVtZW50cy5wdXNoKHJvdy5jaGlsZE5vZGVzW2NvbE51bSArIGldKTsgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocm93TnVtICsgaSA8IDEwKSB7IGVsZW1lbnRzLnB1c2goZ3JpZC5jaGlsZE5vZGVzW3Jvd051bSArIGldLmNoaWxkTm9kZXNbY29sTnVtXSk7IH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuY29uc3QgZW5hYmxlR3JpZEhvdmVyID0gKGdyaWQsIHNoaXBMZW5ndGgpID0+IHtcbiAgZ3JpZC5jaGlsZE5vZGVzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgIHJvdy5jaGlsZE5vZGVzLmZvckVhY2goKGNvbCwgaikgPT4ge1xuICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBjYWxjSG92ZXJTaGlwKHNoaXBMZW5ndGgsIGdyaWQsIHJvdywgY29sLCBpLCBqKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gY2FsY0hvdmVyU2hpcChzaGlwTGVuZ3RoLCBncmlkLCByb3csIGNvbCwgaSwgaik7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCByZXNldFBsYXllckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbiAgY29uc3QgZmluYWxCb2FyZCA9IGJvYXJkLmNsb25lTm9kZSh0cnVlKTtcbiAgYm9hcmQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZmluYWxCb2FyZCwgYm9hcmQpO1xufTtcblxuY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKHBsYXllciwgc2hpcExlbmd0aCkgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ncmlkJyk7XG4gIGNvbnN0IHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJ1aWxkU2hpcChzaGlwTGVuZ3RoKTtcblxuICB1cGRhdGVJbmZvQm94KCdDbGljayBvbiB5b3VyIGJvYXJkIHRvIHBsYWNlIHlvdXIgc2hpcCcpO1xuICBlbmFibGVHcmlkSG92ZXIoZ3JpZCwgc2hpcExlbmd0aCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgZ3JpZC5jaGlsZE5vZGVzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgcm93LmNoaWxkTm9kZXMuZm9yRWFjaCgoY29sLCBqKSA9PiB7XG4gICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb25WYWx1ZSgpO1xuICAgICAgICAgIGlmIChwbGF5ZXIuY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIFtpLCBqXSwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcENvb3JkcyA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VQaWVjZShzaGlwLCBbaSwgal0sIGRpcmVjdGlvbik7XG4gICAgICAgICAgICBkaXNwbGF5UGxheWVyU2hpcChzaGlwQ29vcmRzKTtcbiAgICAgICAgICAgIHJlc2V0UGxheWVyQm9hcmQoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0UGxheWVyU2hpcHMgPSBhc3luYyAocGxheWVyKSA9PiB7XG4gIGFkZFJvdGF0ZVNoaXBMaXN0ZW5lcigpO1xuICBhd2FpdCBwbGFjZVBsYXllclNoaXAocGxheWVyLCA1KTtcbiAgYXdhaXQgcGxhY2VQbGF5ZXJTaGlwKHBsYXllciwgNCk7XG4gIGF3YWl0IHBsYWNlUGxheWVyU2hpcChwbGF5ZXIsIDMpO1xuICBhd2FpdCBwbGFjZVBsYXllclNoaXAocGxheWVyLCAzKTtcbiAgYXdhaXQgcGxhY2VQbGF5ZXJTaGlwKHBsYXllciwgMik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtY29udGFpbmVyJykucmVtb3ZlKCk7XG4gIHVwZGF0ZUluZm9Cb3goJ0NsaWNrIGEgY2VsbCBvbiB0aGUgRW5lbWllcyBib2FyZCB0byBhdHRhY2shJyk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuY29uc3QgY2hlY2tFbmRHYW1lID0gKHBsYXllciwgY29tcHV0ZXIpID0+IChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFN1bmsoKSB8fCBjb21wdXRlci5nYW1lYm9hcmQuYWxsU3VuaygpKTtcblxuY29uc3QgZGV0ZXJtaW5lV2lubmVyID0gKHBsYXllcikgPT4ge1xuICBpZiAocGxheWVyLmdhbWVib2FyZC5hbGxTdW5rKCkpIHsgcmV0dXJuICdZb3UgTG9zdCEhISc7IH1cbiAgcmV0dXJuICdZb3UgV29uISEhJztcbn07XG5cbmNvbnN0IHVwZGF0ZUdhbWVHcmlkID0gKGdhbWVib2FyZCwgbmFtZSwgY29vcmRzKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZENlbGwgPSBnYW1lYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dO1xuICBjb25zdCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9LWdyaWQgOm50aC1jaGlsZCgke2Nvb3Jkc1swXSArIDF9KSA6bnRoLWNoaWxkKCR7Y29vcmRzWzFdICsgMX0pYCk7XG4gIGlmIChnYW1lYm9hcmRDZWxsID09PSAnWCcpIHsgZ3JpZENlbGwuaW5uZXJIVE1MID0gJ1gnOyB9XG4gIGlmIChnYW1lYm9hcmRDZWxsID09PSAnLScpIHsgZ3JpZENlbGwuaW5uZXJIVE1MID0gJ08nOyB9XG4gIGdyaWRDZWxsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIHJldHVybiBncmlkQ2VsbC5pbm5lckhUTUw7XG59O1xuXG5jb25zdCBkaXNwbGF5RW5lbXlTaGlwSWZTdW5rID0gKGNvbXB1dGVyU2hpcHMpID0+IHtcbiAgY29tcHV0ZXJTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAub2JqZWN0LnN1bmspIHtcbiAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goKHNoaXBDb29yZCkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBzaGlwQ29vcmRbMF07XG4gICAgICAgIGNvbnN0IGNvbCA9IHNoaXBDb29yZFsxXTtcbiAgICAgICAgY29uc3QgY29vcmRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ3JpZCA6bnRoLWNoaWxkKCR7cm93ICsgMX0pIDpudGgtY2hpbGQoJHtjb2wgKyAxfSlgKTtcbiAgICAgICAgY29vcmRCb3guY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IG1ha2VDZWxsc05vdENsaWNrYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJHcmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItZ3JpZCAuY29sJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJHcmlkQ2VsbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb21wdXRlckdyaWRDZWxsc1tpXS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG59O1xuXG5jb25zdCBmaW5kU2hpcEluZGV4ID0gKHBsYXllciwgc2VhcmNoQ29vcmRzKSA9PiB7XG4gIGxldCBpbmRleDtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzO1xuICBwbGF5ZXJTaGlwcy5mb3JFYWNoKChzaGlwLCBpKSA9PiB7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY29vcmQpO1xuICAgICAgaWYgKGNvb3JkU3RyaW5nLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KHNlYXJjaENvb3JkcykpKSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbmNvbnN0IHVwZGF0ZUVuZW15QXR0YWNrSW5mbyA9IChwbGF5ZXIsIGNvbXB1dGVyQXR0YWNrQ29vcmRzLCBjb21wQXR0YWNrUmVzdWx0KSA9PiB7XG4gIGlmIChjb21wQXR0YWNrUmVzdWx0ID09PSAnWCcpIHtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBmaW5kU2hpcEluZGV4KHBsYXllciwgY29tcHV0ZXJBdHRhY2tDb29yZHMpO1xuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzW3NoaXBJbmRleF0ub2JqZWN0LnN1bmspIHtcbiAgICAgIHVwZGF0ZUluZm9Cb3goYFRoZSBlbmVteSBzdW5rIHlvdXIgJHtwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBOYW1lKHNoaXBJbmRleCl9IWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVJbmZvQm94KGBUaGUgZW5lbXkgaGl0IHlvdXIgJHtwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBOYW1lKHNoaXBJbmRleCl9IWApO1xuICAgIH1cbiAgfSBlbHNlIHsgdXBkYXRlSW5mb0JveCgnVGhlIGVuZW15IG1pc3NlZCB0aGVpciBzaG90IScpOyB9XG59O1xuXG5jb25zdCBwbGF5Um91bmQgPSAoY2VsbCwgcGxheWVyLCBjb21wdXRlcikgPT4ge1xuICBjb25zdCByb3cgPSBjZWxsLnBhcmVudE5vZGU7XG4gIGNvbnN0IHJvd0luZGV4ID0gQXJyYXkuZnJvbShyb3cucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihyb3cpO1xuICBjb25zdCBjb2xJbmRleCA9IEFycmF5LmZyb20oY2VsbC5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKGNlbGwpO1xuICBjb25zdCBwbGF5ZXJDb29yZHMgPSBbcm93SW5kZXgsIGNvbEluZGV4XTtcblxuICBwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyLCBbcm93SW5kZXgsIGNvbEluZGV4XSk7XG4gIHVwZGF0ZUdhbWVHcmlkKGNvbXB1dGVyLmdhbWVib2FyZC5ib2FyZCwgJ2NvbXB1dGVyJywgcGxheWVyQ29vcmRzKTtcbiAgZGlzcGxheUVuZW15U2hpcElmU3Vuayhjb21wdXRlci5nYW1lYm9hcmQuc2hpcHMpO1xuXG4gIGNvbnN0IGNvbXB1dGVyQ29vcmRzID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllcik7XG4gIGNvbnN0IGNvbXBBdHRhY2tSZXN1bHQgPSB1cGRhdGVHYW1lR3JpZChwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkLCAncGxheWVyJywgY29tcHV0ZXJDb29yZHMpO1xuICB1cGRhdGVFbmVteUF0dGFja0luZm8ocGxheWVyLCBjb21wdXRlckNvb3JkcywgY29tcEF0dGFja1Jlc3VsdCk7XG5cbiAgaWYgKGNoZWNrRW5kR2FtZShwbGF5ZXIsIGNvbXB1dGVyKSkge1xuICAgIHVwZGF0ZUluZm9Cb3goZGV0ZXJtaW5lV2lubmVyKHBsYXllcikpO1xuICAgIGRpc3BsYXlTaGlwcyhjb21wdXRlci5nYW1lYm9hcmQuc2hpcHMsICdjb21wdXRlcicpO1xuICAgIG1ha2VDZWxsc05vdENsaWNrYWJsZSgpO1xuICAgIGFkZE5ld0dhbWVCdXR0b24oKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTGlzdG5lcnNUb0NvbXB1dGVyQm9hcmQgPSAocGxheWVyLCBjb21wdXRlcikgPT4ge1xuICBjb25zdCByZWZlcmVuY2VzID0gW107XG4gIGNvbnN0IGNvbXB1dGVyR3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdyaWQgLmNvbCcpO1xuICBjb21wdXRlckdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29uc3QgbXlSZWZlcmVuY2UgPSAoKSA9PiBwbGF5Um91bmQoY2VsbCwgcGxheWVyLCBjb21wdXRlcik7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15UmVmZXJlbmNlKTtcbiAgICByZWZlcmVuY2VzLnB1c2gobXlSZWZlcmVuY2UpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4geyBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7IH0pO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHsgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpOyB9KTtcbiAgfSk7XG4gIHJldHVybiByZWZlcmVuY2VzO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVNoaXBzLCB1cGRhdGVJbmZvQm94LCBhZGRMaXN0bmVyc1RvQ29tcHV0ZXJCb2FyZCwgZ2V0UGxheWVyU2hpcHMgfTtcbiIsImltcG9ydCB7IENvbXB1dGVyIH0gZnJvbSBcIi4vY29tcHV0ZXIuanNcIjtcbmltcG9ydCB7IGFkZExpc3RuZXJzVG9Db21wdXRlckJvYXJkLCBkaXNwbGF5U2hpcHMsIGdldFBsYXllclNoaXBzLCB1cGRhdGVJbmZvQm94IH0gZnJvbSBcIi4vZG9tSW50ZXJhY3Rpb24uanNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBDb21wdXRlcigpO1xuXG4gIGNvbnN0IHBsYXkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29tcHV0ZXIucmFuZG9tUGxhY2VtZW50KCk7XG4gICAgLy8gdG8gYmUgcmVwbGFjZWQgYnkgdXNlciBhY3R1YWxseSBwbGFjaW5nIHNoaXBzIHRocm91Z2ggVUlcbiAgICAvLyBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUGllY2UocGxheWVyLmdhbWVib2FyZC5idWlsZFNoaXAoNSksIFswLCAwXSwgJ2gnKTtcbiAgICAvLyBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUGllY2UocGxheWVyLmdhbWVib2FyZC5idWlsZFNoaXAoNCksIFswLCA5XSwgJ3YnKTtcbiAgICAvLyBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUGllY2UocGxheWVyLmdhbWVib2FyZC5idWlsZFNoaXAoMyksIFszLCAwXSwgJ3YnKTtcbiAgICAvLyBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUGllY2UocGxheWVyLmdhbWVib2FyZC5idWlsZFNoaXAoMyksIFszLCAzXSwgJ3YnKTtcbiAgICAvLyBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlUGllY2UocGxheWVyLmdhbWVib2FyZC5idWlsZFNoaXAoMiksIFs3LCA1XSwgJ2gnKTtcbiAgICAvLyBkaXNwbGF5U2hpcHMocGxheWVyLmdhbWVib2FyZC5zaGlwcywgJ3BsYXllcicpO1xuICAgIGF3YWl0IGdldFBsYXllclNoaXBzKHBsYXllcik7XG5cbiAgICB1cGRhdGVJbmZvQm94KCdDbGljayBhIGNlbGwgb24gdGhlIEVuZW1pZXMgYm9hcmQgdG8gYXR0YWNrIScpO1xuICAgIGFkZExpc3RuZXJzVG9Db21wdXRlckJvYXJkKHBsYXllciwgY29tcHV0ZXIpO1xuICB9O1xuICByZXR1cm4geyBwbGF5ZXIsIGNvbXB1dGVyLCBwbGF5IH07XG59O1xuXG5leHBvcnQgeyBnYW1lTG9vcCB9O1xuXG4vLyBjb25zdCBuZXdnYW1lID0gZ2FtZUxvb3AoKTtcbi8vIG5ld2dhbWUucGxheSgpOyIsImltcG9ydCB7IGdhbWVCb2FyZEZhY3RvcnkgfSBmcm9tIFwiLi9ib2FyZC5qc1wiO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcblxuICAgIHRoaXMuYXR0YWNrID0gKG9wcG9uZW50LCBhdHRhY2tDb29yZHMpID0+IHsgb3Bwb25lbnQuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrQ29vcmRzKTsgfTtcbiAgICB0aGlzLnBsYWNlU2hpcCA9IChzaGlwLCBzdGFydENvb3JkaW5hdGUsIGRpcmVjdGlvbikgPT4geyBcbiAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlUGllY2Uoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24pO1xuICAgIH07XG4gICAgdGhpcy5waWVjZXMgPSBbNSwgNCwgMywgMywgMl07XG4gIH1cblxuICBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBnYW1lQm9hcmQgPSB0aGlzLmdhbWVib2FyZC5ib2FyZDtcbiAgICBpZiAoc3RhcnRDb29yZGluYXRlWzBdID4gOSB8fCBzdGFydENvb3JkaW5hdGVbMV0gPiA5IHx8IGdhbWVCb2FyZFtzdGFydENvb3JkaW5hdGVbMF1dW3N0YXJ0Q29vcmRpbmF0ZVsxXV0gIT09ICcnKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aCAtIDE7XG4gICAgbGV0IHNoaXBMZW5ndGhJbmNyZW1lbnRvciA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNoaXBMZW5ndGhJbmNyZW1lbnRvciArPSAxO1xuICAgICAgbGV0IG5leHRDb29yZCA9ICcnO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgIG5leHRDb29yZCA9IFtzdGFydENvb3JkaW5hdGVbMF0sIChzdGFydENvb3JkaW5hdGVbMV0gKyBzaGlwTGVuZ3RoSW5jcmVtZW50b3IpXTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndicpIHtcbiAgICAgICAgbmV4dENvb3JkID0gW3N0YXJ0Q29vcmRpbmF0ZVswXSArIHNoaXBMZW5ndGhJbmNyZW1lbnRvciwgc3RhcnRDb29yZGluYXRlWzFdXTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q29vcmRbMF0gPiA5IHx8IG5leHRDb29yZFsxXSA+IDkgfHwgZ2FtZUJvYXJkW25leHRDb29yZFswXV1bbmV4dENvb3JkWzFdXSAhPT0gJycpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBoaXRzID0gMCwgc3VuayA9IGZhbHNlKSA9PiB7XG4gIGZ1bmN0aW9uIGhpdCgpIHsgdGhpcy5oaXRzICs9IDE7IH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7IHRoaXMuc3VuayA9ICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKTsgfVxuXG4gIHJldHVybiB7IGxlbmd0aCwgaGl0cywgc3VuaywgaGl0LCBpc1N1bmsgfVxufTtcblxuZXhwb3J0IHsgc2hpcEZhY3RvcnkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGFkZEJvYXJkIH0gZnJvbSAnLi9kb21BZGRpdGlvbnMuanMnO1xuaW1wb3J0IHsgZ2FtZUxvb3AgfSBmcm9tICcuL2dhbWUuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnNvbGUubG9nKCdoZWxsbycpO1xuYWRkQm9hcmQoKTtcbmNvbnN0IG5ld2dhbWUgPSBnYW1lTG9vcCgpO1xubmV3Z2FtZS5wbGF5KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9