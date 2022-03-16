import './App.css';
import BlogForm from './components/BlogForm';
import React, { useState } from 'react';
import Post from './components/Post';
const axios = require('axios');

function getPosts(){
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    console.log(response);
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

function App() {
  const [arr, setArr] =useState([]);
  const av = getPosts;

  return (
    <>
  <div className="container">
  <div className="row">

  <div className="col-md-6 mb-4">
  <h1>React Blog</h1>



    <BlogForm arr={arr} setArr={setArr} />
  </div>
  <div className="col-md-6 p-3">
  



  {arr.map(array => {
        return (
          <Post arr={av} setArr={setArr} user={array.user} postTitle={array.postTitle} blogPost={array.blogPost} index={array.index}/>
        ) })}

    {/* {arr.map(array => {
        return (
         <Post arr={arr} setArr={setArr} user={array.user} postTitle={array.postTitle} blogPost={array.blogPost} index={array.index}/>
        )
      })} */}
  </div>
  </div>
  </div>
    </>
  );
}

export default App;
