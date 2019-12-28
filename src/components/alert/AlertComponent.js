import React from 'react'
import { Alert,Container } from 'react-bootstrap'

export default class AlertComponent extends React.Component {
    render() {

      const marginAll = {
        margin:'10px'
      }

        return (
        this.props.alert !== null && <Container >
        <Alert variant="danger" style={marginAll}>
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>
          Search box should not be empty.
        </p>
        </Alert>
        </Container>
        )
    }
}

