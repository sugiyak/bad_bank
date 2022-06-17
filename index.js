function Spa() {

  return (
      <HashRouter>
        <UserContext.Provider value={{users:[{name:'Kei', email:'kei@mit.edu', password:'password', balance:100},{name:'Sara', email:'sara@mit.edu', password:'password', balance:50}], activeUser:{name:'Guest', email:'guest@badbank.com', password:'password', balance:0}}}>
        <NavBar/>
        <Route path='/' exact component={Home}/>
        <Route path='/create_account/' exact component={CreateAccount}/>
        <Route path='/login/' exact component={Login}/>
        <Route path='/deposit/' exact component={Deposit}/>
        <Route path='/withdraw/' exact component={Withdraw}/>
        <Route path='/all_data/' exact component={AllData}/>
        </UserContext.Provider>
      </HashRouter>
  );
};

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
