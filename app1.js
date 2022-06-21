
const http = require('http');

let server = http.createServer( (request,response) => {
    response.end("hello");
  
  }
)
server.listen(3000);