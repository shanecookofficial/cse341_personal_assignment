const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.home);
routes.get('/josie', myController.josie);

module.exports = routes;