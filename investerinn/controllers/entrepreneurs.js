const express = require('express');
const Project = require('../models/project');


exports.dashboard = (req, res, next) => {
    const entrepreneurId = req.user._id;
    Project.find({ entrepreneur: entrepreneurId }).then(projects => {
        res.send(projects);
    }).catch(next);
}

exports.createProject = (req, res, next) => {
    const entrepreneurId = req.user._id;
    const { name, description, fundingGoal } = req.body;
    const project = new Project({ name, description, fundingGoal, entrepreneur: entrepreneurId });
    project.save().then(savedProject => {
        res.status(201).send(savedProject);
    }).catch(next);
}