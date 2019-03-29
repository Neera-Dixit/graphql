const courses = [
  {
      id: 1,
      title: 'The Complete Node.js Developer Course',
      author: 'Andrew Mead, Rob Percival',
      description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
      topic: 'Node.js',
      url: 'https://codingthesmartway.com/courses/nodejs/'
  },
  {
      id: 2,
      title: 'Node.js, Express & MongoDB Dev to Deployment',
      author: 'Brad Traversy',
      description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
      topic: 'Node.js',
      url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
  },
  {
      id: 3,
      title: 'JavaScript: Understanding The Weird Parts',
      author: 'Anthony Alicea',
      description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
      topic: 'JavaScript',
      url: 'https://codingthesmartway.com/courses/understand-javascript/'
  }
];


export const getCourse = function(args) { 
  var id = args.id;
  console.log('args',args)
  return courses.filter(course => course.id === id)[0];
};

export const getCourses = function(args) {
  if (args.topic) {
      var topic = args.topic;
      return courses.filter(course => course.topic === topic);
  } else {
      return courses;
  }
}

export const updateCourseTopic = function({id, topic}) {
  courses.map(course => {
      if (course.id === id) {
          course.topic = topic;
          return course;
      }
  });
  return courses.filter(course => course.id === id) [0];
}

/*

Queries

--------------  query  -------------- 
{
  courses(topic:"JavaScript") {
    id
  }
}

{
  course(id:1) {
    id,
    title,
    description
  }
}
 -------------- Mutation query  -------------- 
mutation {
  updateCourseTopic(
    id: 3,
    topic: "Node.js"
  ) {
    id,
    author
  }
}


*/