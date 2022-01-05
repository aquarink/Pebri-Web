import React from 'react'

const Header = () => {

    return (
        <>
            <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <strong>Juri Pebrianto</strong>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto d-flex align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="/artikel">Artikel</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/portofolio">Portofolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/tentang">Tentang</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto d-flex align-items-center">
                            <li className="nav-item highlight">
                                <form action='/cari' method='GET'>
                                    <div style={{ marginBottom: '0px' }}  className="form-group">
                                        <input type="text" name='find' className="form-control" placeholder="Carti konten disini" />
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;