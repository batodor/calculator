exports.index = function(req, res){
	res.render('index',{ title: 'Calculator for WantResult', year: new Date().getFullYear() });
};

exports.operationList = function(req, res){
	var cals = require('../connection/operations.js');
	cals.operations.getAllOperations(function(calculations){
		console.log(calculations);
		res.render('operationList',{
			title: "All Operations",
			calculations: calculations
		});
	});
};

exports.calculator = function(req, res){
	res.render('calculator',{ 
		title: 'Calculator'
	});
};