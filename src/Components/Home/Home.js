import React, { useEffect, useState } from 'react';
import "./Home.css";
import Task from '../Task/Task';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/volunteerTasks")
        .then(result => result.json())
        .then(data => setTasks(data))
    },[])

    return (
        <div className="Home">
            <div className="row">
                {
                    tasks.map(item => <Task key={item.key} item={item}></Task>)
                }
            </div>
        </div>
    );
};

export default Home;