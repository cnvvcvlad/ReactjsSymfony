import React, { Component } from 'react';
import axios from 'axios';


class Contact extends Component {
    constructor() {
        super();

        this.state = { posts: [], loading: true }
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(res => {
            const posts = res.data.slice(0, 15);
            this.setState({ posts, loading: false })
        })
    }

    render() {
        const loading = this.state.loading;
        return (
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>Contactez-nous</span></h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;