// will check the base node libraries for this
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// will always give this path regardless on what its running on
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (request, response) => {
  console.log(request.url);

  // send back the html file

  // head
  response.writeHead(200, { 'Content-Type': 'text/html' });

  response.write(index);

  response.end();
};

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1:${port}`);
