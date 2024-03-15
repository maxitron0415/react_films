
function Header() {
    return <nav className="main-color">
        <div className="container">
            <div className="nav-wrapper">
                <div className="nav-block">
                    <div className='logo-block'>
                        <a className='logo-text' href='#!'>ReactFilms</a>
                    </div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><button className='login-btn'>Repository</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}

export { Header };