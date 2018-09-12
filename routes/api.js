var express = require('express');
var router = express.Router();

const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../cosmosconfig");
const TaskDao = require("../models/taskDao");
const Task = require("../models/task");

const cosmosClient = new CosmosClient({
  endpoint: config.host,
  auth: {
    masterKey: config.authKey
  }
});
const taskDao = new TaskDao(cosmosClient, config.databaseId, config.containerId);
taskDao.init();

/* GET users listing. */
router.get('/api/demo', function(req, res) {
  res.json({ msg: 'From the Node-Backend'});
});

router.get('/', function(req, res) {
  res.redirect('/app/');
});

router.get('/tasks', async function(req, res, next) {
	const querySpec = {
     query: "SELECT * FROM root r",
     parameters: []
   };

	const items = await taskDao.find(querySpec);
  
  const tasks = items.map(item => new Task(item.name, item.completed));

	res.json(tasks);
});

/* GET welcome view */
router.get('/views/welcome', function(req, res) {
  res.render('welcome', {nodePort: require('../app').get('port')});
});

module.exports = router;
