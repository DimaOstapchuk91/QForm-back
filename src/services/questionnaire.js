import createHttpError from 'http-errors';
import { Questionnaire } from '../db/models/questionnaire.js';

export const createQuestionnaire = async (questionnaire) => {
  const result = await Questionnaire.create(questionnaire);

  if (!result) throw createHttpError(500, 'Failed to create water portion');

  return result;
};

export const getAllQuestionnaire = async () => {
  const result = await Questionnaire.find();
  console.log('test all ques');

  if (!result) throw createHttpError(404, 'Questionnaires not found.');

  return result;
};

export const getOneQuestionnaire = async (id) => {
  const result = await Questionnaire.findOne({ _id: id });

  if (!result) throw createHttpError(404, 'Questionnaire not found.');

  return result;
};
