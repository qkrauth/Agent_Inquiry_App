const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./util/database");
const {PORT} = process.env;
const path = require("path");
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

app.use(express.static(path.resolve(__dirname, "../build")));

app.post("/register", register);
app.post("/login", login);

app.get("/getAgents", getAgents);

app.get("/userteam/:userId", isAuthenticated, getTeam);
app.post("/userteam/:userId", isAuthenticated, addAgent);
app.delete("/userteam/:id", isAuthenticated, deleteAgent);

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "..build", "index.html"))
});

db
// .sync({force: true})
// .then(() => seed())


app.listen(PORT, () => console.log(`server running on port ${PORT}`));