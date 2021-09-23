import express from 'express';


export default function setRoutes(app) {

const router = express.Router();





app.use('/', router);
}