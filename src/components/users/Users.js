import React, { Component } from 'react'
import UsersItem from './../usersItem/UsersItem' 
import { Container, Row, Col } from 'react-bootstrap';
import SpinnerComponent from '../spinner/SpinnerComponent';

export class Users extends Component {

    render() {

        const marginAll = {
            margin:'10px'
          }

        if(this.props.loading)
        {
            return <center><SpinnerComponent/></center>
        }
        else
        {
            let temp1 = [];

            let i,j,temparray,chunk = 3,id = 1;
            for (i=0,j=this.props.users.length; i<j; i+=chunk) {
                temparray = this.props.users.slice(i,i+chunk);
                temp1.push({id,temparray});
                id++;
            }
    
            return (
                <div style={marginAll}>
                    {temp1.map(userGroup =>(
                        <Container >
                            <Row key = {userGroup.id}>
                                { userGroup.temparray.map(user =>(<Col sm key={user.node_id}><UsersItem key = {user.id}  user = {user}/></Col>))}
                            </Row>
                        </Container>
                    ))}
                </div>
            )
        }

       
    }
}



export default Users
