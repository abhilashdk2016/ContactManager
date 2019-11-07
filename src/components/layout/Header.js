import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
    const { branding } = props;
    return (
        <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-home"></i>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact/add">
                                <i className="fas fa-plus"></i>
                                Add Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                <i className="fas fa-question"></i>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/lcm">
                                <i className="fas fa-refresh"></i>
                                Life Cycle Methods
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    branding: 'Contact Manager'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;