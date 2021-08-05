const { spawn } = require("child_process");

const child = spawn("find", ["./rc", "-type", "f"]);

child.stdout.on("data", data  => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on("data", data => {
  console.log(`child stderr:\n${data}`);
});

child.on("exit", (code, signal) => {
  console.log(`Child process exited with code ${code} and signal ${signal}`);
});

