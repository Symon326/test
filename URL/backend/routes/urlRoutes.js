const express = require('express');
const { shortenUrl, getUrl } = require('../controllers/urlController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/shorten', protect, shortenUrl);
router.get('/:code', getUrl);

module.exports = router;

