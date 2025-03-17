import Joi from 'joi';

const questionSchema = Joi.object({
  questionId: Joi.string().required(),
  type: Joi.string()
    .valid('text', 'single-choice', 'multiple-choice')
    .required(),
  text: Joi.string().trim().min(3).max(500).required(),
  options: Joi.array()
    .items(Joi.string().trim().min(1).max(100))
    .when('type', {
      is: Joi.valid('single-choice', 'multiple-choice'),
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
});

export const questionnaireSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).required().messages({
    'string.min': 'The questionnaire name must be at least 3 characters long',
    'string.max':
      'The questionnaire name must be no more than 100 characters long',
    'any.required': 'The questionnaire name is required',
  }),
  description: Joi.string().trim().max(300).optional().messages({
    'string.max': 'The maximum length of the description is 300 characters',
  }),
  questions: Joi.array().items(questionSchema).min(1).required().messages({
    'array.min': 'The questionnaire must contain at least one question',
    'any.required': 'The list of questions is required',
  }),
});
