import React from 'react';
import Post from '../../components/Post/Post'

const Posts = (props) => {
    return (
      <div className="posts-wrapper">
        {props.posts.map(post => {
          return (
            <Post key={post.id} descr={post.postDescr} title={post.postTitle} date={post.date} id={post.id}/>
          )
        })}
      </div>
    );
};

export default Posts;