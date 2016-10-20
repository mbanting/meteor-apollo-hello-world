/**
 * The top level react component
 */
import React, { Component } from 'react';
import PostsContainer from './postsContainer'
import MessageFormContainer from './messageFormContainer'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col s8"><PostsContainer /></div>
                <div className="col s4"><MessageFormContainer /></div>
            </div>

        )
    }
}
