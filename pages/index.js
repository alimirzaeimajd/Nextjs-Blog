import React, { Fragment } from "react";
import ControlledCarousel from "../components/carousel";
import PostsGrid from "../components/posts/posts-grid";
import { getFeaturedPosts } from "../lib/util";

const App = (props) => {
  return (
    <Fragment>
      <ControlledCarousel />
      <PostsGrid post={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default App;
