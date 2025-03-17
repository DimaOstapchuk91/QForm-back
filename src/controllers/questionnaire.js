export const createQuestionnaireController = async (req, res) => {
  res.status(201).json({
    status: 201,
    message: 'Successfully created questionare',
  });
};
