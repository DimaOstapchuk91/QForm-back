import { Router } from 'express';
import authRouter from './questionaire.js';

const router = Router();

router.use('/questionnaires', authRouter);

export default router;
