import Joi from 'joi';

const questionSchema = Joi.object({
  _id: Joi.string().optional(), // Дозволяємо _id, але не вимагаємо
  questionText: Joi.string().trim().min(3).max(300).required().messages({
    'string.min': 'The question must be at least 3 characters long',
    'string.max': 'The question must be no more than 300 characters long',
    'any.required': 'The question text is required',
  }),
  questionType: Joi.string()
    .valid('text', 'radio', 'checkbox')
    .required()
    .messages({
      'any.only': 'Question type must be one of text, radio, or checkbox',
      'any.required': 'The question type is required',
    }),
  options: Joi.when('questionType', {
    is: Joi.valid('radio', 'checkbox'),
    then: Joi.array()
      .items(Joi.string().trim().min(1).required())
      .min(1)
      .messages({
        'array.min': 'At least one option is required for this question type',
        'string.min': 'Each option must contain at least one character',
        'any.required': 'Options are required for this question type',
      }),
    otherwise: Joi.array().max(0).messages({
      'array.max': 'Options are not allowed for text questions',
    }),
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

export const answerSchema = Joi.object({
  questionnaireId: Joi.string().required().messages({
    'string.empty': 'Questionnaire ID is required',
    'any.required': 'Questionnaire ID is required',
  }),
  answers: Joi.object()
    .pattern(
      Joi.string(),
      Joi.alternatives().try(
        Joi.string().required(),
        Joi.array().items(Joi.string().required()).min(1),
      ),
    )
    .required()
    .messages({
      'object.base': 'Answers must be provided',
      'any.required': 'Answers are required',
    }),
});
