const { Agent } = require("../util/models");
const { User } = require("../util/models");
const { Team } = require("../util/models");
require("dotenv").config();

module.exports = {
  getAgents: async (req, res) => {
    let agents = await Agent.findAll();
    res.status(200).send({ agents });
  },

  getTeam: async (req, res) => {
    try {
      const { userId } = req.params;
      const agents = await Team.findAll({
        where: { userId: userId },
        include: [
          {
            model: Agent,
            require: true,
            attributes: ["image", "name", "born", "role", "abilities", "ult"],
          },
        ],
      });
      res.status(200).send(agents);
    } catch (error) {
      console.log("ERROR IN getTeam");
      console.log(error);
      res.sendStatus(400);
    }
  },

  addAgent: async (req, res) => {
    try {
      const { userId, agentId } = req.body;
      await Team.create({ userId, agentId });
      res.sendStatus(200);
    } catch {
      console.log("ERROR IN addAgent");
      console.log(error);
      res.sendStatus(400);
    }
  },

  deleteAgent: async (req, res) => {
    try {
        const {id} = req.params
        await Team.destroy({where: {id: +id}})
        res.sendStatus(200)
    } catch {
        console.log("ERROR IN deleteAgent")
        console.log(error)
        res.sendStatus(400)
    }
  },
};
