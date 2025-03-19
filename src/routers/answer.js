import { Router } from 'express';
import express from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { answerSchema } from '../utils/validations.js';
import { addAnswerController } from '../controllers/answer.js';

const jsonParser = express.json();

const router = Router();

router.post(
  '/',
  jsonParser,
  validateBody(answerSchema),
  ctrlWrapper(addAnswerController),
);

export default router;
