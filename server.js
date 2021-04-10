import express from "express";
const app = express();

import cors from "cors";
import morgan from "morgan";

// using middleware
app.use(cors());
app.use(morgan("tiny"));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

const PORT = process.env.PORT || 8000;

// LOAD ROUTERS
import loginRouter from "./routers/login.router.js";

//USE APIS

app.use((req, res, next) => {
  const error = new Error("Resources not found");
  error.status = 404;
  next(error);
});

app.use("/api/v1/login", loginRouter);

app.get("/", function (req, res) {
  res.send("Hello World");
});

//handling error

import { handleError } from "./utils/errorHandler.js";
app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(PORT, (error) => {
  if (error) console.log(error);

  console.log(`server is run at http://localhost:${PORT}`);
});
