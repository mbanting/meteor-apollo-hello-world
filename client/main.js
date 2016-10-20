import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import ApolloClient, { addTypename } from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import App from '/imports/ui/App';

const client = new ApolloClient({
  queryTransformer: addTypename,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) {
      return result.__typename + result.id
    }
    return null
  }
});

Meteor.startup(() => {
  render(<ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app'));
});
