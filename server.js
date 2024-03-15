import app from "./src/app.js";

// Todo: Listen a Server
app.listen(process.env.PORT, () => {
  console.log(
    `Server is Working on Port No: ${process.env.PORT} on ${process.env.NODE_ENV} mode`,
  );
});
