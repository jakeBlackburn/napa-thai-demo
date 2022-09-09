function requireHTTPS(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(requireHTTPS);
app.use(express.static('./dist/napa-thai-demo'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/napa-thai-demo'}
  );
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});