const clone = require('clone');

const db = {};

const defaultData = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2,
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: 5,
    deleted: false,
    commentCount: 0,
  },
  '9nu5kl3ym7vf1p32lnez': {
    id: '9nu5kl3ym7vf1p32lnez',
    timestamp: 1468479767190,
    title: 'Redux in 20 minutes!',
    body: 'Just kidding. It takes more than 20 minutes to learn technology.',
    author: 'thingone2',
    category: 'redux',
    voteScore: 10,
    deleted: false,
    commentCount: 0,
  },
  '1111111111111': {
    id: '1111111111111',
    timestamp: 1467166872634,
    title: 'Mesmo timestamp que os outros',
    body: 'Just kidding. It takes more than 20 minutes to learn technology.',
    author: 'thingosssne2',
    category: 'redux',
    voteScore: 7,
    deleted: false,
    commentCount: 0,
  },
};

function getData(token) {
  let data = db[token];
  if (data == null) {
    data = db[token] = clone(defaultData);
  }
  return data;
}

function getByCategory(token, category) {
  return new Promise((res) => {
    const posts = getData(token);
    const keys = Object.keys(posts);
    const filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted);
    res(filtered_keys.map(key => posts[key]));
  });
}

function get(token, id) {
  return new Promise((res) => {
    const posts = getData(token);
    res(posts[id].deleted
      ? {}
      : posts[id]);
  });
}

function getAll(token) {
  return new Promise((res) => {
    const posts = getData(token);
    const keys = Object.keys(posts);
    const filtered_keys = keys.filter(key => !posts[key].deleted);
    res(filtered_keys.map(key => posts[key]));
  });
}

function add(token, post) {
  return new Promise((res) => {
    const posts = getData(token);

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 1,
      deleted: false,
      commentCount: 0,
    };

    res(posts[post.id]);
  });
}

function vote(token, id, option) {
  return new Promise((res) => {
    const posts = getData(token);
    const post = posts[id];
    switch (option) {
      case 'upVote':
        post.voteScore += 1;
        break;
      case 'downVote':
        post.voteScore -= 1;
        break;
      default:
        console.log(`posts.vote received incorrect parameter: ${option}`);
    }
    res(post);
  });
}

function disable(token, id) {
  return new Promise((res) => {
    const posts = getData(token);
    posts[id].deleted = true;
    res(posts[id]);
  });
}

function edit(token, id, post) {
  return new Promise((res) => {
    const posts = getData(token);
    for (let prop in post) {
      posts[id][prop] = post[prop];
    }
    res(posts[id]);
  });
}

function incrementCommentCounter(token, id, count) {
  const data = getData(token);
  if (data[id]) {
    data[id].commentCount += count;
  }
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  incrementCommentCounter,
};
