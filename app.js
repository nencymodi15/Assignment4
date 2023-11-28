var express = require("express");
var mongoose = require("mongoose");
var app = express();
var database = require("./config/database");
const exphbs = require("express-handlebars");
var bodyParser = require("body-parser"); // pull information from HTML POST (express4)

var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: "true" })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: "application/vnd.api+json" })); // parse application/vnd.api+json as json

mongoose.connect(database.url);
//seting th etamplate engine
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

//Queswtion 2 Starting
const Supersale = require("./models/supersale");

// Route to get all invoices with sorting and filtering
app.get("/api/supersale", async (req, res) => {
  try {
    let query = {};

    // Filtering by branch
    if (req.query.branch) {
      query.Branch = req.query.branch;
    }

    // Sorting
    let sort = {};
    if (req.query.sortBy) {
      sort[req.query.sortBy] = req.query.sortOrder === "desc" ? -1 : 1;
    }

    const invoices = await Supersale.find(query).sort(sort).exec();
    const jsonData = JSON.parse(JSON.stringify(invoices));
    res.render("viewdata", { salesData: jsonData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Show a specific invoice (based on the _id or invoiceID)
app.get("/api/supersale/:id", async function (req, res) {
  try {
    const supersale = await Supersale.findOne({
      InvoiceID: req.params.id,
    }).exec();
    if (!supersale) {
      return res.status(404).send("Supersale not found");
    }
    res.json(supersale);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Define a route to render the insertInvoice.handlebars page
app.get("/insertSales", (req, res) => {
  res.render("inserdata");
});

//Insert a new invoice
app.post("/api/supersale", async (req, res) => {
  try {
    console.log(req.body);
    const newSale = await Supersale.create(req.body);
    res.status(201).json(newSale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//Delete an existing invoice (based on the _id or invoiceID)

app.delete("/api/supersale/:id", async function (req, res) {
  try {
    const result = await Supersale.findOneAndDelete({
      InvoiceID: req.params.id,
    }).exec();
    if (!result) {
      return res.status(404).send("Supersale not found");
    }
    res.json({ message: "Supersale deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//Update “Customer type” & “unit price” of an existing invoice (based on the _id or invoiceID)
app.put("/api/supersale/:id", async function (req, res) {
  try {
    const updatedSupersale = await Supersale.findOneAndUpdate(
      { InvoiceID: req.params.id },
      {
        $set: {
          CustomerType: req.body.CustomerType,
          Unitprice: req.body.Unitprice,
        },
      },
      { new: true }
    ).exec();

    if (!updatedSupersale) {
      return res.status(404).send("Supersale not found");
    }

    res.json(updatedSupersale);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.listen(port);
console.log("App listening on port : " + port);
