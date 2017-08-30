const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: 'project' },
  description: { type: String },
});

module.exports = mongoose.model('tracker', TrackerSchema);
