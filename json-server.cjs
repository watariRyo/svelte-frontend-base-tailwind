module.exports = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
};

module.exports = () => require('./db.json');
