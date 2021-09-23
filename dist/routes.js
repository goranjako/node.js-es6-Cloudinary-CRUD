"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setRoutes;

var _express = _interopRequireDefault(require("express"));

function setRoutes(app) {
  var router = _express["default"].Router();

  app.use('/', router);
}