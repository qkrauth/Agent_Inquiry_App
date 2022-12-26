const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./util/database");
const {SERVER_PORT} = process.env;
const seed = require("./util/seed");
const {Agent, User, Team} = require("./util/models");
const {getAgents, getTeam, addAgent, deleteAgent} = require("./controllers/agents");

const {register, login} = require("./controllers/auth");
const {isAuthenticated} = require("./middleware/isAuthenticated");

require("dotenv").config();

User.hasMany(Agent);
User.hasMany(Team);

Agent.belongsTo(User);
Agent.hasMany(Team);

Team.belongsTo(User);
Team.belongsTo(Agent);


app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login);

app.get("/getAgents", getAgents);

app.get("/userteam/:userId", isAuthenticated, getTeam);
app.post("/userteam/:id", isAuthenticated, addAgent);
app.delete("/userteam/:id", isAuthenticated, deleteAgent);

db
.sync({force:true})
.then(() => seed())


app.listen(SERVER_PORT, () => console.log(`server running on port ${SERVER_PORT}`));