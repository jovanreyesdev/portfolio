require('dotenv').config();

const express = require('express');
const compression = require('compression');
const next = require('next');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const {
  NODE_ENV, PORT, ASSETS_BASE_URI,
} = process.env;

const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cookieParser());

  server.use(bodyParser.json());

  server.use(bodyParser.urlencoded({ extended: true }));

  server.use(compression());

  server.use(helmet());

  server.use(cors({
    origin: [
      ASSETS_BASE_URI || '/',
    ],
    optionsSuccessStatus: 200,
  }));

  server.all('*', (req, res) => handle(req, res));

  const port = PORT || 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`Sever Running on port: ${port}`);
  });
}).catch((ex) => {
  // eslint-disable-next-line no-console
  console.error(ex.stack);
  process.exit(1);
});
