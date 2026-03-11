const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    fundingGoal: { type: Number, required: true },
    currentFunding: { type: Number, default: 0 },
    entrepreneur: { type: mongoose.Schema.Types.ObjectId, ref: 'Entrepreneur', required: true },
    investors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Investor' }]
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;