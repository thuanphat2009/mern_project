const Product = require('../models/productModel');
const shortid = require('shortid');
const slugify = require('slugify');
exports.createProduct = (req, res) => {
    // res.status(200).json({ file: req.file, body: req.body});
    const { name, price, quantity, description, category, createBy } = req.body;
    let picture = [];
    if (req.files.length > 0) {
        picture = req.files.map((file) => {
            return { img: file.filename };
        });
    }
    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        picture,
        category,
        createBy: req.user._id,
    });
    product.save((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
            res.status(201).json({ product });
        }
    });
};
