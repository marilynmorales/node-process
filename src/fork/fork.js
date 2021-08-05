const { fork } = require("child_process");

const forked = fork("./child.js");
forked.on("message", (message) => {
  console.log("Message from Child: ", message);
});

forked.send({hello: "world"});
