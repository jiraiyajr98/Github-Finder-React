import React from 'react'
import RepositoryItem from '../repositoryItem/RepositoryItem'
import { Container, Card } from 'react-bootstrap'

export const Repository = ({repositories}) => {

    const marginElement ={
        margin: '10px'
    }
    

    return (
        <Container style={marginElement}>
            <Card >
            {repositories.map((repo,i) => (
                <RepositoryItem itemName={repo} key={i} />
            ))}
            </Card>
        </Container>
    )
}
