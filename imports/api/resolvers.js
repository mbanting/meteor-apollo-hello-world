
import { Post } from './connectors';

export default resolvers = {

    Query: {
        posts(_, args){
            return Post.find({});
        },
    }
};
