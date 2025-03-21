import createHttpError from 'http-errors';
import {
  createQuestionnaire,
  deleteQuestionnaire,
  getAllQuestionnaire,
  getOneQuestionnaire,
  updateQuestionnaire,
} from '../services/questionnaire.js';
import { parsePaginationParams } from '../utils/parsePaginatiomParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const createQuestionnaireController = async (req, res) => {
  const result = await createQuestionnaire(req.body);
  console.log('test create');

  res.status(201).json({
    status: 201,
    message: 'Successfully created questionare',
    data: result,
  });
};

export const getAllQuestionnaireController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const result = await getAllQuestionnaire({
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  if (!result) throw createHttpError(404, 'Questionnaires not found.');

  res.status(200).json({
    status: 200,
    message: 'Successfully get all questionares',
    data: result,
  });
};

export const getOneQuestionnaireController = async (req, res) => {
  const { id } = req.params;
  const result = await getOneQuestionnaire(id);

  res.status(200).json({
    status: 200,
    message: 'Successfully get one questionares',
    data: result,
  });
};

export const updateQuestionnaireController = async (req, res) => {
  const { id } = req.params;
  const result = await updateQuestionnaire(id, req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully update questionares',
    data: result,
  });
};

export const deleteQuestionnaireController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteQuestionnaire(id);

  res.status(201).json({
    status: 201,
    message: 'Successfully delete questionares',
    data: result,
  });
};
