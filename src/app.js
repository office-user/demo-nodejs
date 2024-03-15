import express from "express";
import { config } from "dotenv";

//DotEnv Path
config({
  path: "./data/config.env",
});

// Create a server
const app = express();

//Root Directory
app.get("/", (req, res) => {
  res.send("Hello World");
});

//
app.get("/home", (req, res) => {
  res.send("Welcome Home");
});

//Exporting the Express Object
export default app;
