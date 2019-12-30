import React, { useEffect } from 'react'
import { Container,Card,Row,Col,Image,Button,Badge } from 'react-bootstrap'
import { Repository } from '../repository/Repository';

const UserProfile = ( { match,user,userRepo,getUserdetails,getUserRepo} ) => {

  useEffect(()=>{

    getUserdetails(match.params.username);
    getUserRepo(match.params.username);
    // eslint-disable-next-line
  },[]);

        const {         
            login,
            avatar_url,
            html_url,
            name,
            company,
            blog,
            location,
            bio,
            public_repos,
            public_gists,
            followers,
            following,
            } =  user;

        // console.log("User Profile "+this.props.user);

        return (
          <Container>
            <Card style={marginAll}>
              <Card.Header as="h2">{name}</Card.Header>
              <Card.Body>
                <Row className="justify-content-md-center">
                  <Col sm={5} className="text-center">
                    <Image
                      src={avatar_url}
                      roundedCircle
                      fluid
                      style={{ height: "200px", width: "200px" }}
                    />
                    <h3 style={paddingTopStyle}>{login}</h3>
                    <Card.Text style={paddingTopStyle}>
                      Location: {location ? location : "Location not Specified"}
                    </Card.Text>
                  </Col>

                  <Col>
                    <h5>Bio:</h5>
                    <p>{bio ? bio : "No Bio provided"}</p>
                    <p>
                      <Button variant="dark" href={html_url} target="_blank">
                        Visit Github Profile
                      </Button>
                    </p>
                    <p>Username : {name} </p>
                    <p>Company : {company ? company:"Company Not Provided"}</p>
                    <p>Website : {blog ? blog:"Website Not Provided"}</p>
                  </Col>
                </Row>

                <Card style={marginAll}>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Button variant="danger" style={marginAll}>
                        Followers <Badge variant="light">{followers}</Badge>
                      </Button>
                    </Col>
                    <Col md="auto">
                      <Button variant="success" style={marginAll}>
                        Following <Badge variant="light">{following}</Badge>
                      </Button>
                    </Col>
                    <Col md="auto">
                      <Button
                        variant="warning"  style={{color:'white', margin:'10px'}}
                      >
                        Public Repository{" "}
                        <Badge variant="light">{public_repos}</Badge>
                      </Button>
                    </Col>
                    <Col md="auto">
                      <Button variant="dark" style={marginAll}>
                        Public Gists{" "}
                        <Badge variant="light">{public_gists}</Badge>
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Card.Body>

              <Repository repositories={userRepo}/>

            </Card>
          </Container>
        );
    
}

const paddingTopStyle = {
  paddingTop:'15px'
}

const marginAll = {
  margin:'10px'
}

export default UserProfile;
