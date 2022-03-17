import './App.css';
import BlogForm from './components/BlogForm';
import React, { useState, useEffect } from 'react';
import Post from './components/Post';
const axios = require('axios');
let samplePosts = [];
let flag = false;

function getPosts(arr, setArr){

//get dataa from typicode
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    samplePosts = response.data;
    samplePosts = samplePosts.filter(element => element.id <= 4);
    samplePosts.forEach(element => 
        arr.push(element),
         console.log("element added")     
      );
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
  console.log(flag);
  
  useEffect(() => {
    getPosts(arr, setArr);
  }, []);



  console.log("reloaded")
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
         <Post arr={arr} setArr={setArr} userId={array.userId} title={array.title} body={array.body} id={array.id}/>
        )
      })}
  </div>
  </div>
  </div>
    </>
  );
}

export default App;
