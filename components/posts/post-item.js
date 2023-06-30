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
    <li
      className={`${styles.post} rounded-xl hover:bg-rose-700 mt-8 items-center`}
    >
      <Link href={linkPath} className="hover:text-slate-900 bold font-bold">
        <div className={`${styles.image} rounded-t-lg`}>
          <Image
            src={imagePath}
            alt={title}
            width={400}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={`${styles.content}`}>
          <h3 className="text-teal-200 font-black">{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
