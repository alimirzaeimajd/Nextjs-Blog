import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  const linkPath = `/posts/${slug}`;
  return (
    <li className={`${styles.post} rounded-xl hover:bg-rose-700`}>
      <Link href={linkPath}>
        <div className={`${styles.image} border-t-rose-400`}>
          <Image
            src={imagePath}
            alt={title}
            width={400}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={`${styles.content}`}>
          <h3 className="text-teal-200">{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
