const express = require('express');
const app = express();
const port = 3000;

// Služba pro poskytování statických souborů
app.use(express.static('public'));

// Vytvoření jednoduché route pro část webu
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
            <h1>Toto je část webu, kterou lze vložit</h1>
            <p>Tento obsah je viditelný v rámci jiných stránek pomocí iframe.</p>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});