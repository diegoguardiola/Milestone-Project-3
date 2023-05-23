const express = require('express');
const { getAllSecrets, createSecret, deleteSecret, updateSecret } = require('../controllers/secretController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth)

// GET all workouts
router.get('/', getAllSecrets)

// POST a new workout
router.post('/', createSecret)

// DELETE a workout
router.delete('/:id', deleteSecret)

// UPDATE a workout
router.patch('/:id', updateSecret)


module.exports = router