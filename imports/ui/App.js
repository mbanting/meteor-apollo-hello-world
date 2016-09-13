/**
 * The top level react component
 */
import React, { Component } from 'react';
import PostsContainer from './postsContainer'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <PostsContainer />
        )
    }
}
