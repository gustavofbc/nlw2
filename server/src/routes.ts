import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsuarioController from './controllers/UsuarioController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usuarioController = new UsuarioController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

routes.post('/usuario', usuarioController.create);

export default routes;