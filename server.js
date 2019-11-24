const http = require("http");
const getTemplate = require("./template.js");

const server = http.createServer(function(req, res) {
  const data = {
    username: "</script><script>alert('d')</script>"
  };
  const payloadString = JSON.stringify(data);
  console.log("Sending");
  const template = getTemplate(data);
  console.log(template);
  res.setHeader("Content-Type", "application/html");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200);
  res.end(template);
});

server.listen(3000, function() {
  console.log("The server is listening on port " + 3000);
});
