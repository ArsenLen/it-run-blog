import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const fetchSinglePost = (id) => {
  return axios
    .get(`http://localhost:3004/posts/${id}`)
    .then((response) => response.data);
};

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [updating, setUpdating] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchSinglePost(id).then(post => {
        setPost(post)
        setTitle(post.postTitle)
        setDate(post.date)
    });
  }, []);

  const handleDelete = () => {
    axios.delete(`http://localhost:3004/posts/${id}`);
    window.location.replace("/posts");
  };
  const handleUpdate = async () => {
    await axios.put(`http://localhost:3004/posts/${id}`, {
      postTitle: title,
      date,
    });
    setUpdating(false)
    fetchSinglePost(id).then(post => {
      setPost(post)
      setTitle(post.postTitle)
      setDate(post.date)
    });
  };

  return (
    <div>
      <div className="single-post-wrapper">
        <h2>
        {
        updating ? (
            <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : post.postTitle
        }
        </h2>
        <p>
        {updating ? (
            <input
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        )
        : post.date}    
        </p>
        {updating ? <button onClick={handleUpdate}>Сохранить</button>
          : 
          (
            <div className="single-post-buttons-wrapper"> 
        <button onClick={handleDelete}>Удалить пост</button>
        <button onClick={(e) => setUpdating(true)}>Редактировать</button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default SinglePost;
