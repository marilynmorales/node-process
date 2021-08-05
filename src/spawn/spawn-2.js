const { spawn } = require("child_process");
const child = spawn("wc");

// readable to writable
process.stdin.pipe(child.stdin);

child.stdout.on("data", data => {
  console.log(`child stdout:\n${data}`);
});

// run this file
// type something on the terminal
// hit CTRL+D
