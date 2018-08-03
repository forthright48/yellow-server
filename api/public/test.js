const express = require('express');
const router = express.Router();

router.get('/test', test);

router.post('/test', postTest);

module.exports = {
  addRouter(app) {
    app.use('/api/public', router);
  },
};

let counter = 0;

function test(req, res, next) {
  counter++;
  console.log('Request number ' + counter);
  return res.status(200).json({
    status: 200,
    counter,
  });
}

function postTest(req, res, next) {
  const {status, dnd} = req.body;

  console.log(status, dnd);

  return res.status(201).json({
      status: 201,
  });
}
