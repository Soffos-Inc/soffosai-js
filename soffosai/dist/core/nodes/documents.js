"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentsSearchNode = exports.DocumentsIngestNode = exports.DocumentsDeleteNode = void 0;
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
/**
 * A service configuration for Documents Ingest Service for Pipeline use.
 * @class
 * @alias _SoffosNodes.DocumentsIngestNode
 */
var DocumentsIngestNode = /*#__PURE__*/function (_Node) {
  _inherits(DocumentsIngestNode, _Node);
  var _super = _createSuper(DocumentsIngestNode);
  /**
   * @param {string} name
   * @param {string} document_name - The name of the document.
   * @param {string} [text] - Required when tagged_elements is not provided. 
   * Only one of text and tagged_elements can be provided.
   * The text content of the document.
   * @param {object} [tagged_elements] - Required when text is not provided. Only one of text and tagged_elements can be provided.
   * A list of dictionaries representing tagged spans of 
   * text extracted from a document file. This field accepts the value of the tagged_elements or 
   * normalized_tagged_elements field from the output of the File Converter module.
   * Therefore, it requires each element to contain the text and tag fields and any non-heading 
   * element to contain a headings field which is also a list of dictionaries where each dictionary 
   * should contain the fields text and tag.
   * @param {object} [meta] - A dictionary containing metadata fields for tagging the document. 
   * The keys should be string and the values can be any type, such as string, integer, boolean etc. 
   * This allows document filtering based on the meta fields. Due to name being a mandatory field 
   * provided independently, if a name field is included in meta it will be ignored.
   */
  function DocumentsIngestNode(name, document_name) {
    var _this;
    var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var tagged_elements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var meta = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    _classCallCheck(this, DocumentsIngestNode);
    var service = new _app.DocumentsIngestService();
    var source = {
      name: document_name // special handling. document ingest needs "name" as document_name
    };

    if (text) source.text = text;
    if (tagged_elements) source.tagged_elements = tagged_elements;
    if (meta) source.meta = meta;
    return _possibleConstructorReturn(_this, _this = _super.call(this, name, service, source));
  }
  return _createClass(DocumentsIngestNode);
}(_node.Node);
/**
 * A service configuration for Documents Search Service for Pipeline use.
 * @class
 * @alias _SoffosNodes.DocumentsSearchNode
 */
exports.DocumentsIngestNode = DocumentsIngestNode;
var DocumentsSearchNode = /*#__PURE__*/function (_Node2) {
  _inherits(DocumentsSearchNode, _Node2);
  var _super2 = _createSuper(DocumentsSearchNode);
  /**
   * @param {string} name - The name of this Node.
   *  It will be used by the Pipeline to reference this Node.
   * @param {object} [query]
   * Required when top_n_natural_language is set above 0.
   * The text to be used to match passages from ingested documents. 
   * This could be anything from a very specific natural language question to a simple cobination 
   * of words for keyword search. It can also be set as null for only-filtering searches.
   * @param {object} [filters] - The filters field can be used to narrow down the search to only 
   * the documents meeting certain metadata-based criteria, or even returning all the filtered 
   * documents when query is left null. It is catering only for the metadata provided in the meta 
   * field when ingesting a document. Other important filters such as document_ids, date_from and 
   * date_until are provided as top level fields.
   * Filters are defined as nested dictionaries. 
   * The keys of the dictionaries can be a logical operator ("$and", "$or", "$not"), a comparison 
   * operator ("$eq", "$in", "$gt", "$gte", "$lt", "$lte") or a metadata field name. 
   * Logical operator keys have a dictionary of metadata field names and/or logical operators as 
   * their value. Metadata field names have a dictionary of comparison operators as their value. 
   * Comparison operator keys accept a single values or lists as their values. 
   * Lists can be compared with the with the "$in" operator against single values, or with 
   * the "$eq" operator against other lists in which case the set of values of each list 
   * is compared and order does not matter. If no logical operator is given, "$and" is used as 
   * the default operation. If no comparison operator is specified, "$eq" 
   * (or "$in" if the comparison value is a list) is used as the default operation.
   * @param {Array.<string>} [document_ids] - Passing document IDs will confine the search to those documents.
   * @param {number} [top_n_keywords] - The number of document passages to be retrieved using 
   * keyword search. The relevancy is calculated algorithmically based on the frequency of the 
   * query words in the ingested passages. Setting this to 0 disables the keyword search. 
   * When query is left null while top_n_keywords is larger than 0, it will simply filter 
   * the documents based on the rest of the fields like date or metadata. All matched passages will 
   * be returned, therefore the actual value of top_n_keywords does not make a difference, 
   * so long it is larger than 0.
   * @param {number} [top_n_natural_language] - The number of document passages to be retrieved 
   * using Machine Learning-based semantic search. Setting this to 0 disables the semantic search.
   * @param {string} [date_from] - Filters passages to those ingested at or after the specified ISO-8601 formatted date.
   * @param {string} [date_until] - Filters passages to those ingested before the specified ISO-8601 formatted date.
   */
  function DocumentsSearchNode(name) {
    var _this2;
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var filters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var document_ids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var top_n_keywords = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
    var top_n_natural_language = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
    var date_from = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
    var date_until = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    _classCallCheck(this, DocumentsSearchNode);
    var service = new _app.DocumentsSearchService();
    var source = {};
    if (query) source.query = query;
    if (filters) source.filters = filters;
    if (document_ids) source.document_ids = document_ids;
    if (top_n_keywords) source.top_n_keywords = top_n_keywords;
    if (top_n_natural_language) source.top_n_natural_language = top_n_natural_language;
    if (date_from) source.date_from = date_from;
    if (date_until) source.date_until = date_until;
    return _possibleConstructorReturn(_this2, _this2 = _super2.call(this, name, service, source));
  }
  return _createClass(DocumentsSearchNode);
}(_node.Node);
/**
 * A service configuration for DocumentsDeleteService for Pipeline use.
 * @class
 * @alias _SoffosNodes.DocumentsDeleteNode
 */
exports.DocumentsSearchNode = DocumentsSearchNode;
var DocumentsDeleteNode = /*#__PURE__*/function (_Node3) {
  _inherits(DocumentsDeleteNode, _Node3);
  var _super3 = _createSuper(DocumentsDeleteNode);
  /**
   * @param {string} name - The name of this Node.
   * @param {Array.<string>} document_ids - A list of the document_ids of the documents to be deleted.
   */
  function DocumentsDeleteNode(name, document_ids) {
    var _this3;
    _classCallCheck(this, DocumentsDeleteNode);
    var service = new _app.DocumentsDeleteService();
    var source = {
      document_ids: document_ids
    };
    return _possibleConstructorReturn(_this3, _this3 = _super3.call(this, name, service, source));
  }
  return _createClass(DocumentsDeleteNode);
}(_node.Node);
exports.DocumentsDeleteNode = DocumentsDeleteNode;