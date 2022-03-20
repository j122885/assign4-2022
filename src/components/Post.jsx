
const axios = require('axios')
function Post(props){

    let username;
    switch(props.userId){
        case "1": username = "Leanne Graham"; break;
        case "2": username = "Ervin Howell"; break;
        case "3": username = "Clementine Bauch"; break;
        default : username = props.user;
    }
    var currentArr= props.posts;
    var mutatedArr = [];

    function onDelete () {

        // fetch('https://jsonplaceholder.typicode.com/posts/1', {
        //     method: 'DELETE',
        //   });

      currentArr.forEach(element => mutatedArr.push(element));
      mutatedArr = mutatedArr.filter(element => element.id !=  props.id);
      props.setPosts(mutatedArr);
        
    }
    return(
        <>
            <div className="row mb-3" >
                    <div className="col-4">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="col-8">
                        <button type="button" onClick={onDelete} className="float-end btn btn-secondary">Delete Post</button>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <p>By {username}</p>
                        <p>{props.body}</p>
                    </div>
            </div>  
        </>
    );
}

export default Post;