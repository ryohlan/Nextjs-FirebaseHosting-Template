const functions = require('firebase-functions');
const next = require('next');
const { createServer } = require('http');
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'build' } });
const handle = app.getRequestHandler()
const port = process.argv[2] || 4000;

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res))
})

exports.start = () => {
  app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl);    
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
};
