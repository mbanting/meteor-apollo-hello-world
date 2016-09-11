import Sequelize from 'sequelize';

const db = new Sequelize('apollodemo', "root", null, {
    host: 'localhost',
    dialect: 'mysql'
});

const PostModel = db.define('post', {
    content: { type: Sequelize.STRING },
    views: {type: Sequelize.INTEGER}
}, {
    timestamps: false
});

db.sync();

const Post = db.models.post;
export { Post };
