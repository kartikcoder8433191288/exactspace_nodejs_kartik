const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api', (req, res) => {
  const jsonData = req.body.json_data;
  console.log(jsonData);
  try {
    const data = JSON.parse(jsonData);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: 'Invalid JSON data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});