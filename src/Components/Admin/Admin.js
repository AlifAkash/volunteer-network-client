import React from 'react';

const Admin = () => {

    const handleAddProduct = () => {
        fetch("https://volunteer-node-deply.herokuapp.com/addVolunteerTask", {
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
            <h1>Admin panel coming soon....</h1>
            {/* <button onClick={handleAddProduct}>add Task</button> */}
        </div>
    );
};

export default Admin;