const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const NavLink      = ReactRouterDOM.NavLink;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function HomeCard(props){
    return (
        <div className="card m-3 border-dark border-3 rounded-3" style={{maxWidth: "15rem"}}>
            <Link to={props.link} style={{ textDecoration: 'none' }} className="card-body text-dark">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.image}
                {props.status && (<div id="createStatus">{props.status}</div>)}
            </Link>
        </div>
    );
    
}

function Card(props){
    function classes(){
        const bg  = props.bgcolor ? ' bg-' + props.bgcolor : '';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card border-dark border-3 rounded-3 mx-auto mt-5' + bg + txt;
      }

    return (
        <div className={classes()} style={{maxWidth: "30rem"}}>
        <div className="card-header bg-dark text-white">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );
    
}

function Login(username, password) {
  let user = UserContext.users.filter((name)=>{
    return UserContext.users === username;
  })
  if(user.password === password) {
    setCurrentUser(user)
  }
}