const mongoose = require('mongoose');
const express = require('express');
const Todolistmodel = require('../Model/Todolistmodel');

const router = express.Router();

// Add a new task
router.post('/get', async (req, res) => {
    try {
        console.log(req.body);
        const data = new Todolistmodel(req.body);
        await data.save();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error adding task:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get all tasks
router.get('/getall', async (req, res) => {
    try {
        const data = await Todolistmodel.find();
        console.log(data);
        return res.status(200).json({ result: data });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// Update a task
router.put('/update', async (req, res) => {
    console.log(req.body)
    try {
        const data = await Todolistmodel.findOneAndUpdate(
            { _id: req.body.title },
            { $set: { title: req.body.updatevalue } },
            { new: true } // Return updated document
        );
        return res.status(200).json({ result: data });
    } catch (error) {
        console.error("Error updating task:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// Delete a task
router.delete('/delete', async (req, res) => {
    try {
        console.log(req.body.title)
        const data = await Todolistmodel.findOneAndDelete({ title: req.body.title });
        return res.status(200).json({ result: data });
    } catch (error) {
        console.error("Error deleting task:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
