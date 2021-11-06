const mongoose = require('mongoose');
const db = require('../../util/mongodb.js');

const projectSchema = new mongoose.Schema({
  title: String,
  tagline: String,
  description: String,
  github: String,
  url: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;