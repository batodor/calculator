var mysql = require('mysql');
var mySqlConnectionString = require('./mySqlConnectionString.js');
var mySqlConnectionProvider = {
	getSqlConnection: function(){
		var con = mysql.createConnection(mySqlConnectionString.mySqlConnectionString.connectionString.production);
		con.connect(function(err){
			if(err)
				throw err
			console.log("MySql успешно соединен!")
		});
		return con;
	},

	closeSqlConnection: function(currConn){
		currConn.end(function(err){
			if(err)
				throw err
			console.log("MySql успешно отключен!")
		})
	}
}
exports.mySqlConnectionProvider = mySqlConnectionProvider