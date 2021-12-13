import React from 'react';
import {Link} from 'react-router-dom'

// <Route path="/post/:id" element={<SinglePost/>></Route>
// post/78vNcsdd/
// post/7cgshdd/
const Post = (props) => {
    return (
        <div className="post">
            <Link to={`/post/${props.id}`}>{props.title}</Link>
            <p>{props.descr}</p>
            <p>{props.date}</p>
        </div>
    );
};

export default Post;


// data.results.name.first