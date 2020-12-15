import React, { useContext, useEffect, useState } from 'react';
import { RegisteredUserContext } from '../../App';
import EventTask from '../EventTask/EventTask';

const TaskOverView = () => {
    const [userDisplayData, setUserDisplayData] = useState([]);
    const [registeredTask, setRegisteredTask] = useContext(RegisteredUserContext);
    console.log(registeredTask);
    useEffect(() => {
        fetch("http://localhost:5000/registeredTask?email="+registeredTask.email)
        .then(result => result.json())
        .then(data => setUserDisplayData(data));
    },[])
    return (
        <div>
            {
                userDisplayData.map(item => <EventTask item={item}></EventTask>)
            }
        </div>
    );
};

export default TaskOverView;