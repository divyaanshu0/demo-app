const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/api/hello', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({ message: 'Hello from backend!', time: result.rows[0].now });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
