import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './post';

/**
 * This React component is responsible for querying Apollo for the posts
 * and passing the results to the child Post components for rendering
 */
class Posts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let posts = <div></div>
        if (this.props.data.posts && this.props.data.posts instanceof Array) {
            posts = (
                <div>
                    {this.props.data.posts.map(function(post) {
                        return <Post key={post.id} post={post} />;
                    })}
                </div>
            )
        }

        return posts;
    }
}

// Posts requires props with a data attribute of an array of posts
Posts.propTypes = {
    data: PropTypes.shape({
        posts: PropTypes.array
    }).isRequired
};

// Define the graphql query to retrieve the posts and the desired attributes
const allPosts = gql`
  query PostsForDisplay {
    posts {
      id,
      content,
      views
    }
  }
`;

// Use the graphql container to run the allPosts query and pass the results to PostsContainer
export default PostsContainer = graphql(allPosts, {
    options: {pollInterval: 5000}
})(Posts);
