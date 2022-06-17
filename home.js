function Home(){
    return (
        <>
            <div className="jumbotron p-3 p-md-5 text-white bg-dark">
                <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">Welcome to <span className="text-warning">B</span>ad<span className="text-warning">B</span>ank</h1>
                <p className="lead my-3">No security, no hassle. Deposit as much money as you want and get rich.</p>
                <p className="lead mb-0"><Link to="/create_account/" className="text-white font-weight-bold">Create account...</Link></p>
                </div>
            </div>

            <div className="row m-3">
                <HomeCard
                    link="/create_account/"
                    title="Create account"
                    text="Join us today!"
                    image={(<img src="images/create_account.png" className="img-fluid" alt="Responsive image"/>)}
                />
                <HomeCard
                    link="/login/"
                    title="Login"
                    text="Check out your account"
                    image={(<img src="images/login.png" className="img-fluid" alt="Responsive image"/>)}
                />
                <HomeCard
                    link="/deposit/"
                    title="Deposit"
                    text="Deposit your money"
                    image={(<img src="images/deposit.png" className="img-fluid" alt="Responsive image"/>)}
                />
                <HomeCard
                    link="/withdraw/"
                    title="Withdraw"
                    text="Withdraw your money"
                    image={(<img src="images/withdraw.png" className="img-fluid" alt="Responsive image"/>)}
                />
                <HomeCard
                    link="/all_data/"
                    title="All data"
                    text="Account information"
                    image={(<img src="images/bank.png" className="img-fluid" alt="Responsive image"/>)}
                />
                    
            </div>

        </>
    );
}