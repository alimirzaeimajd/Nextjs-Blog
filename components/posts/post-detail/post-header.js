import React from "react";
import Image from "next/legacy/image";
import styles from "./post-header.module.css";

const PostHeader = (props) => {
  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
      <Image src={props.image} alt={props.title} width={400} height={150} />
    </header>
  );
};

export default PostHeader;
