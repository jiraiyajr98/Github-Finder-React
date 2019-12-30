import React, { useState } from 'react'
import { Form,FormControl,Button,Container } from 'react-bootstrap'

const SearchBar = ({ showAlert,searchUser }) => {

    const [ text, setText] = useState('');

    const onChange = (e) =>{

        setText(e.target.value);

    }

    const onSearch = (e) =>{
        e.preventDefault();

        if(text === '')
        {
            showAlert();
        }
        else
        {
            searchUser(text);
            setText('');
        }
    }

        return (
            <Container >
                <Form onSubmit={onSearch} style={marginAll} >
                    <FormControl type="text" placeholder="Search"  value={text}
                     name = "text"
                     onChange={onChange}/>
                    <Button  variant="info" type="submit" className=" w-100"  style={{marginTop:'10px'}}>Submit</Button>
                </Form>
            </Container >
        )

}

const marginAll = {
    margin:'10px'
  };

  export default SearchBar;

