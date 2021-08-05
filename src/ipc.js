setInterval(() =>{}, 1e6);
console.log(process.pid)
process.on("SIGUSR1", () => {
  console.log("Got a signal");
})
