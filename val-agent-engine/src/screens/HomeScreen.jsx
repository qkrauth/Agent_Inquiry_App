import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const HomeScreen = () => {
  const [agents, setAgents] = useState([]);

  const getData = () => {
    axios
      .get("/api/getAgents")
      .then((res) => {
        console.log(res.data);
        setAgents(res.data.agents)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const agentOptions = agents.map((player) => {
    return <Card player={player} />
  })

  return (
    <div>
      <div className="search-section">
        <input type="text" placeholder="Search Agent:" className="search-bar" />
      </div>
      <div className="card-section">
        {agentOptions}
      </div>
    </div>
  );
};

export default HomeScreen;
