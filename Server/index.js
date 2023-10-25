const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv=require('dotenv')
const { sequelize } = require("./models");


dotenv.config()


const app = express();
// Serve static files from the "public" folder under the "/public" URL
app.use('/public', express.static('public'));




app.use(cors({credentials: true, origin: true, exposedHeaders: '*'}))




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const db = require("./models");
const tasksRoutes = require("./routes/tasks.routes");
sequelize.authenticate().then(() => {
//   sequelize.sync().then(() => {
//     console.log('Book table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// db.sequelize.sync({ force: true }).then(() => {

//     console.log("Drop and re-sync db.");
    
//     });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.use('/',tasksRoutes)

// set port, listen for requests
const PORT = process.env.APP_PORT || 8080 ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 