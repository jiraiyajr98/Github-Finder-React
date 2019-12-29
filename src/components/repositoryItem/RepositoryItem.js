import React from 'react'
import { Button } from 'react-bootstrap'

const RepositoryItem = ({itemName}) => {

    const { name,html_url  } = itemName;

    const marginElement ={
        margin: '10px',
        textAlign: 'left'
    }

    return (
        <Button  variant='link' style={marginElement} href={html_url} target='_blank'>
            {name}
        </Button >
    )
}

export default RepositoryItem

