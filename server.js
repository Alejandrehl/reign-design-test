const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");
const getData = require("./utils/Algolia");

connectDB();

app.use(express.json({ extended: false }));
app.use("/api/articles", require("./routes/articles"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
getData();