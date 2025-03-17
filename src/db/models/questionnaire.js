import { mongoose } from 'mongoose';

const questionnaireSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The questionnaire name is required'],
    trim: true,
    minlength: [3, 'Minimum length is 3 characters'],
    maxlength: [100, 'Maximum length is 100 characters'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [300, 'Maximum description length is 300 characters'],
  },
  questions: [
    {
      questionId: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ['text', 'single-choice', 'multiple-choice'],
        required: [true, 'The question type is required'],
      },
      text: {
        type: String,
        required: [true, 'The question text is required'],
        trim: true,
      },
      options: {
        type: [String],
        validate: {
          validator: function (arr) {
            return this.type !== 'text' ? arr.length > 0 : true;
          },
          message:
            'Answer choices are required for single-choice and multiple-choice questions',
        },
      },
    },
  ],
  completions: {
    type: Number,
    default: 0,
    min: [0, 'The number of completions cannot be negative'],
  },
});

export const Questionnaire = mongoose.model(
  'questionnaire',
  questionnaireSchema,
);
