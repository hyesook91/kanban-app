import React, { Component, PropTypes } from 'react';

class ContactItem extends Component {
    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}
ContactItem.propType = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default ContactItem;