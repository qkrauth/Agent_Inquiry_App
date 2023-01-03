import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../components/Card";
import AuthContext from "../store/authContext";

const HomeScreen = ({addAgent}) => {
  const { userId } = useContext(AuthContext);
  const authCtx = useContext(AuthContext);

  const [agents, setAgents] = useState([]);
  const [trim, setTrim] = useState("");

  const getData = () => {
    axios
      .get("/getAgents")
      .then((res) => {
        console.log(res.data);
        setAgents(res.data.agents);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const addAgent = (agent) => {
  //   axios
  //   .post(`/userteam/${authCtx.userId}`, {userId:authCtx.userId}, {authorization:authCtx.token})
  //   .then((res) => {
  //     alert("Agent has been added")
  //   })
  // };

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
      return <Card player={player} addAgent={addAgent} team={false} />;
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
