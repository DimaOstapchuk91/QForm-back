import { addNewAnswer } from '../services/answer.js';

export const addAnswerController = async (req, res) => {
  const result = await addNewAnswer(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully add answer',
    data: result,
  });
};
