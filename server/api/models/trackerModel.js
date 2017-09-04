const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: 'project' },
  description: { type: String },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: null },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
});

module.exports = mongoose.model('tracker', TrackerSchema);
