import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar-inner">
                <div className="navbar-logo">
                    <h1 className="navbar-logo-heading">Random User</h1>
                </div>
                <ul className="navbar-list">
                    <li className="navbar-list-item active">product</li>
                    <li className="navbar-list-item">download</li>
                    <li className="navbar-list-item">pricing</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
