import React ,{ Fragment, useState, useEffect } from 'react';
import  { Route , Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/NavBar';
import Users from './components/users/Users';
import axios from 'axios'
import SearchBar from './components/searchBar/SearchBar'
import AlertComponent from './components/alert/AlertComponent';
import About from './components/about/About';
import UserProfile from './components/userProfile/UserProfile'
import { useDispatch } from 'react-redux'
import { setUsersAction } from './actions/UsersAction'



const App = () => {

  const [ users, setUsers ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ showAlertComponent, setShowAlertComponent ] = useState(null);
  const [ user, setUser ] = useState({});
  const [ usersArray, setUsersArray ] = useState([]);

  //const usersList = useSelector(state => state.UsersReducer);
  const dispatch = useDispatch();

  useEffect(  ()=>{

    async function fetchData() {

      setLoading(true);
      
      const response = await axios.get('https://api.github.com/users');

      dispatch(setUsersAction(response.data));

      setUsers(response.data);
    
      setLoading(false);
      
    }
    fetchData();

   
    // eslint-disable-next-line
  },[]);

  const searchUser = async (text) =>{

  
    setLoading(true);

    const response = await axios.get(`https://api.github.com/search/users?q=${text}`);

    setUsers(response.data.items);

    
    setLoading(false);

  }

  const getUserdetails = async (username) => {
    
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    setUser(response.data);

  }

  const getUserRepo = async (username) =>{

    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);

    setUsersArray(response.data);
    
  }

  const showAlert = () =>{

    this.setState({ showAlertComponent: true });

    setTimeout(()=>setShowAlertComponent(null),2000);

  }
  
    return (
      
      <div className="App">
       <NavBar />
       <AlertComponent style={marginAll} alert={showAlertComponent}/> 
       <Switch>
       
       <Route exact path="/" render={props=>(
         <Fragment>
      
           <SearchBar  searchUser = {searchUser} showAlert = {showAlert}/>
           <Users loading={loading} users={users}/>
         
         </Fragment>
       )} />

       <Route exact path='/about' component={About}/>

       <Route exact path='/user/:username' render={props =>(

        <UserProfile {...props} getUserdetails={getUserdetails} user={user} 
         
        getUserRepo={getUserRepo} userRepo={usersArray}/>

       )} />

       </Switch>
      </div>
      
    );
  

}

const marginAll = {
  margin:'10px'
};


export default App;
