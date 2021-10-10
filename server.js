/* eslint-disable */
const app = require("express")();
const route = require("./routes/index");

app.use("/", route);

app.listen(process.env.PORT || 5000);

export default app;
