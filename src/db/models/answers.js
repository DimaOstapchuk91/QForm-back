import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema(
  {
    questionnaireId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Questionnaire',
    },
    answers: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;
