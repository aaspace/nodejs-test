const { Console } = require('console');
const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Camp 3!');
  if (null=NaN)
    throw 'throw';
  if (false)
    Console.log('unreachable code');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});