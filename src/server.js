"use strict";

const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT;


const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');
const v1Routes = require('./routes/v1.js');
const authRoutes = require('./auth/routes.js');



// Prepare the express app
const app = express();


app.get('/',(req,res)=>{
    res.status(200).send("Hello world 🤪")
})
// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);

// Catchalls
app.use(logger);
app.use(notFound);
app.use('/api/v1', v1Routes);
app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};







