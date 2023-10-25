const db = require("../models");
const Tasks = db.tasks;

exports.createTasks = async (req, res) => {
  try {
    const { Heading, Discription, Status } = req.body;
    const Image = req.files ? req.files.Image[0].filename : null;
    const Task = await Tasks.create({ Heading, Discription, Image, Status });
    res.status(201).json({ Task });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getAllTask = async (req, res) => {
  try {
    const getAllTasks = await Tasks.findAll({});
    res.status(200).json({ getAllTasks });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { Heading, Discription, Status } = req.body;
    let Image = null;
    if (req.files && req.files.Image && req.files.Image.length > 0) {
      Image = req.files.Image[0].filename;
    }
    const updateTasks = await Tasks.update(
      {
        Heading: Heading,
        Discription: Discription,
        Status: Status,
        Image: Image,
      },
      { where: { id } }
    );
    res.status(200).json({ updateTasks });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Tasks.destroy({ where: { id } });
    res.status(200).json("Deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.singleTasks = async (req, res) => {
    try {
        const {id} = req.params
       const SigleTask = await Tasks.findOne({ where: { id } });
        res.status(200).json(SigleTask)
    } catch (error) {
        res.status(400).json({ message: error.message || 'Not Avilabile' });
    }
}