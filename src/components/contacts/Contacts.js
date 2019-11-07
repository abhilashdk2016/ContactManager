import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../Context';

class Contacts extends Component {

    // state = {
    //     contacts: [
    //         {
    //             id: 1,
    //             name: 'Abhilash D K',
    //             email: 'ab@gmail.com',
    //             phone: '8861188582'
    //         },
    //         {
    //             id: 2,
    //             name: 'Navya BS',
    //             email: 'nbs@gmail.com',
    //             phone: '7766553242'
    //         },
    //         {
    //             id: 3,
    //             name: 'Carren',
    //             email: 'carr@gmail.com',
    //             phone: '6655443322'
    //         }
    //     ]
    // }

    // deleteContact = (id) => {
    //     const { contacts } = this.state;
    //     const newContacts = contacts.filter(contact => contact.id !== id);
    //     this.setState({ contacts: newContacts });
    // }

    deleteContact = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id);
        this.setState({ contacts: newContacts });
    }

    // render() {
    //     const { contacts } = this.state;
    //     return (
    //         <React.Fragment>
    //             {contacts.map(contact => <Contact contact={contact}
    //                 key={contact.id}
    //                 deleteClickHandler={this.deleteContact.bind(this, contact.id)} />)}
    //         </React.Fragment>
    //     );
    // }

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger">Contact</span> List
                            </h1>
                            {contacts.map(contact => <Contact contact={contact}
                                key={contact.id}
                                deleteClickHandler={this.deleteContact.bind(this, contact.id)} />)}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;