import Link from "next/link";
import styles from "./404.module.css";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops! Page not found</h1>
      <p className={styles.description}>
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link href="/" className={styles.link}>
        Go back to home
      </Link>
    </div>
  );
};

export default Custom404;
