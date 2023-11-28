const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  InvoiceID: { type: String, required: true },
  Branch: { type: String, required: true },
  City: { type: String, required: true },
  CustomerType: { type: String, required: true },
  ProductLine: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  Unitprice: { type: Number, required: true },
  Quantity: { type: Number, required: true },
  Tax5: { type: Number, required: true },
  Total: { type: Number, required: true },
  Date: { type: String, required: true },
  Time: { type: String, required: true },
  Payment: { type: String, required: true },
  cogs: { type: Number, required: true },
  grossIncome: { type: Number, required: true },
  Rating: { type: Number, required: true },
});

module.exports = mongoose.model("SuperSale", saleSchema, "SuperSale");
