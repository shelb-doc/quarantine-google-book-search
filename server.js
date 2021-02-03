const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) =>{
    res.json({
        success: true,
    });
});

app.listen(PORT, () => {
    console.log('Server works on http://localhost:3001');
});

