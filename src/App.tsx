import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PostDetail from "./components/posts/PostDetail";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:postId" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
