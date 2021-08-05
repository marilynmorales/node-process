let net = require("net");
let sock = net.connect(8003);
let sock2 = net.connect(8003);
process.stdin.pipe(sock);
process.stdin.pipe(sock2);
sock.pipe(process.stdout);
sock2.pipe(process.stdout);
