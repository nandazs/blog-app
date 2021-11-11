
const api = "http://localhost:3001";

const headers = {
  Accept: 'application/json',
  Authorization: 'aaaaaaaaaa',
  Accept: 'application/json',
}

export function getByCategory(category) {
  return new Promise(function (resolve, reject) {
    fetch(api + "/" + category + '/posts', { headers })
      .then(response => response.json())
      .then(data => {
        console.log(data)
       return resolve(data)
      })
      .catch(reject)
  })
}

export function getAllPosts(){
  return new Promise(function (resolve, reject) {
    fetch(api + '/posts', { headers })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function deletePost(id) {
  return new Promise((resolve, reject) => {
    fetch(api + '/posts/' + id.toString(), {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })    
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

export function votePost(id, option) {
  return new Promise((resolve, reject) => {
    fetch(api + '/posts/' + id.toString(), {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ option })    
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

export function addPost(post) {
  let myString = JSON.stringify(post);
  return new Promise((resolve, reject) => {
    fetch(api + '/posts', {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: myString,    
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

export function editPost(id, post) {
  let myString = JSON.stringify(post);
  return new Promise((resolve, reject) => {
    fetch(api + '/posts/' + id, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: myString,    
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

/* COMMENT */

export function getComment(id) {
  return new Promise(function (resolve, reject) {
    fetch(api + "/comments/" + id, { headers })
      .then(response => response.json())
      .then(data => {
        console.log(data)
       return resolve(data)
      })
      .catch(reject)
  })
}

export function addComment(comment) {
  return new Promise((resolve, reject) => {
    fetch(api + '/comments', {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.parse(comment),   
    }).then(response => {
      console.log(response)
      response.json()
    })
      .then(data => resolve(data))
      .catch(reject);
  });
}


export function deleteComment(id) {
  return new Promise((resolve, reject) => {
    fetch(api + '/comments/' + id.toString(), {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })    
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

export function editComment(id, comment) {
  let myString = JSON.stringify(comment);
  return new Promise((resolve, reject) => {
    fetch(api + '/comments/' + id, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: myString,    
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

export function voteComment(id, option) {
  return new Promise((resolve, reject) => {
    fetch(api + '/comments/' + id.toString(), {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ option })    
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

