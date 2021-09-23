"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setRoutes;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./controllers/auth.controller"));

var _require = require('./util/validation'),
    validateRegistrationBody = _require.validateRegistrationBody,
    validateLoginBody = _require.validateLoginBody,
    Todovalidate = _require.Todovalidate,
    TodoId = _require.TodoId,
    validate = _require.validate;

function setRoutes(app) {
  var router = _express["default"].Router();

  router.post("/register", validateRegistrationBody(), validate, _auth["default"].register);
  router.post("/login", validateLoginBody(), validate, _auth["default"].login);
  app.use('/', router);
}