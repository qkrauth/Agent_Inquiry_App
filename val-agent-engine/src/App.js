import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header';
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from './screens/AuthScreen';
import TeamScreen from "./screens/TeamScreen";
import MapScreen from './screens/MapScreen';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/team" element={<TeamScreen />} />
        <Route path="/map" element={<MapScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
