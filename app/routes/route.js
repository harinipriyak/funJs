const express = require('express');
const router = express.Router();
const data = require('../api/api');

router.get('/:keyword', async (req, res, next) => {
const { keyword } = req.params;
  try {
    return res.json(await data.getData(keyword));
  } catch (err) {
    next(err);
  }
});


module.exports = router;