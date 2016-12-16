var connectionProvider = require("./mySqlConnectionProvider.js");
var operations = {
	getAllOperations: function(callback){
		var con = connectionProvider.mySqlConnectionProvider.getSqlConnection();
		var calculations = [];
		var sqlStatement = 'select * from calculations';
		if(con){
			con.query(sqlStatement,function(err,rows,fields){
				if(err)
					throw err;
				rows.forEach(function(row){
					calculations.push(row);
				});
				callback(calculations);
			});
		}
		connectionProvider.mySqlConnectionProvider.closeSqlConnection(con);
	},
	insertOperation: function(data){
		var con = connectionProvider.mySqlConnectionProvider.getSqlConnection();
		var sqlStatement = 'insert into `calculations` values ('+null+','+parseInt(data.value1)+','+parseInt(data.value2)+',"'+data.operation+'",'+data.result+');';
		if(con){
			con.query(sqlStatement,function(err,rows,fields){
				if(err)
					throw err;
				console.log('Successfully sended!');
			});
		}
		connectionProvider.mySqlConnectionProvider.closeSqlConnection(con);
	}
};
exports.operations = operations;