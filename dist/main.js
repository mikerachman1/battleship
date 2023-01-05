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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bakbak+One&family=Poppins&family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: 'Bakbak One', Arial, Helvetica, sans-serif;\n}\n\n#content,\n.info-box,\n.board-wrapper,\n.board {\n  display: flex;\n  flex-direction: column;\n}\n\n.info-box,\n.board-wrapper {\n  align-items: center;\n  text-align: center;\n}\n\n\nh1 {\n  color: red;\n  text-align: center;\n}\n\n.grid,\n.info-box {\n  border: 1px solid red;\n}\n\n.grid {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board,\n.grid {\n  aspect-ratio: 1;\n  width: 100%;\n  height: auto;\n}\n\n.row {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.col {\n  border: 1px solid black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.hover {\n  background-color: rgb(246, 127, 127);\n}\n\n.ship {\n  background-color: rgb(255, 0, 0);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,uDAAuD;AACzD;;AAEA;;;;EAIE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,mBAAmB;EACnB,kBAAkB;AACpB;;;AAGA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mCAAmC;AACrC;;AAEA;;EAEE,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Poppins&family=Roboto:wght@400;700&display=swap');\n\nbody {\n  font-family: 'Bakbak One', Arial, Helvetica, sans-serif;\n}\n\n#content,\n.info-box,\n.board-wrapper,\n.board {\n  display: flex;\n  flex-direction: column;\n}\n\n.info-box,\n.board-wrapper {\n  align-items: center;\n  text-align: center;\n}\n\n\nh1 {\n  color: red;\n  text-align: center;\n}\n\n.grid,\n.info-box {\n  border: 1px solid red;\n}\n\n.grid {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board,\n.grid {\n  aspect-ratio: 1;\n  width: 100%;\n  height: auto;\n}\n\n.row {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.col {\n  border: 1px solid black;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.hover {\n  background-color: rgb(246, 127, 127);\n}\n\n.ship {\n  background-color: rgb(255, 0, 0);\n}\n\n"],"sourceRoot":""}]);
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
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */



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

  return {
    board, misses, hits, ships, getShipName, buildShip, placePiece, receiveAttack, allSunk,
  };
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
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */


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
  const domInfoBox = document.querySelector('.info-box');
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
  domInfoBox.appendChild(rotateContainer);
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
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable quotes */




