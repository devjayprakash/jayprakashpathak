import compression from "compression";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer(root = process.cwd()) {
  const resolve = (p) => path.resolve(__dirname, p);
  const indexProd = fs.readFileSync(
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
      const mod = await import(
        pathToFileURL(resolve("../dist/server/entry-server.js")).href
      );
      const render = mod.render;
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

let appPromise;

function getApp() {
  if (!appPromise) {
    appPromise = createServer().then((result) => result.app);
  }
  return appPromise;
}

export default async (req, res) => {
  const app = await getApp();
  return app(req, res);
};
