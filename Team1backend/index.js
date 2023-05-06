const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./dataSchema.js");

const app = express();

var ObjectId = require('mongodb').ObjectId;

app.use(express.json());
app.use(cors());
app.use('/images', express.static('images'));

mongoose.connect("mongodb://127.0.0.1:27017/reactdata",
    {
        dbName: "reactdata",
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
    const allProducts = await Product.find(query);
    console.log(allProducts);
    resp.send(allProducts);
});

app.get("/:id", async (req, resp) => {
    const id = req.params.id;
    const query = { _id: id };
    const oneProduct = await Product.findOne(query);
    console.log(oneProduct);
    resp.send(oneProduct);
});

app.delete("/delete", async (req, res) => {
    try{
        const query = { _id: req.body._id };
        await Product.deleteOne(query);
    } catch(error){
        console.log("Delete error: " + error);
    }
});

app.post("/insert", async (req, res) => {
    console.log(req.body);
    const p_id = new ObjectId();
    const ptitle = req.body.title;
    const pprice = req.body.price;
    const pcategory = req.body.category;
    const pimage = req.body.image;

    const formData = new Product({
        _id: p_id,
        title: ptitle,
        price: pprice,
        category: pcategory,
        image: pimage,
    });

    try {
        // await formData.save();
        await Product.create(formData);
        const messageResponse = { message: `Product ${p_id} added correctly` };
        res.send(JSON.stringify(messageResponse));
    } catch (err) {
        console.log("Error while adding a new product:" + err);
    }
});

app.post("/update", async (req, res) => {
    console.log(req.body);
    const p_id = req.body._id;
    const ptitle = req.body.title;
    const pprice = req.body.price;
    const pcategory = req.body.category;
    const pimage = req.body.image;

    const formData = new Product({
        _id: p_id,
        title: ptitle,
        price: pprice,
        category: pcategory,
        image: pimage,
    });

    try {
        // await formData.save();
        await Product.create(formData);
        const messageResponse = { message: `Product ${p_id} update correctly` };
        res.send(JSON.stringify(messageResponse));
    } catch (err) {
        console.log("Error while updating product:" + err);
    }
});