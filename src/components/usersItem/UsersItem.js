import React from 'react'
import { Card,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom'

const UsersItem = (props) => {

      const { avatar_url, login } = props.user; 

      const buttonStyle = {

        backgroundColor: '#4CAF50', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px'

      }

      const marginAll = {
        margin:'10px',
        width:'17rem'
      }


      return (
   
            <Card style={marginAll}  >
                
                <Image src={avatar_url}  style={{height:'15rem',width:'17rem'}} fluid  />
                <Card.Body>
                    <Card.Title>{login}</Card.Title>
                       <Card.Text>
                            Hello I am {login}. Checkout my github profile
                    </Card.Text>
                    {/* <Button variant="success" >Go to Profile</Button> */}

                    <Link to={`/user/${login}`} style={buttonStyle}>Go to Profile</Link>
                    
                </Card.Body>
            </Card>
        )
    
}

export default UsersItem
