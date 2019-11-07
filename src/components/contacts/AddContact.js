import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
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

        const newContact = {
            name, email, phone
        };

        const response = await axios.post(`https://jsonplaceholder.typicode.com/users`, newContact);
        dispatch({
            type: 'ADD_CONTACT',
            payload: response.data
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
                                ADD CONTACT
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
                                    <input type="submit" value="Add Contact"
                                        className="btn btn-block btn-light" />
                                </form>
                            </div>
                        </div>)
                }}
            </Consumer>
        );
    }
}

export default AddContact;