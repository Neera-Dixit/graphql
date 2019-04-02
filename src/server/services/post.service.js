const posts = [{
  id: 1,
  author: 'Neeraj Dixit',
  description: 'Introduction to Javascript',
}, {
  id: 2,
  author: 'Raj D',
  description: 'Intoduction to Java',
}]

const postService = {
  getPostsByID: (postID) => {
    return posts.filter(post => post.id == postID);
  }
};

export default postService;
