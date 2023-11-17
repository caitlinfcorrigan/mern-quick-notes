const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes'

// GET /api/users/check-token and ensureloggedin
router.get('/', ensureLoggedIn, notesCtrl.index);

// POST /api/notes
router.post('/', ensureLoggedIn, notesCtrl.create);