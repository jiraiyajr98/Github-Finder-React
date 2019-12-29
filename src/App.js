import React ,{Component, Fragment} from 'react';
import  { Route , Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/NavBar';
import Users from './components/users/Users';
import axios from 'axios'
import SearchBar from './components/searchBar/SearchBar'
import AlertComponent from './components/alert/AlertComponent';
import About from './components/about/About';
import UserProfile from './components/userProfile/UserProfile'



class App extends Component {

  state = {

    users: [],
    loading : false,
    showAlertComponent : null,
    user:{},
    usersArray:[]

  }

  async componentDidMount(){

    this.setState({ loading:true });

    const response = await axios.get('https://api.github.com/users');

    this.setState({ loading:false, users:response.data });

  }

  searchUser = async (text) =>{

    console.log(text);
    

    this.setState({ loading:true });

    const response = await axios.get(`https://api.github.com/search/users?q=${text}`);

    this.setState({ loading:false, users:response.data.items });

  }

  getUserdetails = async (username) => {
    
    const response = await axios.get(`https://api.github.com/users/${username}`);
    //console.log(response.data);
    this.setState({user:response.data});

  }

  getUserRepo = async (username) =>{

    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    console.log(this.state.usersArray)
    this.setState({usersArray:response.data});
    console.log(this.state.usersArray)
    
  }

  showAlert = () =>{

    this.setState({ showAlertComponent: true });

    setTimeout(()=>this.setState({ showAlertComponent: null }),2000);

  }
  

  render(){

    const marginAll = {
      margin:'10px'
    }

    return (
      
      <div className="App">
       <NavBar />
       <AlertComponent style={marginAll} alert={this.state.showAlertComponent}/> 
       <Switch>
       
       <Route exact path="/" render={props=>(
         <Fragment>
      
           <SearchBar  searchUser = {this.searchUser} showAlert = {this.showAlert}/>
           <Users loading={this.state.loading} users={this.state.users}/>
         
         </Fragment>
       )} />

       <Route exact path='/about' component={About}/>

       <Route exact path='/user/:username' render={props =>(

        <UserProfile {...props} getUserdetails={this.getUserdetails} user={this.state.user} 
         
        getUserRepo={this.getUserRepo} userRepo={this.state.usersArray}/>

       )} />

       </Switch>
      </div>
      
    );
  }

}

export default App;
