import React, {useState, useEffect, useContext} from "react";
import AuthContext from "../store/authContext";
import axios from "axios";
import Card from "../components/Card";

const TeamScreen = () => {
    const authCtx = useContext(AuthContext);
    const [team, setTeam] = useState([]);

    const getUserTeam = () => {
        axios.get(`/userteam/${authCtx.userId}`, {headers:{authorization:authCtx.token}})
            .then(res => {
                setTeam(res.data)
            })
            .catch((error) => console.log("error in getUserTeam"))
    }

    useEffect(() => {
        getUserTeam()
    }, []);

    const deleteAgent = (id) => {
        axios.delete(`/userteam/${id}`, {headers:{authorization:authCtx.token}})
        .then(res => {
            getUserTeam()
        })
        .catch((error) => console.log("error in deleteAgent"))
    }

    const yourTeam = team.map((input, index) => {
        return (
            <Card player={input.agent} team={true} teamId={input.id} deleteAgent={deleteAgent}/>
        )
    })

    return (
        <div className="team-area">
            {yourTeam}
        </div>
    );
};

export default TeamScreen;