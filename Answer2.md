In Mongoose, we can ensure that each product in the "Product" collection has a valid category assigned to it by using the reference option in our schema definition. This allows Mongoose to create a relationship between the two collections.

Example :
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCategorySchema = new Schema({
name: { type: String, required: true },
desc: String,
created_at: Date,
modified_at: Date,
deleted_at: Date
});

const ProductSchema = new Schema({
name: { type: String, required: true },
desc: String,
SKU: String,
category: { type: Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
inventory_id: Number,
price: Number,
discount_id: Number,
created_at: Date,
modified_at: Date,
deleted_at: Date
});

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema);
const Product = mongoose.model('Product', ProductSchema);

// When creating a new product, we first ensure that the category exists
let category = await ProductCategory.findById(category_id);
if (!category) {
throw new Error('Invalid category ID');
}

// Then we create the product with the valid category ID
const product = new Product({
name: 'Product1',
category: category_id,
....
});

In this example, the category field in the Product schema is a reference to a ProductCategory document. When we create a new product, you first ensure that the category exists by trying to find it in the ProductCategory collection. If the category doesn't exist, you throw an error. If the category does exist, you create the product with the valid category ID.

This way, you can ensure that each product has a valid category assigned to it. If you try to insert a product with a category iD that doesn't exist in the ProductCategory collection, the application will throw an error.
