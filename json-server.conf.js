var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var port = 3000;

server.use(middlewares);
server.use(router);
server.listen(port, function () {
  console.log('JSON Server is running. Open http://localhost:' + port + ' to have access to your fake API database');
});
