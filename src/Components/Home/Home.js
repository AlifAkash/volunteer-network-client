import React, { useEffect, useState } from 'react';
import "./Home.css";
import Task from '../Task/Task';
import Searchbar from '../Searchbar/Searchbar';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/volunteerTasks")
            .then(result => result.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div>
            <Searchbar></Searchbar>
            <div className="Home">
                <div className="row">
                    {
                        tasks.map(item => <Task key={item.key} item={item}></Task>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;