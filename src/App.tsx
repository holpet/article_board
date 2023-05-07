import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PostDetail from "./components/posts/post_detail/PostDetail";
import Posts from "./components/posts/Posts";
import Error from "./components/error/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:postId" element={<PostDetail />} />
      <Route path="*" element={<Error type="404" />} />
    </Routes>
  );
}

export default App;
