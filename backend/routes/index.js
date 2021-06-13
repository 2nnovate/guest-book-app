const express = require('express');
const redis = require("redis");
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const client = redis.createClient({
  host: 'redis',
  port: 6379,
});

router.get('/list', function(req, res, next) {
  client.lrange('guest-book', 0, -1, (err, list) => {
    if (err) {
      return res.status(500).json({
        message: 'fail to fetch guest book list.',
      });
    }

    return res.json({
      list: list.map(i => JSON.parse(i)),
    });
  });
});

router.post('/write', function(req, res, next) {
  const { content } = req.body;
  const guestBookItem = {
    id: uuidv4(),
    content,
    date: moment().format('YYYY-MM-DD hh:mm'),
  };
  const stringifierItem = JSON.stringify(guestBookItem);
  client.lpush('guest-book', stringifierItem, (err, reply) => {
    if (err) {
      return res.status(500).json({
        message: 'fail to write guest book.',
      });
    }

    return res.json({ success: true });
  });
});

module.exports = router;
