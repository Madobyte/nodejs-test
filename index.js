const http = require("http");
const fs = require("fs");
const url = require("url");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename =
    q.pathname === "/" ? "pages/index.html" : `pages/${q.pathname}.html`;

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(302, { Location: "/404" });
      return res.end();
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
