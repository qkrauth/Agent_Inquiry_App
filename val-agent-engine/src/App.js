import './App.css';
import React, {useState, useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Header from './components/Header';
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from './screens/AuthScreen';
import TeamScreen from "./screens/TeamScreen";
import MapScreen from './screens/MapScreen';
import Footer from './components/Footer';
import AuthContext from './store/authContext';
import axios from 'axios';

function App() {
  const authCtx = useContext(AuthContext);
  const { userId } = useContext(AuthContext);

  const [agent, setAgent] = useState([]);
  const [team, setTeam] = useState([])

  const addAgent = (agent) => {
    axios
    .post(`/userteam/${authCtx.userId}`, {userId:authCtx.userId, agentId:agent.id}, {headers:{authorization:authCtx.token}})
    .then((res) => {
      alert("Agent has been added")
    })
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen addAgent={addAgent} team={team}/>} />
        <Route path="/auth" element={!authCtx.token ? <AuthScreen /> : <Navigate to="/" />} />
        <Route path="/team" element={authCtx.token ? <TeamScreen /> : <Navigate to="/auth" />} />
        <Route path="/map" element={authCtx.token ? <MapScreen /> : <Navigate to="/auth" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
