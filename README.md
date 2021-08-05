# 4 Types of Child Processes
1. spawn()
  - launches a command in a new process. Streams ourput.
2. fork()
  - Like spawn, but with a `child.send` from available.
3. exec()
  - creates a shell. Buffers and outputs the entire value to the callback.
4. execFile()
  - Like exec but without a shell.
  
# Events
1. disconnect - when parent process calls `child.disconnect()` method
2. error - process can not be spawned or killed
3. close - stdio streams of a child process gets closed.
4. message - child evokes process.send(msg). How processes communicate.

# Exit code 1 or 0
- 0 normal
- 1 error

# 3 STDIO
1. stdin
2. stdout
3. stderr

`stdout`/`stderr` Child Process streams are readable and `stdin` is writable.
