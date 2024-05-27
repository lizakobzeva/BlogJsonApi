const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001
const guards_1 = require("./guards");
const users_1 = require("./users");
// @ts-ignore shut the compiler up about defining in two steps
const middlewares = [users_1.default, guards_1.default];
Object.defineProperty(middlewares, "rewriter", {
  value: guards_1.rewriter,
  enumerable: false,
});
module.exports = middlewares;

server.use(middlewares);
server.use(router);

server.listen(port);
