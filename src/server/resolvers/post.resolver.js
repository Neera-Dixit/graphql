import { postService, commentService } from '../services';

const postResolver = {
  Query: {
    post: (root, { postID }) => {
      return postService.getPostsByID(parseInt(postID))[0];
    },
    posts: (root) => {
      return postService.getPosts();
    },
  },

  Post: {
    comments: (root) => {
      return(commentService.getCommentsByPostID(root.id));
    }
  }
};

export default postResolver;
