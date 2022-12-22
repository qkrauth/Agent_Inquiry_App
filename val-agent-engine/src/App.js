import './App.css';
import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Header from './components/Header';
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from './screens/AuthScreen';
import TeamScreen from "./screens/TeamScreen";
import MapScreen from './screens/MapScreen';
import Footer from './components/Footer';
import AuthContext from './store/authContext';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/auth" element={!authCtx.token ? <AuthScreen /> : <Navigate to="/" />} />
        <Route path="/team" element={authCtx.token ? <TeamScreen /> : <Navigate to="/auth" />} />
        <Route path="/map" element={authCtx.token ? <MapScreen /> : <Navigate to="/auth" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
