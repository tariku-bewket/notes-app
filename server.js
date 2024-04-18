const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const path = require('path');

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/root'));

app.use('*', (req, res) => {
  res.status(404);

  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, '.', 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not found' });
  } else {
    res.type('txt').send('400 Not found');
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
