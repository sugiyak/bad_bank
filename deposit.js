const Deposit = () => {
    const ctx = React.useContext(UserContext);
    const activeUser = ctx.activeUser;
    //temporaly balance state used within the page
    const [total, setTotal] = React.useState(()=>{return ctx.activeUser.balance});
    const [empty, setEmpty] = React.useState(true);

    //find user using the user input and set it active user
    const updateUser = ()=>{
        let index = ctx.users.findIndex(user => user.email === activeUser.email);
        ctx.users[index] = activeUser;
    };

        //set total accouding to the use input
    const handleSubmit = (e)=>{
        e.preventDefault();
        let status = Number(e.target.num.value);
        setTotal(total + status);
        alert(`You deposited: $ ${status}`)
        };
    
    //update activeUser balance and trigger updateUser everytime total changes
    React.useEffect(() => {
        activeUser.balance = total
        if(activeUser.name != "Guest"){updateUser()};
        }, [total]);
    
    return (
        <div className="container-fluid main-container">
            <Card
            txtcolor="dark"
            header="Deposit"
            text={`${activeUser.name}'s Account balance $${total}`}
            body={(
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <span>$ </span>
                    <input type="number" name="num" min="0" onChange={e=>{e.target.value == 0 ? setEmpty(true) : setEmpty(false)}}></input>
                    <br/>
                    <button type="submit" className="btn btn-success mt-2" disabled={empty}>Deposit</button>
                </form>
            </div>)}
            />
        </div>

    );
};
