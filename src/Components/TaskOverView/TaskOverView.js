import React, { useContext, useEffect, useState } from 'react';
import { RegisteredUserContext } from '../../App';
import EventTask from '../EventTask/EventTask';

const TaskOverView = () => {
    const [userDisplayData, setUserDisplayData] = useState([]);
    const [registeredTask] = useContext(RegisteredUserContext);
    console.log(registeredTask);
    useEffect(() => {
        fetch("https://volunteer-node-deply.herokuapp.com/registeredTask?email="+registeredTask.email)
        .then(result => result.json())
        .then(data => setUserDisplayData(data));
    },[registeredTask])
    return (
        <div>
            {
                userDisplayData.map(item => <EventTask item={item}></EventTask>)
            }
        </div>
    );
};

export default TaskOverView;