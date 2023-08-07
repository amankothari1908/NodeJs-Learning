/**
 * core modules needed for basic setup
 * using http module for creating a server
 **/
const http = require("http");

const routes = require("./routes");

// creating a server , if we need to end this server forecfully then we
// use process.exit() method to close the server after all req is handled.
// headers are the meta data added to req and res.
const server = http.createServer(
  //console.log(req.url, req.headers, req.method);
  //process.exit()
  routes
);

server.listen(4000);
