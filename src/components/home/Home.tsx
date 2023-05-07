import PostSummaryList from "../posts/post_summary/PostSummaryList";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <PostSummaryList />
      </Container>
    </>
  );
};

export default Home;
