import express from 'express'
import 'express-async-errors'

import logs from './middlewares/logs'
import errors from './middlewares/errors'
import routes from './routes';

const port = 8000;

  const server = express();

  // middleware
  // habilitar para reconhecer resposta json
  server.use(express.json())
  server.use(logs)
  server.use(routes)
  server.use(errors)


  //Subindo serve
  server.listen(port, () => {
    console.log (`Servidor rodando na porta ${port}`)
  })


