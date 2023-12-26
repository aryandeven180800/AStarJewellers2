const http = require('http');

const port = 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is your Node.js server!');
  console.log(`${req.method} ${req.url}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Choose a different port.`);
  } else {
    console.error('Server error:', error);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
