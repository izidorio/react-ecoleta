import express from 'express';

import ItemsController from './controllers/itemsControllers'
import PoinstController from './controllers/PointsControllers'

const routes = express.Router();
const poinstController = new PoinstController
const itemsControllers = new ItemsController

routes.get('/items', itemsControllers.index);

routes.get('/points', poinstController.index);
routes.get('/points/:id', poinstController.show);
routes.post('/points', poinstController.create);

export default routes;