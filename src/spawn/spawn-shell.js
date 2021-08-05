const { spawn } = require("child_process");

// inherits main process stdin, stdout, and stderr. 
const child = spawn("find . -type f | wc -l", {
  stdio: "inherit",
  shell: true
});
