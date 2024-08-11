const Url = require('../models/Url');
const shortid = require('shortid');

exports.shortenUrl = async (req, res) => {
  const shortUrl = shortid.generate();
  const url = await Url.create({ ...req.body, shortUrl });
  res.status(201).json(url);
};

exports.getUrl = async (req, res) => {
  const url = await Url.findOne({ shortUrl: req.params.code });
  if (url) {
    url.clicks++;
    await url.save();
    res.redirect(url.longUrl);
  } else {
    res.status(404).json({ error: 'URL not found' });
  }
};
