function CreateAccount(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [empty, setEmpty] = React.useState(true);
    const ctx = React.useContext(UserContext);
    

    //check if user actually input credentials.
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
    //create an user objecxt and add it to context.users and context
    function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      if (password.length<8){alert('Please use more than 7 characters for password');return;};
      ctx.users.push({name,email,password,balance:0});
      setShow(false);
      ctx.activeUser = {name,email,password,balance:0};
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }

    return (

        <div className="container-fluid" style={{height:"80vh"}}>
            <Card
                txtcolor="dark"
                header="Create account"
                status={status}
                body={show ? (
                    <>
                        Name<br/>
                        <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                        Email address<br/>
                        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                        Password<br/>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                        <button type="submit" className="btn btn-warning" onClick={handleCreate} disabled={!name||!email||!password}>Create Account</button>
                    </>
                ):(
                    <>
                        <h5>Success</h5>
                        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>

                    </>               
                )}
            />
        </div>
    );
}