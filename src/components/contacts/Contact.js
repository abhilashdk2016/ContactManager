import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {

    state = {
        showContactInfo: true
    }

    handleShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    }

    onDeleteClick = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        // this.props.deleteClickHandler();

    }

    render() {
        const { name, email, phone, id } = this.props.contact;

        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}
                                <i onClick={this.handleShowClick}
                                    className={`fas ${this.state.showContactInfo ? 'fa-sort-down' : 'fa-sort-up'}`}
                                    style={{ cursor: 'pointer' }}
                                />
                                <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
                                />
                                <Link to={`contact/edit/${id}`}>
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            color: 'black',
                                            marginRight: '1rem'
                                        }}
                                    >
                                    </i>
                                </Link>
                            </h4>
                            <ul className="list-group" hidden={this.state.showContactInfo}>
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone} </li>
                            </ul>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propType = {
    contact: PropTypes.object.isRequired,
    // deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;