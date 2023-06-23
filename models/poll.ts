import mongoose from 'mongoose'

const PollSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
    unique: true
  },
  option1Text: {
    type: String,
    required: true
  },
  option1Votes: {
    type: Number,
    default: 0
  },
  option2Text: {
    type: String,
    required: true
  },
  option2Votes: {
    type: Number,
    default: 0
  }
});

const Poll = mongoose.models.Poll || mongoose.model('Poll', PollSchema);

export default Poll