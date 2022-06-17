function AllData(){
    //fetch all users data in context and display as a table 
    const ctx = React.useContext(UserContext);
    const userdata = ctx.users.map((user, i)=>{    
        return (
        <tr key={i}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.balance}</td>
        </tr>
        )
    });

    return (
        <Card
        txtcolor="dark"
         header="All data in store"
         body={(
             <table className="table">
                 <thead>
                     <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Balance</th>
                     </tr>
                 </thead>
                 <tbody>
                    {userdata}
                 </tbody>
             </table>
         )}
        />
    );
}