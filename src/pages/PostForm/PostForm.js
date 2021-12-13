import React from "react";
import { useState } from "react";
import axios from "axios";


// строка запроса, заголовки запроса, тело запроса
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [descr, setDescr] = useState("");
  const [category, setCategory] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3004/posts", {
      date : date,
      postTitle: title,
      postDescr: descr,
      category,
    });
    setTitle("");
    setDate("");
    setDescr("");
  };
  return (
    <form className="postForm" onSubmit={handleSubmit}>
      <div className="formElem">
        <label htmlFor="title">Введите заголовок поста: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="formElem">
        <label htmlFor="title">Введите дату: </label>
        <input
          type="text"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="formElem">
        <label htmlFor="descr">Введите описание: </label>
        <textarea
          rows="10"
          cols="45"
          name="descr"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        ></textarea>
      </div>
      <div className="formElem">
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="1">Новость</option>
          <option value="2">Статья</option>
        </select>
      </div>
      <input className="postSubmit" type="submit" value="Опубликовать" />
    </form>
  );
};

export default PostForm;
