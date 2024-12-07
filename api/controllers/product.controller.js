const productModel = require('../models/product.model')

const addNewProduct = async (req, res) => {
    try {
        await productModel({
            ...req.body,
        }).save();

        return res.status(200).json("Product added")
    } catch (err) {
        return res.status(500).json(err)
    }
}

const getAllProducts = async (req, res) => {
    try {
        const data = await productModel.find()

        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json(err)
    }
}

const getProduct = async (req, res) => {
    try {
        // const params = req.params
        const data = await productModel.findOne({ id: req.body.id })

        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json(err)
    }
}


module.exports = { addNewProduct, getAllProducts, getProduct }