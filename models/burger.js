var connection = require("./connection.js");
var orm = require("./config/orm.js");


var selectAll = orm.selectAll();

var insertOne = orm.insertOne();

var updateOne = orm.updateOne();

exports.selectAll = selectAll;
exports.insertOne = insertOne;
exports.updateOne = updateOne;
