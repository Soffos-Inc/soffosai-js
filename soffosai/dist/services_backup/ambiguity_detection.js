"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _service = require("./service.js");
var _constants = require("../../common/constants.js");
var _index = require("../../common/serviceio_fields/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 *  This module finds statements or sentences in text that are not coherent, or can be interpreted 
 * in multiple ways while also taking in account the surrounding context. For example, "The fisherman 
 * went to the bank" would be identified as ambiguous, but "The fisherman went to the bank to draw money" 
 * won't.

 * It accepts parameters to control the way the text is segmented for processing.

 * It gives an explanation as to why a span of text is considered ambiguous. Despite taking in account 
 * the context of each span, the module may sometimes be strict in what it considers ambiguous, even if 
 * the combination of words mean something very specific most of the time.

 * A very fascinating tool for writers that can be used to inspire, write more understandable content, 
 * or even to just delve into the remarkable nuances and complexities hidden in human language and thought
 * @class
 * @alias SoffosServices.AmbiguityDetectionService
*/
var AmbiguityDetectionService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(AmbiguityDetectionService, _SoffosAIService);
  var _super = _createSuper(AmbiguityDetectionService);
  function AmbiguityDetectionService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, AmbiguityDetectionService);
    var service = _constants.ServiceString.AMBIGUITY_DETECTION;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.AmbiguityDetectionIO();
    return _this;
  }

  /**
   * @param {string} user                     - The ID of the user accessing the Soffos API.  
   *                                            Soffos assumes that the owner of
   *                                            the api is an application (app) and that app has users. 
   *                                            Soffos API will accept any string.
   * @param {string} text                     - Text to be analyzed for ambiguitites.
   * @param {number} [sentence_split=4]       - The number of sentences of each chunk when splitting the input text.
   * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence. 
   *                                            For example, with sentence_split=3 and sentence_overlap=true : <br>
   *                                            [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
   * @returns {Promise<Object>}
   */
  _createClass(AmbiguityDetectionService, [{
    key: "call",
    value: function call(user, text) {
      var sentence_split = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var sentence_overlap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var payload = {
        "user": user,
        "text": text,
        "sentence_split": sentence_split,
        "sentence_overlap": sentence_overlap
      };
      return _get(_getPrototypeOf(AmbiguityDetectionService.prototype), "call", this).call(this, payload);
    }
  }]);
  return AmbiguityDetectionService;
}(_service.SoffosAIService);
var _default = AmbiguityDetectionService;
exports["default"] = _default;