/* eslint-disable */
const app = require("express")();
const route = require("./routes/index");

app.use("/", route);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
