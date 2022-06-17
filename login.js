function Login(){
    const ctx = React.useContext(UserContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //change activeUser in context according to the user input.
    function handleLogin(){
        var found = ctx.users.filter(user => user.email === email);
        try{
            if (found[0].password === password) {
                ctx.activeUser = found[0];
                alert(`You logged in as ${ctx.activeUser.name}`)
            }
        } catch(error) {
            alert("Please try a different combination")
        }
    }    
    return (
        <Card
        txtcolor="dark"
        header="Login"
        body={ctx.activeUser.name != "Guest" ? (
            <>
            <h1>Hello, {ctx.activeUser.name}</h1>
            </>)
            :
            (<>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-warning" onClick={handleLogin}>Login</button>
            </>)}
            />)
}