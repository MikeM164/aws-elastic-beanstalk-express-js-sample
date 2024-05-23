const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Second Devops pipeline has been updated with Review Stage!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
