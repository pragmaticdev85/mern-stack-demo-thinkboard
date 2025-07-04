export function getAllProducts(req, res) {
    res.send("You have 10 products");
}

export function createProduct(req, res) {
    res.status(201).send("Product created successfully");
}   

export function updateProduct(req, res) {
    const { id } = req.params;
    res.status(200).send(`Product with ID ${id} updated successfully`);
}

export function deleteProduct(req, res) {
    const { id } = req.params;
    res.status(200).send(`Product with ID ${id} deleted successfully`);
}
