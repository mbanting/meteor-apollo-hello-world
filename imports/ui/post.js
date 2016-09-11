import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.post.content}</div>
        )
    }
}

// Post requires props with a post attribute with a content attribute of type string
Post.propTypes = {
    post: PropTypes.shape({
        content: PropTypes.string
    }).isRequired
};
