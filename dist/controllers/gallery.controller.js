"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _multer = _interopRequireDefault(require("multer"));

var _gallery = _interopRequireDefault(require("../models/gallery"));

var cloudinary = require("cloudinary").v2;

var _require = require("multer-storage-cloudinary"),
    CloudinaryStorage = _require.CloudinaryStorage;

cloudinary.config({
  cloud_name: "goran",
  api_key: "347353919781489",
  api_secret: "9zIoxCx6DNflw27IuzgWk84lzK0"
});
var storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Gallery"
  }
});
var upload = (0, _multer["default"])({
  storage: storage
});

var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var image, photo, obj;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            image = req.file.path;

            if (image) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(401).json(error.message));

          case 4:
            photo = new _gallery["default"]({
              id: req.body.id,
              image: image,
              categories: req.body.categories
            });
            console.log(photo);
            _context.next = 8;
            return (0, _gallery["default"])(photo).save();

          case 8:
            obj = _context.sent;
            return _context.abrupt("return", res.json(obj));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(400).json(_context.t0.message));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;
module.exports = {
  upload: upload,
  create: create
};