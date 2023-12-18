import product from "../Models/productModel.js";


export const createproduct = async(req, res) => {
    const { name, category, description, image, price, countInstock } = req.body;

    const product = await product.create(

        {
            name,
            category,
            description,
            image,
            price,
            countInstock
        }
    );
    if (product) {
        res.status(201).json({
            message: 'product created'
        })
    } else {
        res.status(500).json({
            message: 'product not  created'
        })
    }
}
export const updateproduct = async(req, res) => {
    const { name, category, description, image, price, countInstock } = req.body;

    const product = await product.findById(req.parmas.id)

    if (product) {
        product.name = name
        product.category = category
        product.description = description
        product.image = image
        product.price = price
        product.countInstock = countInstock


    } else {
        res.status(404).json({
            message: ' product not found'
        });
    }
    const updateproduct = await product.save();

    if (updateproduct) {
        res.status(201).json(
            updateproduct)

    }
}

export const deleteproduct = async(req, res) => {


    const product = await product.findByIdAndDelete(req.parmas.id)

    if (product) {
        res.status(200).json({
            message: 'deleted product'
        })
    }
}