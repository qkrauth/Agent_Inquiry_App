import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const HomeScreen = () => {
  const [agents, setAgents] = useState([]);
  const [trim, setTrim] = useState("");

  const getData = () => {
    axios
      .get("/api/getAgents")
      .then((res) => {
        console.log(res.data);
        setAgents(res.data.agents);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const agentOptions = agents
    .filter((player) => {
      let searchAgent = player.name.toLowerCase();
      let searchParams = trim.toLowerCase();

      return searchAgent.includes(searchParams);
    })
    .map((player) => {
      return <Card player={player} />;
    });

  return (
    <div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search Agent:"
          className="search-bar"
          value={trim}
          onChange={(e) => setTrim(e.target.value)}
        />
      </div>
      <div className="card-section">{agentOptions}</div>
    </div>
  );
};

export default HomeScreen;
