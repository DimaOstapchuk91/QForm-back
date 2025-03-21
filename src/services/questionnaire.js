import createHttpError from 'http-errors';
import { Questionnaire } from '../db/models/questionnaire.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const createQuestionnaire = async (questionnaire) => {
  const result = await Questionnaire.create(questionnaire);

  if (!result) throw createHttpError(500, 'Failed to create questionnaire');

  return result;
};

export const getAllQuestionnaire = async ({
  page,
  perPage,
  sortBy,
  sortOrder,
}) => {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const questionnaireQuery = Questionnaire.find();

  const [totalContacts, questionnaires] = await Promise.all([
    Questionnaire.find().merge(questionnaireQuery).countDocuments(),
    questionnaireQuery
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(totalContacts, page, perPage);

  return { data: questionnaires, ...paginationData };
};

export const getOneQuestionnaire = async (id) => {
  const result = await Questionnaire.findOne({ _id: id });

  if (!result) throw createHttpError(404, 'Questionnaire not found.');

  return result;
};

export const updateQuestionnaire = async (itemId, newQuestionnaire) => {
  const result = await Questionnaire.findOneAndUpdate(
    { _id: itemId },
    newQuestionnaire,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!result)
    throw createHttpError(404, `Questionnaire with ID ${itemId} not found`);

  return result;
};

export const deleteQuestionnaire = async (itemId) => {
  const result = await Questionnaire.findOneAndDelete({ _id: itemId });

  if (!result) {
    throw createHttpError(404, `Water portion with ID ${itemId} not found.`);
  }

  return result._id;
};
