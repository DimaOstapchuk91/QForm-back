import { Router } from 'express';
import authRouter from './questionaire.js';

const router = Router();

router.use('/questionnaire', authRouter);

export default router;
