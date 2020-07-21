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
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h3 className="text-center">Contactez-nous!</h3>
                    <div className="form-group">
                        <label htmlFor="contactName">Name : </label>
                        <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactSubject">Sujet : </label>
                        <input className="form-control" type="text" id="contactSubject" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactMessage">Message : </label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <input className="btn btn-primary mb-2" type="submit" value="Envoyer" />
                </form>
            </div>

        )
    }
}

export default Contact;