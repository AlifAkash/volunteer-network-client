import React from 'react';
import "./Searchbar.css";

const Searchbar = () => {
    return (
        <div className="SearchBar">
            <h2>I grew by helping people in need.</h2>
            <div className="search_warp">
                <div className="search_box search_warp_1">
                    <input type="text" className="input" placeholder="Search..." />
                    <div className="btn">
                        <i class="fa fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;