const express = require('express');
const app = express();

app.get('/malak', (req, res) => {
  res.send('Malak Amayreh');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});