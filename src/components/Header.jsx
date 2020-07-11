import React from 'react'

export default ({ header }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">RaDemsi Studio</a>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#header">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Join Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead" id="header">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-heading text-uppercase">RaDemsi Studio</div>
                        <div className="intro-lead-in">Studio Anak Bangsa</div>
                    </div>
                </div>
            </header>
        </>
    )
}