import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import PostForm from "./pages/PostForm/PostForm";
import Posts from "./pages/Posts/Posts";
import SinglePost from "./pages/SinglePost/SinglePost";
import Home from "./pages/Home/Home";
import axios from 'axios'
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const fetchData = () => {
  return axios.get('http://localhost:3004/posts')
    .then(response => response.data)
}

const App = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
      fetchData().then(posts => setPosts(posts))
    }, [])

  return (
    <div className="App">
      <Header />
      <main className="content-wrapper">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/postform" element={<PostForm/>}/>
          <Route path="/posts" element={<Posts posts={posts}/>}/>
          <Route path="/post/:id" element={<SinglePost/>}/>
          <Route path="/registration" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
      <Sidebar posts={posts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
// Создать footer
