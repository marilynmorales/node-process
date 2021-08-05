console.log("running");

setInterval(() => {}, 1e6);

process.on("SIGINT", () => {
  console.log("Received interrupt signal!");
  process.exit(0);
});

