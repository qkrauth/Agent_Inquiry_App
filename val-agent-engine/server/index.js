const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./util/database");
const {SERVER_PORT} = process.env;
const seed = require("./util/seed");
const {Agent} = require("./util/models");
const {getAgents} = require("./controllers/agents");


require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/api/getAgents", getAgents);

db
.sync({force:true})
.then(() => seed())


app.listen(4000, () => console.log("running on PORT 4000"));