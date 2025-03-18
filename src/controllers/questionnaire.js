import {
  createQuestionnaire,
  getAllQuestionnaire,
  getOneQuestionnaire,
} from '../services/questionnaire.js';

export const createQuestionnaireController = async (req, res) => {
  const data = await createQuestionnaire(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created questionare',
    dara: data,
  });
};

export const getAllQuestionnaireController = async (req, res) => {
  const result = await getAllQuestionnaire();

  res.status(200).json({
    status: 200,
    message: 'Successfully get all questionares',
    dara: result,
  });
};

export const getOneQuestionnaireController = async (req, res) => {
  const { id } = req.params;
  const result = await getOneQuestionnaire(id);

  res.status(200).json({
    status: 200,
    message: 'Successfully get one questionares',
    dara: result,
  });
};
