
module.exports = (sequelize, Sequelize) => {
  const tasks = sequelize.define("Tasks", {
    Heading: {
      type: Sequelize.STRING,
    },
    Discription: {
      type: Sequelize.STRING,
    },
    Image:{
      type: Sequelize.STRING, 
    },
    Status: {
      type: Sequelize.STRING,
    },
  });

  return tasks;
};
