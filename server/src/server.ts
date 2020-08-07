import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
//Route params = identifica qual recurso eu quero atualizar ou deletar
//Query params = paginação, ordenação e filtros


app.listen(3333);
 