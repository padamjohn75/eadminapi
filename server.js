import express from "express";
const app = express();

import cors from "cors";
import morgan from "morgan";

// using middleware
app.use(cors());
app.use(morgan("tiny"));

const PORT = process.env.PORT || 8000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`server is run at http://localhost:${PORT}`);
});
