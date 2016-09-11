export default typeDefs = [`
type Post {
  content: String
  views: Int
}

type Query {
  posts: [Post]
}

schema {
  query: Query
}
`];
