const router = require('express').Router();
const MovieController = require('../controllers/movie-controller');

/**
 * GET    /list
 * GET    /find-one
 * POST   /find-all
 * POST   /add
 * POST   /delete
 */

router.get('/find-all', MovieController.findAll);
router.get('/find-by-id/:_id', MovieController.findById);
module.exports = router;
