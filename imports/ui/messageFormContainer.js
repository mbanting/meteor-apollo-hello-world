import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { MessageForm } from './messageForm';

const addPost = gql`
    mutation addPostMutation ($content: String!) {
      addPost(content: $content) {
        id,
        content,
        views
      }
    }
`;

export default MessageFormContainer = graphql(addPost, {
    props: ({ mutate }) => ({
        submit: (content) => mutate({ variables: { content } }),
    }),
})(MessageForm);