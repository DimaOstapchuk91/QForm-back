import { Router } from 'express';
import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createQuestionnaireController,
  getAllQuestionnaireController,
  getOneQuestionnaireController,
} from '../controllers/questionnaire.js';
import { questionnaireSchema } from '../utils/validations.js';

const jsonParser = express.json();

const router = Router();

router.post(
  '/',
  jsonParser,
  validateBody(questionnaireSchema),
  ctrlWrapper(createQuestionnaireController),
);

router.get('/', ctrlWrapper(getAllQuestionnaireController));
router.get('/:id', ctrlWrapper(getOneQuestionnaireController));

export default router;
