const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(302, { Location: "/404.html" });
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
