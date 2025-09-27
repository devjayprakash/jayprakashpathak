const path = require("path");
const express = require("express");
const compression = require("compression");

const isTest = process.env.NODE_ENV === "test";

async function createServer(root = process.cwd()) {
  const resolve = (p) => path.resolve(__dirname, p);
  const indexProd = require("fs").readFileSync(
    resolve("../dist/client/index.html"),
    "utf-8"
  );
  const app = express();

  app.use(compression());
  app.use(
    express.static(resolve("../dist/client"), {
      index: false,
    })
  );

  app.use(async (req, res) => {
    try {
      const url = req.originalUrl;
      const render = require(resolve("../dist/server/entry-server.js")).render;
      const appHtml = render(url);
      const html = indexProd.replace(`<!--ssr-outlet-->`, appHtml);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app };
}

let app;
createServer().then((result) => {
  app = result.app;
});

module.exports = app;
