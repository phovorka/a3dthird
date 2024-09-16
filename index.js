const express = require('express');
const app = express();
const port = 3000;

// Odstranění X-Frame-Options
app.use((req, res, next) => {
    res.removeHeader('X-Frame-Options');
    next();
});

// Tvůj kód Expressu zde
app.get('/cast-webu', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="cs">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vložitelná část webu</title>
        </head>
        <body>
            <h1>Tato část webu může být vložena do iframe</h1>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});
