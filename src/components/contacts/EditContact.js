import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        let contact = response.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        if (name === '') {
            this.setState({
                errors: {
                    name: 'Name is Required'
                }
            });
            return;
        }

        if (email === '') {
            this.setState({
                errors: {
                    email: 'Email is Required'
                }
            });
            return;
        }

        if (phone === '') {
            this.setState({
                errors: {
                    phone: 'Phone is Required'
                }
            });
            return;
        }

        const { id } = this.props.match.params;

        const updContact = {
            name,
            email,
            phone
        };

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);
        dispatch({
            type: 'UPDATE_CONTACT',
            payload: res.data
        });

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                EDIT CONTACT
                        </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup label="Name"
                                        placeholder="Enter Name..."
                                        name="name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name} />
                                    <TextInputGroup label="Email"
                                        placeholder="Enter Email..."
                                        name="email"
                                        value={email}
                                        onChange={this.onChange}
                                        type="email"
                                        error={errors.email} />
                                    <TextInputGroup label="Phone"
                                        placeholder="Enter Phone Number..."
                                        name="phone"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone} />
                                    <input type="submit" value="Update Contact"
                                        className="btn btn-block btn-light" />
                                </form>
                            </div>
                        </div>)
                }}
            </Consumer>
        );
    }
}

export default EditContact;