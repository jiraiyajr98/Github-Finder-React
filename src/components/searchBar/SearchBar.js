import React, { Component } from 'react'
import { Form,FormControl,Button,Container } from 'react-bootstrap'

export default class SearchBar extends Component {

    state={
        text:''
    }

    onChange = (e) =>{

        this.setState({[e.target.name]: e.target.value});

    }

    onSearch = (e) =>{
        e.preventDefault();

        if(this.state.text === '')
        {
            this.props.showAlert();
        }
        else
        {
            this.props.searchUser(this.state.text);
            this.setState({text: ''});
        }
    }

    render() {

        const marginAll = {
            margin:'10px'
          }

        return (
            <Container >
                <Form onSubmit={this.onSearch} style={marginAll} >
                    <FormControl type="text" placeholder="Search"  value={this.state.text}
                     name = "text"
                     onChange={this.onChange}/>
                    <Button  variant="info" type="submit" className=" w-100"  style={{marginTop:'10px'}}>Submit</Button>
                </Form>
            </Container >
        )
    }
}

