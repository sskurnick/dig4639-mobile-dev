import React from 'react';
import "./index.css";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            contacts: []
        };
    }

    componentDidMount() {
        this.getProfile();
        this.getContacts();
    }

    add = (event) => {
        event.preventDefault();
        fetch('http://plato.mrl.ai:8080/contacts/add', {
            method: 'POST',
            body: JSON.stringify({
                name: this.refs.name.value,
                number: this.refs.number.value
            }),
            headers: { "Content-type": "application/json", API: "skurnick" }
        })
        .then(res => { return res.json() })
        .then(() => {
            this.getProfile();
            this.getContacts();
        });
    }

    getContacts() {
        window.fetch("http://plato.mrl.ai:8080/contacts", {
           headers: { API: "skurnick" } 
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({ contacts: data.contacts });
            console.log(data)
        });
    }

    getProfile() {
        window.fetch("http://plato.mrl.ai:8080/profile", {
            headers: { API: "skurnick" }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({ profile: data });
            console.log(data)
        });
    }

    remove = (index) => {
        fetch('http://plato.mrl.ai:8080/contacts/remove', {
            method: 'POST',
            body: JSON.stringify({ position: index }),
            headers: { "Content-type": "application/json", API: "skurnick" }
        })
        .then(res => { return res.json() })
        .then(() => {
            this.getProfile();
            this.getContacts();
        });
    }

    render() {
        return (
            <div>
                <h1>Samantha's Contacts</h1>
                <div className="container">
                    <div className="left">
                        <div>
                            <fieldset>
                                <h2>Profile</h2>
                                <div className="smallcontainer">
                                    <div className="left">
                                        <h3>Name: </h3>
                                        <h3>Count: </h3>
                                    </div>
                                    <div className="right2">
                                        <p>{this.state.profile.name}</p>
                                        <p>{this.state.profile.count}</p>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <br />
                        <div>
                            <fieldset>
                                <h2>Add Contact</h2>
                                <form onSubmit={this.add}>
                                    <input ref="name" type='text' placeholder='Full Name' />
                                    <input ref="number" type='text' placeholder='Phone Number' />
                                    <br />
                                    <button type="submit">Add</button>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                    <div className="right">
                        <fieldset className="contacts">
                            <h2>Contacts</h2>
                            {this.state.contacts.map((value, index) => {
                                return (
                                    <fieldset className="card">
                                        <h3>{value.name}</h3>
                                        <p>{value.number}</p>
                                        <div className="buttondiv">
                                            <button type="submit"
                                            onClick={() => this.remove(index)}
                                            id={index}>Remove</button>
                                        </div>
                                        </fieldset>);
                            })
                            }
                        </fieldset>
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }
}

export default ContactApp;