const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCategorySchema = new Schema({
  name: { type: String, required: true },
  desc: String,
  created_at: Date,
  modified_at: Date,
  deleted_at: Date
});

const ProductInventorySchema = new Schema({
  quantity: { type: Number, required: true },
  created_at: Date,
  modified_at: Date,
  deleted_at: Date
});

const DiscountSchema = new Schema({
  name: { type: String, required: true },
  desc: String,
  discount_percent: { type: Number, required: true },
  active: { type: Boolean, required: true },
  created_at: Date,
  modified_at: Date,
  deleted_at: Date
});

const ProductSchema = new Schema({
  name: { type: String, required: true },
  desc: String,
  SKU: String,
  category: { type: Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
  inventory: { type: Schema.Types.ObjectId, ref: 'ProductInventory', required: true },
  price: { type: Number, required: true },
  discount: { type: Schema.Types.ObjectId, ref: 'Discount' },
  created_at: Date,
  modified_at: Date,
  deleted_at: Date
});

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', ProductInventorySchema);
const Discount = mongoose.model('Discount', DiscountSchema);
const Product = mongoose.model('Product', ProductSchema);