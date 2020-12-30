import React from 'react';
import "./EventTask.css";
import taskLogo from "../../volunteer-network-main/images/extraVolunteer.png";

const EventTask = (props) => {
    const { task, date } = props.item;
    return (
        <div className="Event">
            <div className="area">
                <div>
                    <img style={{ height: "200px" }} src={taskLogo} alt="" />
                </div>
                <div className="text">
                    <h4>{task}</h4>
                    <p>{date}</p>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EventTask;