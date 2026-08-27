const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/todos", async (req, res) => {
    const result = await pool.query("SELECT * FROM todos ORDER BY id");
    res.json(result.rows);
});

app.post("/api/todos", async (req, res) => {
    const result = await pool.query(
        "INSERT INTO todos (text) VALUES ($1) RETURNING *",
        [req.body.text]
    );

    res.json(result.rows[0]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});