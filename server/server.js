// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const routes = require("./routes");

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes/index.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
