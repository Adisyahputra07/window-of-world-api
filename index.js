const express = require("express");
const app = express();
// port
const port = 5000;
const router = require("./src/routes");

app.use(express.json());

app.use("/api/v1/", router);

app.listen(port, () => console.log(`listen on port ${port}`));
