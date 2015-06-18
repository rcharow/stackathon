var express = require('express')
var router = express.Router()
var data = require('../data/data')

module.exports = router

router.get('/',function (req, res, next){
	data.getLiveStations()
	.then(function (stations){
		res.json(stations)
	})
	.catch(function (err){
		console.log("Error getting stations", err)
	})
})