import express from "express";
const app = express();
const port = 3000;

// Implement a GET API in Node.js that takes two numbers as parameters,
// adds them, and sends the result. Create validations around input parameters to accept numeric values.
// Additionally, incorporate authentication using middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello CodeSandbox!");
});

function middleware(req: any, res: any, next: any) {
  try {
    if (req.query.number1 && req.query.number2) {
      Number(req.query?.number1);
      Number(req.query?.number2);
      req.validated = true;
      next();
    }
  } catch (err) {
    //if not a number it fails Number and catches error
    req.validated = false;
    res.status(400).send("Invalid number");
  }
}

app.get("/validate-api", middleware, (req: any, res, next) => {
  if (req.validated) {
    const { number1, number2 } = req.query as any;
    const sum = Number(number1) + Number(number2);
    res.send(sum?.toString());
  } else {
    res.status(401).send("Invalid numbers in Request.");
  }
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
