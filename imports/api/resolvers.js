
import { Post } from './connectors';

// create the resolve functions for the available GraphQL queries
export default resolvers = {

    Query: {
        posts(_, args){
            return Post.findAll({where: args});
        },
    }
};
