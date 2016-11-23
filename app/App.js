import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import ContactsApp from './ContactsApp'

let contacts = [
    {name: "Cassio Zen", email: "cassiozen@gmail.com"},
    {name: "Dan Abramov", email: "gaearon@gmail.com"},
    {name: "Pete Hunt", email: "floydophone@gmail.com"},
    {name: "Paul O'Shannessy", email: "zpao@gmail.com"},
    {name: "Ryan Florence", email: "rpflorence@gmail.com"},
    {name: "Sevastian Markbage", email: "sebmarkbage@gmail.com"}
];

render(<ContactsApp contacts={contacts}/>, document.getElementById('root'));