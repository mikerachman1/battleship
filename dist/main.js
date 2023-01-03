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
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\n  color: red;\n}\n\n.grid,\n.info-box {\n  border: 1px solid red;\n}\n\n.grid {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n}\n\n.row {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.col {\n  border: 1px solid black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.ship {\n  background-color: rgb(255, 0, 0);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["h1 {\n  color: red;\n}\n\n.grid,\n.info-box {\n  border: 1px solid red;\n}\n\n.grid {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n}\n\n.row {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.col {\n  border: 1px solid black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.ship {\n  background-color: rgb(255, 0, 0);\n}"],"sourceRoot":""}]);
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

// const rotateShipBtn = () => {
//   const infoBox = document.querySelector('.info-box');
//   const rotateButton = document.createElement('button');
//   rotateButton.className = 'rotate-ship';
//   rotateButton.textContent = 'Rotate Ship';
//   infoBox.appendChild(rotateButton);
// };

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
/* harmony export */   "updateInfoBox": () => (/* binding */ updateInfoBox)
/* harmony export */ });
const displayShips = (playerShips, name) => {
  playerShips.forEach((ship) => {
    ship.coords.forEach((shipCoord) => {
      const row = shipCoord[0];
      const col = shipCoord[1];
      const coordBox = document.querySelector(`.${name}-grid :nth-child(${row + 1}) :nth-child(${col + 1})`);
      coordBox.classList.add('ship');
    });
  });
};

