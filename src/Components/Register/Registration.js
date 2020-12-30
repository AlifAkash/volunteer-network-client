import React, { useContext, useEffect, useState } from 'react';
import "./Registration.css";
import logo from "../../volunteer-network-main/logos/Group 1329.png";
import { useHistory, useParams } from 'react-router-dom';
import { RegisteredUserContext, UserContext } from '../../App';

const Registration = () => {
    const {key} = useParams();
    const [singleTask, setSingleTask] = useState({})
    const [loginUser] = useContext(UserContext);
    const [registeredTask, setRegisteredTask] = useContext(RegisteredUserContext);
    const history = useHistory();

    useEffect(() => {
        fetch("https://volunteer-node-deply.herokuapp.com/volunteerTask/"+key)
        .then(res=> res.json())
        .then(data => setSingleTask(data))
    },[key]);

    const handleBlur = (e) => {
        const newRegisteredTask = {...registeredTask};
        newRegisteredTask[e.target.name] = e.target.value;
        setRegisteredTask(newRegisteredTask);
    }

    const handleSubmit = (e) => {
        const newRegisteredTask = {...registeredTask};
            newRegisteredTask.name = loginUser.name;
            newRegisteredTask.email = loginUser.email;
            newRegisteredTask.task = singleTask.name;
            setRegisteredTask(newRegisteredTask);
            console.log(registeredTask);
        if(registeredTask.email && registeredTask.task){
            fetch("https://volunteer-node-deply.herokuapp.com/registeredUserTask", {
                method:"POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(registeredTask)
            })
            .then(result => {
                console.log(result)
            })
            history.push("/taskOverView");
        }
        e.preventDefault();
    }

    return (
        <div className="Registration">
            <div>
                <img style={{ height: "50px" }} src={logo} alt="" />
            </div>
            <div className="form">
                <form onSubmit={handleSubmit} className="" action="submit" >
                    <h3>Register as a volunteer</h3>
                    <input className="fields" type="text" name="name" value={loginUser.name} readOnly />
                    <br />
                    <input className="fields" type="text" name="email" value={loginUser.email} readOnly />
                    <br />
                    <input  onBlur={handleBlur} className="fields" type="date" name="date" id="" required />
                    <br />
                    <input onBlur={handleBlur} className="fields" type="text" name="description" placeholder="Description" />
                    <br />
                    <input className="fields" type="text" name="task" value={singleTask.name} readOnly />
                    <br />
                    <input className="button bg-info" style={{width: "50vh"}} type="submit"
                    value="Registration" />
                </form>
            </div>
        </div>
    );
};

export default Registration;