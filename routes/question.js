console.log('Routes Question\n');

const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/question');

// For Get All Data Question
router.get('/', QuestionController.findAllQuestion);

// For Create New Data Question
router.post('/', QuestionController.createQuestion);

// For Delete Single Data Question
router.delete('/:id', QuestionController.deleteQuestion);

module.exports = router;
