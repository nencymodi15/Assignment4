var Employee = require("./models/employee");

/*// get all employee data from db
app.get("/api/employees", async function (req, res) {
  try {
    // use mongoose to get all todos in the database
    const employees = await Employee.find().exec();
    res.json(employees); // return all employees in JSON format
  } catch (err) {
    // handle the error
    res.status(500).send(err.message);
  }
});

// get an employee with ID of 1
app.get("/api/employees/:employee_id", function (req, res) {
  let id = req.params.employee_id;
  Employee.findById(id)
    .exec()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// create employee and send back all employees after creation
app.post("/api/employees", function (req, res) {
  // create mongoose method to create a new record into the collection
  console.log(req.body);

  Employee.create({
    name: req.body.name,
    salary: req.body.salary,
    age: req.body.age,
  })
    .then((employee) => {
      // get and return all the employees after the newly created employee record
      return Employee.find();
    })
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// update employee and send back all employees after update
app.put("/api/employees/:employee_id", function (req, res) {
  // create mongoose method to update an existing record in the collection
  console.log(req.body);

  let id = req.params.employee_id;
  var data = {
    name: req.body.name,
    salary: req.body.salary,
    age: req.body.age,
  };

  // update the user and get all employees
  Employee.findByIdAndUpdate(id, data)
    .then((employee) => {
      return Employee.find();
    })
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// delete an employee by id and send back all employees after deletion
app.delete("/api/employees/:employee_id", function (req, res) {
  let id = req.params.employee_id;
  Employee.findOneAndDelete({ _id: id })
    .then(() => {
      return Employee.find();
    })
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});*/
