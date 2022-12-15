const {Agent} = require("../util/models");

module.exports = {
    getAgents: async (req, res) => {
        let agents = await Agent.findAll()
        res.status(200).send({agents})
    }
};