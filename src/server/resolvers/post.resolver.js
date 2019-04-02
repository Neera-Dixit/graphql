import { postService, commentService } from '../services';

const postResolver = {
  Query: {
    posts: (root, { postID }) => {
      return postService.getPostsByID(parseInt(postID))[0];
    },
  },

  Post: {
    comments: (root) => {
      return(commentService.getCommentsByPostID(root.id));
    }
  }
};

export default postResolver;
