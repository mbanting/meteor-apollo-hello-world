export default typeDefs = [`
type Post {
  id: Int
  content: String
  views: Int
}

type Query {
  posts(views: Int): [Post]
}

schema {
  query: Query
}
`];
