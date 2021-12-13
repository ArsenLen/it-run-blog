import React, {useState, useEffect} from 'react';
import Post from '../Post/Post'

const Sidebar = (props) => {
    return (
        <aside>
        {props.posts.filter(post => post.category == 2).map(post => {
          return (
            <Post key={post.id} descr={post.postDescr} title={post.postTitle} date={post.date}/>
          )
        })}
        </aside>
    );
};

export default Sidebar;