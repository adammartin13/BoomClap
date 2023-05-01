const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Song = require("./dataSchema.js");
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/boomclapdb",
    {
        dbName: "boomclapdb",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const port = process.env.PORT || 4000;
const host = "localhost";

app.listen(port, () => {
    console.log(`App listening at http://%s:%s`, host, port);
});

app.get("/", async (req, resp) => {
    const query = {};
    const allSongs = await Song.find(query);
    console.log(allSongs);
    resp.send(allSongs);
});