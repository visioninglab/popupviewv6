const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.mind': 'application/octet-stream',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(DIR, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + req.url);
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n  PopupView v6 Prototype Server`);
  console.log(`  ─────────────────────────────`);
  console.log(`  Local:     http://localhost:${PORT}`);
  console.log(`  Compiler:  http://localhost:${PORT}/compiler.html`);
  console.log(`  AR Demo:   http://localhost:${PORT}/index.html`);
  console.log(`\n  Steps:`);
  console.log(`  1. Open /compiler.html in your desktop browser`);
  console.log(`  2. Click "Compile" and download targets.mind`);
  console.log(`  3. Save targets.mind into the assets/ folder`);
  console.log(`  4. Open /index.html on your phone (same network)`);
  console.log(`     or use ngrok/localtunnel for HTTPS\n`);
});
