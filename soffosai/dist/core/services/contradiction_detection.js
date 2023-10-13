"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _service = require("./service.js");
var _constants = require("../../common/constants.js");
var _index = require("../../common/serviceio_fields/index.js");
var _input_config = require("./input_config.js");
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
 * This module finds conflicting information in a body of text and returns a 
 * description of the contradiction along with the relevant sentences and their 
 * offsets within the original text.
 * @class
 * @alias SoffosServices.ContradictionDetectionService
 */
var ContradictionDetectionService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(ContradictionDetectionService, _SoffosAIService);
  var _super = _createSuper(ContradictionDetectionService);
  function ContradictionDetectionService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ContradictionDetectionService);
    var service = _constants.ServiceString.CONTRADICTION_DETECTION;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.ContradictionDetectionIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} text - Text to be analyzed for contradictions.
   * @returns {Promise<Object>} 
   * contradictions - dictionary list<br>
   * A list of dictionaries representing detected contradictions. Each dictionary contains the following fields: <br>
   * contradiction: A description of the contradiction.<br>
   * sentences: A list of sentences related to the contradiction. Each sentence is a dictionary with the sentence's text, starting offset and ending offset within the original text.<br>
   * @example
   * import { SoffosServices } from "soffosai";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.ContradictionDetectionService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client 1234567",
   *     "The source noted that the Shaheen-2, with a range of 2400 km, has never been tested by Pakistan.\
   *     Pakistan has said that it performed several tests of its 2300 km-range Shaheen-2 missile in \
   *      September 2004."
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "contradictions": [
   * //       {
   * //         "contradiction": "The source noted that the Shaheen-2 has never been tested by Pakistan, but Pakistan has said that it performed several tests of its Shaheen-2 missile.",
   * //         "sentences": [
   * //           {
   * //             "text": "The source noted that the Shaheen-2, with a range of 2400 km, has never been tested by Pakistan.",      
   * //             "span_start": 0,
   * //             "span_end": 96
   * //           }
   * //         ]
   * //       }
   * //     ],
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.0106,
   * //       "total_cost": 0.0156
   * //     },
   * //     "charged_character_count": 212,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(ContradictionDetectionService, [{
    key: "call",
    value: function call(user, text) {
      var payload = {
        "user": user,
        "text": text
      };
      return _get(_getPrototypeOf(ContradictionDetectionService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to be analyzed for contradictions.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, text) {
      var source = {
        text: text
      };
      return _get(_getPrototypeOf(ContradictionDetectionService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return ContradictionDetectionService;
}(_service.SoffosAIService);
var _default = ContradictionDetectionService;
exports["default"] = _default;