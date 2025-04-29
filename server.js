const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Points to your db.json file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;

// Set up middlewares
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
