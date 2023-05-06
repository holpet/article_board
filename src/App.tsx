import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PostDetail from "./components/posts/post_detail/PostDetail";
import Posts from "./components/posts/Posts";
import Error404 from "./components/error/Error404";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