const updateInfoBox = (text) => {
  const infoBoxText = document.querySelector('.info-text');
  infoBoxText.textContent = text;
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
  if (gameboardCell === '-') { gridCell.innerHTML = '/'; }
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

  const play = () => {
    computer.randomPlacement();
    // to be replaced by user actually placing ships through UI
    player.gameboard.placePiece(player.gameboard.buildShip(5), [0, 0], 'h');
    player.gameboard.placePiece(player.gameboard.buildShip(4), [0, 9], 'v');
    player.gameboard.placePiece(player.gameboard.buildShip(3), [3, 0], 'v');
    player.gameboard.placePiece(player.gameboard.buildShip(3), [3, 3], 'v');
    player.gameboard.placePiece(player.gameboard.buildShip(2), [7, 5], 'h');

    (0,_domInteraction_js__WEBPACK_IMPORTED_MODULE_1__.displayShips)(player.gameboard.ships, 'player');
    (0,_domInteraction_js__WEBPACK_IMPORTED_MODULE_1__.updateInfoBox)('Click a cell on the Enemies board to attack!')
    ;(0,_domInteraction_js__WEBPACK_IMPORTED_MODULE_1__.addListnersToComputerBoard)(player, computer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbUFkZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbUludGVyYWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImgxIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ncmlkLFxcbi5pbmZvLWJveCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5yb3cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29sIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZ3JpZCxcXG4uaW5mby1ib3gge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmNvbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyAnJyBmb3IgZW1wdHkgc3BhY2UsIE8gZm9yIHNoaXAsIFggZm9yIHNoaXAgaGl0LCAtIGZvciBtaXNzZWQgaGl0XG5cbmltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbCgnJykpO1xuICBjb25zdCBtaXNzZXMgPSBbXTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGJ1aWxkU2hpcCA9IChsZW5ndGgpID0+IHNoaXBGYWN0b3J5KGxlbmd0aCk7XG5cbiAgY29uc3QgcGxhY2VQaWVjZSA9IChzaGlwLCBzdGFydENvb3JkaW5hdGUsIGRpcmVjdGlvbiA9ICdoJykgPT4ge1xuICAgIGJvYXJkW3N0YXJ0Q29vcmRpbmF0ZVswXV1bc3RhcnRDb29yZGluYXRlWzFdXSA9ICdPJztcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGggLSAxO1xuICAgIGxldCBzaGlwTGVuZ3RoSW5jcmVtZW50b3IgPSAwO1xuICAgIGNvbnN0IHNoaXBDb29yZHMgPSBbc3RhcnRDb29yZGluYXRlXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2hpcExlbmd0aEluY3JlbWVudG9yICs9IDE7XG4gICAgICBsZXQgbmV4dENvb3JkID0gJyc7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaCcpIHtcbiAgICAgICAgbmV4dENvb3JkID0gW3N0YXJ0Q29vcmRpbmF0ZVswXSwgKHN0YXJ0Q29vcmRpbmF0ZVsxXSArIHNoaXBMZW5ndGhJbmNyZW1lbnRvcildO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2Jykge1xuICAgICAgICBuZXh0Q29vcmQgPSBbc3RhcnRDb29yZGluYXRlWzBdICsgc2hpcExlbmd0aEluY3JlbWVudG9yLCBzdGFydENvb3JkaW5hdGVbMV1dO1xuICAgICAgfVxuICAgICAgYm9hcmRbbmV4dENvb3JkWzBdXVtuZXh0Q29vcmRbMV1dID0gJ08nO1xuICAgICAgc2hpcENvb3Jkcy5wdXNoKG5leHRDb29yZCk7XG4gICAgfVxuICAgIHNoaXBzLnB1c2goeyBvYmplY3Q6IHNoaXAsIGNvb3Jkczogc2hpcENvb3JkcyB9KTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGF0dGFja0Nvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoYm9hcmRbYXR0YWNrQ29vcmRpbmF0ZVswXV1bYXR0YWNrQ29vcmRpbmF0ZVsxXV0gIT09ICdPJykge1xuICAgICAgbWlzc2VzLnB1c2goYXR0YWNrQ29vcmRpbmF0ZSk7XG4gICAgICBib2FyZFthdHRhY2tDb29yZGluYXRlWzBdXVthdHRhY2tDb29yZGluYXRlWzFdXSA9ICctJztcbiAgICB9IGVsc2UgaWYgKGJvYXJkW2F0dGFja0Nvb3JkaW5hdGVbMF1dW2F0dGFja0Nvb3JkaW5hdGVbMV1dID09PSAnTycpIHtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICBjb25zdCBjb29yZFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNvb3JkKVxuICAgICAgICAgIGlmIChjb29yZFN0cmluZy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShhdHRhY2tDb29yZGluYXRlKSkpIHtcbiAgICAgICAgICAgIHNoaXAub2JqZWN0LmhpdCgpO1xuICAgICAgICAgICAgc2hpcC5vYmplY3QuaXNTdW5rKCk7XG4gICAgICAgICAgICBib2FyZFthdHRhY2tDb29yZGluYXRlWzBdXVthdHRhY2tDb29yZGluYXRlWzFdXSA9ICdYJztcbiAgICAgICAgICAgIGhpdHMucHVzaChhdHRhY2tDb29yZGluYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBjb25zdCBzdW5rTG9nID0gW107XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc3Vua0xvZy5wdXNoKHNoaXAub2JqZWN0LnN1bmspO1xuICAgIH0pO1xuICAgIHJldHVybiAhc3Vua0xvZy5pbmNsdWRlcyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYm9hcmQsIG1pc3NlcywgaGl0cywgc2hpcHMsIGJ1aWxkU2hpcCwgcGxhY2VQaWVjZSwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuayB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZUJvYXJkRmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5cbmNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmFuZG9tSW50ID0gKG1heFZhbCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4VmFsKTtcbiAgICB0aGlzLmNoZWNrVmFsaWRBdHRhY2sgPSAob3Bwb25lbnQsIGF0dGFja0Nvb3JkcykgPT4ge1xuICAgICAgY29uc3QgaGl0c0FuZE1pc3NlcyA9IG9wcG9uZW50LmdhbWVib2FyZC5oaXRzLmNvbmNhdChvcHBvbmVudC5nYW1lYm9hcmQubWlzc2VzKTtcbiAgICAgIHJldHVybiAhSlNPTi5zdHJpbmdpZnkoaGl0c0FuZE1pc3NlcykuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoYXR0YWNrQ29vcmRzKSk7XG4gICAgfTtcbiAgfVxuXG4gIHJhbmRvbVBsYWNlbWVudCgpIHtcbiAgICB0aGlzLnBpZWNlcy5mb3JFYWNoKChwaWVjZSkgPT4ge1xuICAgICAgbGV0IHJhbmRvbUNvb3JkcyA9IFt0aGlzLnJhbmRvbUludCgxMCksIHRoaXMucmFuZG9tSW50KDEwKV07XG4gICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5yYW5kb21JbnQoMikgPyAnaCcgOiAndic7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5nYW1lYm9hcmQuYnVpbGRTaGlwKHBpZWNlKTtcbiAgICAgIHdoaWxlICh0aGlzLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCByYW5kb21Db29yZHMsIGRpcmVjdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICAgIHJhbmRvbUNvb3JkcyA9IFt0aGlzLnJhbmRvbUludCgxMCksIHRoaXMucmFuZG9tSW50KDEwKV07XG4gICAgICAgIGRpcmVjdGlvbiA9IHRoaXMucmFuZG9tSW50KDIpID8gJ2gnIDogJ3YnO1xuICAgICAgfVxuICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VQaWVjZShzaGlwLCByYW5kb21Db29yZHMsIGRpcmVjdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICByYW5kb21BdHRhY2sob3Bwb25lbnQpIHtcbiAgICBsZXQgcmFuZG9tQ29vcmRzID0gW3RoaXMucmFuZG9tSW50KDEwKSwgdGhpcy5yYW5kb21JbnQoMTApXTtcbiAgICB3aGlsZSAodGhpcy5jaGVja1ZhbGlkQXR0YWNrKG9wcG9uZW50LCByYW5kb21Db29yZHMpID09PSBmYWxzZSkge1xuICAgICAgcmFuZG9tQ29vcmRzID0gW3RoaXMucmFuZG9tSW50KDEwKSwgdGhpcy5yYW5kb21JbnQoMTApXTtcbiAgICB9XG4gICAgdGhpcy5hdHRhY2sob3Bwb25lbnQsIHJhbmRvbUNvb3Jkcyk7XG4gICAgcmV0dXJuIHJhbmRvbUNvb3JkcztcbiAgfVxufVxuXG5leHBvcnQgeyBDb21wdXRlciB9O1xuXG4vLyBjb25zdCBjb21wID0gbmV3IENvbXB1dGVyKCk7XG4vLyBjb25zb2xlLmxvZyhjb21wLnBpZWNlcykiLCJjb25zdCBpbmZvQm94ID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBzZWN0aW9uLmNsYXNzTmFtZSA9ICdpbmZvLWJveCc7XG4gIHRleHQuY2xhc3NOYW1lID0gJ2luZm8tdGV4dCc7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIHJldHVybiBzZWN0aW9uO1xufTtcblxuLy8gY29uc3Qgcm90YXRlU2hpcEJ0biA9ICgpID0+IHtcbi8vICAgY29uc3QgaW5mb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWJveCcpO1xuLy8gICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vICAgcm90YXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdyb3RhdGUtc2hpcCc7XG4vLyAgIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSb3RhdGUgU2hpcCc7XG4vLyAgIGluZm9Cb3guYXBwZW5kQ2hpbGQocm90YXRlQnV0dG9uKTtcbi8vIH07XG5cbmNvbnN0IGJvYXJkUm93ID0gKCkgPT4ge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb2wuY2xhc3NOYW1lID0gJ2NvbCc7XG4gICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cbiAgcmV0dXJuIHJvdztcbn07XG5cbmNvbnN0IGJvYXJkR3JpZCA9IChjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnLCBgJHtjbGFzc05hbWV9LWdyaWRgKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBib2FyZFJvdygpO1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICByZXR1cm4gZ3JpZDtcbn07XG5cbmNvbnN0IGJvYXJkU2VjdGlvbiA9ICh0aXRsZSwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGJvYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBib2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYm9hcmQnLCBgJHtjbGFzc05hbWV9LWJvYXJkYCk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYm9hcmRUaXRsZSk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYm9hcmRHcmlkKGNsYXNzTmFtZSkpO1xuICByZXR1cm4gc2VjdGlvbjtcbn07XG5cbmNvbnN0IGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdyYXBwZXIuY2xhc3NOYW1lID0gJ2JvYXJkLXdyYXBwZXInO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJvYXJkU2VjdGlvbignWW91ciBCb2FyZCcsICdwbGF5ZXInKSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYm9hcmRTZWN0aW9uKCdFbmVteSBCb2FyZCcsICdjb21wdXRlcicpKTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59O1xuXG5jb25zdCBhZGRCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW5mb0JveCgpKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChib2FyZCgpKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBhZGRCb2FyZCB9O1xuIiwiY29uc3QgZGlzcGxheVNoaXBzID0gKHBsYXllclNoaXBzLCBuYW1lKSA9PiB7XG4gIHBsYXllclNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKChzaGlwQ29vcmQpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHNoaXBDb29yZFswXTtcbiAgICAgIGNvbnN0IGNvbCA9IHNoaXBDb29yZFsxXTtcbiAgICAgIGNvbnN0IGNvb3JkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0tZ3JpZCA6bnRoLWNoaWxkKCR7cm93ICsgMX0pIDpudGgtY2hpbGQoJHtjb2wgKyAxfSlgKTtcbiAgICAgIGNvb3JkQm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVJbmZvQm94ID0gKHRleHQpID0+IHtcbiAgY29uc3QgaW5mb0JveFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby10ZXh0Jyk7XG4gIGluZm9Cb3hUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5jb25zdCBjaGVja0VuZEdhbWUgPSAocGxheWVyLCBjb21wdXRlcikgPT4gKHBsYXllci5nYW1lYm9hcmQuYWxsU3VuaygpIHx8IGNvbXB1dGVyLmdhbWVib2FyZC5hbGxTdW5rKCkpO1xuXG5jb25zdCBkZXRlcm1pbmVXaW5uZXIgPSAocGxheWVyKSA9PiB7XG4gIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFN1bmsoKSkgeyByZXR1cm4gJ1lvdSBMb3N0ISEhJzsgfVxuICByZXR1cm4gJ1lvdSBXb24hISEnO1xufTtcblxuY29uc3QgdXBkYXRlR2FtZUdyaWQgPSAoZ2FtZWJvYXJkLCBuYW1lLCBjb29yZHMpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkQ2VsbCA9IGdhbWVib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV07XG4gIGNvbnN0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0tZ3JpZCA6bnRoLWNoaWxkKCR7Y29vcmRzWzBdICsgMX0pIDpudGgtY2hpbGQoJHtjb29yZHNbMV0gKyAxfSlgKTtcbiAgaWYgKGdhbWVib2FyZENlbGwgPT09ICdYJykgeyBncmlkQ2VsbC5pbm5lckhUTUwgPSAnWCc7IH1cbiAgaWYgKGdhbWVib2FyZENlbGwgPT09ICctJykgeyBncmlkQ2VsbC5pbm5lckhUTUwgPSAnLyc7IH1cbiAgZ3JpZENlbGwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbn07XG5cbmNvbnN0IGRpc3BsYXlFbmVteVNoaXBJZlN1bmsgPSAoY29tcHV0ZXJTaGlwcykgPT4ge1xuICBjb21wdXRlclNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5vYmplY3Quc3Vuaykge1xuICAgICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoc2hpcENvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHNoaXBDb29yZFswXTtcbiAgICAgICAgY29uc3QgY29sID0gc2hpcENvb3JkWzFdO1xuICAgICAgICBjb25zdCBjb29yZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1ncmlkIDpudGgtY2hpbGQoJHtyb3cgKyAxfSkgOm50aC1jaGlsZCgke2NvbCArIDF9KWApO1xuICAgICAgICBjb29yZEJveC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbWFrZUNlbGxzTm90Q2xpY2thYmxlID0gKCkgPT4ge1xuICBjb25zdCBjb21wdXRlckdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1ncmlkIC5jb2wnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlckdyaWRDZWxscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbXB1dGVyR3JpZENlbGxzW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIH1cbn07XG5cbmNvbnN0IHBsYXlSb3VuZCA9IChjZWxsLCBwbGF5ZXIsIGNvbXB1dGVyKSA9PiB7XG4gIGNvbnN0IHJvdyA9IGNlbGwucGFyZW50Tm9kZTtcbiAgY29uc3Qgcm93SW5kZXggPSBBcnJheS5mcm9tKHJvdy5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKHJvdyk7XG4gIGNvbnN0IGNvbEluZGV4ID0gQXJyYXkuZnJvbShjZWxsLnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YoY2VsbCk7XG4gIGNvbnN0IHBsYXllckNvb3JkcyA9IFtyb3dJbmRleCwgY29sSW5kZXhdO1xuXG4gIHBsYXllci5hdHRhY2soY29tcHV0ZXIsIFtyb3dJbmRleCwgY29sSW5kZXhdKTtcbiAgdXBkYXRlR2FtZUdyaWQoY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkLCAnY29tcHV0ZXInLCBwbGF5ZXJDb29yZHMpO1xuICBkaXNwbGF5RW5lbXlTaGlwSWZTdW5rKGNvbXB1dGVyLmdhbWVib2FyZC5zaGlwcyk7XG5cbiAgY29uc3QgY29tcHV0ZXJDb29yZHMgPSBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyKTtcbiAgdXBkYXRlR2FtZUdyaWQocGxheWVyLmdhbWVib2FyZC5ib2FyZCwgJ3BsYXllcicsIGNvbXB1dGVyQ29vcmRzKTtcblxuICBpZiAoY2hlY2tFbmRHYW1lKHBsYXllciwgY29tcHV0ZXIpKSB7XG4gICAgdXBkYXRlSW5mb0JveChkZXRlcm1pbmVXaW5uZXIocGxheWVyKSk7XG4gICAgZGlzcGxheVNoaXBzKGNvbXB1dGVyLmdhbWVib2FyZC5zaGlwcywgJ2NvbXB1dGVyJyk7XG4gICAgbWFrZUNlbGxzTm90Q2xpY2thYmxlKCk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZExpc3RuZXJzVG9Db21wdXRlckJvYXJkID0gKHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgY29uc3QgcmVmZXJlbmNlcyA9IFtdO1xuICBjb25zdCBjb21wdXRlckdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1ncmlkIC5jb2wnKTtcbiAgY29tcHV0ZXJHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IG15UmVmZXJlbmNlID0gKCkgPT4gcGxheVJvdW5kKGNlbGwsIHBsYXllciwgY29tcHV0ZXIpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBteVJlZmVyZW5jZSk7XG4gICAgcmVmZXJlbmNlcy5wdXNoKG15UmVmZXJlbmNlKTtcbiAgfSk7XG4gIHJldHVybiByZWZlcmVuY2VzO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVNoaXBzLCB1cGRhdGVJbmZvQm94LCBhZGRMaXN0bmVyc1RvQ29tcHV0ZXJCb2FyZCB9O1xuIiwiaW1wb3J0IHsgQ29tcHV0ZXIgfSBmcm9tIFwiLi9jb21wdXRlci5qc1wiO1xuaW1wb3J0IHsgYWRkTGlzdG5lcnNUb0NvbXB1dGVyQm9hcmQsIGRpc3BsYXlTaGlwcywgdXBkYXRlSW5mb0JveCB9IGZyb20gXCIuL2RvbUludGVyYWN0aW9uLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcblxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcblxuICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgIGNvbXB1dGVyLnJhbmRvbVBsYWNlbWVudCgpO1xuICAgIC8vIHRvIGJlIHJlcGxhY2VkIGJ5IHVzZXIgYWN0dWFsbHkgcGxhY2luZyBzaGlwcyB0aHJvdWdoIFVJXG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDUpLCBbMCwgMF0sICdoJyk7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDQpLCBbMCwgOV0sICd2Jyk7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDMpLCBbMywgMF0sICd2Jyk7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDMpLCBbMywgM10sICd2Jyk7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVBpZWNlKHBsYXllci5nYW1lYm9hcmQuYnVpbGRTaGlwKDIpLCBbNywgNV0sICdoJyk7XG5cbiAgICBkaXNwbGF5U2hpcHMocGxheWVyLmdhbWVib2FyZC5zaGlwcywgJ3BsYXllcicpO1xuICAgIHVwZGF0ZUluZm9Cb3goJ0NsaWNrIGEgY2VsbCBvbiB0aGUgRW5lbWllcyBib2FyZCB0byBhdHRhY2shJylcbiAgICBhZGRMaXN0bmVyc1RvQ29tcHV0ZXJCb2FyZChwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgfTtcbiAgcmV0dXJuIHsgcGxheWVyLCBjb21wdXRlciwgcGxheSB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZUxvb3AgfTtcblxuLy8gY29uc3QgbmV3Z2FtZSA9IGdhbWVMb29wKCk7XG4vLyBuZXdnYW1lLnBsYXkoKTsiLCJpbXBvcnQgeyBnYW1lQm9hcmRGYWN0b3J5IH0gZnJvbSBcIi4vYm9hcmQuanNcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG5cbiAgICB0aGlzLmF0dGFjayA9IChvcHBvbmVudCwgYXR0YWNrQ29vcmRzKSA9PiB7IG9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja0Nvb3Jkcyk7IH07XG4gICAgdGhpcy5wbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24pID0+IHsgXG4gICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVBpZWNlKHNoaXAsIHN0YXJ0Q29vcmRpbmF0ZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIHRoaXMucGllY2VzID0gWzUsIDQsIDMsIDMsIDJdO1xuICB9XG5cbiAgY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIHN0YXJ0Q29vcmRpbmF0ZSwgZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgZ2FtZUJvYXJkID0gdGhpcy5nYW1lYm9hcmQuYm9hcmQ7XG4gICAgaWYgKHN0YXJ0Q29vcmRpbmF0ZVswXSA+IDkgfHwgc3RhcnRDb29yZGluYXRlWzFdID4gOSB8fCBnYW1lQm9hcmRbc3RhcnRDb29yZGluYXRlWzBdXVtzdGFydENvb3JkaW5hdGVbMV1dICE9PSAnJykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGggLSAxO1xuICAgIGxldCBzaGlwTGVuZ3RoSW5jcmVtZW50b3IgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzaGlwTGVuZ3RoSW5jcmVtZW50b3IgKz0gMTtcbiAgICAgIGxldCBuZXh0Q29vcmQgPSAnJztcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdoJykge1xuICAgICAgICBuZXh0Q29vcmQgPSBbc3RhcnRDb29yZGluYXRlWzBdLCAoc3RhcnRDb29yZGluYXRlWzFdICsgc2hpcExlbmd0aEluY3JlbWVudG9yKV07XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgIG5leHRDb29yZCA9IFtzdGFydENvb3JkaW5hdGVbMF0gKyBzaGlwTGVuZ3RoSW5jcmVtZW50b3IsIHN0YXJ0Q29vcmRpbmF0ZVsxXV07XG4gICAgICB9XG4gICAgICBpZiAobmV4dENvb3JkWzBdID4gOSB8fCBuZXh0Q29vcmRbMV0gPiA5IHx8IGdhbWVCb2FyZFtuZXh0Q29vcmRbMF1dW25leHRDb29yZFsxXV0gIT09ICcnKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgaGl0cyA9IDAsIHN1bmsgPSBmYWxzZSkgPT4ge1xuICBmdW5jdGlvbiBoaXQoKSB7IHRoaXMuaGl0cyArPSAxOyB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkgeyB0aGlzLnN1bmsgPSAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCk7IH1cblxuICByZXR1cm4geyBsZW5ndGgsIGhpdHMsIHN1bmssIGhpdCwgaXNTdW5rIH1cbn07XG5cbmV4cG9ydCB7IHNoaXBGYWN0b3J5IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBhZGRCb2FyZCB9IGZyb20gJy4vZG9tQWRkaXRpb25zLmpzJztcbmltcG9ydCB7IGdhbWVMb29wIH0gZnJvbSAnLi9nYW1lLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zb2xlLmxvZygnaGVsbG8nKTtcbmFkZEJvYXJkKCk7XG5jb25zdCBuZXdnYW1lID0gZ2FtZUxvb3AoKTtcbm5ld2dhbWUucGxheSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==