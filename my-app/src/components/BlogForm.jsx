import React, { useState } from 'react';
const axios = require('axios')


function BlogForm(props) {
    const [user, setUser] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [blogPost, setBlogPost] = useState("");
    

    var currentArr= props.arr;
    var arr = [];

    const onSubmit = (e) => {

        e.preventDefault()

        const obj = {
            user: user,
            postTitle: postTitle,
            blogPost: blogPost,
            index: currentArr.length
        }

       currentArr.forEach(element => arr.push(element));
        arr.push(obj)
        props.setArr(arr);


        axios.post('https://jsonplaceholder.typicode.com/posts', {
                user: user,
                postTitle: postTitle,
                blogPost: blogPost,
                index: currentArr.length
          })
          .then(function (response) {
            console.log(response);
          })
          

    }
    return (
        <>
                <form onSubmit={onSubmit}>
                    <div className="mb-2">
                        <select value={user} onChange={(e) => setUser(e.target.value)} className="form-select" aria-label="User select">
                            <option selected>Select the user</option>
                            <option value="1">1 - Leanne Graham</option>
                            <option value="2">2 - Ervin Howell</option>
                            <option value="3">3 - Clementine Bauch</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label  className="form-label">Post Title</label>
                        <input type="text" value={postTitle} onChange={ (e) => setPostTitle(e.target.value)} className="form-control" id="postTitle" aria-describedby="Help"/>
                    </div>
                    
                    <div className="mb-3">
                        <label  className="form-label">Blog Post</label>
                        <textarea value={blogPost} onChange={(e) => setBlogPost(e.target.value)} className="form-control" id="contentInput" rows="3"/>
                    </div>

                    <div>
                        <button type="submit"  className="btn btn-primary">New Post</button>
                    </div>
                </form>

      </>
    );
  }

  export default BlogForm;