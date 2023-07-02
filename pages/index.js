import React, { Fragment } from "react";
import ControlledCarousel from "../components/carousel";
import PostsGrid from "../components/posts/posts-grid";
import { getFeaturedPosts } from "../lib/util";
import Head from "next/head";

const App = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Next.js Blog App</title>
        <meta name="description" content="try learning new things." />
      </Head>
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
