import React, { Component } from 'react';
import axios from 'axios';


class Contact extends Component {
    constructor() {
        super();

        this.state = { value: '', loading: true };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value, loading: false });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    // componentDidMount() {
    //     this.sentContact();
    // }


    sentContact() {
        axios.post('http://localhost:8000/valid', {
            firstname: this.firstname
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const loading = this.state.loading;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Contact;