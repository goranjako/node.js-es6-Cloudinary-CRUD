import express from 'express';
const {validateRegistrationBody,validateLoginBody,Todovalidate,TodoId, validate} = require('./util/validation');
import authController from './controllers/auth.controller';
import {upload,create, multiple}from './controllers/gallery.controller';
import authManager from './util/auth';
export default function setRoutes(app) {

const router = express.Router();
router.post("/register", validateRegistrationBody(),validate, authController.register);
router.post("/login", validateLoginBody(), validate,authController.login);
router.route('/image').post(authManager.verifyToken,upload.single('image'), create);



app.use('/', router);
}