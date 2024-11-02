const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('En visitant https://localhost:3000. Le navigateur affiche un avertissement de sécurité, car le certificat n’est pas signé par une autorité de confiance CA, mais on peut ignorer cet avertissement pour tester localement.');
});

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const port = 3000;
https.createServer(options, app).listen(port, () => {
  console.log(`Server running securely at https://localhost:${port}`);
});

