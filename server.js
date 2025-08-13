const http = require('http');
const hostname = '127.0.0.9';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.url === '/' || req.url === '/home') {
    res.end('Home Page, Welcome Chetanya!');

  } else if (req.url === '/contact') {
    res.end('Contact me at: chetanya0402.be23@chitkara.edu.in');

  } else {
    res.statusCode = 404;
    res.end('404 - Page Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
