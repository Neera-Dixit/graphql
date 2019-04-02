import { commentService } from '../services';

const commentResolver = {
  Query: {
    comments: (root, { postID }) => {
      return commentService.getCommentsByPostID(parseInt(postID));
    }
  },

  Mutation: {
    postComment: (root, { input }) => {
      return commentService.addCommentToPost(input);
    }
  }
};

export default commentResolver;
