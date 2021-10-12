/* eslint-disable */
const express = require("express");
const route = require("./routes/index");

const app = express();
app.use(express.json());
app.use("/", route);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
