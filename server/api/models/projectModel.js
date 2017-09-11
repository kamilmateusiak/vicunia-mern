const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  url_part: {
    type: String,
  },
  team: [{ type: mongoose.Schema.ObjectId, ref: 'user' }],
});

ProjectSchema.pre('save', function (next) {
  this.url_part = this.get('name').toLowerCase().replace(/ /g, '_');
  next();
});

module.exports = mongoose.model('project', ProjectSchema);
