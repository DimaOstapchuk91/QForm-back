import { Router } from 'express';
import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { questionnaireSchema } from '../validation/questionnaire.js';
import { createQuestionnaireController } from '../controllers/questionnaire.js';

const jsonParser = express.json();

const router = Router();

router.post(
  '/create',
  jsonParser,
  validateBody(questionnaireSchema),
  ctrlWrapper(createQuestionnaireController),
);

export default router;
