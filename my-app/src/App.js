import './App.css';
import BlogForm from './components/BlogForm';
import React, { useState, useEffect } from 'react';
import Post from './components/Post';

const axios = require('axios');
function App() {
  const [posts, setPosts] =useState([]);

  useEffect(() => {
    const getPosts = async () =>{
      //get data from typicode
       await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          response.data = response.data.filter(element => element.id <= 4);
         setPosts(response.data);
          return response;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          return error;
        })
        .then(function () {
          // always executed
        });
      }
    getPosts();
  }, []);


  return (
  <>
  <div className="container">
  <div className="row">
  <div className="col-md-6 mb-4">
  <h1>React Blog</h1>
  <BlogForm posts={posts} setPosts={setPosts} />
  </div>
  <div className="col-md-6 p-3">
  
    {posts.map(array => {
        return (
         <Post key={array.id} posts={posts} setPosts={setPosts} userId={array.userId} title={array.title} body={array.body} id={array.id}/>
        )
      })}
  </div>
  </div>
  </div>
    </>
  );
}

export default App;