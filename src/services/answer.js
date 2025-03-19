import createHttpError from 'http-errors';
import Answer from '../db/models/answers.js';
import { Questionnaire } from '../db/models/questionnaire.js';

export const addNewAnswer = async (answerData) => {
  const result = await Answer.create(answerData);

  if (!result) throw createHttpError(500, 'Failed to create answer');

  await Questionnaire.findOneAndUpdate(
    { _id: answerData.questionnaireId },
    { $inc: { completions: 1 } },
    {
      new: true,
      includesResultMetadata: true,
    },
  );

  return result;
};
