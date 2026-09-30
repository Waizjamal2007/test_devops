const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Say Hello API route
app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Say Hello' });
});

app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});

// Server export for testing (important for Jest & Supertest)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;