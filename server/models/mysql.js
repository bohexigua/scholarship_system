const Clinet = require('mysql-pro');

var client = new Clinet({
	mysql: {
		host: "115.159.64.93",
		post: 3306,
		database: "scholarship_system",
		user: "root",
		password: "aixiaozi1"
	}
});

module.exports = client;