const NavBar = () => {
    return(
        //I could not figure out how to highlight the current page 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/"><span className="text-warning">B</span>ad<span className="text-warning">B</span>ank</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Home screen">
                    <NavLink className="nav-link" activeStyle={{ color:'#ffbb33' }} exact to="/" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={{ color:'#ffbb33' }} to="/create_account/" data-toggle="tooltip" data-placement="bottom" title="Home screen">Create Account</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={{ color:'#ffbb33' }} to="/login/" data-toggle="tooltip" data-placement="bottom" title="Already have an account?">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={{ color:'#ffbb33' }} to="/deposit/" data-toggle="tooltip" data-placement="bottom" title="Deposit your money here">Deposit</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={{ color:'#ffbb33' }} to="/withdraw/" data-toggle="tooltip" data-placement="bottom" title="Withdraw your money here">Withdraw</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={{ color:'#ffbb33' }} to="/all_data/" data-toggle="tooltip" data-placement="bottom" title="See all data">All data</NavLink>
                </li>
            </ul>
        </div>
        </nav>
    );
}