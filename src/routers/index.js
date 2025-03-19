import { Router } from 'express';
import questionnairesRouter from './questionaire.js';
import answerRouter from './answer.js';

const router = Router();

router.use('/questionnaires', questionnairesRouter);
router.use('/answer', answerRouter);

export default router;
