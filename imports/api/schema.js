export default typeDefs = [`
type Post {
  id: Int
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
