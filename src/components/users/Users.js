import React from 'react'
import UsersItem from './../usersItem/UsersItem' 
import { Container, Row, Col } from 'react-bootstrap';
import SpinnerComponent from '../spinner/SpinnerComponent';
import { useSelector } from 'react-redux';

const  Users = ({loading}) => {

    const users = useSelector(state => state.UsersReducer);

    const convertedArray = (users) =>{

        let temp1 = [];

        let i,j,temparray,chunk = 3,id = 1;
        for (i=0,j=users.length; i<j; i+=chunk) {
            temparray = users.slice(i,i+chunk);
            temp1.push({id,temparray});
            id++;
        }

        return temp1;
    
    };
     
            return ( <Container> { loading ?<center><SpinnerComponent/></center>:  <div style={marginAll}>
                {
                
                convertedArray(users).map(userGroup =>(
                    <Container >
                        <Row key = {userGroup.id}>
                            { userGroup.temparray.map(user =>(<Col sm key={user.node_id}><UsersItem key = {user.id}  user = {user}/></Col>))}
                        </Row>
                    </Container>
                ))}
            </div>
                
             } </Container> )

        

}

const marginAll = {
    margin:'10px'
  };





export default Users
