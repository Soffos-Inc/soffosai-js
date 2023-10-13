"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ServiceString", {
  enumerable: true,
  get: function get() {
    return _constants.ServiceString;
  }
});
Object.defineProperty(exports, "SoffosAIService", {
  enumerable: true,
  get: function get() {
    return _service.SoffosAIService;
  }
});
Object.defineProperty(exports, "SoffosPipeline", {
  enumerable: true,
  get: function get() {
    return SoffosPipelines.SoffosPipeline;
  }
});
exports.SoffosServices = exports.SoffosPipelines = void 0;
var _constants = require("./common/constants.js");
var _service = require("./core/services/service.js");
var SoffosPipelines = _interopRequireWildcard(require("./core/pipelines/index.js"));
exports.SoffosPipelines = SoffosPipelines;
var SoffosServices = _interopRequireWildcard(require("./core/services/index.js"));
exports.SoffosServices = SoffosServices;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }