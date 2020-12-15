import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Task.css";

const Task = (props) => {
    const history = useHistory();
    const { name, img, key } = props.item;

    const handleAddTask = (key) => {
        history.push(`/registration/${key}`)
    }

    return (
        <div className="col-md-3">
            <div onClick={() =>handleAddTask(key)} style={{cursor:"pointer"}} className="card bg-dark text-white">
                <img src={img} className="card-img" alt="" />
                <div className="card-img-overlay-align-bottom">
                    <h4 className="card-title">{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Task;