/**
 * The top level react component
 */
import React, { Component } from 'react';
import Posts from './posts'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Posts />
        )
    }
}
