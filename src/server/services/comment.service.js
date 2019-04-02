const comments = [{
  id: 1,
  author: 'Test User 1',
  description: 'good resource ON JS',
  postID: 1
}, {
  id: 2,
  author: 'Test User 2',
  description: 'good book',
  postID: 1
}, {
  id: 3,
  author: 'Test User 3',
  description: 'good resource ON Java',
  postID: 2
}, {
  id: 4,
  author: 'Test User 4',
  description: 'good book',
  postID: 2
}]

const commentService = {
  getCommentsByPostID: (postID) => {
    return comments.filter(comment => comment.postID == postID);
  },

  addCommentToPost: (comment = {}) => {
    const newComment = {
      id: comments.length + 1,
      ...comment,
    };

    console.log('newComment',newComment)
    comments.push(newComment);

    return newComment;
  }
};

export default commentService;
