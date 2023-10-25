const {createTasks, getAllTask, updateTask, deleteTask, singleTasks } = require("../controllers/tasks.controller.js");
const { uploadMultiple } = require("../helpers/fileUplode.js");

  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create_task",uploadMultiple,createTasks )
    router.get("/getAll_tasks",getAllTask)
    router.get("/single_task/:id",singleTasks)
    router.put("/update_task/:id",uploadMultiple,updateTask)
    router.delete("/delete_task/:id",deleteTask)

  
module.exports = router