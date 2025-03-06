import React from "react";

export default function Header(){
    return(
        <>
        <header className="main-header">
            <nav className="nav-container">
                <i class='bx bxs-sushi'></i>
                <i className="bx bxs-pizza"></i>  {/* Pizza icon */}
                <p>Cheif Claude</p>
                <i class='bx bx-coffee' ></i>
                <i class='bx bx-cookie' ></i>
            </nav>
        </header>
        </>
    );
}