"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _node = require("./node.js");
var _app = require("../../app.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var _EMOTION_LIST = ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"];

/**
 * A service configuration for EmotionDetectionService for Pipeline use.
 * @class
 * @alias _SoffosNodes.EmotionDetectionNode
 */
var EmotionDetectionNode = /*#__PURE__*/function (_Node) {
  _inherits(EmotionDetectionNode, _Node);
  var _super = _createSuper(EmotionDetectionNode);
  /**
   * @param {string} name - The name of this Node.
   *  It will be used by the Pipeline to reference this Node.
   * @param {string} text - Text to detect emotions from.
   * @param {number} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
   * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
   * For example, with sentence_split 3 and sentence_overlap=true :
   * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
   * @param {Array.<string>} [emotion_choices=_EMOTION_LIST] - List of emotions to detect in the text. If the field is not provided in the payload, or set as null or empty list, it will default to all emotion choices. Currently supported emotions are listed above in the default emotion values.
   */
  function EmotionDetectionNode(name, text) {
    var _this;
    var sentence_split = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
    var sentence_overlap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var emotion_choices = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _EMOTION_LIST;
    _classCallCheck(this, EmotionDetectionNode);
    var service = new _app.EmotionDetectionService();
    var source = {
      text: text,
      sentence_split: sentence_split,
      sentence_overlap: sentence_overlap,
      emotion_choices: emotion_choices
    };
    return _possibleConstructorReturn(_this, _this = _super.call(this, name, service, source));
  }
  return _createClass(EmotionDetectionNode);
}(_node.Node);
var _default = EmotionDetectionNode;
exports["default"] = _default;