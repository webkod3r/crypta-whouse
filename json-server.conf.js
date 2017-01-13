var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var port = 3000;

server.use(middlewares);

//
// Custom routes
//
// Add this before server.use(router)
server.use(jsonServer.rewriter({
  //'/blog/:resource/:id/show': '/:resource/:id'
  '/categories/:category/secret_items/:secret': '/secret_items/:secret'
}));
server.use(router);

server.listen(port, function () {
  console.log('JSON Server is running. Open http://localhost:' + port + ' to have access to your fake API database');
  console.log('Open http://localhost:' + port + ' to have access to your fake API database');
  console.log('Hit CTRL + C to top');
});
