const {Agent} = require("../util/models");

module.exports = {
    getAgents: async (req, res) => {
        let agents = await Agent.findAll()
        res.status(200).send({agents})
    },

    getTeam: (req, res) => {
        console.log("current team");
    },

    addAgent: (req, res) => {
        console.log("add agent");
    },

    deleteAgent: (req, res) => {
        console.log("delete agent");
    }
};