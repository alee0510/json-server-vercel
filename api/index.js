const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// allow write function
const fs = require("fs");
const path = require("path");
const dbFile = path.resolve(process.cwd(), "db.json");

const data = JSON.parse(fs.readFileSync(dbFile, "utf-8"));
const router = jsonServer.router(data);

// add middleware
server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  server(req, res);
};
