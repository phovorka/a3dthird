const express = require('express');
const app = express();

// Middleware pro odstranění X-Frame-Options hlavičky
app.use((req, res, next) => {
  res.removeHeader('X-Frame-Options');
  next();
});

app.get('/cast-webu', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="cs">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Embedovatelná část</title>
    </head>
    <body>
        <h1>Toto je část webu, kterou lze vložit do iframe</h1>
        <p>Tento obsah je viditelný v rámci jiných stránek pomocí iframe.</p>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server běží na http://localhost:3000');
});