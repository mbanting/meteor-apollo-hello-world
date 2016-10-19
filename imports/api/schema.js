export default typeDefs = [`
type Post {
  id: Int
  content: String
  views: Int
}

type Query {
  posts(views: Int): [Post]
}

# this schema allows the following mutation:
type Mutation {
  addPost (
    content: String!,
    views: Int
  ): Post
}

schema {
  query: Query
  mutation: Mutation
}
`];