const gameLoop = () => {
  const player = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player();
  const computer = new _computer_js__WEBPACK_IMPORTED_MODULE_0__.Computer();

  const play = async () => {
    computer.randomPlacement();
    await (0,_domInteraction_js__WEBPACK_IMPORTED_MODULE_1__.getPlayerShips)(player);
    (0,_domInteraction_js__WEBPACK_IMPORTED_MODULE_1__.updateInfoBox)('Click a cell on the Enemies board to attack!');
    (0,_domInteraction_js__WEBPACK_IMPORTED_MODULE_1__.addListnersToComputerBoard)(player, computer);
  };
  return { play };
};




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
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */


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
/* eslint-disable import/prefer-default-export */
const shipFactory = (length, hits = 0, sunk = false) => {
  function hit() { this.hits += 1; }

  function isSunk() { this.sunk = (this.hits === this.length); }

  return {
    length, hits, sunk, hit, isSunk,
  };
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
/* eslint-disable import/extensions */




(0,_domAdditions_js__WEBPACK_IMPORTED_MODULE_0__.addBoard)();
const newgame = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop)();
newgame.play();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDNkM7QUFDUjtBQUNoQjs7QUFFckIsMERBQVE7QUFDUixnQkFBZ0Isa0RBQVE7QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbUFkZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbUludGVyYWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJha2JhaytPbmUmZmFtaWx5PVBvcHBpbnMmZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ0Jha2JhayBPbmUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCxcXG4uaW5mby1ib3gsXFxuLmJvYXJkLXdyYXBwZXIsXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW5mby1ib3gsXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuaDEge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQsXFxuLmluZm8tYm94IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uYm9hcmQsXFxuLmdyaWQge1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5yb3cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29sIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDEyNywgMTI3KTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1REFBdUQ7QUFDekQ7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0FBQ3JDOztBQUVBOztFQUVFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWtiYWsrT25lJmZhbWlseT1Qb3BwaW5zJmZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdCYWtiYWsgT25lJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQsXFxuLmluZm8tYm94LFxcbi5ib2FyZC13cmFwcGVyLFxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmluZm8tYm94LFxcbi5ib2FyZC13cmFwcGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbmgxIHtcXG4gIGNvbG9yOiByZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLFxcbi5pbmZvLWJveCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLFxcbi5ncmlkIHtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucm93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmNvbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAxMjcsIDEyNyk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKCcnKSk7XG4gIGNvbnN0IG1pc3NlcyA9IFtdO1xuICBjb25zdCBoaXRzID0gW107XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgY29uc3QgZ2V0U2hpcE5hbWUgPSAoc2hpcEluZGV4KSA9PiB7XG4gICAgY29uc3Qgc2hpcE5hbWVzID0gWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wgQm9hdCddO1xuICAgIHJldHVybiBzaGlwTmFtZXNbc2hpcEluZGV4XTtcbiAgfTtcblxuICBjb25zdCBidWlsZFNoaXAgPSAobGVuZ3RoKSA9PiBzaGlwRmFjdG9yeShsZW5ndGgpO1xuXG4gIGNvbnN0IHBsYWNlUGllY2UgPSAoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24gPSAnaCcpID0+IHtcbiAgICBib2FyZFtzdGFydENvb3JkaW5hdGVbMF1dW3N0YXJ0Q29vcmRpbmF0ZVsxXV0gPSAnTyc7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoIC0gMTtcbiAgICBsZXQgc2hpcExlbmd0aEluY3JlbWVudG9yID0gMDtcbiAgICBjb25zdCBzaGlwQ29vcmRzID0gW3N0YXJ0Q29vcmRpbmF0ZV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNoaXBMZW5ndGhJbmNyZW1lbnRvciArPSAxO1xuICAgICAgbGV0IG5leHRDb29yZCA9ICcnO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgIG5leHRDb29yZCA9IFtzdGFydENvb3JkaW5hdGVbMF0sIChzdGFydENvb3JkaW5hdGVbMV0gKyBzaGlwTGVuZ3RoSW5jcmVtZW50b3IpXTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndicpIHtcbiAgICAgICAgbmV4dENvb3JkID0gW3N0YXJ0Q29vcmRpbmF0ZVswXSArIHNoaXBMZW5ndGhJbmNyZW1lbnRvciwgc3RhcnRDb29yZGluYXRlWzFdXTtcbiAgICAgIH1cbiAgICAgIGJvYXJkW25leHRDb29yZFswXV1bbmV4dENvb3JkWzFdXSA9ICdPJztcbiAgICAgIHNoaXBDb29yZHMucHVzaChuZXh0Q29vcmQpO1xuICAgIH1cbiAgICBzaGlwcy5wdXNoKHsgb2JqZWN0OiBzaGlwLCBjb29yZHM6IHNoaXBDb29yZHMgfSk7XG4gICAgcmV0dXJuIHNoaXBDb29yZHM7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdHRhY2tDb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKGJvYXJkW2F0dGFja0Nvb3JkaW5hdGVbMF1dW2F0dGFja0Nvb3JkaW5hdGVbMV1dICE9PSAnTycpIHtcbiAgICAgIG1pc3Nlcy5wdXNoKGF0dGFja0Nvb3JkaW5hdGUpO1xuICAgICAgYm9hcmRbYXR0YWNrQ29vcmRpbmF0ZVswXV1bYXR0YWNrQ29vcmRpbmF0ZVsxXV0gPSAnLSc7XG4gICAgfSBlbHNlIGlmIChib2FyZFthdHRhY2tDb29yZGluYXRlWzBdXVthdHRhY2tDb29yZGluYXRlWzFdXSA9PT0gJ08nKSB7XG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjb29yZCk7XG4gICAgICAgICAgaWYgKGNvb3JkU3RyaW5nLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGF0dGFja0Nvb3JkaW5hdGUpKSkge1xuICAgICAgICAgICAgc2hpcC5vYmplY3QuaGl0KCk7XG4gICAgICAgICAgICBzaGlwLm9iamVjdC5pc1N1bmsoKTtcbiAgICAgICAgICAgIGJvYXJkW2F0dGFja0Nvb3JkaW5hdGVbMF1dW2F0dGFja0Nvb3JkaW5hdGVbMV1dID0gJ1gnO1xuICAgICAgICAgICAgaGl0cy5wdXNoKGF0dGFja0Nvb3JkaW5hdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBpZiAoc2hpcHMubGVuZ3RoID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGNvbnN0IHN1bmtMb2cgPSBbXTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzdW5rTG9nLnB1c2goc2hpcC5vYmplY3Quc3Vuayk7XG4gICAgfSk7XG4gICAgcmV0dXJuICFzdW5rTG9nLmluY2x1ZGVzKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLCBtaXNzZXMsIGhpdHMsIHNoaXBzLCBnZXRTaGlwTmFtZSwgYnVpbGRTaGlwLCBwbGFjZVBpZWNlLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZUJvYXJkRmFjdG9yeSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJztcblxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yYW5kb21JbnQgPSAobWF4VmFsKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhWYWwpO1xuICAgIHRoaXMuY2hlY2tWYWxpZEF0dGFjayA9IChvcHBvbmVudCwgYXR0YWNrQ29vcmRzKSA9PiB7XG4gICAgICBjb25zdCBoaXRzQW5kTWlzc2VzID0gb3Bwb25lbnQuZ2FtZWJvYXJkLmhpdHMuY29uY2F0KG9wcG9uZW50LmdhbWVib2FyZC5taXNzZXMpO1xuICAgICAgcmV0dXJuICFKU09OLnN0cmluZ2lmeShoaXRzQW5kTWlzc2VzKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShhdHRhY2tDb29yZHMpKTtcbiAgICB9O1xuICB9XG5cbiAgcmFuZG9tUGxhY2VtZW50KCkge1xuICAgIHRoaXMucGllY2VzLmZvckVhY2goKHBpZWNlKSA9PiB7XG4gICAgICBsZXQgcmFuZG9tQ29vcmRzID0gW3RoaXMucmFuZG9tSW50KDEwKSwgdGhpcy5yYW5kb21JbnQoMTApXTtcbiAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLnJhbmRvbUludCgyKSA/ICdoJyA6ICd2JztcbiAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdhbWVib2FyZC5idWlsZFNoaXAocGllY2UpO1xuICAgICAgd2hpbGUgKHRoaXMuY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIHJhbmRvbUNvb3JkcywgZGlyZWN0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmFuZG9tQ29vcmRzID0gW3RoaXMucmFuZG9tSW50KDEwKSwgdGhpcy5yYW5kb21JbnQoMTApXTtcbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5yYW5kb21JbnQoMikgPyAnaCcgOiAndic7XG4gICAgICB9XG4gICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVBpZWNlKHNoaXAsIHJhbmRvbUNvb3JkcywgZGlyZWN0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJhbmRvbUF0dGFjayhvcHBvbmVudCkge1xuICAgIGxldCByYW5kb21Db29yZHMgPSBbdGhpcy5yYW5kb21JbnQoMTApLCB0aGlzLnJhbmRvbUludCgxMCldO1xuICAgIHdoaWxlICh0aGlzLmNoZWNrVmFsaWRBdHRhY2sob3Bwb25lbnQsIHJhbmRvbUNvb3JkcykgPT09IGZhbHNlKSB7XG4gICAgICByYW5kb21Db29yZHMgPSBbdGhpcy5yYW5kb21JbnQoMTApLCB0aGlzLnJhbmRvbUludCgxMCldO1xuICAgIH1cbiAgICB0aGlzLmF0dGFjayhvcHBvbmVudCwgcmFuZG9tQ29vcmRzKTtcbiAgICByZXR1cm4gcmFuZG9tQ29vcmRzO1xuICB9XG59XG5cbmV4cG9ydCB7IENvbXB1dGVyIH07XG4iLCJjb25zdCBpbmZvQm94ID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBzZWN0aW9uLmNsYXNzTmFtZSA9ICdpbmZvLWJveCc7XG4gIHRleHQuY2xhc3NOYW1lID0gJ2luZm8tdGV4dCc7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIHJldHVybiBzZWN0aW9uO1xufTtcblxuY29uc3Qgcm90YXRlU2hpcEJ0biA9ICgpID0+IHtcbiAgY29uc3QgZG9tSW5mb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWJveCcpO1xuICBjb25zdCByb3RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm90YXRlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdyb3RhdGUtY29udGFpbmVyJztcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJvdGF0ZUJ1dHRvbi5jbGFzc05hbWUgPSAncm90YXRlLXNoaXAnO1xuICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnUm90YXRlIFNoaXAnO1xuICBjb25zdCByb3RhdGVEaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHJvdGF0ZURpcmVjdGlvbi5jbGFzc05hbWUgPSAncm90YXRlLWRpcmVjdGlvbic7XG4gIHJvdGF0ZURpcmVjdGlvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgcm90YXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZUJ1dHRvbik7XG4gIHJvdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVEaXJlY3Rpb24pO1xuICBkb21JbmZvQm94LmFwcGVuZENoaWxkKHJvdGF0ZUNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBib2FyZFJvdyA9ICgpID0+IHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvdy5jbGFzc05hbWUgPSAncm93JztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29sLmNsYXNzTmFtZSA9ICdjb2wnO1xuICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpO1xuICB9XG4gIHJldHVybiByb3c7XG59O1xuXG5jb25zdCBib2FyZEdyaWQgPSAoY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgYCR7Y2xhc3NOYW1lfS1ncmlkYCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gYm9hcmRSb3coKTtcbiAgICBncmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCBib2FyZFNlY3Rpb24gPSAodGl0bGUsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBib2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYm9hcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJywgYCR7Y2xhc3NOYW1lfS1ib2FyZGApO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkVGl0bGUpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkR3JpZChjbGFzc05hbWUpKTtcbiAgcmV0dXJuIHNlY3Rpb247XG59O1xuXG5jb25zdCBib2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdib2FyZC13cmFwcGVyJztcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChib2FyZFNlY3Rpb24oJ1lvdXIgQm9hcmQnLCAncGxheWVyJykpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJvYXJkU2VjdGlvbignRW5lbXkgQm9hcmQnLCAnY29tcHV0ZXInKSk7XG4gIHJldHVybiB3cmFwcGVyO1xufTtcblxuY29uc3QgYWRkQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGluZm9Cb3goKSk7XG4gIHJvdGF0ZVNoaXBCdG4oKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChib2FyZCgpKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBhZGRCb2FyZCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5jb25zdCBkaXNwbGF5U2hpcHMgPSAoc2hpcHMsIG5hbWUpID0+IHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuY29vcmRzLmZvckVhY2goKHNoaXBDb29yZCkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gc2hpcENvb3JkWzBdO1xuICAgICAgY29uc3QgY29sID0gc2hpcENvb3JkWzFdO1xuICAgICAgY29uc3QgY29vcmRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfS1ncmlkIDpudGgtY2hpbGQoJHtyb3cgKyAxfSkgOm50aC1jaGlsZCgke2NvbCArIDF9KWApO1xuICAgICAgY29vcmRCb3guY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQbGF5ZXJTaGlwID0gKHNoaXBDb29yZHMpID0+IHtcbiAgc2hpcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGNvb3JkWzBdO1xuICAgIGNvbnN0IGNvbCA9IGNvb3JkWzFdO1xuICAgIGNvbnN0IGNvb3JkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1ncmlkIDpudGgtY2hpbGQoJHtyb3cgKyAxfSkgOm50aC1jaGlsZCgke2NvbCArIDF9KWApO1xuICAgIGNvb3JkQm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBjb29yZEJveC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZUluZm9Cb3ggPSAodGV4dCkgPT4ge1xuICBjb25zdCBpbmZvQm94VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLXRleHQnKTtcbiAgaW5mb0JveFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xufTtcblxuY29uc3QgYWRkTmV3R2FtZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdHYW1lQnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCBOZXcgR2FtZSc7XG4gIG5ld0dhbWVCdXR0b24uY2xhc3NOYW1lID0gJ25ldy1nYW1lJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tYm94JykuYXBwZW5kQ2hpbGQobmV3R2FtZUJ1dHRvbik7XG4gIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVSb3RhdGVTaGlwID0gKCkgPT4ge1xuICBjb25zdCByb3RhdGVEaXJlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1kaXJlY3Rpb24nKTtcbiAgKHJvdGF0ZURpcmVjdGlvblRleHQudGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsJykgPyByb3RhdGVEaXJlY3Rpb25UZXh0LnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJyA6IHJvdGF0ZURpcmVjdGlvblRleHQudGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG59O1xuXG5jb25zdCBnZXREaXJlY3Rpb25WYWx1ZSA9ICgpID0+IHtcbiAgbGV0IGRpcmVjdGlvbjtcbiAgY29uc3Qgcm90YXRlRGlyZWN0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtZGlyZWN0aW9uJyk7XG4gIHJvdGF0ZURpcmVjdGlvblRleHQudGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsJyA/IGRpcmVjdGlvbiA9ICdoJyA6IGRpcmVjdGlvbiA9ICd2JztcbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn07XG5cbmNvbnN0IGFkZFJvdGF0ZVNoaXBMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1zaGlwJyk7XG4gIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdG9nZ2xlUm90YXRlU2hpcCgpOyB9KTtcbn07XG5cbmNvbnN0IGNhbGNIb3ZlclNoaXAgPSAobGVuZ3RoLCBncmlkLCByb3csIGNvbCwgcm93TnVtLCBjb2xOdW0pID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBbY29sXTtcbiAgY29uc3QgZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uVmFsdWUoKTtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2gnKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbE51bSArIGkgPCAxMCkgeyBlbGVtZW50cy5wdXNoKHJvdy5jaGlsZE5vZGVzW2NvbE51bSArIGldKTsgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocm93TnVtICsgaSA8IDEwKSB7IGVsZW1lbnRzLnB1c2goZ3JpZC5jaGlsZE5vZGVzW3Jvd051bSArIGldLmNoaWxkTm9kZXNbY29sTnVtXSk7IH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuY29uc3QgZW5hYmxlR3JpZEhvdmVyID0gKGdyaWQsIHNoaXBMZW5ndGgpID0+IHtcbiAgZ3JpZC5jaGlsZE5vZGVzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgIHJvdy5jaGlsZE5vZGVzLmZvckVhY2goKGNvbCwgaikgPT4ge1xuICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBjYWxjSG92ZXJTaGlwKHNoaXBMZW5ndGgsIGdyaWQsIHJvdywgY29sLCBpLCBqKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gY2FsY0hvdmVyU2hpcChzaGlwTGVuZ3RoLCBncmlkLCByb3csIGNvbCwgaSwgaik7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCByZXNldFBsYXllckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbiAgY29uc3QgZmluYWxCb2FyZCA9IGJvYXJkLmNsb25lTm9kZSh0cnVlKTtcbiAgYm9hcmQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZmluYWxCb2FyZCwgYm9hcmQpO1xufTtcblxuY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKHBsYXllciwgc2hpcExlbmd0aCkgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ncmlkJyk7XG4gIGNvbnN0IHNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJ1aWxkU2hpcChzaGlwTGVuZ3RoKTtcblxuICB1cGRhdGVJbmZvQm94KCdDbGljayBvbiB5b3VyIGJvYXJkIHRvIHBsYWNlIHlvdXIgc2hpcCcpO1xuICBlbmFibGVHcmlkSG92ZXIoZ3JpZCwgc2hpcExlbmd0aCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgZ3JpZC5jaGlsZE5vZGVzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgcm93LmNoaWxkTm9kZXMuZm9yRWFjaCgoY29sLCBqKSA9PiB7XG4gICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb25WYWx1ZSgpO1xuICAgICAgICAgIGlmIChwbGF5ZXIuY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIFtpLCBqXSwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcENvb3JkcyA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VQaWVjZShzaGlwLCBbaSwgal0sIGRpcmVjdGlvbik7XG4gICAgICAgICAgICBkaXNwbGF5UGxheWVyU2hpcChzaGlwQ29vcmRzKTtcbiAgICAgICAgICAgIHJlc2V0UGxheWVyQm9hcmQoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0UGxheWVyU2hpcHMgPSBhc3luYyAocGxheWVyKSA9PiB7XG4gIGFkZFJvdGF0ZVNoaXBMaXN0ZW5lcigpO1xuICBhd2FpdCBwbGFjZVBsYXllclNoaXAocGxheWVyLCA1KTtcbiAgYXdhaXQgcGxhY2VQbGF5ZXJTaGlwKHBsYXllciwgNCk7XG4gIGF3YWl0IHBsYWNlUGxheWVyU2hpcChwbGF5ZXIsIDMpO1xuICBhd2FpdCBwbGFjZVBsYXllclNoaXAocGxheWVyLCAzKTtcbiAgYXdhaXQgcGxhY2VQbGF5ZXJTaGlwKHBsYXllciwgMik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtY29udGFpbmVyJykucmVtb3ZlKCk7XG4gIHVwZGF0ZUluZm9Cb3goJ0NsaWNrIGEgY2VsbCBvbiB0aGUgRW5lbWllcyBib2FyZCB0byBhdHRhY2shJyk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuY29uc3QgY2hlY2tFbmRHYW1lID0gKHBsYXllciwgY29tcHV0ZXIpID0+IChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFN1bmsoKSB8fCBjb21wdXRlci5nYW1lYm9hcmQuYWxsU3VuaygpKTtcblxuY29uc3QgZGV0ZXJtaW5lV2lubmVyID0gKHBsYXllcikgPT4ge1xuICBpZiAocGxheWVyLmdhbWVib2FyZC5hbGxTdW5rKCkpIHsgcmV0dXJuICdZb3UgTG9zdCEhISc7IH1cbiAgcmV0dXJuICdZb3UgV29uISEhJztcbn07XG5cbmNvbnN0IHVwZGF0ZUdhbWVHcmlkID0gKGdhbWVib2FyZCwgbmFtZSwgY29vcmRzKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZENlbGwgPSBnYW1lYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dO1xuICBjb25zdCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9LWdyaWQgOm50aC1jaGlsZCgke2Nvb3Jkc1swXSArIDF9KSA6bnRoLWNoaWxkKCR7Y29vcmRzWzFdICsgMX0pYCk7XG4gIGlmIChnYW1lYm9hcmRDZWxsID09PSAnWCcpIHsgZ3JpZENlbGwuaW5uZXJIVE1MID0gJ1gnOyB9XG4gIGlmIChnYW1lYm9hcmRDZWxsID09PSAnLScpIHsgZ3JpZENlbGwuaW5uZXJIVE1MID0gJ08nOyB9XG4gIGdyaWRDZWxsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIHJldHVybiBncmlkQ2VsbC5pbm5lckhUTUw7XG59O1xuXG5jb25zdCBkaXNwbGF5RW5lbXlTaGlwSWZTdW5rID0gKGNvbXB1dGVyU2hpcHMpID0+IHtcbiAgY29tcHV0ZXJTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAub2JqZWN0LnN1bmspIHtcbiAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goKHNoaXBDb29yZCkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBzaGlwQ29vcmRbMF07XG4gICAgICAgIGNvbnN0IGNvbCA9IHNoaXBDb29yZFsxXTtcbiAgICAgICAgY29uc3QgY29vcmRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ3JpZCA6bnRoLWNoaWxkKCR7cm93ICsgMX0pIDpudGgtY2hpbGQoJHtjb2wgKyAxfSlgKTtcbiAgICAgICAgY29vcmRCb3guY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IG1ha2VDZWxsc05vdENsaWNrYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJHcmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItZ3JpZCAuY29sJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJHcmlkQ2VsbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb21wdXRlckdyaWRDZWxsc1tpXS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG59O1xuXG5jb25zdCBmaW5kU2hpcEluZGV4ID0gKHBsYXllciwgc2VhcmNoQ29vcmRzKSA9PiB7XG4gIGxldCBpbmRleDtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzO1xuICBwbGF5ZXJTaGlwcy5mb3JFYWNoKChzaGlwLCBpKSA9PiB7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY29vcmQpO1xuICAgICAgaWYgKGNvb3JkU3RyaW5nLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KHNlYXJjaENvb3JkcykpKSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbmNvbnN0IHVwZGF0ZUVuZW15QXR0YWNrSW5mbyA9IChwbGF5ZXIsIGNvbXB1dGVyQXR0YWNrQ29vcmRzLCBjb21wQXR0YWNrUmVzdWx0KSA9PiB7XG4gIGlmIChjb21wQXR0YWNrUmVzdWx0ID09PSAnWCcpIHtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBmaW5kU2hpcEluZGV4KHBsYXllciwgY29tcHV0ZXJBdHRhY2tDb29yZHMpO1xuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzW3NoaXBJbmRleF0ub2JqZWN0LnN1bmspIHtcbiAgICAgIHVwZGF0ZUluZm9Cb3goYFRoZSBlbmVteSBzdW5rIHlvdXIgJHtwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBOYW1lKHNoaXBJbmRleCl9IWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVJbmZvQm94KGBUaGUgZW5lbXkgaGl0IHlvdXIgJHtwbGF5ZXIuZ2FtZWJvYXJkLmdldFNoaXBOYW1lKHNoaXBJbmRleCl9IWApO1xuICAgIH1cbiAgfSBlbHNlIHsgdXBkYXRlSW5mb0JveCgnVGhlIGVuZW15IG1pc3NlZCB0aGVpciBzaG90IScpOyB9XG59O1xuXG5jb25zdCBwbGF5Um91bmQgPSAoY2VsbCwgcGxheWVyLCBjb21wdXRlcikgPT4ge1xuICBjb25zdCByb3cgPSBjZWxsLnBhcmVudE5vZGU7XG4gIGNvbnN0IHJvd0luZGV4ID0gQXJyYXkuZnJvbShyb3cucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihyb3cpO1xuICBjb25zdCBjb2xJbmRleCA9IEFycmF5LmZyb20oY2VsbC5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKGNlbGwpO1xuICBjb25zdCBwbGF5ZXJDb29yZHMgPSBbcm93SW5kZXgsIGNvbEluZGV4XTtcblxuICBwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyLCBbcm93SW5kZXgsIGNvbEluZGV4XSk7XG4gIHVwZGF0ZUdhbWVHcmlkKGNvbXB1dGVyLmdhbWVib2FyZC5ib2FyZCwgJ2NvbXB1dGVyJywgcGxheWVyQ29vcmRzKTtcbiAgZGlzcGxheUVuZW15U2hpcElmU3Vuayhjb21wdXRlci5nYW1lYm9hcmQuc2hpcHMpO1xuXG4gIGNvbnN0IGNvbXB1dGVyQ29vcmRzID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllcik7XG4gIGNvbnN0IGNvbXBBdHRhY2tSZXN1bHQgPSB1cGRhdGVHYW1lR3JpZChwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkLCAncGxheWVyJywgY29tcHV0ZXJDb29yZHMpO1xuICB1cGRhdGVFbmVteUF0dGFja0luZm8ocGxheWVyLCBjb21wdXRlckNvb3JkcywgY29tcEF0dGFja1Jlc3VsdCk7XG5cbiAgaWYgKGNoZWNrRW5kR2FtZShwbGF5ZXIsIGNvbXB1dGVyKSkge1xuICAgIHVwZGF0ZUluZm9Cb3goZGV0ZXJtaW5lV2lubmVyKHBsYXllcikpO1xuICAgIGRpc3BsYXlTaGlwcyhjb21wdXRlci5nYW1lYm9hcmQuc2hpcHMsICdjb21wdXRlcicpO1xuICAgIG1ha2VDZWxsc05vdENsaWNrYWJsZSgpO1xuICAgIGFkZE5ld0dhbWVCdXR0b24oKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTGlzdG5lcnNUb0NvbXB1dGVyQm9hcmQgPSAocGxheWVyLCBjb21wdXRlcikgPT4ge1xuICBjb25zdCByZWZlcmVuY2VzID0gW107XG4gIGNvbnN0IGNvbXB1dGVyR3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdyaWQgLmNvbCcpO1xuICBjb21wdXRlckdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29uc3QgbXlSZWZlcmVuY2UgPSAoKSA9PiBwbGF5Um91bmQoY2VsbCwgcGxheWVyLCBjb21wdXRlcik7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15UmVmZXJlbmNlKTtcbiAgICByZWZlcmVuY2VzLnB1c2gobXlSZWZlcmVuY2UpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4geyBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7IH0pO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHsgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpOyB9KTtcbiAgfSk7XG4gIHJldHVybiByZWZlcmVuY2VzO1xufTtcblxuZXhwb3J0IHtcbiAgZGlzcGxheVNoaXBzLCB1cGRhdGVJbmZvQm94LCBhZGRMaXN0bmVyc1RvQ29tcHV0ZXJCb2FyZCwgZ2V0UGxheWVyU2hpcHMsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xuaW1wb3J0IHsgQ29tcHV0ZXIgfSBmcm9tIFwiLi9jb21wdXRlci5qc1wiO1xuaW1wb3J0IHsgYWRkTGlzdG5lcnNUb0NvbXB1dGVyQm9hcmQsIGdldFBsYXllclNoaXBzLCB1cGRhdGVJbmZvQm94IH0gZnJvbSBcIi4vZG9tSW50ZXJhY3Rpb24uanNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBDb21wdXRlcigpO1xuXG4gIGNvbnN0IHBsYXkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29tcHV0ZXIucmFuZG9tUGxhY2VtZW50KCk7XG4gICAgYXdhaXQgZ2V0UGxheWVyU2hpcHMocGxheWVyKTtcbiAgICB1cGRhdGVJbmZvQm94KCdDbGljayBhIGNlbGwgb24gdGhlIEVuZW1pZXMgYm9hcmQgdG8gYXR0YWNrIScpO1xuICAgIGFkZExpc3RuZXJzVG9Db21wdXRlckJvYXJkKHBsYXllciwgY29tcHV0ZXIpO1xuICB9O1xuICByZXR1cm4geyBwbGF5IH07XG59O1xuXG5leHBvcnQgeyBnYW1lTG9vcCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCB7IGdhbWVCb2FyZEZhY3RvcnkgfSBmcm9tICcuL2JvYXJkLmpzJztcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG5cbiAgICB0aGlzLmF0dGFjayA9IChvcHBvbmVudCwgYXR0YWNrQ29vcmRzKSA9PiB7IG9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja0Nvb3Jkcyk7IH07XG4gICAgdGhpcy5wbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlUGllY2Uoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24pO1xuICAgIH07XG4gICAgdGhpcy5waWVjZXMgPSBbNSwgNCwgMywgMywgMl07XG4gIH1cblxuICBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgc3RhcnRDb29yZGluYXRlLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBnYW1lQm9hcmQgPSB0aGlzLmdhbWVib2FyZC5ib2FyZDtcbiAgICBpZiAoc3RhcnRDb29yZGluYXRlWzBdID4gOSB8fCBzdGFydENvb3JkaW5hdGVbMV0gPiA5IHx8IGdhbWVCb2FyZFtzdGFydENvb3JkaW5hdGVbMF1dW3N0YXJ0Q29vcmRpbmF0ZVsxXV0gIT09ICcnKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aCAtIDE7XG4gICAgbGV0IHNoaXBMZW5ndGhJbmNyZW1lbnRvciA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNoaXBMZW5ndGhJbmNyZW1lbnRvciArPSAxO1xuICAgICAgbGV0IG5leHRDb29yZCA9ICcnO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgIG5leHRDb29yZCA9IFtzdGFydENvb3JkaW5hdGVbMF0sIChzdGFydENvb3JkaW5hdGVbMV0gKyBzaGlwTGVuZ3RoSW5jcmVtZW50b3IpXTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndicpIHtcbiAgICAgICAgbmV4dENvb3JkID0gW3N0YXJ0Q29vcmRpbmF0ZVswXSArIHNoaXBMZW5ndGhJbmNyZW1lbnRvciwgc3RhcnRDb29yZGluYXRlWzFdXTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q29vcmRbMF0gPiA5IHx8IG5leHRDb29yZFsxXSA+IDkgfHwgZ2FtZUJvYXJkW25leHRDb29yZFswXV1bbmV4dENvb3JkWzFdXSAhPT0gJycpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBoaXRzID0gMCwgc3VuayA9IGZhbHNlKSA9PiB7XG4gIGZ1bmN0aW9uIGhpdCgpIHsgdGhpcy5oaXRzICs9IDE7IH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7IHRoaXMuc3VuayA9ICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKTsgfVxuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLCBoaXRzLCBzdW5rLCBoaXQsIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNoaXBGYWN0b3J5IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IHsgYWRkQm9hcmQgfSBmcm9tICcuL2RvbUFkZGl0aW9ucy5qcyc7XG5pbXBvcnQgeyBnYW1lTG9vcCB9IGZyb20gJy4vZ2FtZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuYWRkQm9hcmQoKTtcbmNvbnN0IG5ld2dhbWUgPSBnYW1lTG9vcCgpO1xubmV3Z2FtZS5wbGF5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=