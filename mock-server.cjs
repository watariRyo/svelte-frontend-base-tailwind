// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const bufferJson = fs.readFileSync('db.json');
const dataJson = bufferJson.toString();
const dbJson = JSON.parse(dataJson);

const server = jsonServer.create();
const router = jsonServer.router(dbJson);
const middlewares = jsonServer.defaults();

const defaultRender = router.render;

server.use(middlewares);
server.use(jsonServer.bodyParser);

const validateRequest = (req, res, next) => {
	if (req.method === 'POST' && !req.body.userId) {
		router.render = (req, res) => {
			res.status(400).jsonp({ error: 'userId is required' });
		};
	} else {
		router.render = (req, res) => defaultRender(req, res);
	}
	next();
};

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
});
server.use(validateRequest);
server.use(router);

server.listen(4000, () => {
	console.log('JSON Server is running. http://localhost:4000');
});
