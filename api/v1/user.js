const express = require('express');
const router = express.Router();
const User = require('mongoose').model('User');
const logger = require('custom_modules').logger;

router.post('/user/:username', postUser);

module.exports = {
  addRouter(app) {
    app.use('/api/v1', router);
  },
};

async function postUser(req, res, next) {
  const {username} = req.params;
  const {presence, dnd} = req.body;

  logger.info(username, presence, dnd);

  try {
    await User.update({
      username,
    }, {
      presence,
      dnd,
    }, {
      upsert: true,
    });

    return res.status(201).json({
      status: 201,
      data: req.body,
    });
  } catch (err) {
      next(err);
  }
}
