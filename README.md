pro vlozeni iframu je potreba vlozit tento kod:
<iframe src="https://vite-react-express-for-iframe.glitch.me/cast-webu" width="600" height="400"></iframe>
ta stranka "embedded-content" vytvorena pomoci expressu (server.js) je to co vkladas

Výchozí chování některých prohlížečů a serverů může blokovat vložení stránek do <iframe> z bezpečnostních důvodů. Pokud je to potřeba, můžete odstranit hlavičku X-Frame-Options, aby vaše stránka mohla být vložena do jiných webů.

V Expressu můžete použít middleware jako helmet, ale pokud chcete tuto hlavičku odstranit, přidejte následující kód:

javascript
Copy code
const app = express();

// Odstranění hlavičky X-Frame-Options
app.use((req, res, next) => {
    res.removeHeader('X-Frame-Options');
    next();
});