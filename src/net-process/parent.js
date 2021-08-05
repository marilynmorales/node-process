const path = require("path");

let child = require("child_process").fork(path.join(__dirname, "child.js"));
let server = require("net").createServer();

server.on("connection", socket => {
  socket.end("Parent handled connection");
});

server.listen(8003, () => {
  child.send("Passing down server", server)
});
