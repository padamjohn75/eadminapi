import express from "express";

const router = express.Router();

import { loginValidation } from "../middleware/formValidationMiddleware.js";

router.all("*", (req, res, next) => {
  console.log("got hit");

  next();
});

router.post("/", loginValidation, (req, res) => {
  console.log(req.body);
  res.json({ message: "login requested" });
});

// router.post();

export default router;
