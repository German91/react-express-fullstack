'use strict';

exports.test = ((req, res, next) => {
  res.status(200).json({ message: 'Hi There' });
});
