import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsuarioController from './controllers/UsuarioController';
import AuthController from './controllers/AuthController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usuarioController = new UsuarioController();
const authController = new AuthController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.get('/classesCount', classesController.count);
routes.get('/classesAll', classesController.getAll);


routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);


routes.post('/usuario', usuarioController.create);
routes.post('/updatePerfilUsuario', usuarioController.update);
routes.get('/getUsuarioById', usuarioController.getUsuarioById);
routes.post('/signin', authController.signin);

export default routes;