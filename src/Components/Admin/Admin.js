import React from 'react';
import fakeData from '../../FakeData';

const Admin = () => {

    const handleAddProduct = () => {
        fetch("http://localhost:5000/addVolunteerTask", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify()
        })
        .then(result => {
            console.log(result);
        })
    }

    return (
        <div style={{textAlign: "center"}}>
            <button onClick={handleAddProduct}>add Task</button>
        </div>
    );
};

export default Admin;